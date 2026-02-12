import Link from "next/link";
import { MoveRight, Zap, Target, Users, BookOpen } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-32 bg-gray-950 text-white">

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-blue-900/50 pointer-events-none"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-300 animate-in fade-in slide-in-from-bottom-5 duration-700">
                            Associate. Empower. Nurture. Grow.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                            Our strong workforce is our biggest strength! Join us and help in building a tech-empowered community for the world.
                        </p>
                        <div className="pt-10 flex justify-center gap-4 animate-in fade-in zoom-in duration-700 delay-300">
                            <Link href="/contact-us">
                                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-gray-900 px-8 py-4 text-base font-bold shadow-xl transition-all hover:bg-gray-100 hover:scale-105">
                                    View Openings
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / Culture grid (Implied by Grow Mode text) */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<Zap className="h-6 w-6 text-yellow-500" />}
                            title="Grow Mode"
                            description="We seek young and powerful individuals who are equally excited and curious."
                        />
                        <ValueCard
                            icon={<Target className="h-6 w-6 text-red-500" />}
                            title="Break Barriers"
                            description="Excited to break the barriers of stagnancy and adopt novel methodologies!"
                        />
                        <ValueCard
                            icon={<Users className="h-6 w-6 text-blue-500" />}
                            title="Community"
                            description="Join us and help in building a tech-empowered community for the world."
                        />
                        <ValueCard
                            icon={<BookOpen className="h-6 w-6 text-green-500" />}
                            title="Innovation"
                            description="Innovating through people, process, and technology."
                        />
                    </div>
                </div>
            </section>

            {/* Transform CTA - Consistent Footer CTA */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Let's discuss how we can help you modernize your technology infrastructure and accelerate your digital transformation journey.
                    </p>
                    <Link href="/contact-us">
                        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-white dark:bg-black flex items-center justify-center shadow-sm mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);
