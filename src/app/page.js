import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Radar from '../components/Radar';
import Terminal from '../components/Terminal';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen relative font-serif text-ink bg-paper">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 min-h-screen pt-12">
        <Header />
        
        {/* The sequence of the dossier */}
        <Experience />
        <Skills />
        <Projects />
        <Radar />
        
        {/* The Easter Egg interactive terminal */}
        <Terminal />
        
        {/* Final secure contact section */}
        <Contact />
        
        <footer className="py-8 text-center font-mono text-xs uppercase tracking-widest text-zinc border-t-2 border-ink mt-20">
          End of File // © {new Date().getFullYear()} Minhaj Aman
        </footer>
      </main>
    </div>
  );
}