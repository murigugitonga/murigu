import type { ReactElement } from 'react';
import type { Book } from '../types/portfolio.js';

const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    description: 'An exceptional deep-dive into database architectures, system structures, handling storage layout internals, and concurrency patterns.',
    reviewLink: 'https://goodreads.com',
    rating: 5
  }
];

export default function Books(): ReactElement {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Bookshelf</h1>
      <p className="mt-2">Curated compilation of professional and technical books I have studied along with reviews.</p>
      
      <div className="mt-10 grid gap-6 sm:grid-cols-1">
        {mockBooks.map((book) => (
          <div key={book.id} className="flex flex-col justify-between rounded-xl border border-white/40 bg-inherit p-6 transition-all hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-white line-clamp-1">{book.title}</h2>
                {/* Rating Box */}
                <div className="flex items-center rounded-md bg-amber-500/10 px-2 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/20">
                  ★ {book.rating}.0
                </div>
              </div>
              <p className="text-xs text-white/60 mt-0.5">{book.author}</p>
              <p className="mt-3 text-white/50 text-sm leading-relaxed line-clamp-3">{book.description}</p>
            </div>
            
            <a href={book.reviewLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-400 hover:underline">
              View on Goodreads →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
