import type { ReactElement } from "react";
import { Link } from 'react-router-dom';

export default function Navbar(): ReactElement {
  return (
    <nav className="fixed top-0 z-50 w-full max-w-lg bg-black backdrop-blur-md text-white">
      <div className="mx-auto max-w-7xl px-4.5">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Home link */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg font-bold tracking-wider text-white sm:text-xl">
              Murigu Gitonga
            </Link>
          </div>
          
          {/* Permanent Links - Visible on all screen sizes */}
          <div className="flex text-sm text-white/60 items-center space-x-6 sm:space-x-8">
            <Link 
              to="/thoughts" 
              className="text-sm font-medium transition-colors hover:text-green active:underline"
            >
              Thoughts
            </Link>
            <Link 
              to="/books" 
              className="text-sm font-medium transition-colors hover:text-white/40 active:underline"
            >
              Reads
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}