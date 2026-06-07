# Vanaj.AI — Monorepo

Interactive crop atlas for B.Sc. Agriculture students.

```
vanaj-ai-mono/
├── frontend/   → React + Vite app  (deploy to Vercel, root dir: frontend)
└── backend/    → FastAPI + Groq    (deploy to Render,  root dir: backend)
```

## Run locally

```bash
# Backend
cd backend
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
GROQ_API_KEY=your_key .venv/bin/uvicorn main:app --reload --port 8000

# Frontend (new terminal)
cd frontend
npm install && npm run dev
```

## Deploy

- **Vercel** → import this repo → set root directory to `frontend` → add env var `VITE_API_URL=<render-url>`
- **Render** → import this repo → set root directory to `backend` → add env vars `GROQ_API_KEY` and `ALLOWED_ORIGINS=<vercel-url>`
