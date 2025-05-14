'use client'; // Required for GSAP animations and event handlers

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Head from 'next/head'; 

gsap.registerPlugin(ScrollTrigger);

import AboutSection from '@/components/aboutme';
import ProjectsSection from '@/components/projects';
import WorkExperienceSection from '@/components/work';

const ResumeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5d6d7e" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
  </svg>
);



export default function HomePage() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate name
    if (nameRef.current) {
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo' }
      );
    }

    // Animate title
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      );
    }

    // Animate social links
    if (linksRef.current) {
      tl.fromTo(
        linksRef.current.children,
        { opacity: 0, scale: 0.5, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=0.3'
      );
    }

    const scrollToSectionWithOffset = (sectionId: string) => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // 20px padding

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    // --- Check for URL hash on initial load and after navigation ---
    const handleHashChange = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.substring(1); // Remove #
        if (hash) {
          // Delay slightly to ensure DOM is ready and layout is stable
          setTimeout(() => scrollToSectionWithOffset(hash), 100);
        }
      }
    };

    // Initial check
    handleHashChange();
  }, []);

  // Add this style object for the animated gradient text
  const animatedGradientStyle = {
    background: 'linear-gradient(to right, #38bdf8, #818cf8, #c084fc, #e879f9, #38bdf8)',
    backgroundSize: '200% auto',
    animation: 'gradientShift 7s ease infinite',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  // Add this for the keyframes animation
  useEffect(() => {
    // Add keyframes animation to document if it doesn't exist
    if (!document.querySelector('#gradient-animation-style')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'gradient-animation-style';
      styleEl.innerHTML = `
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(styleEl);
    }
  }, []);

  return (
    <>
      {/* This Head component is for the browser tab title and meta description */}
      <Head>
        <title>Ryan Chen - NUS CS</title>
        <meta name="description" content="Ryan Chen's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-8 antialiased">
        <div className="text-center">
            <h1 ref={nameRef} className="text-5xl md:text-7xl font-bold mb-3 pb-3 opacity-0 brightness-90">
            Ryan Chen
            </h1>
            <p 
              ref={titleRef} 
              className="text-xl md:text-2xl mb-10 opacity-0"
              style={animatedGradientStyle}
            >
              Y3 Computer Science Student at
              <br className="sm:hidden"/> {/* Break line on small screens for better layout */}
              <span className="block sm:inline">the National University of Singapore</span>
            </p>

          <div ref={linksRef} className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <a
              href="files/resume.pdf" // Resume
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-all duration-300 flex items-center space-x-2 group w-full sm:w-auto justify-center sm:justify-start"
              aria-label="Resume"
            >
              <ResumeIcon />
              <span className="group-hover:underline transition-all duration-200 hover:scale-105">My Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ryanno3o/" // LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-all duration-300 flex items-center space-x-2 group w-full sm:w-auto justify-center sm:justify-start"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
              <span className="group-hover:underline transition-all duration-200 hover:scale-105">LinkedIn</span>
            </a>
            <a
              href="https://github.com/bipplane" // GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-all duration-300 flex items-center space-x-2 group w-full sm:w-auto justify-center sm:justify-start"
              aria-label="GitHub Profile"
            >
              <GithubIcon />
              <span className="group-hover:underline transition-all duration-200 hover:scale-105">GitHub</span>
            </a>
            <a
              href="mailto:ryanchen@live.com.sg" // Email
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-all duration-300 flex items-center space-x-2 group w-full sm:w-auto justify-center sm:justify-start"
              aria-label="Email Address"
            >
              <EmailIcon />
              <span className="group-hover:underline transition-all duration-200 hover:scale-105">Email Me!</span>
            </a>
          </div>
        </div>
      </section>
      <div className="w-full h-1.5 bg-gradient-to-r from-sky-500 to-fuchsia-400"></div>
      <AboutSection/>

      <div className="w-full h-1.5 bg-gradient-to-r from-sky-500 to-fuchsia-400"></div>
      <WorkExperienceSection/>

      <div className="w-full h-1.5 bg-gradient-to-r from-sky-500 to-fuchsia-400"></div>
      <ProjectsSection/>

        <footer className="absolute bottom-4 text-xs text-slate-500 text-center w-full">
          Built with Next.js, Tailwind CSS & GSAP.
        </footer>
    </>
  );
}