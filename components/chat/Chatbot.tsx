"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from "motion/react";

type SalaryMessage = { type: 'salary' };
interface Message {
  id: string;
  text: string | SalaryMessage;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Tell me about your projects",
  "What are your skills?",
  "How can I contact Tushar?",
  "Do you have blockchain experience?",
];

const Chatbot: React.FC = () => {
  const { isOpen, toggleChat } = useChat();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Tushar's AI portfolio assistant. I can answer questions about his experience, projects, skills, and more. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  // Helper to parse the stream and update the message
  const processStream = async (response: Response, botMessageId: string) => {
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) return;

    let accumulatedText = "";

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;

        // Update the message in real-time
        setMessages(prev => prev.map(msg =>
          msg.id === botMessageId
            ? { ...msg, text: accumulatedText }
            : msg
        ));
      }

      // Check for special triggers after full response
      if (
        accumulatedText.toLowerCase().includes('book a call') ||
        accumulatedText.toLowerCase().includes('discuss this with you')
      ) {
        setMessages(prev => prev.map(msg =>
          msg.id === botMessageId
            ? { ...msg, text: { type: 'salary' } }
            : msg
        ));
      }

    } catch (error) {
      console.error("Error reading stream:", error);
    }
  };

  const handleSend = async (messageText: string = inputValue) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Create a placeholder bot message
    const botMessageId = (Date.now() + 1).toString();
    const placeholderMessage: Message = {
      id: botMessageId,
      text: "", // Start empty
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, placeholderMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      await processStream(response, botMessageId);

    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: "Sorry, I'm having trouble connecting to the brain right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      };
      // Replace the empty placeholder with error or append error? 
      // Better to remove the empty placeholder if it's still empty, or just append error.
      // For simplicity, we just append error here.
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {/* Chat Button */}
        <motion.button
          key="chat-button"
          onClick={toggleChat}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] z-50 backdrop-blur-sm border border-white/10"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>

        {/* Chat Window */}
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-b border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/20 rounded-full border border-blue-500/30">
                  <Bot size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white flex items-center gap-2">
                    Tushar AI <Sparkles size={14} className="text-yellow-400" />
                  </h3>
                  <p className="text-xs text-slate-300">Portfolio Assistant • Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl ${message.sender === 'user'
                      ? 'bg-blue-600/80 text-white rounded-br-none backdrop-blur-sm'
                      : 'bg-white/10 text-slate-100 rounded-bl-none border border-white/5 backdrop-blur-sm'
                      }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && <Bot size={16} className="mt-1 flex-shrink-0 text-blue-400" />}
                      {message.sender === 'user' && <User size={16} className="mt-1 flex-shrink-0 text-white/80" />}

                      {typeof message.text === 'string' ? (
                        <div className="text-sm prose prose-invert prose-p:my-1 prose-ul:my-1 prose-li:marker:text-blue-400 max-w-none">
                          {/* @ts-ignore */}
                          <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
                      ) : message.text && message.text.type === 'salary' ? (
                        <div className="flex flex-col gap-3">
                          <span className="text-sm">I'd love to discuss opportunities! Here's how to reach Tushar:</span>
                          <div className="flex gap-2 flex-wrap">
                            <a
                              href="https://calendly.com/tusharmishra069"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
                            >
                              📅 Book a Call
                            </a>
                            <a
                              href="https://www.linkedin.com/in/tushar-kumar-mishra-1974b124b/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl text-xs font-semibold transition-all"
                            >
                              🔗 LinkedIn
                            </a>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none border border-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Bot size={16} className="text-blue-400" />
                      <div className="flex gap-1 h-4 items-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                          className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                          className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                          className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Chips */}
            {messages.length < 3 && (
              <div className="px-4 pb-2">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mask-linear-fade">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="whitespace-nowrap px-3 py-1.5 bg-white/5 hover:bg-blue-600/20 text-xs text-slate-300 hover:text-blue-300 border border-white/10 hover:border-blue-500/30 rounded-full transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                  placeholder="Ask anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all disabled:opacity-50"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;