import type { ReactElement } from "react";
import type { Thought } from "../types/portfolio.js";

const mockThoughts: Thought[] = [
    {
        id: '1',
        title: 'Building End-to-End in Cloud Environments',
        description: "Why local setups can't hold up against cloud environments",
        link: 'https://murigu.gitlab.io',
        date: 'Aug 2026'

    },
    {
        id: '2',
        title: 'Machines of Loving Grace',
        description: "A country of geniuses...but on server racks.",
        link: 'https://murigu.gitlab.io',
        date: 'Aug 2026'

    },
        {
        id: '3',
        title: 'AI 2027',
        description: "A poweful AI suddenly outsmarts humanity",
        link: 'https://murigu.gitlab.io',
        date: 'Sept 2025'

    },
    
];

export default function Thoughts(): ReactElement{
    return(
        <section className="mx-auto max-w-4xl px-2 py-12 text-white">
        <h1 className="text-lg font-semibold tracking-tight">Thoughts</h1>
        <p className="mt-2 text-white/70 text-sm">I randomly log paradigms, technologies and structural architecture concepts that I find significant.</p>
        
        <div className="mt-10 space-y-6">
            {mockThoughts.map((thought) => (
            <div key={thought.id} className="rounded-xl border border-white/50 bg-inherit p-6 transition-all hover:border-slate-700">
                <span className="text-xs font-medium text-white/60">{thought.date}</span>
                <h2 className="mt-1 text-lg font-medium text-white">{thought.title}</h2>
                <p className="mt-2 text-white/50 text-sm leading-relaxed">{thought.description}</p>
                <a href={thought.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-sm font-semibold text-white hover:underline">
                Read →
                </a>
            </div>
            ))}
        </div>
        </section>
    );
}