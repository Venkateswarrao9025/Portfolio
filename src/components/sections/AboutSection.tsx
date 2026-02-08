import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

function SkillBox({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100">
                {title}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
                {items.map((x) => (
                    <span
                        key={x}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    >
                        {x}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-24">
            <div className="mb-6">
                <h2 className="text-4xl font-extrabold">About</h2>
                <div className="mt-2 h-1 w-20 rounded bg-emerald-400" />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900">
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    {profile.about}
                </p>
            </div>
        </section>
    );
}
