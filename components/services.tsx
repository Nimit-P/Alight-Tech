import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
//import { Button } from "./ui/moving-border";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface servicesProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const Services = ({
  heading = "Services",
  description = "A wide range of customized and expert services for stakeholders who believe in achieving the best!",
  buttonText = "View all Services",
  buttonUrl = "#",
  posts = [
    {
      id: "dam",
      title: "Data Asset Modernization",
      summary:
        "Creating data solutions that are real-time, high-speed, agile, and scalable!",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "#",
      image: "/image-2.jpg",
    },
    {
      id: "cm",
      title: "Cloud Migration",
      summary:
        "Minimum resources and expenditures, Maximum output and productivity!",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "#",
      image: "/cloud2.jpg",
    },
    {
      id: "am",
      title: "Application Modernization",
      summary:
        "Recalibrating application landscapes to emerge as responsive and resilient at enterprise scale!",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "#",
      image: "/image-5.jpg",
    },
    {
      id: "ps",
      title: "Professional Services",
      summary:
        "Hassle-free and cost-effective IT staffing solutions to break the barriers of unproductivity!",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "#",
      image: "/image-1.jpg",
    },
  ],
}: servicesProps) => {
  return (
    <section className="py-25">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>

          <p className="text-muted-foreground mb-8 md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>

          <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mt- text-lg font-medium group">
            Learn More
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg rounded-lg"
            >
              <div className="w-full overflow-hidden rounded-t-lg">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <div className="aspect-[16/9] w-full relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </a>
              </div>

              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank" rel="noreferrer">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>

              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground flex items-center hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };
