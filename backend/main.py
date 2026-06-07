from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import json
import os

load_dotenv()

app = FastAPI()

ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "*").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.environ["GROQ_API_KEY"])

knowledge_path = os.path.join(os.path.dirname(__file__), "knowledge.json")
with open(knowledge_path, "r") as f:
    KNOWLEDGE = json.load(f)

def build_context(question: str) -> str:
    question_lower = question.lower()
    relevant = []

    for crop in KNOWLEDGE["crops"]:
        if crop["name"].lower() in question_lower:
            relevant.append(f"Crop: {crop['name']} ({crop['scientificName']})")

        for disease in crop["diseases"]:
            disease_words = disease["name"].lower().split()
            if any(word in question_lower for word in disease_words) or \
               crop["name"].lower() in question_lower:
                relevant.append(f"""
Disease: {disease['name']} in {crop['name']}
Pathogen: {disease['pathogen']}
Cause: {disease['cause']}
Transmission: {', '.join(disease['transmission']['routes'])}
How it spreads: {disease['originSpread']}
Organic Management: {' | '.join(disease['management']['organic'])}
Chemical Management: {' | '.join(disease['management']['chemical'])}
How to apply: {' | '.join(disease['management']['application'])}
Affected stages: {', '.join(disease['affectedStages'])}
""")

    if relevant:
        return "\n".join(relevant[:5])
    return "General agriculture knowledge — answer from your training."


SYSTEM_PROMPT = """You are VanajAI, an expert agriculture assistant built specifically
for B.Sc. Agriculture students in India. You specialize in crop diseases, growth stages,
and crop protection for paddy, wheat, cotton and other Indian crops.

Rules:
- Answer only agriculture-related questions
- Be concise and practical — students need field-ready answers
- Always mention both organic and chemical management options
- Reference Indian conditions, ICAR and state agricultural university recommendations
- If asked something non-agriculture, politely say you only know agriculture
- Use simple clear language suitable for B.Sc. Agriculture students
- Always mention the scientific name of pathogens when relevant
"""

class ChatRequest(BaseModel):
    message: str
    history: list = []

class ChatResponse(BaseModel):
    reply: str

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        context = build_context(request.message)

        messages = [{"role": "system", "content": SYSTEM_PROMPT}]

        if context:
            messages.append({
                "role": "system",
                "content": f"Relevant knowledge from Vanaj.ai database:\n{context}"
            })

        for msg in request.history[-6:]:
            messages.append(msg)

        messages.append({"role": "user", "content": request.message})

        response = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=messages,
        )

        return ChatResponse(reply=response.choices[0].message.content)
    except Exception as e:
        return ChatResponse(reply=f"Error: {str(e)}")

@app.get("/health")
async def health():
    return {"status": "VanajAI is running"}
