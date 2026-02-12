import Link from "next/link";
import { CheckCircle2, MoveRight } from "lucide-react";

export default function ApplicationModernizationPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-950">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6">
                        Application Modernization
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Migrate your applications to an ethical and standards-based environment with minimal disruptions!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            The IT landscape has transformed extensively over the years. Relying on traditional legacy systems can be a deterrent to the growth structure of any organization. Updating the existing legacy applications is the need of the hour. Application modernization does just that. Instead of developing or deploying a new legacy application, upgrading the existing one proves to be beneficial and consumes less time. These benefits are enough to convince any company to invest in application modernization services.
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why choose application modernization?</h2>
                        <p>
                            Application modernization assists companies and firms in restructuring their legacy applications to align with the cloud environment. Furthermore, it also offers advantages like scalability, agility, and affordability.
                        </p>
                        <div className="p-6 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800 rounded-xl">
                            <p className="font-semibold text-green-900 dark:text-green-100">
                                Using outdated legacy applications can hinder the overall productivity of an organization. With application modernization, the legacy application gets a new and refreshed user interface, expansive functionalities, and cutting-edge features, eventually enhancing productivity and boosting revenues.
                            </p>
                        </div>
                        <p>
                            Lastly, when you choose Insightsoftware, you are opting for the best application modernization services! We develop, manage, and modernize applications with enhanced security across hybrid cloud environments.
                        </p>
                    </div>

                    {/* Benefits Sidebar */}
                    <div className="lg:sticky lg:top-24 space-y-8 p-8 bg-gray-50 dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800">
                        <h3 className="text-2xl font-bold mb-6">Application Modernization Benefits</h3>
                        <p className="text-muted-foreground mb-8">Modernize your applications for improved performance, scalability, and user experience</p>

                        <BenefitItem title="Mobile Ready" desc="Responsive design for seamless mobile experiences" />
                        <BenefitItem title="Global Reach" desc="Deploy applications globally with cloud infrastructure" />
                        <BenefitItem title="Microservices" desc="Modular architecture for better maintainability" />
                        <BenefitItem title="Agile Updates" desc="Faster deployment cycles and continuous integration" />

                        <div className="pt-8">
                            <Link href="/contact-us">
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/25 flex items-center justify-center gap-2">
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
            <section className="py-24 bg-green-50 dark:bg-gray-900">
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
            <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
        <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100">{title}</h4>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    </div>
);
