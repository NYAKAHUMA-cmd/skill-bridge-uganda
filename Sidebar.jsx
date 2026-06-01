import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, X, Bot, User, Send, Paperclip } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)
  const { user } = useAuth()
  const navigate = useNavigate()

  const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => { scrollToBottom() }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = user
        ? `Hello ${user.name}! I'm here to help you navigate the platform. What would you like to do today?`
        : "Hello! I'm your CareerCert assistant. I can help you navigate the platform. What would you like to know?"
      addBotMessage(greeting)
    }
  }, [isOpen])

  const addBotMessage = (text) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), text, sender: 'bot', timestamp: new Date() }])
  }

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), text, sender: 'user', timestamp: new Date() }])
  }

  const getResponse = (msg) => {
    const lower = msg.toLowerCase()

    if (lower.includes('dashboard') || lower.includes('home')) {
      setTimeout(() => navigate('/dashboard'), 1000)
      return user ? `Taking you to your ${user.role} dashboard...` : 'Please login first to access your dashboard.'
    }
    if (lower.includes('job') || lower.includes('work') || lower.includes('employment')) {
      setTimeout(() => navigate('/dashboard/jobs'), 1000)
      return 'Opening the Job Market Feed for you...'
    }
    if (lower.includes('assessment') || lower.includes('exam') || lower.includes('test')) {
      setTimeout(() => navigate('/dashboard/assessments'), 1000)
      return 'Taking you to Practical Assessments...'
    }
    if (lower.includes('certification') || lower.includes('certificate') || lower.includes('icdl') || lower.includes('comptia')) {
      setTimeout(() => navigate('/dashboard/certifications'), 1000)
      return 'Opening Certifications page...'
    }
    if (lower.includes('virtual') || lower.includes('lab') || lower.includes('environment')) {
      setTimeout(() => navigate('/dashboard/virtual'), 1000)
      return 'Accessing Virtual Environments...'
    }
    if (lower.includes('message') || lower.includes('chat')) {
      setTimeout(() => navigate('/dashboard/messages'), 1000)
      return 'Opening your Messages...'
    }
    if (lower.includes('setting')) {
      setTimeout(() => navigate('/dashboard/settings'), 1000)
      return 'Taking you to Settings...'
    }
    if (lower.includes('portal')) {
      setTimeout(() => navigate('/dashboard/portals'), 1000)
      return 'Opening Portals...'
    }
    if (lower.includes('help') || lower.includes('what can you')) {
      return `I can help you with:\n• Navigate to different sections (jobs, assessments, certifications, etc.)\n• Answer questions about the platform\n• Guide you through features based on your role\n• Provide information about certifications\n\nJust ask me what you'd like to do!`
    }
    if (lower.includes('icdl') || lower.includes('comptia')) {
      return 'We offer ICDL (International Computer Driving License) and CompTIA certifications. These are globally recognized credentials that boost your career in IT and digital skills.'
    }
    return "I'm not sure about that. You can ask me to navigate to different sections (jobs, assessments, certifications), or ask questions about the platform. How can I help?"
  }

  const handleSend = () => {
    if (!input.trim()) return
    addUserMessage(input)
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const response = getResponse(input)
      addBotMessage(response)
      setTyping(false)
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all z-50 hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl z-50 flex flex-col border border-border">
          <div className="bg-blue-600 text-white p-4 rounded-t-xl flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <div>
              <h3 className="text-sm">CareerCert Assistant</h3>
              <p className="text-xs text-blue-100">Always here to help</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                )}
                <div className={`max-w-[70%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-secondary text-foreground'}`}>
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
                <div className="bg-secondary p-3 rounded-lg">
                  <div className="flex gap-1">
                    {[0, 150, 300].map((delay) => (
                      <div key={delay} className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 bg-input-background rounded-lg border-0 focus:ring-2 ring-ring/20 text-sm"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
