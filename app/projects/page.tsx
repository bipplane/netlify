'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Head from 'next/head';

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

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
    <>
      <Head>
        <title>Projects - Ryan Chen</title>
        <meta name="description" content="My projects!" />
      </Head>

      {/* Adjusted padding-top */}
      <div
        ref={pageRef}
        className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 antialiased flex flex-col items-center pt-24 md:pt-28"
      >
        <div className="w-full max-w-3xl">
            <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-6 text-center opacity-0">
            Projects
          </h1>

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
    </>
  );
}