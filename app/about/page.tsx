import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="about">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Image Section */}
                <div className="relative aspect-square md:aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl ">
                    <Image
                        src="/me.png"
                        alt="Tushar Mishra"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Text Section */}
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl pt-7 font-bold bg-clip-text text-transparent bg-blue-600">
                        About Me
                    </h1>

                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            I’m Tushar Kumar Mishra, a Full-Stack, AI/ML, and Blockchain Developer with hands-on experience building production-ready web platforms, AI-powered tools, and decentralized applications.
                        </p>
                        <p>
                            I previously worked as a Full-Stack AI/ML Developer Intern at Vegablocks, where I contributed to BRICSHR, a modern HR platform featuring AI tools such as resume builders, interview simulators, and job description generators. I worked across frontend, backend, APIs, and deployment, focusing on scalable and user-friendly systems.
                        </p>
                        <p>
                            My core skills include Next.js, FastAPI, Flask, MongoDB, SQL, Docker, along with AI/ML (NLP, automation, RAG pipelines) and Blockchain development (Solidity, Ethereum, TON). I enjoy turning complex ideas into clean, practical products.
                        </p>
                        <p>
                            I’m also a hackathon winner, open-source contributor, and comfortable working in fast-paced, collaborative environments.
                        </p>
                    </div>

                    <div className="pt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Focus Areas</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                            <li>Full Stack Development</li>
                            <li>Blockchain & Web3</li>
                            <li>AI & Machine Learning</li>
                            <li>System Architecture</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
