import { experience } from "@/data/experience";

export default function ExperienceSection() {
    return (
        <section id="experience" className="scroll-mt-24">
            <div className="mb-6">
                <h2 className="text-4xl font-extrabold">Experience</h2>
                <div className="mt-2 h-1 w-20 rounded bg-emerald-400" />
            </div>

            <div className="space-y-4">
                {experience.map((job) => (
                    <div
                        key={job.company + job.title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
                    >
                        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                            <div>
                                <div className="text-lg font-extrabold">{job.title}</div>
                                <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                                    {job.company} • {job.location}
                                </div>
                            </div>
                            <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                {job.date}
                            </div>
                        </div>

                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
                            {job.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
