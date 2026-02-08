import { projects } from "@/data/projects";

export default function ProjectsSection() {
    return (
        <section id="projects" className="scroll-mt-24">
            <div className="mb-6">
                <h2 className="text-4xl font-extrabold">Projects</h2>
                <div className="mt-2 h-1 w-20 rounded bg-emerald-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((p) => (
                    <div
                        key={p.name}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className="text-lg font-extrabold">{p.name}</div>
                                <div className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                                    {p.stack}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {p.github ? (
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-bold hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/5"
                                    >
                                        GitHub
                                    </a>
                                ) : null}
                                {p.demo ? (
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-bold hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/5"
                                    >
                                        Demo
                                    </a>
                                ) : null}
                            </div>
                        </div>

                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
                            {p.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
