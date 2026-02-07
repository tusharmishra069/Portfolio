"use client";
import React, { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarButton,
} from "./ui/resizable-navbar";
import Link from "next/link";

export function ResizableHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "About Me", link: "/about" },
        { name: "Experience", link: "/#experience" },
        { name: "Projects", link: "/#projects" },
        { name: "Skills", link: "/#skills" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <div className="relative w-full">
            <Navbar className="top-0">
                <NavBody>
                    <div className="flex items-center gap-2 relative z-50">
                        <Link
                            href="/#hero"
                            className="text-xl font-bold text-black dark:text-white hover:text-blue-400 transition-colors"
                        >
                            T<span className="text-blue-400">M</span>
                        </Link>
                    </div>
                    <NavItems items={navItems} />
                    <div className="flex items-center space-x-4">
                        <NavbarButton href="https://calendly.com/tusharmishra069" target="_blank">
                            Book a call
                        </NavbarButton>
                    </div>
                </NavBody>
                <MobileNav visible={true} className="md:hidden">
                    <MobileNavHeader>
                        <Link
                            href="/#hero"
                            className="text-xl font-bold text-black dark:text-white"
                        >
                            tushar<span className="text-blue-400">mishra</span>
                        </Link>
                        <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                    </MobileNavHeader>
                    <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.link}
                                className="block w-full px-4 py-2 text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center space-x-4 px-4 py-2">
                            <NavbarButton href="https://calendly.com/tusharmishra069" target="_blank" className="w-full">
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
