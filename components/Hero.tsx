"use client";

import Image from 'next/image';
import { CanvasFractalGrid } from './ui/canvas-fractal-grid';
import { Download, Github, Linkedin, Twitter, Code, Mail } from 'lucide-react';
import { useChat } from '@/context/ChatContext';

const Hero: React.FC = () => {
  const { openChat } = useChat();
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CanvasFractalGrid
          dotColor="rgba(100, 100, 255, 0.5)"
          glowColor="rgba(100, 100, 255, 0.8)"
          dotSize={2}
          dotSpacing={25}
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Centered Content */}
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              hi, Tushar here. 👋
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              22yo software engineer from India 🇮🇳
            </p>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              AI and Ml Engineer | Full Stack Developer | Blockchain Developer
            </p>
          </div>

          <div className="space-y-4">
            <p
              className="text-blue-400 font-medium text-lg cursor-pointer hover:text-blue-300 transition-colors underline"
              onClick={openChat}
            >
              For Q&A, chat with Tushar Bot →
            </p>
            <p className="text-base text-gray-500">
              For collaborations, please find my{' '}
              <a href="https://www.linkedin.com/in/tushar-kumar-mishra-1974b124b/" className="text-blue-400 hover:text-blue-300 underline">
                LinkedIn
              </a>{' '}
              instead.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a
              href="https://drive.google.com/file/d/1bqTdWauXOGC99UbSHnZQIiZoAQtbiThW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-white text-lg rounded-xl transition-colors border border-gray-600 backdrop-blur-sm"
            >
              <Download size={20} />
              Resume
            </a>
            <a
              href="https://github.com/tusharmishra069"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-white text-lg rounded-xl transition-colors border border-gray-600 backdrop-blur-sm"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-kumar-mishra-1974b124b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-white text-lg rounded-xl transition-colors border border-gray-600 backdrop-blur-sm"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:tusharmishra069@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-white text-lg rounded-xl transition-colors border border-gray-600 backdrop-blur-sm"
              title="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;