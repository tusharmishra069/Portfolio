import { Download, Github, Linkedin, Twitter, Code, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight">
                hi, Tushar here. 👋
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                21yo software engineer from India 🇮🇳
              </p>
              <p className="text-base text-gray-400 leading-relaxed max-w-xl">
                Full-stack by trade, AI/ML by passion. I build and deploy intelligent solutions.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-blue-400 font-medium">
                For Q&A, chat with Tushar Bot →
              </p>
              <p className="text-sm text-gray-500">
                For collaborations, please find my{' '}
                <a href="https://www.linkedin.com/in/tushar-kumar-mishra-1974b124b/" className="text-blue-400 hover:text-blue-300 underline">
                  LinkedIn
                </a>{' '}
                instead.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://drive.google.com/file/d/1bqTdWauXOGC99UbSHnZQIiZoAQtbiThW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
              >
                <Download size={18} />
                Resume
              </a>
              <a
                href="https://github.com/tusharmishra069"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-kumar-mishra-1974b124b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:tusharmishra069@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-80 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <img
                  src="/photo.png"
                  alt="Tushar Kumar Mishra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;