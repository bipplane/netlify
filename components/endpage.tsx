'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LinkedinIcon, GithubIcon, EmailIcon } from '@/components/icons';

gsap.registerPlugin(ScrollTrigger);

export default function EndPageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      }
    });

    if (headingRef.current) {
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );
    }
    const contentToAnimate = [];
    if (descriptionRef.current) {
      contentToAnimate.push(descriptionRef.current);
    }

    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );
    }

    if (linksRef.current) {
      tl.fromTo(
        linksRef.current.children,
        { opacity: 0, y: 20, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.5, 
          stagger: 0.1,
          ease: 'power3.out' 
        },
        '-=0.3'
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-20 bg-gradient-to-bl from-slate-700 via-slate-800 to-slate-900 text-white p-4 sm:p-8 antialiased flex flex-col items-center w-full overflow-hidden min-h-[70vh]">
      <div className="w-full max-w-3xl px-2 sm:px-0 flex flex-col items-center">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-8 text-center opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 brightness-90 pb-10">
          Let&apos;s Connect!
        </h2>
        <div ref={descriptionRef} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 opacity-0 text-justify max-w-3xl mx-auto">
          <p className="mb-3">
            YOU SCROLLED TO THE END! Thanks for checking out my website~&nbsp;(´｡• ᵕ •｡`)❤️
          </p>
            <p>
            I&apos;m always excited to connect with new people! Whether you want to chat about CS, collaborate on stuff, or make a friend, please don&apos;t hesitate to reach out through any of my socials!
            </p>
        </div>
        
        {/* Links container */}
        <div ref={linksRef} className="w-full flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/ryanno3o/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-sky-300 transition-all duration-300 flex items-center space-x-3 group w-auto sm:w-44 justify-center px-5 py-3 border border-slate-600 rounded-lg hover:border-sky-500 hover:bg-slate-700/50"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon/>
            <span className="group-hover:underline transition-all duration-200">LinkedIn</span>
          </a>
          <a
            href="https://github.com/bipplane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-sky-300 transition-all duration-300 flex items-center space-x-3 group w-auto sm:w-44 justify-center px-5 py-3 border border-slate-600 rounded-lg hover:border-sky-500 hover:bg-slate-700/50"
            aria-label="GitHub Profile"
          >
            <GithubIcon/>
            <span className="group-hover:underline transition-all duration-200">GitHub</span>
          </a>
          <a
            href="mailto:ryanchen@live.com.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-sky-300 transition-all duration-300 flex items-center space-x-3 group w-auto sm:w-44 justify-center px-5 py-3 border border-slate-600 rounded-lg hover:border-sky-500 hover:bg-slate-700/50 hover:scale-110"
            aria-label="Email Address"
          >
            <EmailIcon/>
            <span className="group-hover:underline transition-all duration-200">Email</span>
          </a>
        </div>
      </div>
      <footer className="mt-auto pt-12 pb-6 text-xs text-slate-500 text-center w-full pt-20">
        Ryan Chen - Computer Science @ NUS
      </footer>    
    </section>
  );
}