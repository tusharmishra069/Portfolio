"use client";

import { useState, useEffect } from "react";
import { ResizableHeader } from "./ResizableHeader";
import Footer from "./Footer";
import Chatbot from "./chat/Chatbot";
import { ChatProvider } from "@/context/ChatContext";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ChatProvider>
            <div className={`${darkMode ? "dark" : ""}`}>
                <div className="bg-black text-white min-h-screen">
                    <ResizableHeader />
                    <main>{children}</main>
                    <Footer />
                    <Chatbot />
                </div>
            </div>
        </ChatProvider>
    );
}
