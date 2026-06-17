import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import profileImage from '../assets/profile.png';

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

    // Create a temporary mock link to download resume
    const link = document.createElement('a');
    link.href = '#';
    // The user can substitute this with their actual resume file path later.
    alert("Resume download triggered! You can link your 'resume.pdf' to this button inside src/components/Hero.jsx.");
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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white leading-none">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan via-accentTeal to-accentPurple">Upparalla Bavya</span>
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
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accentCyan to-accentTeal text-darkBg font-semibold hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            Explore Projects
          </a>
          <button
            onClick={handleResumeDownload}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 hover:border-slate-700"
          >
            <FaDownload className="text-accentCyan" />
            <span>Download Resume</span>
          </button>
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

      {/* Floating profile picture */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="flex-1 flex justify-center items-center z-10"
      >
        <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
          {/* Animated gradient ring behind profile image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accentCyan via-accentTeal to-accentPurple rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition-opacity duration-500 animate-pulse-slow" />
          
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-950/40 backdrop-blur-sm p-3 flex items-center justify-center">
            <img 
              src={profileImage} 
              alt="Upparalla Bavya" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
            />
          </div>
          
          {/* Floating tags representing skills/fields */}
          <div className="absolute -top-4 -right-4 px-4 py-2 glass-card text-xs font-semibold text-white animate-float-slow shadow-lg flex items-center gap-1.5 border-white/20">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            <span>AI Model Tuning</span>
          </div>
          
          <div className="absolute -bottom-4 -left-4 px-4 py-2 glass-card text-xs font-semibold text-white animate-float-medium shadow-lg flex items-center gap-1.5 border-white/20">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
            <span>Full-Stack Web</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
