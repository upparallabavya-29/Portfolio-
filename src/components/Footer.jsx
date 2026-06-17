import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/20 backdrop-blur-sm py-12 mt-12 select-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-8">
        
        {/* Top section links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-white">Upparalla Bavya</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">AI & Full Stack Developer &bull; CSE (AI)</p>
          </div>

          {/* Quick nav links */}
          <ul className="flex items-center gap-6 flex-wrap justify-center">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleScrollTo(e, section)}
                  className="text-xs sm:text-sm text-slate-400 hover:text-white capitalize transition-colors duration-300 font-medium"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>

          {/* Social connections */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/upparallabavya-29"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-lg hover:border-slate-700 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/upparalla-bavya-503936258/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-lg hover:border-slate-700 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            &copy; 2026 Upparalla Bavya. All rights reserved. Designed for premium aesthetics and recruiter-friendly ATS.
          </p>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 text-xs font-semibold text-accentCyan hover:text-white transition-colors duration-300 bg-slate-900 border border-slate-800 hover:border-slate-700 px-4 py-2.5 rounded-xl"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <FaArrowUp className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
