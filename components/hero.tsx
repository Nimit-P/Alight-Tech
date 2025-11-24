import CardSwap, { Card } from "@/components/CardSwap"
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-full w-[95%] flex items-center justify-center p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        
        <div className="text-accent-foreground space-y-3 border flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-6xl font-bold leading-12 md:leading-tight">
            Simplifying Modernization
          </h1> 
          <p className="text-xl text-gray-400">
            Our tailored, experience-focused solutions span a diverse range of services. We enable organizations to achieve measurable transformation and accelerate success by nearly 80%.
          </p>
        </div>

        <div className="relative" style={{ height: '450px' }}>
          <CardSwap
            cardDistance={40}
            verticalDistance={40}
            delay={3500}
            skewAmount={4}
            easing="elastic"
          >

            <Card>
                    <Image src="/image-5.jpg" alt="image-1" width={500} height={500} className="object-cover rounded-xl "/>
            </Card>

            <Card>
                  <Image src="/image-2.jpg" alt="image-3  " width={500} height={500} className="object-cover rounded-xl"/>
            </Card>

            <Card>
                  <Image src="/image-1.jpg" alt="image-3" width={500} height={500} className="object-cover rounded-xl"/>
            </Card>
         </CardSwap>

        </div>

      </div>
    </div>
  );
}