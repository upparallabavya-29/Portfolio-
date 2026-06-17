import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const experiences = [
  {
    role: "AI Data Quality Analyst Intern",
    company: "Rooman Technologies",
    period: "May 2025 – July 2025",
    description: [
      "Cleaned, filtered, and validated raw datasets for neural networks and machine learning model training workflows.",
      "Automated heavy data preprocessing and transformation pipelines using Python, NumPy, and Pandas to accelerate training readiness.",
      "Conducted precise and accurate manual and semi-automated data annotation and labeling, maintaining a verified 98%+ data quality standard.",
      "Collaborated with machine learning engineers to identify, document, and fix outliers or data imbalances in model pipelines."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 relative">
      <div className="space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">Experience</span>
          </h2>
          <div className="w-12 h-[3px] bg-accentCyan mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            My engineering and analyst internships.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 md:pl-8 border-l border-slate-800 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline marker */}
              <span className="absolute w-4 h-4 rounded-full bg-accentCyan border-4 border-darkBg -left-[31px] md:-left-[35px] top-2 shadow-lg shadow-cyan-500/50" />

              {/* Experience glass card */}
              <div className="glass-card p-6 md:p-8 space-y-6">
                
                {/* Header details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white flex items-center gap-2">
                      <FaBriefcase className="text-accentCyan text-lg shrink-0" />
                      <span>{exp.role}</span>
                    </h3>
                    <h4 className="text-md font-semibold text-slate-400">{exp.company}</h4>
                  </div>
                  
                  <span className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-accentTeal">
                    <FaCalendarAlt />
                    {exp.period}
                  </span>
                </div>

                {/* Accomplishment details */}
                <ul className="space-y-3.5">
                  {exp.description.map((bullet, bulletIndex) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + (bulletIndex * 0.1) }}
                      key={bulletIndex} 
                      className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed"
                    >
                      <FaCheckCircle className="text-accentCyan mt-1 shrink-0 text-sm" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
