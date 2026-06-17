import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaRegFileAlt, FaCodeBranch } from 'react-icons/fa';

const stats = [
  {
    value: "200+",
    label: "LeetCode Solved",
    icon: <FaCodeBranch className="text-accentCyan" />,
    description: "Strong data structures and algorithms foundation."
  },
  {
    value: "2026",
    label: "Research Accepted",
    icon: <FaRegFileAlt className="text-accentPurple" />,
    description: "Paper accepted at ICICNDA-SERS 2026 conference."
  },
  {
    value: "5+",
    label: "Projects Completed",
    icon: <FaAward className="text-accentTeal" />,
    description: "Created full-stack MERN, AI, and JavaScript platforms."
  }
];

const certifications = [
  {
    title: "JavaScript and Web Development",
    issuer: "Excelr",
    date: "Verified Certification"
  },
  {
    title: "Python Basics",
    issuer: "HackerRank",
    date: "Skills Verification"
  },
  {
    title: "Data Engineering Virtual Internship",
    issuer: "EduSkills",
    date: "AWS Academy"
  },
  {
    title: "Cybersecurity Virtual Internship",
    issuer: "EduSkills",
    date: "Palo Alto Networks"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 relative">
      <div className="space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">Achievements</span>
          </h2>
          <div className="w-12 h-[3px] bg-accentCyan mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Demonstrated coding achievements, publications, and professional certificates.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sIdx * 0.1 }}
              className="glass-card p-6 text-center space-y-3 relative group"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                {stat.value}
              </h3>
              <h4 className="text-sm font-semibold uppercase text-slate-300 tracking-wide">
                {stat.label}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="space-y-6 pt-4">
          <h3 className="text-2xl font-display font-semibold text-white flex items-center gap-2">
            <FaCertificate className="text-accentCyan" />
            <span>Professional Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cIdx * 0.05 }}
                className="glass-card p-6 flex items-start gap-4 hover:border-accentCyan/30 transition-colors duration-300"
              >
                <div className="p-3 bg-slate-900 border border-slate-800 text-accentCyan text-lg rounded-xl shrink-0">
                  <FaCertificate />
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white hover:text-accentCyan transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-slate-400 font-medium">
                    {cert.issuer} &bull; <span className="text-xs text-slate-500">{cert.date}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
