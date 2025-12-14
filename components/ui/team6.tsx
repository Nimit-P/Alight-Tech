"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { HighlightTitle } from "../highlight-title";
export function Team6() {
const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Carter",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Emily Thompson",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David Martinez",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];

  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col items-center text-center gap-10 px-6">
        
<HighlightTitle className="text-center mb-10">
   Our Team
</HighlightTitle>

        {/* Heading */}
        <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
          Meet the people behind our success
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-muted-foreground md:text-lg">
          Our talented team works hard to bring you innovative digital solutions with excellence.
        </p>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-10 w-full">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-lg p-4 rounded-xl"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  width={200}
                  height={200}
                  className="object-cover"
                  alt={member.name}
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
