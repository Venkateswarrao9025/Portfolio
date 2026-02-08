"use client";

import { profile } from "@/data/profile";
import { useEffect, useState } from "react";

const ROLES = ["Software Engineer", "Full Stack Engineer", "AI Engineer"];

export default function HeroSection() {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        const typingSpeed = isDeleting ? 100 : 150;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));
            } else {
                setText(currentRole.substring(0, text.length - 1));
            }

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="home" className="scroll-mt-24 flex items-center justify-center min-h-[calc(100vh-100px)] py-20">
            <div className="mx-auto max-w-4xl px-4 pt-10 pb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                    {profile.name}
                </h1>

                <p className="mt-5 text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-400 min-h-[40px]">
                    {text}<span className="animate-pulse">|</span>
                </p>

                <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {profile.heroPitch}
                </p>

                <div className="mt-8 flex justify-center gap-3">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-3 text-base font-bold text-white hover:bg-emerald-600 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Let’s Connect →
                    </a>
                </div>
            </div>
        </section>
    );
}
