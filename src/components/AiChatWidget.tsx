import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, MessageSquare } from 'lucide-react';
import { askGemini } from '../lib/gemini';

interface Message {
  sender: 'user' | 'gemini';
  text: string;
}

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'gemini', text: "Hello! I'm the Glide AI Assistant. I can help answer questions about our brand scaling ecosystem, logistics, Glide 108 planetary orbit, or careers. Paste your Google AI Studio API Key in the `.env` file to chat live!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await askGemini(userMessage);
      setMessages(prev => [...prev, { sender: 'gemini', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'gemini', text: "Error: Failed to connect to Gemini API. Please check your console." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadQuickPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans text-left">
      {/* Floating Sparkle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-brand-navy border-2 border-brand-teal text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-brand-teal/40 transition-all duration-300 group cursor-pointer"
          aria-label="Open AI Assistant"
        >
          <Sparkles size={24} className="text-brand-teal group-hover:rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-brand-navy border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-brand-navy border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                <Sparkles size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-widest uppercase">GLIDE AI AGENT</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Powered by GenAI</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages List Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-navy/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                {/* Avatar Icon */}
                <div
                  className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white ${
                    msg.sender === 'user' ? 'bg-brand-coral' : 'bg-brand-teal'
                  }`}
                >
                  {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>

                {/* Message bubble */}
                <div
                  className={`rounded-2xl p-3 text-xs sm:text-[13px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-brand-teal text-white rounded-tr-none'
                      : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Typing Loader Indicator */}
            {isLoading && (
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-7 h-7 rounded-full shrink-0 bg-brand-teal flex items-center justify-center text-white">
                  <Bot size={14} />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions when history is clean */}
          {messages.length === 1 && !isLoading && (
            <div className="p-3 bg-white/5 border-t border-white/5 flex gap-2 flex-wrap justify-center">
              {[
                "Who operates Glide?",
                "What is Glide 108?",
                "Tell me about careers"
              ].map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => loadQuickPrompt(suggestion)}
                  className="text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal/10 hover:bg-brand-teal/20 px-2.5 py-1.5 rounded-full border border-brand-teal/30 transition-all cursor-pointer"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Form Input Bar */}
          <form onSubmit={handleSend} className="p-3 bg-brand-navy border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 rounded-xl bg-brand-teal text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
