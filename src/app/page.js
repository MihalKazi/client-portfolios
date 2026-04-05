import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Brief from '../components/Brief';
import Experience from '../components/Experience';
import Methodology from '../components/Methodology'; 
import Projects from '../components/Projects';
import Radar from '../components/Radar';
import Terminal from '../components/Terminal';
import Contact from '../components/Contact';

import { client } from '@/sanity/lib/client';

export const dynamic = 'force-dynamic';
export const revalidate = 0; 

export default async function Home() {

  // FIX: Added briefData into this array in the exact same order as the fetch calls below!
  const [headerData, briefData, experiencesData, investigationsData, methodologyData] = await Promise.all([
    client.fetch(`*[_type == "header"][0]`, {}, { cache: 'no-store' }),
    client.fetch(`*[_type == "brief"][0]`, {}, { cache: 'no-store' }),
    client.fetch(`*[_type == "experience"] | order(order asc)`, {}, { cache: 'no-store' }),
    client.fetch(`*[_type == "investigation"] | order(_createdAt asc)`, {}, { cache: 'no-store' }),
    client.fetch(`*[_type == "methodology"] | order(order asc)`, {}, { cache: 'no-store' })
  ]);

  return (
    <div className="min-h-screen relative font-serif text-ink bg-paper">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 min-h-screen pt-12">
        
        <Header data={headerData} />
        
        {/* I moved Brief above Experience to match typical layout, but you can order these however you like! */}
        <Brief data={briefData} />
        <Experience experiences={experiencesData} />
        <Methodology categories={methodologyData} />
        <Projects investigations={investigationsData} />
        
        <Radar />
        <Terminal />
        <Contact />
        
        <footer className="py-8 text-center font-mono text-xs uppercase tracking-widest text-zinc border-t-2 border-ink mt-20">
          End of File // © {new Date().getFullYear()} Minhaj Aman
        </footer>
      </main>
    </div>
  );
}