import { useState, useRef, useEffect } from 'react'

const SUGGESTIONS = [
  "What causes rice blast?",
  "How to manage wheat stripe rust organically?",
  "What are symptoms of cotton bacterial blight?",
  "Which stage is paddy most affected by sheath blight?",
]

export default function VanajAIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Namaste! I am VanajAI 🌾 Your agriculture assistant. Ask me anything about crop diseases, symptoms, or management!'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (text) => {
    const userMessage = text || input.trim()
    if (!userMessage) return

    setInput('')
    setError(null)
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const history = messages.map(m => ({
        role: m.role,
        content: m.content
      }))

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history })
      })

      if (!response.ok) throw new Error('VanajAI server error')

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setError('VanajAI is not running. Start the backend server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating bubble button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-forest
                   text-paper shadow-lift flex items-center justify-center
                   hover:bg-forest-deep transition-all duration-300 hover:scale-110"
        aria-label="Open VanajAI"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.06L2 22l4.94-1.37
                     A9.953 9.953 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                  fill="currentColor" opacity="0.9"/>
            <path d="M8 10h8M8 14h5" stroke="#27513B"
                  strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-4xl
                        bg-paper shadow-lift ring-1 ring-ink/10 flex flex-col
                        overflow-hidden animate-fade-up"
             style={{ height: '520px' }}>

          {/* Header */}
          <div className="bg-forest px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-paper/20 grid place-items-center">
              <span className="text-lg">🌾</span>
            </div>
            <div>
              <p className="font-display text-paper text-lg tracking-tightest">VanajAI</p>
              <p className="text-paper/70 text-xs">Agriculture Assistant</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"/>
              <span className="text-paper/70 text-xs">Local AI</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto quiet-scroll p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i}
                   className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-3xl px-4 py-2.5 text-sm leading-relaxed
                  ${msg.role === 'user'
                    ? 'bg-forest text-paper rounded-br-md'
                    : 'bg-cloud text-ink rounded-bl-md'}`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-cloud rounded-3xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sage animate-bounce"
                          style={{ animationDelay: '0ms' }}/>
                    <span className="w-2 h-2 rounded-full bg-sage animate-bounce"
                          style={{ animationDelay: '150ms' }}/>
                    <span className="w-2 h-2 rounded-full bg-sage animate-bounce"
                          style={{ animationDelay: '300ms' }}/>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-clay/10 rounded-2xl px-4 py-3 text-xs text-clay">
                {error}
              </div>
            )}

            <div ref={bottomRef}/>
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s, i) => (
                <button key={i}
                        onClick={() => sendMessage(s)}
                        className="text-[11px] bg-cloud hover:bg-forest hover:text-paper
                                   text-slate rounded-full px-3 py-1.5 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-ink/10 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about any crop disease..."
              className="flex-1 bg-cloud rounded-full px-4 py-2.5 text-sm text-ink
                         placeholder:text-slate/60 outline-none focus:ring-2
                         focus:ring-forest/30"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-full bg-forest text-paper grid place-items-center
                         disabled:opacity-40 hover:bg-forest-deep transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
