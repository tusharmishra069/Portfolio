"use client";

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  type: string;
  image: string;
  link: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'HasthVaani: Smart Hand Gloves',
    type: 'IoT / ML',
    image: '/ss/hasthvani.png',
    link: 'https://github.com/tusharmishra069/HasthVaani.git',
    description: 'HasthVaani aims to bridge the communication gap for deaf and mute individuals through smart hand gloves integrated with machine learning and sensor technology. The gloves translate hand gestures into speech and text, enabling seamless communication.'
  },
  {
    id: 2,
    title: 'MisBot',
    type: 'Web3',
    image: '/ss/misbot.png',
    link: 'https://github.com/tusharmishra069/MisBot.git',
    description: 'MISBOT is a production-ready Web3 tap-to-earn Telegram Mini App built with Next.js, Node.js, and the TON blockchain. It features real-time gameplay mechanics, secure TON wallet integration, and global leaderboards backed by a PostgreSQL database.'
  },
  {
    id: 3,
    title: 'BRICSHR',
    type: 'MERN / AI',
    image: '/ss/brics hr.png',
    link: 'https://bricshr.com',
    description: 'A comprehensive HR management platform integrating job funding and scholarship management features. Built to streamline recruitment processes and facilitate educational support through automated funding workflows.'
  },
  {
    id: 4,
    title: 'ResuME.AI',
    type: 'AI / Python',
    image: '/ss/resume.ai.png',
    link: 'https://github.com/tusharmishra069/ResuME.AI-.git',
    description: 'A modern, AI-powered web application for enhancing resumes, checking ATS (Applicant Tracking System) compatibility, and tailoring resumes to job descriptions. Built with Streamlit and Google Gemini AI, this platform helps users create professional, ATS-optimized resumes with ease.'
  },
  {
    id: 5,
    title: 'Developer Portfolio',
    type: 'React / Vite',
    image: '/ss/portfolio.png',
    link: 'https://portfolio-o5u1zw6vq-tusharmishra069s-projects.vercel.app/',
    description: 'A modern, responsive developer portfolio built with React and Vite. Showcases projects, skills, and experience with a clean, high-performance UI and interactive elements.'
  },
  {
    id: 6,
    title: 'CrowdFunding',
    type: 'MERN / Web3',
    image: '/ss/CrowdFunding.png',
    link: 'https://web3-crowd-funding-seven.vercel.app/',
    description: 'A decentralized crowdfunding platform built on Ethereum blockchain that enables users to create, discover, and fund campaigns transparently and securely using smart contracts.'
  },
  {
    id: 7,
    title: 'CodeInsight.AI',
    type: 'Next.js / Analytics',
    image: '/ss/codeinsight.png',
    link: 'https://github.com/tusharmishra069/CodeInsight.AI.git',
    description: 'CodeInsight AI is an intelligent developer analytics platform that analyzes GitHub and LeetCode profiles to deliver actionable insights into a developer’s coding journey. It evaluates repositories, contributions, and activity to generate a personalized dashboard.'
  },
  {
    id: 8,
    title: 'AutoCerti',
    type: 'Automation / Flask',
    image: '/ss/autocerti.png',
    link: 'https://github.com/tusharmishra069/Certificate-Automation.git',
    description: 'AutoCerti is a web-based application that streamlines the process of generating personalized certificates in bulk. Users can upload their own certificate template and an Excel file containing recipient details to automatically generate certificates.'
  },
  {
    id: 9,
    title: 'Reddit Automation',
    type: 'n8n / AI',
    image: '/ss/n8n-color.png',
    link: 'https://github.com/tusharmishra069/Reddit-automation-using-n8n.git',
    description: 'An n8n workflow that automatically generates and posts engaging Reddit content using AI. This workflow creates Gen Z-style coding tips and placement advice posts for the r/learnprogramming subreddit.'
  }
];


const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Mouse position for the floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the image movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Rotate the image slightly based on movement
  const rotatex = useTransform(y, [0, 400], [5, -5]);
  const rotatey = useTransform(x, [0, 400], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section
      id="projects"
      className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light tracking-tight text-foreground">
            Featured Projects
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            A curated selection of work
          </p>
        </div>

        {/* List Header - Desktop Only */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-4 pb-4 border-b border-gray-800 text-sm font-medium text-gray-400 uppercase tracking-wider">
          <div className="col-span-1">No.</div>
          <div className="col-span-8">Project</div>
          <div className="col-span-3 text-right">Tech</div>
        </div>

        {/* Projects List */}
        <div className="relative">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              className="group block"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-5 border-b border-gray-800 items-baseline transition-colors duration-300 hover:bg-gray-900/30">

                {/* Number */}
                <div className="col-span-1 text-gray-500 font-mono text-sm mb-2 md:mb-0">
                  {String(index + 1).padStart(3, '0')}
                </div>

                {/* Title & Description Container */}
                <div className="col-span-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Expandable Description */}
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{
                      height: hoveredProject === project.id ? "auto" : 0,
                      opacity: hoveredProject === project.id ? 1 : 0,
                      marginTop: hoveredProject === project.id ? 12 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed pr-8 max-w-2xl">
                      {project.description}
                    </p>
                  </motion.div>
                </div>

                {/* Type & Arrow */}
                <div className="col-span-3 flex items-center justify-end gap-3 text-gray-400 self-start pt-1">
                  <span className="text-sm md:text-base text-white">{project.type}</span>
                  <ExternalLink
                    size={20}
                    className="transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 text-white"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Floating Image */}
        <motion.div
          className={`pointer-events-none fixed top-0 left-0 z-50 hidden md:block rounded-lg overflow-hidden border border-gray-700 shadow-2xl transition-[width,height] duration-300 ${hoveredProject === 9 ? 'w-48 h-80' : 'w-80 h-48'
            }`}
          style={{
            x,
            y,
            rotateX: rotatex,
            rotateY: rotatey,
            opacity: hoveredProject ? 1 : 0,
            scale: hoveredProject ? 1 : 0.8,
            translateX: '20px',
            translateY: '-50%',
          }}
          transition={{ duration: 0.15 }} // Quick fade in/out
        >
          {projects.map((project) => (
            <img
              key={project.id}
              src={project.image}
              alt={project.title}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </motion.div>



      </div>
    </section>
  );
};

export default FeaturedProjects;