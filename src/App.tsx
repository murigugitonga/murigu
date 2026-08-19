import type { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import Navbar from './components/Navbar.js';
import Thoughts from './pages/Thoughts.js';
import Books from './pages/Books.js';
import NavbarTwo from './components/NavbarTwo.js';


export default function App(): ReactElement {
  return (
    <Router>
      <div className="relative flex p-4 justify-center items-start min-h-screen w-full bg-black text-[#E7E5E0]">
        {/* <Navbar /> */}
        <NavbarTwo/>

        <main className="pt-2 max-w-lg flex bg-inherit">
          <Routes>
            {/* Landing Route */}
            <Route path="/" element={
              <section className="flex min-h-screen flex-col space-y-9 items-center justify-center px-2 text-center">
                <div className="flex flex-col space-y-4 text-sm items-start">
                  <p className="text-start leading-relaxed text-[#E7E5E0]">
                    Notable bottlenecks plaguing Artificial Intelligence lie in compute availability, memory management, model orchestration, latency and scaling constraints.
                  </p>
                  <p className="text-start leading-relaxed text-[#E7E5E0]">
                    My call is engineeering the infrastructure that operationalizes these models - frontier and specialized - building the
                    computational systems that allow them to effectively mitigate these shortcomings, maximize throughput and minimize infrastructure churn, transforming raw model capability into effective Artificial Intelligence.
                  </p>

                </div>
                {/**Other projects will go here */}
                {/**Links to social media */}
                <div className='flex justify-between text-sm items-start w-full'>
                  <nav className='flex flex-col space-y-2 items-start text-[#E7E5E0]/60'>
                    <a href="http://murigudev.vercel.app" target="_blank" rel="noopener noreferrer">Web Systems</a>
                    <a href="https://murigugitonga.github.io" target="_blank" rel="noopener noreferrer">Systems Engineering</a>
                    <a href="https://murigu.gitlab.io" target="_blank" rel="noopener noreferrer">Aerospace & Defence</a>
                    
                  </nav>
                  {/* <nav className='flex flex-col space-y-2 items-end text-white/60'>
                    <a href="http://facebook.com/murigugitonga" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="http://x.com/murigugitonga" target="_blank" rel="noopener noreferrer">X(twitter)</a>
                    <a href="http://linkedIn.com/in/murigugitonga" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    
                  </nav> */}
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
