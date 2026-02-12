import Link from "next/link";
import { CheckCircle2, MoveRight } from "lucide-react";

export default function ProfessionalServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/20 dark:to-gray-950">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-6">
                        Professional Services
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        With flexible partnership models, recruiting the perfect individuals for you is a cakewalk for us!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            The demand for skilled IT labor has multiplied rapidly over the years. Staffing demands continue to change at an accelerated pace. It is difficult for any company to keep up with the ever-evolving staffing demand. This is where professional IT staffing solutions come into the picture. Many employers are turning towards IT staffing solution providers as the process is time-consuming and complex for them. IT support staffing specialists like Insightsoftware consulting can fill in the void of talented individuals. This factor can help in meeting your long-term goals.
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why choose IT staffing services?</h2>
                        <p>
                            When you, as an employer, hire through an IT staffing company, be rest assured about the candidates. You pay them for the skills that are required and it also reduces the chances of a ‘bad hire’, eventually leading to high savings.
                        </p>
                        <div className="p-6 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800 rounded-xl">
                            <p className="font-semibold text-rose-900 dark:text-rose-100">
                                Insightsoftware Consulting has the best pool of talented individuals who can prove to be an asset to your organization. We have a systematic approach for selecting and recruiting candidates who can help in adding value to your organization!
                            </p>
                        </div>
                    </div>

                    {/* Benefits Sidebar */}
                    <div className="lg:sticky lg:top-24 space-y-8 p-8 bg-gray-50 dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800">
                        <h3 className="text-2xl font-bold mb-6">Professional Services Benefits</h3>
                        <p className="text-muted-foreground mb-8">Expert consulting and development services to accelerate your digital transformation</p>

                        <BenefitItem title="Expert Team" desc="Skilled professionals with industry expertise" />
                        <BenefitItem title="Time Efficient" desc="Faster project delivery with proven methodologies" />
                        <BenefitItem title="Quality Assured" desc="High-quality deliverables with rigorous testing" />
                        <BenefitItem title="Targeted Solutions" desc="Customized solutions aligned with business goals" />

                        <div className="pt-8">
                            <Link href="/contact-us">
                                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2">
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
            <section className="py-24 bg-rose-50 dark:bg-gray-900">
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
            <CheckCircle2 className="h-6 w-6 text-rose-600" />
        </div>
        <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100">{title}</h4>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    </div>
);
