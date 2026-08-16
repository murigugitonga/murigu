import type { ReactElement } from 'react';

export default function App(): ReactElement {
  return (
    <main className='block bg-black text-white min-h-screen items-center w-full relative pt-16'>
      <div className='flex flex-col w-full container max-w-lg mx-auto space-y-8'>
        {/** Header content */}
        <div className='w-full flex items-baseline justify-center'>
          <div className='w-1/3'>
              <h1 className='text-white whitespace-nowrap font-semibold text-lg'>Murigu Gitonga</h1>
          </div>
          <nav className='w-3/4 space-x-5 text-white/60 text-sm items-start'>
            <a href="#">Thoughts</a>
            <a href="#">Books</a>
          </nav>
        </div>
        {/** Body content */}
        <section>
          <blockquote className='Leading relaxed'>
            Companies and corporations divest massive efforts in harnessing AI for enhanced productivity.
            Software Engineering bandwith and genius ideas are the bottlnecks to rapid AI Progress. With that, more talent, compute and raw processing power
            can be diverted
          </blockquote>
        </section>
        {/**Projects and Main content here */}
        {/**Bottom section */}
        <section>
          <div className='block w-full flex items-start'>
            <nav className='flex flex-col text-sm space-y-2 text-white/60'>
              <a href="#">Github</a>
              <a href="#">Gitlab</a>
              <a href="#">LinkendIn</a>
              <a href="#">Facebook</a>

            </nav>
          </div>
        </section>


      </div>
   </main>
  );
}
