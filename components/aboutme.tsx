'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
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
    <section ref={sectionRef} id="about-me" className="py-16 md:py-20 bg-gradient-to-bl from-slate-700 via-slate-800 to-slate-900 text-white p-4 sm:p-8 antialiased flex flex-col items-center w-full overflow-hidden">
      <div className="w-full max-w-3xl px-2 sm:px-0">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-10 text-center opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-cyan-200 to-blue-500 brightness-100">
          About Me
        </h2>
        <div ref={descriptionRef} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 opacity-0 text-justify">
          <p className="mb-4">
            I&apos;m currently pursuing a Bachelor of Computing (Honours) in Computer Science, specialising in Networks and Distributed Systems!
          </p>
          <p className="mb-4">
            My (non-coding) personal hobbies include: drinking Chagee, doomscrolling TikTok 🥀, and stanning Chaewon from LE SSERAFIM!
          </p>
        </div>
        <div ref={imagesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 select-none">
          <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
            <Image src="/images/self.jpg" alt="Chaewon Image 1" width={500} height={600} className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </div>
          <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
            <Image src="/images/chaewon1.jpeg" alt="Chaewon Image 2" width={500} height={600} className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </div>
          <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
            <Image src="/images/chaewon2.jpeg" alt="Chaewon Image 3" width={500} height={600} className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          </div>
        </div>
      </div>
        <footer className="mt-auto pt-8 text-xs text-slate-500 text-center">
          Ryan Chen - Computer Science @ NUS
        </footer>    
      </section>
  );
}