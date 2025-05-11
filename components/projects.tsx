'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

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
    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );
    }
    if (imagesRef.current) {
      tl.fromTo(
        imagesRef.current.children,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=0.3'
      );
    }
  }, []);

  return (
      <div
        ref={sectionRef} id="projects"
        className=" min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 antialiased flex flex-col items-center pt-24 md:pt-28"
      >
        <div className="w-full max-w-3xl">
            <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-6 text-center opacity-0 text-transparent bg-clip-text bg-linear-to-r from-cyan-200 via-blue-400 to-indigo-300 brightness-90 pb-1">
            Projects
          </h2>
          <div ref={descriptionRef} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 opacity-0 text-justify">
            <p className="mb-4">
              WIP bruh lmao
            </p>
          </div>
        </div>
        <footer className="mt-auto pt-8 text-xs text-slate-500 text-center">
          Ryan Chen - Computer Science @ NUS
        </footer>
      </div>
  );
}