import { ReactElement } from 'react';

export default function App(): ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
          Murigu Portfolio
        </h1>
        <p className="mt-4 text-base text-slate-400">
          React, TypeScript, and Tailwind v4. Built end-to-end in the cloud and ready for Cloudflare Pages.
        </p>
        <div className="mt-6">
          <span className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400 ring-1 ring-inset ring-teal-500/20">
            Environment Online
          </span>
        </div>
      </div>
    </main>
  );
}
