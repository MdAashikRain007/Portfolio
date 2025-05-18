"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", { opacity: 0, y: 50, duration: 1 });
      gsap.from(".contact-info", { opacity: 0, x: 30, duration: 0.8, delay: 0.8 });
    }, containerRef);
    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24">
      <div className="container mx-auto px-4">
        <div className="contact-header text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
        </div>
        {/* Center the contact-info box */}
        <div className="flex justify-center">
          <div className="contact-info space-y-8 max-w-md w-full">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>Email: aashikmd2256@gmail.com</p>
                <p>Location: Bhopal, India</p>
                <p>Available for: Freelance, Full-time opportunities</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
              <div className="space-y-4 text-gray-300">
                <p>LinkedIn: /in/md-aashik-rain-007</p>
                <p>GitHub: MdAashikRain007</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 bg-black text-white border border-white rounded-full px-6 py-3 shadow-lg hover:bg-white hover:text-black transition-colors"
        style={{ textDecoration: "none" }}
      >
        Contact
      </a>
    </div>
  );
}
