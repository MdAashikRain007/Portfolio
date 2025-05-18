"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out"
      });

      // Projects section animation
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1
      });

      // Achievements animation
      gsap.from(".achievement-card", {
        scrollTrigger: {
          trigger: achievementsRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.8,
        duration: 1
      });

      // About section animation
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Md Aashik Rain
          </h1>
          <p className="text-2xl mb-8 text-gray-300">MERN Stack Developer</p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <a href="/Md-Aashik-CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black text-white border border-white hover:bg-white hover:text-black transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project cards with class for GSAP animation */}
            <div className="project-card bg-white/10 rounded-xl p-6 backdrop-blur-lg">
              <div className="relative h-48 md:h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/tourism.png"
                  alt="bhpaol-tourism"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Bhopal Tourism</h3>
              <p className="text-gray-300 mb-6">
                Bhopal Tourism is a digital guide designed to showcase the rich heritage, iconic landmarks, and natural beauty of Bhopal, the "City of Lakes." It highlights major attractions like Upper and Lower Lakes, Sanchi Stupa, Taj-ul-Masajid, and Van Vihar, along with local culture, cuisine, and festivals. The project aims to promote tourism through an engaging and informative platform.
              </p>
              <Button className="w-full bg-white text-black border border-white hover:bg-black hover:text-white transition-colors" asChild>
                <Link href="https://bhopal-tourism.onrender.com/">View Project</Link>
              </Button>
            </div>

            <div className="project-card bg-white/10 rounded-xl p-6 backdrop-blur-lg">
              <div className="relative h-48 md:h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/wanderlust.png"
                  alt="wanderlust"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Wanderlust</h3>
              <p className="text-gray-300 mb-6">
                Wanderlust is a travel stay booking platform inspired by Airbnb, built using the MVC architecture. It includes key features like secure login/signup, listing management, booking system, reviews and ratings, and strong security measures (password hashing, input validation, etc.). Designed for both hosts and travelers, it offers a smooth, responsive, and user-friendly experience across all devices.
              </p>
              <Button className="w-full bg-white text-black border border-white hover:bg-black hover:text-white transition-colors" asChild>
                <Link href="https://wanderlust-d0ky.onrender.com/listings">View Project</Link>
              </Button>
            </div>
            <div className="project-card bg-white/10 rounded-xl p-6 backdrop-blur-lg">
              <div className="relative h-48 md:h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/youtube.jpg"
                  alt="youtube Clone"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Youtube Clone</h3>
              <p className="text-gray-300 mb-6">
                This YouTube Clone is a video streaming platform with a clean, responsive UI/UX that mimics the core functionality of YouTube. It includes features like video playback, user-friendly navigation, and a smart video suggestion system based on user interest. Designed with a focus on smooth interaction and visual clarity, the project delivers an engaging viewing experience.
              </p>
              <Button className="w-full bg-white text-black border border-white hover:bg-black hover:text-white transition-colors" asChild>
                <Link href="https://github.com/MdAashikRain007/Youtube-Clone">View Project</Link>
              </Button>
            </div>

            <div className="project-card bg-white/10 rounded-xl p-6 backdrop-blur-lg">
              <div className="relative h-48 md:h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/weather.jpg"
                  alt="Weather app"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Weather App</h3>
              <p className="text-gray-300 mb-6">
                The Weather App is a responsive and user-friendly application that provides real-time weather updates using a weather API. It features a clean and modern UI/UX with a dynamic search function, allowing users to get accurate weather information for any city worldwide. Key data includes temperature, humidity, wind speed, and weather conditions, all presented in an intuitive and visually appealing interface.
              </p>
              <Button className="w-full bg-white text-black border border-white hover:bg-black hover:text-white transition-colors" asChild>
                <Link href="https://github.com/MdAashikRain007/weather-app">View Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} id="achievements" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Achievements</h2>
          <div className="achievement-card max-w-4xl mx-auto bg-white/10 rounded-xl overflow-hidden backdrop-blur-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[250px] p-5">
                <Image
                  src="/image.jpg"
                  alt="NPTEL Certificate"
                  width={500} // Adjust as needed
                  height={250}


                  className="object-cover rounded"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">NPTEL Core Java Certification</h3>
                <p className="text-gray-300 mb-6">
                  Successfully completed the comprehensive Core Java course with distinction, demonstrating expertise in Java programming concepts and best practices.
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Advanced Java Concepts</li>
                  <li>• Object-Oriented Programming</li>
                  <li>• Data Structures</li>
                  <li>• Algorithm Design</li>
                </ul>
                {/* <Button className="w-full">View Certificate</Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="about-content max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-xl text-gray-300 mb-12">
              I am a passionate Full Stack Developer with a strong foundation in modern web technologies.
              My journey in software development has been driven by a desire to create impactful digital solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• HTML</li>
                  <li>• CSS</li>
                  <li>• Bootstrp</li>
                  <li>• Tailwind CSS</li>
                  <li>• JavaScript</li>
                  <li>• React.js</li>
                  <li>• Node.js</li>
                  <li>• Express.js</li>
                  <li>• SQL</li>
                  <li>• MongoDB</li>
                  <li>• Python</li>
                  <li>• Java</li>
                  <li>• Data Structures and Algorithms </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• BCA Bachelor of Computer Applications</li>
                  <li>• MERN Stack Development </li>
                  {/* <li>• AWS Certified Developer</li>
                  <li>• Google Cloud Certified</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-8">
              <motion.a
                href="https://github.com/MdAashikRain007"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/md-aashik-rain-61379530b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </motion.a>
              {/* <motion.a
                href="https://twitter.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TwitterIcon className="h-6 w-6" />
              </motion.a> */}
            </div>
            <p className="text-gray-500 text-center">
              © 2025 Md Aashik Rain. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}