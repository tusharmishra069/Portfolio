import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { TextGif } from '@/components/ui/text-gif';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Glow Effects to match the reddish/pink vibe */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch relative z-10">

                {/* Left '4' Section */}
                <div className="hidden md:flex flex-col justify-between items-end relative group">
                    <TextGif
                        text="4"
                        size="xxl"
                        weight="bold"
                        className="select-none"
                    />
                </div>

                {/* Center Content Card */}
                <div className="flex flex-col justify-center items-center relative z-10">
                    <TextGif
                        text="0"
                        size="xxl"
                        weight="bold"
                        className="select-none"
                    />
                    <Link
                        href="/"
                        className="mt-4 text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        Go back to main page
                    </Link>
                </div>

                {/* Right '4' Section */}
                <div className="hidden md:flex flex-col justify-end items-start relative group">
                    <TextGif
                        text="4"
                        size="xxl"
                        weight="bold"
                        className="select-none relative z-10"
                    />
                </div>

                {/* Mobile View Adjustment */}
                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
                    <TextGif
                        text="404"
                        size="xl"
                        weight="bold"
                    />
                </div>
            </div>
        </div>
    );
}
