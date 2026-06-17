import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';
import plantDiseaseImg from '../assets/plant-disease.png';

const projects = [
  {
    id: 1,
    title: "Plant Disease Detection App",
    description: "Developed an AI-powered agricultural diagnosis system using Vision Transformers (ViT) and Swin Transformer deep learning architectures to predict leaf diseases.",
    category: "AI/ML",
    image: plantDiseaseImg,
    techStack: ["Python", "PyTorch", "ViT", "Swin Transformer", "Scikit-Learn", "NumPy", "Pandas"],
    features: [
      "Real-time crop leaf disease prediction",
      "Image augmentation & preprocessing pipelines",
      "Deep learning classification & transfer learning",
      "Model accuracy and metrics evaluation graphs"
    ],
    demoUrl: "https://updated-code-six.vercel.app/",
    codeUrl: "https://github.com/upparallabavya-29/plant-disease-detection"
  },
  {
    id: 2,
    title: "Personal Finance Dashboard",
    description: "A secure personal financial tracker dashboard with interactive analytics to manage income, budgets, expense tracking, and savings milestones.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600",
    techStack: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "JavaScript"],
    features: [
      "Secure user login credentials and session control",
      "Expense tracking and savings target meters",
      "Interactive analytics chart dashboards",
      "Fully responsive responsive layout"
    ],
    demoUrl: "https://finance-management-frontend-omega.vercel.app/login",
    codeUrl: "https://github.com/upparallabavya-29/finance_management"
  },
  {
    id: 3,
    title: "Event Management System",
    description: "A full-stack web application designed to facilitate seamless event creation, ticketing registrations, and host dashboard analytics.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Dynamic event catalogs and search features",
      "Secure ticket purchase bookings",
      "Host control dashboard panel metrics",
      "Instant email registrations"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/upparallabavya-29"
  },
  {
    id: 4,
    title: "MERN Task Manager App",
    description: "A productivity-focused task management system with prioritize rankings, deadline schedules, and employee progress monitoring dashboards.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    features: [
      "User authentication using secure JSON Web Tokens",
      "Interactive task filtration dashboards",
      "Task categories and deadlines countdowns",
      "Full CRUD operations panel"
    ],
    demoUrl: "https://upparalla-bavya-software-engineer-r.vercel.app/tasks",
    codeUrl: "https://github.com/upparallabavya-29/upparalla-bavya---Software-Engineer---Round-1"
  },
  {
    id: 5,
    title: "Health Habits Tracker",
    description: "A responsive client-side JavaScript application focusing on tracking daily routines and logs with historical progress visualization.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600",
    techStack: ["HTML", "CSS", "JavaScript", "Local Storage", "Charts.js"],
    features: [
      "Offline browser storage persistence support",
      "Task checklists and streak counters",
      "Interactive monthly progress graph widgets",
      "Custom responsive CSS structures"
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/upparallabavya-29"
  }
];

const categories = ["All", "AI/ML", "Full Stack", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 relative">
      <div className="space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">Projects</span>
          </h2>
          <div className="w-12 h-[3px] bg-accentCyan mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            A selection of my recent developments across artificial intelligence, machine learning, and full stack engineering.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-accentCyan to-accentTeal text-darkBg shadow-md shadow-cyan-500/15'
                  : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card flex flex-col overflow-hidden group"
              >
                
                {/* Project Image Panel */}
                <div className="relative h-48 sm:h-64 overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-darkBg/80 backdrop-blur-md border border-white/10 text-xs font-bold text-accentCyan">
                    {project.category}
                  </span>
                </div>

                {/* Content Panel */}
                <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-accentCyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                          <FaCheck className="text-accentCyan text-xs shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badge pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4 pt-4 mt-auto border-t border-white/5">
                    {project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-accentCyan text-darkBg text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accentCyan/90 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300"
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
