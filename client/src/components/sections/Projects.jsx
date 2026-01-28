import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
    {
        title: "Enterprise Task Management System",
        description: "A scalable SaaS platform for managing cross-functional team workflows in real-time.",
        challenge: "Handling 10k+ concurrent WebSocket connections while maintaining <100ms latency for updates.",
        solution: "Implemented a custom Node.js cluster architecture with Redis Pub/Sub for horizontal scaling. Optimized React re-renders using virtualization for large datasets.",
        stack: ["React", "Node.js", "Redis", "MongoDB", "Docker"],
        github: "#",
        demo: "#"
    },
    {
        title: "E-Commerce Analytics Dashboard",
        description: "Comprehensive admin dashboard for tracking sales, user metrics, and inventory health.",
        challenge: "Aggregating millions of MongoDB records without blocking the main event loop.",
        solution: "Utilized MongoDB Aggregation Framework pipelines with indexed fields. Implemented response caching strategies to reduce DB load by 60%.",
        stack: ["Next.js", "Express", "MongoDB Aggregations", "Chart.js"],
        github: "#",
        demo: "#"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-rich-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Featured Work</h2>
                    <p className="text-secondary text-lg max-w-2xl">
                        A selection of projects that demonstrate complex problem solving and architectural thinking.
                    </p>
                </div>

                <div className="grid gap-12">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="flex flex-col md:flex-row overflow-hidden border-subtle-gray bg-off-black">
                                {/* Visual Side (Placeholder for Screenshot) */}
                                <div className="md:w-2/5 h-64 md:h-auto bg-subtle-gray/10 relative group border-r border-subtle-gray">
                                    <div className="absolute inset-0 flex items-center justify-center text-muted group-hover:text-accent transition-colors">
                                        [Project Screenshot]
                                    </div>
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Content Side */}
                                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                                    <p className="text-secondary mb-6">{project.description}</p>

                                    <div className="space-y-4 mb-8">
                                        <div>
                                            <span className="text-accent font-semibold uppercase text-xs tracking-wider">Challenge</span>
                                            <p className="text-sm text-secondary mt-1 border-l-2 border-subtle-gray pl-3">
                                                {project.challenge}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-accent font-semibold uppercase text-xs tracking-wider">Solution</span>
                                            <p className="text-sm text-secondary mt-1 border-l-2 border-subtle-gray pl-3">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.stack.map((tech, idx) => (
                                            <span key={idx} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <Button variant="outline" size="sm" onClick={() => window.open(project.github)}>
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </Button>
                                        <Button size="sm" onClick={() => window.open(project.demo)}>
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
