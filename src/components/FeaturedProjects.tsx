import { ExternalLink, Github, Globe } from 'lucide-react';

interface FeaturedProjectsProps {
  onViewMore: () => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onViewMore }) => {
  const projects = [
    {
      id: 1,
      title: 'ResuME.AI',
      description: 'Resume enhancement using AI with ATS Score Checker and Job Description-based resume generation',
      image: '/ss/resume.ai.png',
      technologies: ['Streamlit', 'Tesseract OCR', 'Gemini API', 'Python'],
      github: 'https://github.com/tusharmishra069/ResuME.AI-.git',
      demo: '#'
    },
    {
      id: 2,
      title: 'HasthVaani: Smart Hand Gloves',
      description: 'Gesture to speech/text system - Assistive technology for deaf & mute individuals',
      image: '/ss/hasthvani.png',
      technologies: ['Arduino', 'C++', 'Python', 'KNN', 'scikit-learn'],
      github: 'https://github.com/tusharmishra069/HasthVaani.git',
      demo: '#'
    },
    {
      id: 3,
      title: 'CodeInsight.AI',
      description: 'Developer profile analytics with GitHub + LeetCode integration and performance metrics',
      image: '/ss/codeinsight.png',
      technologies: ['Next.js', 'Gemini API', 'GitHub API', 'GraphQL'],
      github: 'https://github.com/tusharmishra069/CodeInsight.AI.git',
      demo: '#'
    },
    {
      id: 4,
      title: 'AutoCerti - Certificate Automation',
      description: 'Automated bulk certificate generation with preview and one-click generation',
      image: '/ss/autocerti.png',
      technologies: ['Flask', 'OpenPyXL', 'Pillow', 'HTML5/CSS3/JS'],
      github: 'https://github.com/tusharmishra069/Certificate-Automation.git',
      demo: '#'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">featured projects</h2>
          <button 
            onClick={onViewMore}
            className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2"
          >
            view more
            <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    Source
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Globe size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;