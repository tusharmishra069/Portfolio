import { useState } from 'react';
import { MapPin, Calendar, ExternalLink, Award } from 'lucide-react';

const WorkEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const workExperience = [
    {
      id: 1,
      company: 'Vegablocks',
      position: 'Fullstack AI/ML Developer',
      duration: 'April 2025 – Present',
      location: 'Remote',
      description: [
        'Spearheaded development of BRICSHR, a modern HR platform',
        'Built scalable backend and frontend systems integrating AI for HR tasks',
        'Integrated AI features: Resume Builder, Cover Letter Generator, Salary Calculator, Interview Simulator, Job Description Generator, Interview Question Bank'
      ],
      link: 'https://brics-hr.vercel.app/',
      logo: 'VB',
      logoColor: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      company: 'RungtaTech',
      position: 'UI/UX Designer & AI/ML Engineer',
      duration: 'May 2024 – December 2024',
      location: 'Bhilai, Chhattisgarh',
      description: [
        'Designed UIs for internal systems',
        'Developed Venue Booking System',
        'Built RSDC: event registration & certificate automation platform'
      ],
      logo: 'RT',
      logoColor: 'from-green-500 to-blue-600'
    },
    {
      id: 3,
      company: 'YBI Foundation',
      position: 'Data Science Intern',
      duration: 'June 2024 – July 2024',
      location: 'Remote',
      description: [
        'Movie Recommendation System (collaborative filtering)',
        'White Wine Quality Prediction (SVM)',
        'Servo Motor Speed Prediction (Linear Regression)'
      ],
      link: 'https://github.com/tusharmishra069/ML-Projects-intern-',
      logo: 'YBI',
      logoColor: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      company: 'LetsUpgrade',
      position: 'Student Ambassador',
      duration: 'July 2024 – August 2024',
      location: 'Remote',
      description: [
        'Promoted tech education',
        'Organized workshops and skill-building sessions'
      ],
      logo: 'LU',
      logoColor: 'from-purple-500 to-pink-600'
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'Rungta College of Engineering and Technology',
      degree: 'B.Tech',
      duration: 'Aug 2022 – Jul 2026',
      location: 'Bhilai, Chhattisgarh',
      description: ['Currently pursuing Bachelor of Technology'],
      logo: 'RCET',
      logoColor: 'from-green-500 to-blue-600'
    },
    {
      id: 2,
      institution: 'DAV Public School, Bachra',
      degree: 'Class XII – 73%',
      duration: '2020 – 2022',
      location: 'Bachra',
      description: ['Completed Higher Secondary Education'],
      logo: 'DAV',
      logoColor: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-lg p-1 flex border border-gray-700 w-full max-w-md">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex-1 py-3 rounded-lg font-medium transition-all text-center ${
                activeTab === 'work'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 py-3 rounded-lg font-medium transition-all text-center ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Single Container for Both Sections */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
          {activeTab === 'work' ? (
            <div className="divide-y divide-gray-700">
              {workExperience.map((job, index) => (
                <div
                  key={job.id}
                  className="p-6 hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {job.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-400">{job.duration}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {job.company}
                          </h3>
                          <p className="text-blue-400 font-medium mb-2">{job.position}</p>
                        </div>
                        {job.link && (
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors flex-shrink-0 ml-4"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      
                      <ul className="space-y-2">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="text-blue-400 mt-2 text-xs">•</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="divide-y divide-gray-700">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="p-6 hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {edu.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-400">{edu.duration}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {edu.institution}
                          </h3>
                          <p className="text-green-400 font-medium mb-2">{edu.degree}</p>
                        </div>
                        <Award className="text-gray-400 flex-shrink-0 ml-4" size={18} />
                      </div>
                      
                      <ul className="space-y-2">
                        {edu.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="text-green-400 mt-2 text-xs">•</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkEducation;