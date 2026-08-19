import type { ReactElement } from 'react';
import type { Book } from '../types/portfolio.js';

const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    description: 'Modern large-scale systems architecture never felt so easy.',
    reviewLink: 'https://goodreads.com',
    rating: 5
  },
 {
    id: '2',
    title: 'The Urgency of Interpretability',
    author: 'Dario Amodei',
    description: 'We really need to understand how AI works under the hood.',
    reviewLink: 'https://goodreads.com',
    rating: 5
  },
    {
    id: '1',
    title: 'Machines of Loving Grace',
    author: 'Dario Amodei',
    description: 'A country of geniuses...but on server racks.',
    reviewLink: 'https://goodreads.com',
    rating: 5
  }
];

export default function Books(): ReactElement {
  return (
    <section className="mx-auto max-w-4xl px-2 py-12 text-white">
      <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">Bookshelf</h1>
      <p className="mt-2 text-sm text-white/70 italic">A curated collection of books, papers and articles of professional and technical books I have studied along with my two cents on each.</p>
      
      <div className="mt-10 grid gap-6 sm:grid-cols-1">
        {mockBooks.map((book) => (
          <div key={book.id} className="flex flex-col justify-between rounded-xl border border-white/10 bg-inherit p-6 transition-all hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-white">{book.title}</h2>
                {/* Rate Box */}
                <div className="flex items-center rounded-md bg-inherit px-2 py-1 text-xs font-semibold text-white ring-1 ring-white/40">
                  ★ {book.rating}.0
                </div>
              </div>
              <p className="text-xs text-white/60 mt-1">{book.author}</p>
              <p className="mt-1 text-white/50 text-sm leading-relaxed italic">{book.description}</p>
            </div>
            
            <a href={book.reviewLink} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center text-sm font-semibold text-white hover:underline">
              Read →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
