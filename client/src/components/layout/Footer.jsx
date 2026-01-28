import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-off-black border-t border-subtle-gray py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-secondary mb-4">
                    Designed & Built with <span className="text-accent">React</span>, <span className="text-accent">Tailwind</span> & <span className="text-accent">Express</span>.
                </p>
                <div className="text-sm text-muted">
                    © {new Date().getFullYear()} Senior Engineer Portfolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
