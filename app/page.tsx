'use client'; // Required for GSAP animations and event handlers

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LinkedinIcon, GithubIcon, EmailIcon } from '@/components/icons';
import Head from 'next/head'; 

gsap.registerPlugin(ScrollTrigger);

import AboutSection from '@/components/aboutme';
import ProjectsSection from '@/components/projects';
import WorkExperienceSection from '@/components/work';
import EndSection from '@/components/endpage';

const ResumeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/>
  </svg>
);

const GradientDivider = () => {
  useEffect(() => {
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
    <div
      className="w-full h-1.5"
      style={{
        background: 'linear-gradient(to right, #38bdf8, #818cf8, #c084fc, #e879f9, #38bdf8)',
        backgroundSize: '200% auto',
        animation: 'gradientShift 8s ease infinite',
      }}
    ></div>
  );
};


export default function HomePage() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const isFlipping = useRef(false);

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
        '-=0.4'
      );
    }

    // Animate social links
    if (linksRef.current) {
      tl.fromTo(
        linksRef.current.children,
        { opacity: 0, scale: 0.5, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1,
          ease: 'power3.out'
        },
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
          setTimeout(() => scrollToSectionWithOffset(hash), 100);
        }
      }
    };

    // Initial check
    handleHashChange();
  }, []);

  // Add this style object for colourful and magical gradient text
  const animatedGradientStyle = {
    background: 'linear-gradient(to right, #38bdf8, #818cf8, #c084fc, #e879f9, #38bdf8)',
    backgroundSize: '200% auto',
    animation: 'gradientShift 7s ease infinite',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  useEffect(() => {
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

  // Function to handle double-click on name
  const handleNameDoubleClick = () => {
    if (nameRef.current && !isFlipping.current) {
      isFlipping.current = true;
      
      // Create a flip animation
      gsap.to(nameRef.current, {
        rotationY: 360,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          // Reset rotation after animation completes
          gsap.set(nameRef.current, { rotationY: 0 });
          isFlipping.current = false;
        }
      });
    }
  };

  // Auto-flipping animation
  useEffect(() => {
    const triggerFlip = () => {
      if (nameRef.current && !isFlipping.current) {
        handleNameDoubleClick();
      }
      
      const nextFlipDelay = Math.floor(Math.random() * 18000) + 2000;
      return nextFlipDelay;
    };
    
    let timeoutId = setTimeout(function autoFlip() {
      const nextDelay = triggerFlip();
      timeoutId = setTimeout(autoFlip, nextDelay);
    }, Math.floor(Math.random() * 5000) + 10000);
    
    return () => clearTimeout(timeoutId);
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
            <h1 
              ref={nameRef} 
              className="text-5xl md:text-7xl font-bold mb-3 opacity-0 brightness-90 select-none pb-5 relative"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              onDoubleClick={handleNameDoubleClick}
            >
              Ryan Chen
            </h1>
            <p 
              ref={titleRef} 
              className="text-xl md:text-2xl mb-10 opacity-0 select-none"
              style={animatedGradientStyle}
            >
              Y3 Computer Science Student at
              <br className="sm:hidden"/> {/* Break line on small screens for better layout */}
              <span className="block sm:inline">the National University of Singapore</span>
            </p>

          <div ref={linksRef} className="text-xl flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <a
              href="files/resume.pdf" // Resume
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-all duration-300 flex items-center space-x-2 group w-auto justify-center px-4 py-2"
              aria-label="Resume"
            >
              <ResumeIcon/>
              <span className="group-hover:underline transition-all duration-200 hover:scale-105">My Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ryanno3o/" // LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-all duration-300 flex items-center space-x-2 group w-auto justify-center px-4 py-2"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon/>
              <span className="group-hover:underline transition-all duration-200 hover:scale-105">LinkedIn</span>
            </a>
            <a
              href="https://github.com/bipplane" // GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-all duration-300 flex items-center space-x-2 group w-auto justify-center px-4 py-2"
              aria-label="GitHub Profile"
            >
              <GithubIcon/>
              <span className="group-hover:underline transition-all duration-200 hover:scale-105">GitHub</span>
            </a>
            <a
              href="mailto:ryanchen@live.com.sg" // Email
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-all duration-300 flex items-center space-x-2 group w-auto justify-center px-4 py-2"
              aria-label="Email Address"
            >
              <EmailIcon/>
              <span className="group-hover:underline transition-all duration-200 hover:scale-105">Email Me!</span>
            </a>
          </div>
        </div>
      </section>

      <GradientDivider/>
      <AboutSection/>

      <GradientDivider/>
      <WorkExperienceSection/>

      <GradientDivider/>
      <ProjectsSection/>

      <GradientDivider/>
      <EndSection/>

      <footer className="absolute bottom-0.5 pt-8 text-xs text-slate-500 text-center w-full">
        Built with Next.js, Tailwind CSS & GSAP.
      </footer>
    </>
  );
}