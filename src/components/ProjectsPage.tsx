import { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ResuME.AI',
      description: 'Resume enhancement using AI with ATS Score Checker and Job Description-based resume generation',
      image: '/ss/resume.ai.png',
      technologies: ['Streamlit', 'Tesseract OCR', 'Gemini API', 'Python'],
      category: 'ai-ml',
      github: 'https://github.com/tusharmishra069/ResuME.AI-.git',
      demo: '#'
    },
    {
      id: 2,
      title: 'HasthVaani: Smart Hand Gloves',
      description: 'Gesture to speech/text system - Assistive technology for deaf & mute individuals',
      image: '/ss/hasthvani.png',
      technologies: ['Arduino', 'C++', 'Python', 'KNN', 'scikit-learn'],
      category: 'hardware',
      github: 'https://github.com/tusharmishra069/HasthVaani.git',
      demo: '#'
    },
    {
      id: 3,
      title: 'CodeInsight.AI',
      description: 'Developer profile analytics with GitHub + LeetCode integration and performance metrics',
      image: '/ss/codeinsight.png',
      technologies: ['Next.js', 'Gemini API', 'GitHub API', 'GraphQL'],
      category: 'web-dev',
      github: 'https://github.com/tusharmishra069/CodeInsight.AI.git',
      demo: '#'
    },
    {
      id: 7,
      title: 'Developer Portfolio',
      description: 'Personal portfolio website built with Vite, TypeScript, EmailJS, and Tailwind CSS. Showcases projects, skills, and contact form integration.',
      image: '/ss/portfolio.png',
      technologies: ['Vite', 'TypeScript', 'EmailJS', 'Tailwind CSS'],
      category: 'web-dev',
      github: 'https://github.com/tusharmishra069/Portfolio.git',
      demo: 'https://portfolio-tan-chi-8pg7erl4bf.vercel.app/'
    },
    {
      id: 4,
      title: 'AutoCerti - Certificate Automation',
      description: 'Automated bulk certificate generation with preview and one-click generation',
      image: '/ss/autocerti.png',
      technologies: ['Flask', 'OpenPyXL', 'Pillow', 'HTML5/CSS3/JS'],
      category: 'web-dev',
      github: 'https://github.com/tusharmishra069/Certificate-Automation.git',
      demo: '#'
    },
    {
      id: 5,
      title: 'Reddit Automation using n8n',
      description: 'Automated Reddit posting & engagement with Agentic AI workflows',
      image: '/ss/n8n-color.png',
      technologies: ['n8n', 'Workflow Automation'],
      category: 'automation',
      github: 'https://github.com/tusharmishra069/Reddit-automation-using-n8n.git',
      demo: 'https://github.com/tusharmishra069/Reddit-automation-using-n8n.git',
    },
    {
      id: 6,
      title: 'BRICSHR - Modern HR Platform',
      description: 'Modern HR platform with AI-integrated features for recruitment and employee management',
      image: '/ss/brics hr.png',
      technologies: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      category: 'web-dev',
      github: '#',
      demo: 'https://brics-hr.vercel.app/'
    },
  //   {
  //     id: 8,
  //     title: 'AI Chatbot Assistant',
  //     description: 'Intelligent chatbot with natural language processing and context awareness',
  //     image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  //     technologies: ['Python', 'OpenAI API', 'Flask', 'NLP'],
  //     category: 'ai-ml',
  //     github: '#',
  //     demo: '#'
  //   },
  //   {
  //     id: 9,
  //     title: 'Task Management App',
  //     description: 'Collaborative task management application with real-time updates and team features',
  //     image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  //     technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
  //     category: 'web-dev',
  //     github: '#',
  //     demo: '#'
  //   },
  //   {
  //     id: 10,
  //     title: 'Weather Prediction Model',
  //     description: 'Machine learning model for weather forecasting using historical data and neural networks',
  //     image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  //     technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
  //     category: 'ai-ml',
  //     github: '#',
  //     demo: '#'
  //   },
  //   {
  //     id: 11,
  //     title: 'IoT Home Automation',
  //     description: 'Smart home automation system with sensor integration and mobile app control',
  //     image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  //     technologies: ['Arduino', 'React Native', 'Firebase', 'C++'],
  //     category: 'hardware',
  //     github: '#',
  //     demo: '#'
  //   },
  //   {
  //     id: 12,
  //     title: 'Social Media Analytics',
  //     description: 'Analytics dashboard for social media performance tracking and insights generation',
  //     image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  //     technologies: ['React', 'D3.js', 'Python', 'API Integration'],
  //     category: 'web-dev',
  //     github: '#',
  //     demo: '#'
  //   }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-ml', name: 'AI/ML' },
    { id: 'web-dev', name: 'Web Development' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'automation', name: 'Automation' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">my projects.</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects I've built using various technologies, from AI/ML to web development and hardware.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
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

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
                  >
                    <Github size={16} />
                    Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;