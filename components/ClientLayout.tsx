"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import CustomCursor from "./CustomCursor";

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
        <>
            <CustomCursor />
            <div className={`${darkMode ? "dark" : ""}`}>
                <div className="bg-black text-white min-h-screen">
                    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <main>{children}</main>
                    <Footer />
                    <Chatbot />
                </div>
            </div>
        </>
    );
}
