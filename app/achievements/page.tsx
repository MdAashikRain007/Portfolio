"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achievements-header", {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from(".achievement-card", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".achievement-card",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24">
      <div className="container mx-auto px-4">
        {/* Achievements Header */}
        <div className="achievements-header text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Achievements</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my certifications, awards, and professional accomplishments.
          </p>
        </div>

        {/* Achievements List */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {/* NPTEL Certificate */}
          <div className="achievement-card bg-white/10 rounded-xl overflow-hidden backdrop-blur-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[300px] p-4">
                <Image
                  src="/image.jpg" // Corrected path
                  alt="NPTEL Certificate"
                  width={500} // Adjust as needed
                  height={350}
                  className="object-cover rounded "
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">NPTEL Core Java Certification</h3>
                <p className="text-gray-300 mb-6">
                  Achieved excellence in the comprehensive Core Java programming course,
                  demonstrating proficiency in advanced Java concepts and best practices.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Score: 95%</li>
                  <li>• Top 5% of participants</li>
                  <li>• Advanced concepts mastery</li>
                  <li>• Practical project completion</li>
                </ul>
                {/* <Button className="w-full">View Certificate</Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
