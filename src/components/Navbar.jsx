import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setScrolled(window.scrollY > 20);

      // Active section highlight tracking
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-darkBg/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, 'home')}
          className="text-2xl font-display font-bold tracking-tight text-white group flex items-center gap-1"
        >
          <span>Bavya</span>
          <span className="text-accentCyan group-hover:text-accentPurple transition-colors duration-300">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`text-sm font-medium relative py-1 transition-colors duration-300 hover:text-white ${
                    activeSection === link.id ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accentCyan to-accentPurple"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-5 w-[1px] bg-slate-800" />

          {/* Social Icons & Quick CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/upparallabavya-29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 text-lg"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/upparalla-bavya-503936258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 text-lg"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-accentCyan/30 text-accentCyan hover:bg-accentCyan/10 transition-all duration-300 hover:border-accentCyan/60"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-darkBg/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col items-center">
              <ul className="w-full flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.id} className="w-full text-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`text-lg font-medium block py-2 transition-colors duration-300 ${
                        activeSection === link.id
                          ? 'text-accentCyan font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-full h-[1px] bg-slate-800" />
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/upparallabavya-29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-2xl transition-colors duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/upparalla-bavya-503936258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-2xl transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="w-full text-center font-semibold tracking-wider px-6 py-3 rounded-full bg-gradient-to-r from-accentCyan to-accentTeal text-darkBg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
