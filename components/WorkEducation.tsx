"use client";

import { useState, useRef } from 'react';
import { MapPin, Calendar, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

const WorkEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  const containerRef = useRef<HTMLDivElement>(null);

  const workExperience = [
    {
      id: 1,
      company: 'Vegablocks',
      position: 'Fullstack AI/ML Developer',
      duration: 'April 2025 – December 2025',
      location: 'Remote',
      description: [
        'Spearheaded development of BRICSHR, a modern HR platform, delivering both frontend and backend systems with seamless UI and scalable APIs.',
        'Built scalable backend and frontend systems integrating AI for HR tasks.',
        'Integrated AI capabilities including: Resume Builder, Cover Letter Generator, Salary Calculator, Interview Simulator, Job Description Generator, Interview Question Bank.',
        'Deployed production-ready applications.'
      ],
      link: 'https://brics-hr.vercel.app/',
      color: 'blue'
    },
    {
      id: 2,
      company: 'RungtaTech',
      position: 'UI/UX Designer & AI/ML Engineer',
      duration: 'May 2024 – December 2024',
      location: 'Bhilai, Chhattisgarh',
      description: [
        'Designed modern, aesthetic user interfaces for internal client systems.',
        'Developed Venue Booking System for campus venue management.',
        'Built RSDC: A complete event registration and certificate automation platform.'
      ],
      color: 'green'
    },
    {
      id: 3,
      company: 'YBI Foundation',
      position: 'Data Science Intern',
      duration: 'June 2024 – July 2024',
      location: 'Remote',
      description: [
        'Built a Movie Recommendation System using collaborative filtering.',
        'Developed White Wine Quality Prediction using SVM.',
        'Implemented Servo Motor Speed Prediction via Simple Linear Regression.',
        'Developed and deployed multiple end-to-end ML projects during internship.'
      ],
      link: 'https://github.com/tusharmishra069/ML-Projects-intern-',
      color: 'orange'
    },
    {
      id: 4,
      company: 'LetsUpgrade',
      position: 'Student Ambassador',
      duration: 'July 2024 – August 2024',
      location: 'Remote',
      description: [
        'Promoted tech education among peers.',
        'Organized workshops and skill-building sessions.'
      ],
      color: 'purple'
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'Rungta College of Engineering and Technology',
      degree: 'Bachelor of Technology (B.Tech)',
      duration: 'Aug 2022 – Jul 2026',
      location: 'Bhilai, Chhattisgarh',
      description: ['Currently pursuing Bachelor of Technology in Computer Science.'],
      color: 'indigo'
    },
    {
      id: 2,
      institution: 'DAV Public School, Bachra',
      degree: 'Higher Secondary (Class XII)',
      duration: '2020 – 2022',
      location: 'Bachra',
      description: ['Completed with 73%.'],
      color: 'cyan'
    }
  ];

  const data = activeTab === 'work' ? workExperience : education;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="experience">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-blue-500">Journey</span>
          </h2>

          {/* Custom Tab Switcher */}
          <div className="inline-flex bg-gray-900/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-800/50 relative">
            <div
              className={cn(
                "absolute top-1.5 bottom-1.5 rounded-full bg-gray-800 shadow-sm transition-all duration-300 ease-out",
                activeTab === 'work' ? "left-1.5 w-[calc(50%-6px)]" : "left-[50%] w-[calc(50%-6px)]"
              )}
            />
            <button
              onClick={() => setActiveTab('work')}
              className={cn(
                "relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2",
                activeTab === 'work' ? "text-white" : "text-gray-400 hover:text-gray-200"
              )}
            >
              <Briefcase size={16} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={cn(
                "relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2",
                activeTab === 'education' ? "text-white" : "text-gray-400 hover:text-gray-200"
              )}
            >
              <GraduationCap size={16} />
              Education
            </button>
          </div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gray-800" />

          <div className="space-y-6 pl-8">
            {data.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                type={activeTab}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index, type }: { item: any, index: number, type: 'work' | 'education' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative cursor-pointer group focus:outline-none"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onBlur={() => setIsExpanded(false)}
      tabIndex={0}
    >
      {/* Timeline Dot */}
      <div className={cn(
        "absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-gray-900 border-4 z-10 transition-colors duration-300",
        // Dynamic border color on hover/focus matching the group
        "border-blue-500 group-hover:border-purple-500 group-focus:border-purple-500 group-hover:scale-110"
      )} />

      <div className={cn(
        "flex flex-col gap-2 p-4 rounded-xl transition-all duration-300",
        "bg-transparent hover:bg-white/5 focus-within:bg-white/5"
      )}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 group-focus:text-blue-400 transition-colors">
            {type === 'work' ? item.company : item.institution}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {item.duration}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-blue-400 font-medium text-base">
            {type === 'work' ? item.position : item.degree}
          </p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors p-1"
              onClick={(e) => e.stopPropagation()}
              title="View Project/Company"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Expandable Content */}
        <motion.div
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? 8 : 0
          }}
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="text-sm text-gray-500 flex items-center gap-1 mb-2">
            <MapPin size={14} />
            {item.location}
          </div>

          <ul className="space-y-2 mt-1">
            {item.description.map((desc: string, i: number) => (
              <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0" />
                {desc}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkEducation;