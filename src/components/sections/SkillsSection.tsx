import { skills } from "@/data/skills";

function Box({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-1.5 rounded-full bg-emerald-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                    <span
                        key={item}
                        className="cursor-default rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:bg-emerald-500"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function SkillsSection() {
    return (
        <section id="skills" className="scroll-mt-24">
            <div className="mb-6">
                <h2 className="text-4xl font-extrabold">Skills</h2>
                <div className="mt-2 h-1 w-20 rounded bg-emerald-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Box title="Programming Languages" items={skills.programmingLanguages} />
                <Box title="Frameworks & Libraries" items={skills.frameworksLibraries} />
                <Box title="Cloud & DevOps" items={skills.cloudDevOps} />
                <Box title="AI / ML" items={skills.aiMl} />
            </div>
        </section>
    );
}
