import Link from "next/link";
import { CheckCircle2, MoveRight } from "lucide-react";

export default function CloudMigrationPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-sky-50 to-white dark:from-sky-950/20 dark:to-gray-950">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600 mb-6">
                        Cloud Migration
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        We understand your requirements and create the perfect cloud strategy by blending our rich experience with the latest technology!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Cloud migration is a process through which a company's digital resources, services, and assets are deployed in the cloud. With excellent features and an array of benefits for a business, the cloud computing trend has seen exponential growth in the recent years.
                        </p>
                        <p>
                            Through our outstanding cloud migration services, we help you in determining the approach that work best for your organization to meet the business goals.
                        </p>
                        <p>
                            Furthermore, COVID-19 has prompted many companies to evolve from just a 'business' to a cloud business at an accelerated pace. With the emergence of the pandemic, companies shifted to a remote working environment, which necessitated the use of cloud to a great extent. This aspect is urging many companies to embrace cloud migration services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why opt for Insightsoftware cloud migration services?</h2>
                        <div className="p-6 bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-800 rounded-xl">
                            <p className="font-semibold text-sky-900 dark:text-sky-100">
                                Through storing the business information and data centrally, the cloud offers robust security as compared to traditional data centers. Furthermore, we also provide built-in security features such as periodic updates, security analytics, and cross-enterprise visibility.
                            </p>
                        </div>
                    </div>

                    {/* Benefits Sidebar */}
                    <div className="lg:sticky lg:top-24 space-y-8 p-8 bg-gray-50 dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800">
                        <h3 className="text-2xl font-bold mb-6">Cloud Migration Benefits</h3>
                        <p className="text-muted-foreground mb-8">Discover the advantages of migrating your infrastructure to the cloud</p>

                        <BenefitItem title="Enhanced Security" desc="Robust security features and compliance standards" />
                        <BenefitItem title="Scalability" desc="Scale resources up or down based on demand" />
                        <BenefitItem title="Cost Efficiency" desc="Reduce infrastructure costs and maintenance" />
                        <BenefitItem title="Accessibility" desc="Access data and applications from anywhere" />

                        <div className="pt-8">
                            <Link href="/contact-us">
                                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2">
                                    Get Started
                                    <MoveRight className="h-4 w-4" />
                                </button>
                            </Link>
                        </div>
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

            {/* Transform CTA */}
            <section className="py-24 bg-sky-50 dark:bg-gray-900">
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

const BenefitItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex gap-4 items-start">
        <div className="mt-1">
            <CheckCircle2 className="h-6 w-6 text-sky-600" />
        </div>
        <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100">{title}</h4>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    </div>
);
