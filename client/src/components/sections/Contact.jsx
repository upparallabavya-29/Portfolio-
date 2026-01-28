import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import { Input, Textarea } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using a relative URL - assuming proxy is set in vite.config or full URL in env
            const res = await fetch('http://localhost:5000/api/v1/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Failed to send message');

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again later.');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-rich-black relative">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Let's Connect</h2>
                        <p className="text-secondary text-lg">
                            Interested in working together or have a question? I'm always open to discussing new opportunities.
                        </p>
                    </div>

                    <Card className="bg-off-black border-subtle-gray">
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        placeholder="Hello, I'd like to discuss..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <Button
                                    className="w-full"
                                    size="lg"
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                >
                                    {status === 'loading' ? (
                                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                                    ) : status === 'success' ? (
                                        <><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Sent Successfully</>
                                    ) : (
                                        <><Send className="mr-2 h-4 w-4" /> Send Message</>
                                    )}
                                </Button>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm flex items-center justify-center mt-2">
                                        <AlertCircle className="w-4 h-4 mr-1" /> {errorMessage}
                                    </p>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};
