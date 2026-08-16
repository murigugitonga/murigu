import type { ReactElement } from "react";
import type { Thought } from "../types/portfolio.js";

const mockThoughts: Thought[] = [
    {
        id: '1',
        title: 'Building End-to-End in Cloud Environments',
        description: "Why local setups can't hold up against cloud environments",
        link: 'https://murigu.gitlab.io',
        date: 'Aug 2026'

    }
];

export default function Thoughts(): ReactElement{
    return(
        <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-teal-400 sm:text-4xl">Thoughts</h1>
        <p className="mt-2 text-slate-400">Random log of paradigms, technologies, and structural architecture concepts.</p>
        
        <div className="mt-10 space-y-6">
            {mockThoughts.map((thought) => (
            <div key={thought.id} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700">
                <span className="text-xs font-medium text-teal-500">{thought.date}</span>
                <h2 className="mt-1 text-xl font-bold text-white">{thought.title}</h2>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">{thought.description}</p>
                <a href={thought.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-sm font-semibold text-teal-400 hover:underline">
                Read article →
                </a>
            </div>
            ))}
        </div>
        </section>
    );
}