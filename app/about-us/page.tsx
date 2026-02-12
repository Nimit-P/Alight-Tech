import TeamSection from "@/components/ui/team-section";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Introduction Section */}
            <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 animate-in fade-in slide-in-from-bottom-5 duration-700">
                            Connectors of Innovation and Technology!
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                            Our customer-centric approach and experience in adopting and
                            transforming modernization programs for enterprises makes us one
                            of the pioneers in the technology modernization sector!
                        </p>
                        <div className="pt-8">
                            <Link href="/contact-us">
                                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-1">
                                    Get In Touch
                                    <MoveRight className="h-5 w-5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exceptional Services Section */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                                Exceptional Services. Outstanding Performance!
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                                <p>
                                    Our talented workforce always strives to deliver superior and
                                    excellent technical solutions through a customer-centric
                                    approach! With rich experience in technology development, we are
                                    always committed to offer complete satisfaction to our clients.
                                    We also provide customized solutions according to the
                                    requirement of the clients!
                                </p>
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                                <div className="w-full h-full rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 dark:bg-black/50 grid place-items-center">
                                    {/* Placeholder visual */}
                                    <div className="flex flex-col gap-4 items-center text-center p-6">
                                        <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                            <span className="text-2xl">⚡</span>
                                        </div>
                                        <h3 className="text-xl font-bold">High Performance</h3>
                                        <p className="text-sm text-gray-500">Delivering excellence in every project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-24 bg-slate-50 dark:bg-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-8 bg-white dark:bg-zinc-900 p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800">
                        <h2 className="text-3xl md:text-5xl font-bold">Our Vision</h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            We envision a world where technology is accessible to all and void
                            of any barriers. We have a vision of creating a community of
                            intelligent like-minded individuals who will empower numerous
                            stakeholders in various industries to adopt latest technological
                            innovations!
                        </p>
                    </div>
                </div>
            </section>

            {/* Clients Industries Section */}
            <section id="clients" className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                        Clients Industries
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <IndustryCard
                            title="Transportation & Logistics"
                            description="Cost-efficient solutions for great operational efficiency!"
                            icon="🚚"
                            color="text-orange-500"
                            bg="bg-orange-50 dark:bg-orange-950/20"
                        />
                        <IndustryCard
                            title="Financial Services"
                            description="Better data management and advanced scalability"
                            icon="💰"
                            color="text-green-500"
                            bg="bg-green-50 dark:bg-green-950/20"
                        />
                        <IndustryCard
                            title="Healthcare"
                            description="Integrating health with technology!"
                            icon="🏥"
                            color="text-blue-500"
                            bg="bg-blue-50 dark:bg-blue-950/20"
                        />
                        <IndustryCard
                            title="Public Sector" // Capitalized
                            description="Accommodate community needs through better operability!"
                            icon="🏛️"
                            color="text-purple-500"
                            bg="bg-purple-50 dark:bg-purple-950/20"
                        />
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <div id="team">
                <TeamSection />
            </div>

            {/* Career CTA */}
            <section className="py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Career with Insightsoftware</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8 text-blue-100">
                        We always keep our 'GROW MODE' on! We seek young and powerful
                        individuals who are equally excited and curious to break the
                        barriers of stagnancy and adopt novel methodologies!
                    </p>
                    <Link href="/careers">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all">
                            Join Our Team
                        </button>
                    </Link>
                </div>
            </section>

            {/* Ready to Transform CTA */}
            <section className="py-24 bg-gray-50 dark:bg-black">
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

const IndustryCard = ({ title, description, icon, color, bg }: { title: string, description: string, icon: string, color: string, bg: string }) => (
    <div className={`p-8 rounded-2xl ${bg} hover:shadow-lg transition-all border border-transparent hover:border-gray-200 dark:hover:border-gray-800`}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className={`text-xl font-bold mb-3 ${color}`}>{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);
