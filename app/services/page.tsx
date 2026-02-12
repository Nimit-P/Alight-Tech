import Link from "next/link";
import { MoveRight, Database, Cloud, Layers, Briefcase } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Qualified DevelopmentResources. At a Click!
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Developing innovative and revolutionary business solutions is our
                            passion! From data modernization to IT staffing, you can depend on
                            Insightsoftware for the most valued solutions.
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

            {/* Services Grid */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Service 1 */}
                        <ServiceCard
                            title="Data Asset Modernization"
                            description="We help organizations modernize their data infrastructure and analytics capabilities. Our expert consultants implement secure, scalable, and effectively managed data assets while ensuring accessibility to stakeholders. We ensure democratization of data to create a trusted, secure, and effectively managed data asset while potentially available to the right people at the right time."
                            link="/services/data-asset-modernization"
                            icon={<Database className="h-8 w-8 text-purple-500" />}
                            color="bg-purple-50 dark:bg-purple-900/10"
                        />

                        {/* Service 2 */}
                        <ServiceCard
                            title="Cloud Migration"
                            description="Migration to the cloud has become a key enabler for companies looking to achieve digital transformations. We collaborate with you, understand your requirements, and create the perfect cloud strategy by leveraging our rich experience with latest technologies."
                            link="/services/cloud-migration"
                            icon={<Cloud className="h-8 w-8 text-sky-500" />}
                            color="bg-sky-50 dark:bg-sky-900/10"
                        />

                        {/* Service 3 */}
                        <ServiceCard
                            title="Application Modernization"
                            description="Migrate your applications to a cloud and standards-based infrastructure with minimal disruption and conflict as our team will assist you in reducing capital spends for cloud strategic and manage governance advanced through enhanced modernization technology."
                            link="/services/application-modernization"
                            icon={<Layers className="h-8 w-8 text-green-500" />}
                            color="bg-green-50 dark:bg-green-900/10"
                        />

                        {/* Service 4 */}
                        <ServiceCard
                            title="Professional Services"
                            description="Standing out from talent can be like finding a gem in the desert! If you think about developing new or consulting us on how to help you with our development and consulting services also that, we are more than capable of providing complete and comprehensive services to let."
                            link="/services/professional-services"
                            icon={<Briefcase className="h-8 w-8 text-rose-500" />}
                            color="bg-rose-50 dark:bg-rose-900/10"
                        />
                    </div>
                </div>
            </section>

            {/* Career CTA */}
            <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-6 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Career with Insightsoftware</h2>
                    <p className="text-lg max-w-2xl mx-auto text-gray-300">
                        We always keep our 'GROW MODE' on! We seek young and powerful individuals who are equally excited and curious to break the barriers of stagnancy and adopt novel methodologies!
                    </p>
                    <Link href="/careers">
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all">
                            Join Our Team
                        </button>
                    </Link>
                </div>
            </section>

            {/* Transform CTA - Consistent Footer CTA */}
            <section className="py-24 bg-blue-50 dark:bg-gray-900">
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

const ServiceCard = ({ title, description, link, icon, color }: { title: string, description: string, link: string, icon: React.ReactNode, color: string }) => (
    <div className={`group p-8 rounded-3xl ${color} border border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-all hover:shadow-xl`}>
        <div className="bg-white dark:bg-black w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
            {description}
        </p>
        <Link href={link} className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
            Learn More <MoveRight className="ml-2 h-4 w-4" />
        </Link>
    </div>
);
