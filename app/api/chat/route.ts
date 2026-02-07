
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const resumeData = {
    personalInfo: {
        name: "Tushar Kumar Mishra",
        location: "Bhilai, Chhattisgarh",
        contact: {
            phone: "+91-7488906709",
            email: "tusharmishra069@gmail.com",
            linkedin: "linkedin.com/in/tushar-kumar-mishra-1974b124b",
            github: "github.com/tusharmishra069"
        },
        summary: "Blockchain and AI Engineer specializing in smart contracts, Web3 systems, and decentralized application (dApp) development. Experienced with Solidity, EVM, DeFi protocols, and wallet integrations, along with deploying AI/ML models for automation and analytics. Passionate about building secure, scalable decentralized products powered by intelligent systems."
    },
    skills: {
        languages: ["Python", "C", "C++", "JavaScript", "TypeScript"],
        technologies: ["HTML5", "CSS3", "Bootstrap", "Next.js", "Nest.js", "MongoDB", "SQL", "FastAPI", "RestAPI", "Flask", "Streamlit", "Hugging Face"],
        aiMl: ["Pandas", "NumPy", "scikit-learn", "Reinforcement Learning", "Prompt Engineering", "NLP", "Computer Vision", "TensorFlow", "Keras", "LangChain", "RAG", "VectorDb"],
        blockchain: ["Solidity", "Hardhat", "Ethers.js", "Web3.js", "Ethereum", "Sepolia Testnet", "Smart Contracts", "ERC-20", "ERC-721", "DeFi", "NFT", "MetaMask", "WalletConnect", "TON", "FunC"],
        tools: ["Git", "GitHub", "Docker", "Vercel", "n8n", "Insomnia", "Power BI", "Figma"]
    },
    experience: [
        {
            company: "Vegablocks",
            role: "Fullstack AI/ML Developer",
            type: "Remote",
            duration: "April 2025 – Present",
            details: [
                "Spearheaded development of BRICSHR, a modern HR platform, delivering both frontend and backend systems with seamless UI and scalable APIs.",
                "Built scalable backend and frontend systems integrating AI for HR tasks.",
                "Integrated AI capabilities including: Resume Builder, Cover Letter Generator, Salary Calculator, Interview Simulator, Job Description Generator, Interview Question Bank.",
                "Deployed production-ready applications: https://bricshr.com/"
            ]
        },
        {
            company: "RungtaTech",
            role: "UI/UX Designer & AI/ML Engineer",
            type: "Bhilai, Chhattisgarh",
            duration: "May 2024 – December 2024",
            details: [
                "Designed modern, aesthetic user interfaces for internal client systems.",
                "Developed Venue Booking System for campus venue management.",
                "Built RSDC: A complete event registration and certificate automation platform."
            ]
        },
        {
            company: "YBI Foundation",
            role: "Data Science Intern",
            type: "Remote",
            duration: "June 2024 – July 2024",
            details: [
                "Built a Movie Recommendation System using collaborative filtering.",
                "Developed White Wine Quality Prediction using SVM.",
                "Implemented Servo Motor Speed Prediction via Simple Linear Regression.",
                "Developed and deployed multiple end-to-end ML projects."
            ]
        },
        {
            company: "LetsUpgrade",
            role: "Student Ambassador",
            type: "Remote",
            duration: "July 2024 – August 2024",
            details: [
                "Promoted tech education among peers.",
                "Organized workshops and skill-building sessions."
            ]
        }
    ],
    projects: [
        {
            name: "Web3 Crowdfunding Platform",
            stack: "React, Solidity, Hardhat, Thirdweb, Ethereum",
            link: "GitHub",
            details: [
                "Architected a decentralized crowdfunding dApp on Ethereum Sepolia testnet enabling users to create campaigns and contribute ETH securely via MetaMask.",
                "Developed gas-optimized smart contracts in Solidity using struct-based storage and O(1) mapping lookups.",
                "Built a responsive frontend with React, TypeScript, and TailwindCSS featuring real-time fund tracking and campaign filtering.",
                "Integrated Thirdweb SDK and Ethers.js for wallet connection, transaction signing, and blockchain state management using React Context."
            ]
        },
        {
            name: "MISBOT – Blockchain Telegram Mini App",
            stack: "TON SDK, Smart Contracts, Next.js, Express",
            link: "GitHub",
            details: [
                "Developed a blockchain gaming mini-app on Telegram integrating TON network and created a custom TON-based token named MISBOT Token.",
                "Implemented Jetton smart contracts to mint, distribute, and manage MISBOT tokens for in-app rewards.",
                "Built REST APIs for claim, balance, supply, and transaction history with on-chain validation.",
                "Implemented 3-layer security including rate limiting, Telegram WebApp authentication, and HMAC-SHA256 verification.",
                "Designed anti-cheat system with server-side validation, tap logging, and 30-second cooldown enforcement."
            ]
        },
        {
            name: "Inaya Travels – Crypto Flight Booking Platform",
            stack: "Next.js 15, TypeScript, MongoDB, NOWPayments",
            details: [
                "Built a crypto-based flight booking platform supporting payments via ETH, BTC, and USDT.",
                "Integrated Amadeus GDS API for real-time flight search, pricing, and availability across global airlines.",
                "Designed high-performance UI using TailwindCSS and Framer Motion with Glassmorphism effects.",
                "Engineered JWT-based authentication system with MongoDB for secure user sessions."
            ]
        },
        {
            name: "ResuME.AI",
            stack: "Streamlit, Tesseract OCR, Gemini API, Python",
            link: "GitHub",
            details: [
                "Developed an AI-powered resume enhancement platform using Streamlit and Gemini API.",
                "Built an intelligent ATS Score Checker that identifies keyword gaps and evaluates job fit.",
                "Implemented a Job Description-Based Resume Generator that creates tailored resumes in LaTeX format."
            ]
        },
        {
            name: "HasthVaani: Smart Hand Gloves",
            stack: "Arduino (C++), Python, KNN, Pandas, scikit-learn, NumPy",
            link: "GitHub",
            details: [
                "Designed IoT-based assistive technology using Arduino and gesture sensors to translate hand movements into real-time speech and text.",
                "Developed machine learning models using KNN to classify finger gestures.",
                "Enabled seamless communication by integrating speech synthesis."
            ]
        },
        {
            name: "AutoCerti - Certificate Automation",
            stack: "Flask, OpenPyXL, Python, Pillow, HTML5/CSS3/JavaScript",
            link: "GitHub",
            details: [
                "Built a web application using Flask for automated bulk certificate generation.",
                "Implemented real-time preview functionality and one-click batch creation.",
                "Deployed an intuitive interface supporting both technical and non-technical users."
            ]
        },
        {
            name: "CodeInsight.AI",
            stack: "Next.js, Gemini API, GitHub API, GraphQL API",
            link: "GitHub",
            details: [
                "Developed an intelligent developer analytics platform using Next.js and GitHub API.",
                "Integrated LeetCode analysis with personalized dashboards.",
                "Automated profile evaluation using GraphQL API scraping."
            ]
        },
        {
            name: "Reddit Automation using n8n",
            stack: "n8n, Workflow Automation",
            link: "GitHub",
            details: [
                "Automated Reddit content management using n8n workflow automation.",
                "Implemented agentic AI automation for scheduled content posting.",
                "Built scalable workflow pipelines for social media management."
            ]
        }
    ],
    education: [
        {
            institution: "Rungta College of Engineering and Technology",
            degree: "Bachelor of Technology",
            location: "Bhilai, Chhattisgarh",
            period: "August 2022 – July 2026"
        },
        {
            institution: "DAV Public School, Bachra",
            degree: "Class XII - 73%",
            location: "Bachra",
            period: "2020 – 2022"
        }
    ],
    achievements: [
        "Agentic AI Hackathon Winner",
        "Finalist in 7+ Hackathons",
        "Hacktoberfest 24 and 25 Contributor (4 PRs merged)",
        "Ranked under 1000 in GirlScript Summer of Code (GSoC)",
        "Google Developer Group Social Media Lead",
        "SIH 2024 Organizer",
        "Valorant Esports Tournament Winner"
    ],
    certifications: [
        "Accenture Data Analytics",
        "Coding Spoon: DSA with C++",
        "Coding Spoon: Intermediate AI/ML",
        "Udemy HTML/CSS"
    ]
};

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({ text: "Error: Gemini API Key not found. Please contact Tushar." }, { status: 500 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const prompt = `
      You are an AI assistant for Tushar Kumar Mishra's portfolio website. 
      Your goal is to answer visitor questions about Tushar based strictly on his resume data provided below.
      
      Resume Data:
      ${JSON.stringify(resumeData, null, 2)}
      
      Guidelines:
      1. Be professional, friendly, and concise.
      2. **FORMATTING IS CRITICAL:** Use Markdown to structure your answer.
         - Use **bold** for key technologies, project names, and important achievements.
         - Use bullet points for lists.
         - Use separate paragraphs for readability.
      3. If asked about contact info, provide his email (${resumeData.personalInfo.contact.email}) and LinkedIn.
      4. If asked about salary, hiring, or "book a call", ALWAYS respond with: "I would love to discuss this with you. Please book a call via Calendly or contact me on LinkedIn."
      5. Highlight his key strengths: AI/ML, Blockchain, and Fullstack development.
      6. Do not hallucinate. If the information is not in the resume, say "I don't have that information handy, but you can ask Tushar directly."
      
      User Question: ${message}
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ text });
    } catch (error) {
        console.error("Error generating response:", error);
        return NextResponse.json({ text: "Sorry, I encountered an error. Please try again later." }, { status: 500 });
    }
}
