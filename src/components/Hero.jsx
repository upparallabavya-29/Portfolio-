import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import profileImage from '../assets/profile.jpg';

const roles = [
  "AI & Full Stack Developer",
  "Python Developer",
  "Software Developer",
  "Data Analyst",
  "AI/ML Engineer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleResumeDownload = () => {
    // Blast elegant confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#14b8a6', '#8b5cf6']
    });

    // Open actual resume link in a new tab
    window.open("https://drive.google.com/file/d/1WTw3OH96Hw1acqjLM-ej_glYgBIv2CNO/view?usp=drive_link", "_blank", "noopener,noreferrer");
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-12 md:pt-20">
      
      {/* Hero Text details */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 space-y-6 text-center md:text-left z-10"
      >
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2 text-accentCyan font-semibold text-sm tracking-wider uppercase mb-1">
            <span>👋 Hello, I'm</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan via-accentTeal to-accentPurple">Upparalla Bavya</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-slate-400 min-h-[40px] flex items-center justify-center md:justify-start">
            <span>A passionate </span>
            <span className="text-white ml-2 border-r-2 border-accentCyan pr-1 animate-pulse font-semibold">
              {currentText}
            </span>
          </h2>
        </div>

        <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
          I am a B.Tech Artificial Intelligence student (graduating 2026) and Full-Stack Developer. I build highly responsive modern web applications and deploy AI-powered models using Machine Learning, PyTorch, Supabase, and React.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <button
            onClick={handleResumeDownload}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accentCyan to-accentTeal text-darkBg font-semibold hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <span>View Resume</span>
            <span className="text-base">→</span>
          </button>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 text-center hover:border-slate-700"
          >
            Explore Projects
          </a>
        </div>

        {/* Social Connections */}
        <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-slate-400">
          <a
            href="https://github.com/upparallabavya-29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 text-2xl"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/upparalla-bavya-503936258/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 text-2xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:bhavyabhavyareddy4@gmail.com"
            className="hover:text-white transition-colors duration-300 text-2xl"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Profile picture - side-by-side rectangular card with rounded corners */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="flex-1 flex justify-center items-center z-10"
      >
        <div className="relative group w-64 h-80 sm:w-72 sm:h-90 lg:w-80 lg:h-[400px]">
          {/* Subtle animated gradient ring behind profile image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accentCyan via-accentTeal to-accentPurple rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow" />
          
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-sm">
            <img 
              src={profileImage} 
              alt="Upparalla Bavya" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>

    </section>
  );
}
