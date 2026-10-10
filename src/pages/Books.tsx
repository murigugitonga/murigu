import type { ReactElement } from "react";
import type { Book } from "../types/portfolio.js";

const mockBooks: Book[] = [
  {
    id: "1",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    description:
      "A candid break-down of modern large-scale systems infrastructure.",
    reviewLink: "https://www.youtube.com/watch?v=SVOrURyOu_U",
    rating: 4.8,
  },
  {
    id: "2",
    title: "The Urgency of Interpretability",
    author: "Dario Amodei",
    description:
      "The imperativeness of understanding AI mechanics under the hood can't be understated.",
    reviewLink: "https://darioamodei.com/post/the-urgency-of-interpretability",
    rating: 4.8,
  },
  {
    id: "3",
    title: "Machines of Loving Grace",
    author: "Dario Amodei",
    description:
      "A profound take on the risks of powerful artificial intelligence.",
    reviewLink: "https://darioamodei.com/essay/machines-of-loving-grace",
    rating: 4.6,
  },
  {
    id: "4",
    title: "AI 2027",
    author: "Daniel Kokotajlo, Scott Alexander, Thomas Larsen",
    description:
      "A scenario-based chronological break-down on the possible impact of superhuman AI over the next-decade.",
    reviewLink: "https://ai-2027.com/",
    rating: 4.6,
  },
];

export default function Books(): ReactElement {
  return (
    <section className="mx-auto max-w-4xl px-2 py-12 text-white">
      <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">
        Bookshelf
      </h1>
      <p className="mt-2 text-sm text-white/80">
        A select collection of articles, papers, essays, books and videos from
        my study collection, relevant to my & modern computing interests.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-1">
        {mockBooks.map((book) => (
          <div
            key={book.id}
            className="flex flex-col justify-between rounded-xl bg-inherit py-3 transition-all hover:boder hover:border-slate-700"
          >
            <div>
              <div className="flex items-center justify-between gap-0.5">
                <a
                  href={book.reviewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-white hover:underline"
                >
                  {book.title}
                </a>
              </div>
              <p className="text-xs text-white/60 mt-1">{book.author}</p>
              <p className="mt-1 text-tech-ice/50 text-sm leading-relaxed italic">
                {book.description}
              </p>
              <div className="flex items-center rounded-md bg-inherit px-2 py-1 text-xs font-semibold text-white/70">
                ★ {book.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
