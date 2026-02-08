"use client";
import { profile } from "@/data/profile";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const nav = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur dark:bg-slate-950/60 transition-all duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Left Side: Logo & Name */}
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-lg shadow-md ring-2 ring-emerald-200 dark:ring-emerald-900 shrink-0">
                        VRC
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap">
                        Venkateswar Rao Chinta
                    </span>
                </div>

                {/* Right Side: Navigation & Theme Toggle */}
                <div className="flex items-center gap-6">
                    <nav className="flex items-center gap-12 md:gap-20 text-base font-medium text-slate-600 dark:text-slate-300 overflow-x-auto no-scrollbar">
                        {nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="px-2 hover:text-emerald-500 hover:scale-105 transition-all duration-200 whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition"
                        aria-label="Toggle Theme"
                    >
                        {mounted && resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Mobile Menu Placeholder (Optional for future) */}
                    <div className="md:hidden">
                        {/* Hamburger icon could go here if requested later */}
                    </div>
                </div>
            </div>
        </header>
    );
}
