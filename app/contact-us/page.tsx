"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert("Thanks for contacting us! We will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Insightsoftware</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We'll help you find the right plan and pricing for your business.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Let's get you to the right place</h2>
                                <p className="text-muted-foreground text-lg">
                                    Reach out to our sales team! We’re eager to learn more about how you plan to use our application.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <ContactItem
                                    icon={<Mail className="h-6 w-6 text-blue-500" />}
                                    title="Email Us"
                                    content="sales@insightsoftware.com" // Placeholder or from source if available (source didn't show email)
                                />
                                <ContactItem
                                    icon={<Phone className="h-6 w-6 text-green-500" />}
                                    title="Call Us"
                                    content="+1 (555) 123-4567" // Placeholder
                                />
                                <ContactItem
                                    icon={<MapPin className="h-6 w-6 text-red-500" />}
                                    title="Visit Us"
                                    content="123 Innovation Drive, Tech City, TC 90210" // Placeholder
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>
                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                                    Send Message
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {icon}
        </div>
        <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground">{content}</p>
        </div>
    </div>
);
