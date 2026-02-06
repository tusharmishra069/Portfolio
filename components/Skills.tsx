"use client";

import React from 'react';
import { motion } from 'motion/react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import {
    Brain,
    Speech,
    Eye,
    Database,
    Blocks,
    Terminal,
    Code2,
    Globe,
    Puzzle,
    Link as LinkIcon
} from 'lucide-react';

const SkillItem = ({ skill }: { skill: any }) => (
    <div
        className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group"
        title={skill.name}
    >
        <div className="mb-1 transition-transform duration-300 group-hover:scale-110">
            {typeof skill.icon === 'string' ? (
                <img
                    src={`https://cdn.simpleicons.org/${skill.icon}`}
                    alt={skill.name}
                    className="w-8 h-8"
                />
            ) : (
                <skill.icon size={32} className="text-blue-500 group-hover:text-blue-400 transition-colors" />
            )}
        </div>
        <span className="text-[10px] text-gray-500 dark:text-gray-400 text-center font-medium group-hover:text-black dark:group-hover:text-white transition-colors truncate w-full">{skill.name}</span>
    </div>
);

const Skills = () => {
    // Consolidated Full Stack Skills
    const fullStackSkills = [
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Typescript', icon: 'typescript' },
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'React', icon: 'react' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'FastAPI', icon: 'fastapi' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Tailwind', icon: 'tailwindcss' },
        { name: 'Framer Motion', icon: 'framermotion' },
    ];

    const aiMlSkills = [
        { name: 'Python', icon: 'python' },
        { name: 'scikit-learn', icon: 'scikitlearn' },
        { name: 'Pandas', icon: 'pandas' },
        { name: 'NumPy', icon: 'numpy' },
        { name: 'TensorFlow', icon: 'tensorflow' },
        { name: 'PyTorch', icon: 'pytorch' },
        { name: 'LangChain', icon: 'langchain' },
        { name: 'Hugging Face', icon: 'huggingface' },
        { name: 'OpenAI', icon: 'openai' },
        { name: 'NLP', icon: Speech },
        { name: 'CV', icon: Eye },
        { name: 'RAG', icon: Database },
    ];

    const blockchainSkills = [
        { name: 'Solidity', icon: 'solidity' },
        { name: 'Thirdweb', icon: 'thirdweb' },
        { name: 'Ethereum', icon: 'ethereum' },
        { name: 'Hardhat', icon: Puzzle },
        { name: 'Ethers.js', icon: Code2 },
        { name: 'TON', icon: 'ton' },
        { name: 'FunC', icon: Terminal },
        { name: 'Web3.js', icon: Globe },
    ];

    const devTools = [
        { name: 'Git', icon: 'git' },
        { name: 'VS Code', icon: 'visualstudiocode' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Figma', icon: 'figma' },
        { name: 'Linux', icon: 'linux' },
        { name: 'Vercel', icon: 'vercel' }, // Removed /white
    ];

    const items = [
        {
            title: "Full Stack Development",
            description: "Building scalable web applications with modern frameworks.",
            header: (
                <div className="grid grid-cols-2 gap-2 h-full content-center">
                    {fullStackSkills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
            ),
            icon: <Blocks className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-1 md:row-span-2",
        },
        {
            title: "Blockchain",
            description: "Smart contract development and Web3 integration.",
            header: (
                <div className="grid grid-cols-3 gap-2 h-full content-center">
                    {blockchainSkills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
            ),
            icon: <LinkIcon className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-1 md:row-span-1",
        },
        {
            title: "AI & Machine Learning",
            description: "Developing intelligent systems and integrating LLMs.",
            header: (
                <div className="grid grid-cols-3 gap-2 h-full content-center">
                    {aiMlSkills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
            ),
            icon: <Brain className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-1 md:row-span-2",
        },
        {
            title: "Developer Tools",
            description: "Essential tools for efficient workflow and deployment.",
            header: (
                <div className="grid grid-cols-3 gap-2 h-full content-center">
                    {devTools.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
            ),
            icon: <Terminal className="h-4 w-4 text-neutral-500" />,
            className: "md:col-span-1 md:row-span-1",
        },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="skills">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Technical <span className="text-blue-500">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A curated collection of frameworks, languages, and tools I use to build scalable solutions.
                    </p>
                </motion.div>

                <BentoGrid className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Skills;
