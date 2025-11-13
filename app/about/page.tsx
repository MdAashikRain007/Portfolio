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
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-0">
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
          {/* Frontend */}
          <div className="about-content bg-white/10 rounded-xl p-6 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {/* HTML */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/html5/fff/ff5722" alt="HTML" className="w-8 h-8" />
              </div>
              {/* CSS */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/css3/fff/2965f1" alt="CSS" className="w-8 h-8" />
              </div>
              {/* Bootstrap */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/bootstrap/fff/7952b3" alt="Bootstrap" className="w-8 h-8" />
              </div>
              {/* Tailwind CSS */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/tailwindcss/fff/06b6d4" alt="Tailwind CSS" className="w-8 h-8" />
              </div>
              {/* JavaScript */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/javascript/fff/f7df1e" alt="JavaScript" className="w-8 h-8" />
              </div>
              {/* React */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/react/fff/61dafb" alt="React.js" className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="about-content bg-white/10 rounded-xl p-6 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
            <div className="flex flex-wrap gap-4">
              {/* Node.js */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/nodedotjs/fff/339933" alt="Node.js" className="w-8 h-8" />
              </div>
              {/* Express.js */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/express/fff/000000" alt="Express.js" className="w-8 h-8" />
              </div>
              {/* SQL */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/mysql/fff/4479a1" alt="SQL" className="w-8 h-8" />
              </div>
              {/* MongoDB */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/mongodb/fff/47a248" alt="MongoDB" className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="about-content bg-white/10 rounded-xl p-6 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
            <div className="flex flex-wrap gap-4">
              {/* Git */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/git/fff/f05032" alt="Git" className="w-8 h-8" />
              </div>
              {/* GitHub */}
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/github/fff/181717" alt="GitHub" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}