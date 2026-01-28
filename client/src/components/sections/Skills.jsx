import React from 'react';
import { Card, CardContent } from '@/components/common/Card';
import { motion } from 'framer-motion';
import { Code2, Server, Terminal, Database, Layout, GitBranch } from 'lucide-react';

const skillsData = [
    {
        category: "Frontend",
        icon: <Layout className="w-6 h-6 text-accent" />,
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"]
    },
    {
        category: "Backend",
        icon: <Server className="w-6 h-6 text-accent" />,
        items: ["Node.js", "Express.js", "NestJS", "GraphQL", "Socket.io", "Microservices"]
    },
    {
        category: "Database",
        icon: <Database className="w-6 h-6 text-accent" />,
        items: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "Prisma", "Aggregation Guidelines"]
    },
    {
        category: "DevOps & Tools",
        icon: <Terminal className="w-6 h-6 text-accent" />,
        items: ["Docker", "Kubernetes", "AWS (EC2, S3)", "CI/CD (GitHub Actions)", "Git", "Jest"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-rich-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Technical Arsenal</h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        A curator list of tools and technologies I use to build robust applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-off-black hover:border-accent transition-colors duration-300">
                                <CardContent className="p-6">
                                    <div className="mb-4 bg-accent/5 w-12 h-12 rounded-lg flex items-center justify-center">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary mb-4">{skill.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-subtle-gray/30 rounded-full text-sm text-secondary border border-subtle-gray">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
