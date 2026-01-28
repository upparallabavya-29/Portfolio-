import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-3 py-1 mb-6 border border-accent/20 rounded-full bg-accent/5">
                        <span className="text-accent text-sm font-semibold tracking-wide">AVAILABLE FOR HIRE</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-primary">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-500">Scalable</span> Digital Products.
                    </h1>
                    <p className="text-lg md:text-xl text-secondary mb-8 max-w-lg leading-relaxed">
                        I'm a Senior Full Stack Engineer specializing in high-performance Web Applications, Design Systems, and Backend Architecture.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="group">
                            View Projects
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Download CV
                            <Download className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </motion.div>

                {/* Visual / Abstract Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-off-black border border-subtle-gray rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex">
                                <span className="text-accent mr-2">const</span>
                                <span className="text-primary">engineer</span>
                                <span className="text-secondary mx-2">=</span>
                                <span className="text-secondary">{'{'}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-primary">role:</span> <span className="text-green-400">'Principal Engineer'</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-primary">stack:</span> <span className="text-yellow-400">['MERN', 'Next.js', 'AWS']</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-primary">coffee:</span> <span className="text-accent">true</span>
                            </div>
                            <div className="text-secondary">{'}'};</div>
                        </div>
                    </div>
                    <div className="absolute inset-0 border border-accent/20 rounded-2xl transform -rotate-3 -z-10" />
                </motion.div>

            </div>
        </section>
    );
};
