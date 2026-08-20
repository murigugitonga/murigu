import type { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavbarTwo(): ReactElement {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-black bg-black backdrop-blur-md text-white">
      <div className="mx-auto max-w-lg p-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo / Home link */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-lg font-semibold tracking-wider text-[#E7E5E0]">
              Murigu Gitonga
            </NavLink>
          </div>
          
          {/* Permanent Links - Active styles applied dynamically */}
          <div className="flex items-center text-sm space-x-6 sm:space-x-8">
            <NavLink 
              to="/thoughts" 
              className={({ isActive }) => 
                `font-medium transition-all ${
                  isActive 
                    ? 'text-white underline underline-offset-4 decoration-white decoration-2' 
                    : 'text-[#e7e5e0]/70 hover:text-[e7e5e0]'
                }`
              }
            >
              Thoughts
            </NavLink>
            <NavLink 
              to="/books" 
              className={({ isActive }) => 
                `font-medium transition-all ${
                  isActive 
                    ? 'text-white underline underline-offset-4 decoration-white decoration-2' 
                    : 'text-[#e7e5e0]/70 hover:text-[e7e5e0]'
                }`
              }
            >
              Reads
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
