import React from 'react';
import { Card, CardContent } from '@/components/common/Card';
import { motion } from 'framer-motion';

export const About = () => {
    const stats = [
        { label: 'Years Experience', value: '5+' },
        { label: 'Projects Shipped', value: '50+' },
        { label: 'Happy Clients', value: '20+' },
    ];

    return (
        <section id="about" className="py-24 bg-rich-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Image / Avatar Area */}
                    <div className="relative">
                        <div className="aspect-square bg-off-black rounded-3xl overflow-hidden border border-subtle-gray grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder for user image */}
                            <div className="w-full h-full flex items-center justify-center text-secondary bg-subtle-gray/10">
                                [Profile Image Placeholder]
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            More than just code. <br />
                            <span className="text-secondary">I build digital experiences.</span>
                        </h2>
                        <p className="text-lg text-secondary mb-6 leading-relaxed">
                            I started my journey exploring the command line, eventually falling in love with the infinite possibilities of the web. Today, I create robust architectures that scale.
                        </p>
                        <p className="text-lg text-secondary mb-8 leading-relaxed">
                            My philosophy is simple: **User Experience First**. Whether it's optimizing API response times or crafting buttery smooth 60fps animations, the end user is always the priority.
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="border-l-2 border-accent pl-4">
                                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-sm text-secondary">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
