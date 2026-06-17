import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaCode, 
  FaBrain, 
  FaDatabase, 
  FaLaptop, 
  FaServer 
} from 'react-icons/fa';
import confetti from 'canvas-confetti';
import profileImage from '../assets/profile.jpg';

const badges = [
  { text: "AI & ML Engineer", icon: FaBrain, color: "text-accentCyan", hoverBorder: "rgba(6, 182, 212, 0.4)" },
  { text: "Full Stack Developer", icon: FaCode, color: "text-accentTeal", hoverBorder: "rgba(20, 184, 166, 0.4)" },
  { text: "Frontend Developer", icon: FaLaptop, color: "text-accentCyan", hoverBorder: "rgba(6, 182, 212, 0.4)" },
  { text: "Backend Developer", icon: FaServer, color: "text-accentPurple", hoverBorder: "rgba(139, 92, 246, 0.4)" },
  { text: "Python & Data Analyst", icon: FaDatabase, color: "text-accentTeal", hoverBorder: "rgba(20, 184, 166, 0.4)" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  }
};

export default function Hero() {
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

  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-12 md:pt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Text details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-8 space-y-6 text-center lg:text-left z-10"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-accentTeal font-semibold text-sm tracking-wider uppercase">
              <span>👋 Hello, I'm</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan via-accentTeal to-accentPurple">
                Upparalla Bavya
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-accentCyan">
              AI & Full Stack Developer
            </h2>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
            I am a B.Tech <span className="text-accentCyan font-semibold">Artificial Intelligence</span> student (graduating 2026) and <span className="text-accentCyan font-semibold">Full-Stack Developer</span>. I build highly responsive modern web applications and deploy <span className="text-accentCyan font-semibold">AI-powered models</span> using Machine Learning, PyTorch, Supabase, and React.
          </p>

          {/* Interactive Badges with Framer Motion Stagger and Hover Animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3, 
                    borderColor: badge.hoverBorder,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 8px 20px -6px rgba(6, 182, 212, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 transition-all duration-300 cursor-pointer select-none"
                >
                  <Icon className={badge.color} />
                  <span>{badge.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={handleResumeDownload}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accentCyan to-accentTeal text-darkBg font-bold hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 text-center flex items-center justify-center gap-2"
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
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-400">
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

        {/* Profile picture (Matching Reference Screenshot proportion) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-4 flex justify-center lg:justify-end z-10"
        >
          <div className="relative group w-64 h-80 sm:w-72 sm:h-90 lg:w-[280px] lg:h-[350px]">
            {/* Subtle animated shadow behind profile image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accentCyan via-accentTeal to-accentPurple rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-sm">
              <img 
                src={profileImage} 
                alt="Upparalla Bavya" 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
