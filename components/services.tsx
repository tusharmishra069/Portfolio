"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
// Imports combined in the previous chunk
import { Globe } from '@/components/ui/globe'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { HudAreaChart } from "@/components/ui/hud-area-chart-1";

const chartData = [
    { time: "00:00", value: 45 },
    { time: "01:00", value: 30 },
    { time: "02:00", value: 55 },
    { time: "03:00", value: 40 },
    { time: "04:00", value: 70 },
    { time: "05:00", value: 50 },
    { time: "06:00", value: 85 },
];

const WebDevHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-200 dark:from-blue-900 dark:to-blue-800 to-blue-100" />
)

import { Code2, Brain, Database, Zap, Globe as GlobeIcon, Share2, MessageSquare, FileText } from 'lucide-react'

const Circle = React.forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-black dark:border-neutral-800",
                className
            )}
        >
            {children}
        </div>
    )
})
Circle.displayName = "Circle"

const AIMLHeader = () => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const div1Ref = React.useRef<HTMLDivElement>(null)
    const div2Ref = React.useRef<HTMLDivElement>(null)
    const div3Ref = React.useRef<HTMLDivElement>(null)
    const div4Ref = React.useRef<HTMLDivElement>(null) // Center
    const div5Ref = React.useRef<HTMLDivElement>(null)
    const div6Ref = React.useRef<HTMLDivElement>(null)
    const div7Ref = React.useRef<HTMLDivElement>(null)

    return (
        <div
            className="flex flex-1 w-full h-full min-h-[12rem] border-2 border-white/15 rounded-lg bg-transparent relative overflow-hidden flex-col items-center justify-center p-4"
            ref={containerRef}
        >
            <div className="flex flex-col items-stretch justify-between gap-4 size-full max-w-lg">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref}><Database className="h-5 w-5 text-black dark:text-white" /></Circle>
                    <Circle ref={div5Ref}><GlobeIcon className="h-5 w-5 text-black dark:text-white" /></Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div2Ref}><FileText className="h-5 w-5 text-black dark:text-white" /></Circle>
                    <Circle ref={div4Ref} className="size-16"><Brain className="h-8 w-8 text-black dark:text-white" /></Circle>
                    <Circle ref={div6Ref}><Zap className="h-5 w-5 text-black dark:text-white" /></Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div3Ref}><Share2 className="h-5 w-5 text-black dark:text-white" /></Circle>
                    <Circle ref={div7Ref}><MessageSquare className="h-5 w-5 text-black dark:text-white" /></Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
        </div>
    )
}

const DataScienceHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[12rem] bg-transparent relative overflow-hidden flex-col items-center justify-center">
    </div>
)

const BlockchainHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-transparent  relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-60 border-2 border-white/15 rounded-lg">
            <Globe className="w-full h-full" />
        </div>
    </div>
)

const services = [
    {
        title: 'Web Development',
        description:
            'Build stunning, performant websites and applications with React, Next.js, and modern web technologies.',
        header: <WebDevHeader />,
        icon: <Code2 className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Blockchain Solutions',
        description:
            'Secure, decentralized applications with smart contracts and Web3 integration.',
        header: <BlockchainHeader />,
        icon: <Zap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Data Science',
        description:
            'Transform raw data into actionable insights with advanced analytics, visualization, and predictive modeling.',
        header: <DataScienceHeader />,
        icon: <Database className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'AI & Machine Learning',
        description:
            'Intelligent solutions powered by cutting-edge AI models, neural networks, and advanced algorithms.',
        header: <AIMLHeader />,
        icon: <Brain className="h-4 w-4 text-neutral-500" />,
    },
]

export function Services() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-16 space-y-4">
                    <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">
                        Services
                    </h2>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        Comprehensive solutions combining web development, artificial intelligence,
                        data science, and blockchain technology.
                    </p>
                </div>

                {/* Bento Grid */}
                <BentoGrid>
                    {services.map((service, i) => (
                        <BentoGridItem
                            key={i}
                            title={service.title}
                            description={service.description}
                            header={service.header}
                            icon={service.icon}
                            className={cn(i === 0 || i === 3 ? 'md:col-span-2' : '')}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}
