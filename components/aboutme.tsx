'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Head from 'next/head';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section ref={sectionRef} id="about-me" className="py-20 md:py-28 bg-slate-800 text-white p-8 antialiased flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 ref={headingRef} className="md:text-5xl font-bold mb-10 text-center opacity-0 text-transparent bg-clip-text bg-linear-to-r from-cyan-200 via-blue-400 to-indigo-300 brightness-90 pb-1">
          About Me
        </h2>
        <div ref={descriptionRef} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 opacity-0 text-justify">
          <p className="mb-4">
            I'm currently pursuing a bachelor's degree in Computing, Computer Science, specialising in Networks and Distributed Systems!
          </p>
          <p className="mb-4">
            My personal hobbies include drinking Chagee, making matcha, and doomscrolling TikTok 🥀.
          </p>
          <p>
            When people ask me if I love 'CS', I reply with a resounding YES, but they don't actually
            know that I meant being a Chaewon Simp...
          </p>
        </div>
        <div ref={imagesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
            <Image src="/images/chaewon1.jpeg" alt="Chaewon Image 1" width={500} height={600} className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </div>
          <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
            <Image src="/images/chaewon2.jpeg" alt="Chaewon Image 2" width={500} height={600} className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </div>
          <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
            <Image src="/images/chaewon3.jpeg" alt="Chaewon Image 3" width={500} height={600} className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </div>
        </div>
      </div>
        <footer className="mt-auto pt-8 text-xs text-slate-500 text-center">
          Ryan Chen - Computer Science @ NUS
        </footer>    
      </section>
  );
}