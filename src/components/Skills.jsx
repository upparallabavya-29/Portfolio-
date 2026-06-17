import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaChartBar, FaBrain, FaCogs
} from 'react-icons/fa';
import { 
  SiPython, SiJavascript, SiTailwindcss, SiVite, SiExpress, SiMongodb, SiPostgresql, SiSupabase, SiPytorch 
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCogs className="text-accentCyan" />,
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" />, level: 90 },
      { name: "Java", icon: <FaJava className="text-[#007396]" />, level: 70 },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 85 },
      { name: "SQL", icon: <FaDatabase className="text-[#00758F]" />, level: 80 }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: <FaReact className="text-[#61DAFB]" />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 85 },
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" />, level: 80 }
    ]
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="text-[#339933]" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 75 },
      { name: "Express.js", icon: <SiExpress className="text-white" />, level: 80 }
    ]
  },
  {
    title: "Databases & Cloud",
    icon: <FaDatabase className="text-accentPurple" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, level: 75 },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" />, level: 80 }
    ]
  },
  {
    title: "AI & Data Science",
    icon: <FaBrain className="text-pink-500" />,
    skills: [
      { name: "Machine Learning", icon: <FaBrain className="text-pink-400" />, level: 85 },
      { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" />, level: 75 },
      { name: "Transformers (ViT/Swin)", icon: <FaBrain className="text-[#06B6D4]" />, level: 80 },
      { name: "Data Analysis", icon: <FaChartBar className="text-[#E97627]" />, level: 85 }
    ]
  },
  {
    title: "Developer Tools",
    icon: <FaGitAlt className="text-[#F05032]" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
      { name: "GitHub", icon: <FaGithub className="text-white" />, level: 90 },
      { name: "VS Code", icon: <DiVisualstudio className="text-[#007ACC]" />, level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 relative">
      <div className="space-y-12">
        
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">Skills</span>
          </h2>
          <div className="w-12 h-[3px] bg-accentCyan mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Here are my core technical competencies categorized by discipline. I constantly explore new technologies and frame-works.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 flex flex-col space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-display font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skill Items List */}
              <div className="space-y-4 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-accentCyan to-accentTeal rounded-full shadow-lg shadow-cyan-500/30"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
