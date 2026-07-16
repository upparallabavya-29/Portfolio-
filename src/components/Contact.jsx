import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrors(prev => {
      const { submit, ...rest } = prev;
      return rest;
    });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // If no access key is configured, fallback to simulation and warn in console
      console.warn("VITE_WEB3FORMS_ACCESS_KEY is not defined in environment variables. Falling back to simulated submission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Celebrate successful message send
        confetti({
          particleCount: 50,
          spread: 40,
          origin: { y: 0.7 },
          colors: ['#06b6d4', '#14b8a6']
        });

        // Clear success banner after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
        })
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Celebrate successful message send
        confetti({
          particleCount: 50,
          spread: 40,
          origin: { y: 0.7 },
          colors: ['#06b6d4', '#14b8a6']
        });

        // Clear success banner after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setIsSubmitting(false);
      setErrors(prev => ({
        ...prev,
        submit: error.message || "Something went wrong. Please try again."
      }));
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">Connect</span>
          </h2>
          <div className="w-12 h-[3px] bg-accentCyan mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Feel free to reach out. I will respond to your messages as soon as possible.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Quick info widgets */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-display font-semibold text-white">Contact Info</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I am open to discuss internships, software roles, data analysis roles, or contract projects. Use the form or connect through other means.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email Card */}
              <div className="glass-card p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-accentCyan flex items-center justify-center shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase">Email Me</h4>
                    <p className="text-sm font-medium text-slate-300 truncate">bavyaupparalla@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("bavyaupparalla@gmail.com", "email")}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors duration-300"
                  title="Copy email"
                >
                  {emailCopied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-card p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-accentTeal flex items-center justify-center shrink-0">
                    <FaPhone />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase">Call Me</h4>
                    <p className="text-sm font-medium text-slate-300 truncate">8309274468</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("8309274468", "phone")}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors duration-300"
                  title="Copy phone number"
                >
                  {phoneCopied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-card p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-accentPurple flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase">Location</h4>
                  <p className="text-sm font-medium text-slate-300">Kurnool, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-3 glass-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-200 text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.name ? 'border-red-500/50 focus:ring-red-500' : 'border-slate-800 focus:border-accentCyan focus:ring-accentCyan'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-200 text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                      errors.email ? 'border-red-500/50 focus:ring-red-500' : 'border-slate-800 focus:border-accentCyan focus:ring-accentCyan'
                    }`}
                    placeholder="johndoe@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-200 text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                    errors.subject ? 'border-red-500/50 focus:ring-red-500' : 'border-slate-800 focus:border-accentCyan focus:ring-accentCyan'
                  }`}
                  placeholder="Internship / Job Inquiry"
                />
                {errors.subject && <p className="text-xs text-red-500 mt-1 font-medium">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-200 text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                    errors.message ? 'border-red-500/50 focus:ring-red-500' : 'border-slate-800 focus:border-accentCyan focus:ring-accentCyan'
                  }`}
                  placeholder="Write your message details..."
                />
                {errors.message && <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>}
              </div>

              {/* Success Banner */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold text-center"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {/* Error Banner */}
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold text-center"
                >
                  {errors.submit}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-accentCyan to-accentTeal text-darkBg font-semibold hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-darkBg border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
