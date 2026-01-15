
import React, { useState, useRef, useEffect } from 'react';
import { getAIRecommendation } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hello! I am your BongoAbash consultant. How can I help you find your dream property in Bangladesh today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getAIRecommendation(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-80 md:w-96 overflow-hidden border border-stone-100 flex flex-col h-[500px]">
          <div className="bg-stone-900 p-6 text-white flex justify-between items-center">
            <div>
              <h3 className="font-serif text-lg">Abash AI</h3>
              <p className="text-[10px] uppercase tracking-widest text-stone-400">Digital Consultant</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-stone-900 text-white' 
                    : 'bg-white text-stone-700 shadow-sm border border-stone-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-100 px-4 py-3 rounded-2xl flex gap-1">
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about properties..."
                className="flex-1 bg-stone-50 text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-stone-200"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-stone-900 text-white p-3 rounded-full hover:bg-stone-800 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-stone-900 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-3"
        >
          <span className="hidden md:inline pl-2 text-sm font-medium">Ask Abash AI</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
