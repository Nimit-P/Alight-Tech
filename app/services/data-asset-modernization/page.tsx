import Link from "next/link";
import { CheckCircle2, MoveRight } from "lucide-react";

export default function DataAssetModernizationPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-950">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
                        Data Asset Modernization
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        We visualize building a next-gen powerful data asset to offer a robust and faster tomorrow for the stakeholders!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            In today’s era, data is really the new oil! Infinite amount of data is generated every minute in countless formats. With so much data scattered all over, many companies are unable to utilize the data in a proper manner. Modernizing data is all about extending, retaining, and reusing the information under these layers. It involves creating a scalable and flexible data stack without much complexities and restrictions.
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why should you modernize your data?</h2>
                        <p>
                            Data asset modernization is the key to enable enhanced compliance. In addition, it also assures cost-efficiency and the potential to enlighten the stakeholders with extensive business insights and revolutionary analytics capabilities.
                        </p>
                        <div className="p-6 bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800 rounded-xl">
                            <p className="font-semibold text-purple-900 dark:text-purple-100">
                                With the latest data readily available with the help of data asset modernization, many companies can quickly adapt to the rapidly changing market and outsmart their rivals with ease.
                            </p>
                        </div>
                        <p>
                            Many companies are revamping their data environment in response to the wide changes in the data landscape. Making the most of the available data is also a critical component to success.
                        </p>
                    </div>

                    {/* Benefits Sidebar */}
                    <div className="lg:sticky lg:top-24 space-y-8 p-8 bg-gray-50 dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800">
                        <h3 className="text-2xl font-bold mb-6">Data Modernization Benefits</h3>
                        <p className="text-muted-foreground mb-8">Transform your data infrastructure for better insights and competitive advantage</p>

                        <BenefitItem title="Centralized Data" desc="Unified data repository for better accessibility and management" />
                        <BenefitItem title="Advanced Analytics" desc="Real-time insights and predictive analytics capabilities" />
                        <BenefitItem title="Data Security" desc="Enhanced data protection and compliance standards" />
                        <BenefitItem title="Faster Processing" desc="Improved data processing speed and performance" />

                        <div className="pt-8">
                            <Link href="/contact-us">
                                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2">
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
            <section className="py-24 bg-purple-50 dark:bg-gray-900">
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
            <CheckCircle2 className="h-6 w-6 text-purple-600" />
        </div>
        <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100">{title}</h4>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    </div>
);
