"use client";

import { profile } from "@/data/profile";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Mail, MapPin, Linkedin, Sun, Moon, Github } from "lucide-react";

function Tile({
    icon,
    title,
    value,
    href,
    rightSlot,
}: {
    icon: React.ReactNode;
    title: string;
    value?: React.ReactNode;
    href?: string;
    rightSlot?: React.ReactNode;
}) {
    const inner = (
        <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-300">
                {icon}
            </div>
            <div className="min-w-0">
                <div className="font-semibold">{title}</div>
                {value ? (
                    <div className="text-emerald-600 dark:text-emerald-300 truncate">{value}</div>
                ) : null}
            </div>
            {rightSlot ? <div className="ml-auto">{rightSlot}</div> : null}
        </div>
    );

    return href ? (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="block rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition"
        >
            {inner}
        </a>
    ) : (
        <div className="rounded-xl p-4">{inner}</div>
    );
}

export default function ContactSection() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const isDark = mounted ? resolvedTheme === "dark" : false;

    return (
        <section id="contact" className="scroll-mt-24">
            <div className="mb-6">
                <h2 className="text-4xl font-extrabold">Contact</h2>
                <div className="mt-2 h-1 w-20 rounded bg-emerald-400" />
            </div>

            <div className="rounded-2xl border border-emerald-200/70 dark:border-emerald-900/50 bg-white dark:bg-slate-900 shadow-sm">
                <div className="p-8">
                    <h3 className="text-2xl font-bold">Get In Touch</h3>
                    <div className="mt-4 h-px w-full bg-slate-200 dark:bg-white/10" />

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Tile
                            icon={<Mail size={22} />}
                            title="Email"
                            value={profile.email}
                            href={`mailto:${profile.email}`}
                        />

                        <Tile
                            icon={<Github size={22} />}
                            title="GitHub"
                            value="Venkateswarrao9025"
                            href="https://github.com/Venkateswarrao9025"
                        />

                        <Tile
                            icon={<MapPin size={22} />}
                            title="Location"
                            value={profile.locationLine}
                        />

                        <Tile
                            icon={<Linkedin size={22} />}
                            title="LinkedIn"
                            value={profile.linkedinHandleText}
                            href={profile.links.linkedin}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
