import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';

const education = [
  {
    degree: "B.Tech in CSE (Artificial Intelligence)",
    institution: "Ravindra College of Engineering for Women",
    location: "Kurnool, Andhra Pradesh",
    period: "2022 - 2026",
    grade: "CGPA: 8.2 / 10"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Medha Junior College",
    location: "Kurnool, Andhra Pradesh",
    period: "2019 - 2021",
    grade: "CGPA: 9.4 / 10"
  },
  {
    degree: "Secondary School Certificate",
    institution: "Z.P High School",
    location: "Kurnool, Andhra Pradesh",
    period: "2018 - 2019",
    grade: "GPA: 8.0 / 10"
  }
];

const strengths = [
  "Problem-Solving",
  "Decision Making",
  "Positive Attitude",
  "Adaptability",
  "Responsibility",
  "Effective Communication"
];

export default function About() {
  return (
    <section id="about" className="py-12 relative">
      <div className="space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">Me</span>
          </h2>
          <div className="w-12 h-[3px] bg-accentCyan mx-auto rounded-full" />
        </div>

        {/* Biography & Strengths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-white">Who is Bavya?</h3>
            <p className="text-slate-400 leading-relaxed">
              I am an Artificial Intelligence undergraduate student and a Full Stack Web Developer. My goal is to build intelligent solutions at the intersection of machine learning and modern web technologies. I love engineering applications that solve practical problems, whether it's automating data quality pipelines, classifying plant leaves using Vision Transformers, or creating clean, scalable financial portals.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I thrive on learning new architectures, building robust database infrastructures, and optimization. I am actively looking for developer opportunities where I can apply my Python, React, Supabase, and Machine Learning skills.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Core Strengths:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {strengths.map((strength, index) => (
                  <div 
                    key={index}
                    className="p-3 text-center rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:border-accentCyan/35 transition-colors duration-300"
                  >
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-white flex items-center gap-2">
              <FaGraduationCap className="text-accentCyan" />
              <span>Education Journey</span>
            </h3>

            <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <span className="timeline-dot" />

                  {/* Education Card */}
                  <div className="glass-card p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-accentTeal font-medium">
                        <FaCalendarAlt size={10} />
                        {edu.period}
                      </span>
                    </div>

                    <h5 className="text-sm font-medium text-slate-300">{edu.institution}</h5>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1 text-accentCyan font-semibold">
                        <FaAward />
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
