"use client";

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        opacity: 0,
        y: 50,
        duration: 1
      });

      gsap.from(".contact-form", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5
      });

      gsap.from(".contact-info", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: 0.8
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="contact-form bg-white/10 rounded-xl p-8 backdrop-blur-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>

          <div className="contact-info space-y-8">
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
               
                {/* <p>Twitter: @mdaashikrain</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}