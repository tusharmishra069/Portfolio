"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // EmailJS service ID
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // EmailJS template ID
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                time: new Date().toLocaleString(),
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // EmailJS user ID (public key)
        )
            .then(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((error) => {
                alert('Failed to send message. Please try again later.');
                console.error('EmailJS error:', error);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-16 font-sans relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" /> */}

            <div className="max-w-7xl mx-auto pt-10 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Get in Touch
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-neutral-800/50 border border-neutral-700 text-white rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Email</p>
                                        <a
                                            href="mailto:tusharmishra069@gmail.com"
                                            className="text-white text-lg hover:text-blue-400 transition-colors"
                                        >
                                            tusharmishra069@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-neutral-800/50 border border-neutral-700 text-white rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Phone</p>
                                        <a
                                            href="tel:+917488906709"
                                            className="text-white text-lg hover:text-green-400 transition-colors"
                                        >
                                            +91-7488906709
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-neutral-800/50 border border-neutral-700 text-white rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Location</p>
                                        <p className="text-white text-lg">Bhilai, Chhattisgarh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6">Connect across platforms</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/tushar-kumar-mishra-1974b124b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-neutral-800/50 border border-neutral-700 rounded-2xl flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] text-gray-400 transition-all duration-300"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://github.com/tusharmishra069"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-neutral-800/50 border border-neutral-700 rounded-2xl flex items-center justify-center hover:bg-white hover:text-black hover:border-white text-gray-400 transition-all duration-300"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://x.com/TusharMishra069"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 bg-neutral-800/50 border border-neutral-700 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white hover:border-black text-gray-400 transition-all duration-300"
                                >
                                    <Twitter size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className=" backdrop-blur-md border border-neutral-800 rounded-3xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-transparent border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-transparent border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-transparent border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none transition-all"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white hover:bg-neutral-200 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                            >
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <p className="text-gray-500 text-xs mt-6 text-center">
                            By submitting this form, you agree to our{' '}
                            <a href="#" className="text-gray-400 hover:text-white underline transition-colors">
                                privacy policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
