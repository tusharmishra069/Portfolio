import { ArrowRight } from "lucide-react";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";

export function LetsConnect() {
    return (
        <div className="h-[20rem] flex flex-col items-center justify-center space-y-4 px-4">
            <div className="h-60 w-full flex items-center justify-center">
                <TextHoverEffect text="Lets Connect" />
            </div>
            <Link
                href="/contact"
                className="flex items-center gap-2 text-white text-xl font-medium hover:text-gray-300 transition-colors group"
            >
                Let&apos;s talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
