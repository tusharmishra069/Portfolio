import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Tushar's portfolio assistant. I can help you learn more about his experience, projects, and skills. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const portfolioData = {
    experience: [
      "I'm currently working as a Fullstack AI/ML Developer at Vegablocks, where I spearheaded the development of BRICSHR, a modern HR platform.",
      "Previously, I worked as a UI/UX Designer & AI/ML Engineer at RungtaTech, where I designed UIs for internal systems and built event registration platforms.",
      "I also completed internships at YBI Foundation as a Data Science Intern and was a Student Ambassador at LetsUpgrade."
    ],
    projects: [
      "ResuME.AI - An AI-powered resume enhancement tool with ATS score checking",
      "HasthVaani - Smart hand gloves for gesture-to-speech conversion, helping deaf and mute individuals",
      "CodeInsight.AI - Developer profile analytics with GitHub and LeetCode integration",
      "AutoCerti - Automated certificate generation system",
      "Reddit Automation - Automated workflows using n8n"
    ],
    skills: [
      "Programming Languages: Python, C, C++, JavaScript",
      "AI/ML: TensorFlow, Keras, scikit-learn, NLP, Computer Vision",
      "Web Technologies: Next.js, React, Node.js, Flask, MongoDB",
      "Tools: Git, Docker, Vercel, Power BI"
    ],
    achievements: [
      "Agentic AI Hackathon Winner",
      "Finalist in 7+ hackathons",
      "Hacktoberfest contributor with 4 merged PRs",
      "Google Developer Group Social Media Lead",
      "Valorant Esports Tournament Winner"
    ]
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return portfolioData.experience[0] + " " + portfolioData.experience[1];
    } else if (message.includes('project') || message.includes('build') || message.includes('created')) {
      return `Here are some of my key projects:\n\n${portfolioData.projects.slice(0, 3).join('\n\n')}`;
    } else if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return `My technical skills include:\n\n${portfolioData.skills.slice(0, 3).join('\n\n')}`;
    } else if (message.includes('achievement') || message.includes('award') || message.includes('winner')) {
      return `Some of my achievements:\n\n${portfolioData.achievements.slice(0, 3).join('\n\n')}`;
    } else if (message.includes('education') || message.includes('college') || message.includes('study')) {
      return "I'm currently pursuing B.Tech from Rungta College of Engineering and Technology (2022-2026) in Bhilai, Chhattisgarh. I completed my Class XII from DAV Public School, Bachra with 73%.";
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
      return "You can reach me at:\n\nEmail: tusharmishra069@gmail.com\nPhone: +91-7488906709\nLinkedIn: https://www.linkedin.com/in/tushar-kumar-mishra-1974b124b/\nGitHub: https://github.com/tusharmishra069";
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Tushar's background, projects, and experience. What specific area would you like to know about?";
    } else {
      return "I can help you learn about Tushar's experience, projects, skills, achievements, education, or contact information. What would you like to know more about?";
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-black border border-gray-700 rounded-lg shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="p-4 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <div>
                <h3 className="font-medium">Tushar Support</h3>
                <p className="text-xs text-blue-100">Portfolio Assistant</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.sender === 'bot' && <Bot size={16} className="mt-1 flex-shrink-0" />}
                    {message.sender === 'user' && <User size={16} className="mt-1 flex-shrink-0" />}
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Tushar's experience, projects, skills..."
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;