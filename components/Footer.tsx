import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/tushar-kumar-mishra-1974b124b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/tusharmishra069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:tusharmishra069@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 tusharmishra <a href="#" className="hover:text-white transition-colors"></a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;