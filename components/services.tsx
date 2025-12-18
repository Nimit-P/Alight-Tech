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
    <section className="py-24">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        {/* content unchanged */}
      </div>
    </section>
  );
};

export default Services;
