import type { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Navbar from './components/Navbar.js';
import Thoughts from './pages/Thoughts.js';
import Books from './pages/Books.js';

export default function App(): ReactElement {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen text-white w-full bg-black text-white">
        <Navbar />

        <main className="pt-2 max-w-lg flex bg-inherit">
          <Routes>
            {/* Landing Route */}
            <Route path="/" element={
              <section className="flex min-h-screen flex-col space-y-8 items-center justify-center px-2 text-center">
                <div className="flex items-start">
                  <p className="text-start leading-relaxed">
                    Software Engineering bandwidth and genius ideas are the bottlenecks to rapid AI progress.
                    Corporations, Individuals and Goverments continue to look for better ways to assimilate AI into their workflows.
                  </p>

                </div>
                {/**Other projects will go here */}
                {/**Links to social media */}
                <div className='block w-full'>
                  <nav className='flex flex-col space-y-2 items-start text-white/60'>
                    <a href="http://github.com/murigugitonga" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="http://github.com/murigugitonga" target="_blank" rel="noopener noreferrer">Gitlab</a>
                    <a href="http://github.com/murigugitonga" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </nav>
                </div>
              </section>
            } />

            {/* Sub-routing definitions */}
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
