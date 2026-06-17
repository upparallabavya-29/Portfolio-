import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from '././components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';

function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg text-slate-300 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background glow effects */}
      <BackgroundGlow />

      {/* Interactive cursor glow for modern screens */}
      {isMounted && (
        <div
          className="cursor-glow pointer-events-none fixed z-[9999]"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* Main layout container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-24 pb-12 space-y-24 md:space-y-36">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
