"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-header",
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(".about-content", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24">
      <div className="container mx-auto px-4">
        <div className="about-header text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative web solutions and delivering exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="about-content">
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-lg">
              <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
              <p className="text-gray-300 mb-6">
                A passionate BCA student with a strong foundation in Core Java,
                data structures, and problem-solving. Completed the NPTEL Core
                Java Programming certification, organized by IIT Kharagpur.
                Skilled in web development technologies including HTML, CSS,
                JavaScript, React, and Bootstrap, along with basic knowledge of
                Python. Committed to continuous learning and excited to grow in
                the field of software and web development.
              </p>
              {/* <ul className="text-gray-300 space-y-2">
                <li>• 5+ years of professional experience</li>
                <li>• Worked with 20+ clients worldwide</li>
                <li>• Delivered 30+ successful projects</li>
                <li>• Mentored junior developers</li>
              </ul> */}
            </div>
          </div>

          <div className="about-content relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="about-content bg-white/10 rounded-xl p-6 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• Bootstrap</li>
              <li>• JavaScript</li> 
              <li>• React.js</li>
              <li>• Java</li>
              <li>• Data Structures and Algorithms </li>
              {/* <li>• SQL</li> */}
            </ul>
          </div>

          <div className="about-content bg-white/10 rounded-xl p-6 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• MongoDB</li>
              <li>• SQL</li>
            </ul>
          </div>

          <div className="about-content bg-white/10 rounded-xl p-6 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Git</li>
              <li>• Git-Hub</li>
              {/* <li>• Docker</li> */}
              {/* <li>• AWS</li>
              <li>• CI/CD</li>
              <li>• Agile/Scrum</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}