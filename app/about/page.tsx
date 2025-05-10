'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
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
        <title>About Me - Ryan Chen</title>
        <meta name="description" content="Learn more about me! Hehe" />
      </Head>

      {/* Adjusted padding-top */}
      <div
        ref={pageRef}
        className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 antialiased flex flex-col items-center pt-24 md:pt-28"
      >
        <div className="w-full max-w-3xl">
            <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-6 text-center opacity-0">
            About Me
          </h1>

          <div ref={descriptionRef} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 opacity-0 text-justify">
            <p className="mb-4">
              I&apos;m currently pursuing a bachelor&apos;s degree in Computing, Computer Science, specialising in Networks and Distributed Systems!
            </p>
            <p className="mb-4">
              My personal hobbies include drinking Chagee, making matcha, and doomscrolling TikTok.
            </p>
            <p>
              When people ask me if I love &apos;CS&apos;, I reply with a resounding YES, but they don&apos;t actually
              know that I meant being a Chaewon Simp...
            </p>
          </div>
          <div ref={imagesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
              <Image
                src="/images/chaewon1.jpeg"
                alt="Chaewon Image 1"
                width={500}
                height={600}
                className="
                  object-cover w-full h-full rounded-lg 
                  transform transition-transform duration-300 ease-in-out 
                  group-hover:scale-115 group-hover:shadow-2xl group-hover:z-10"
              />
            </div>
            <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
              <Image
                src="/images/chaewon2.jpeg"
                alt="Chaewon Image 2"
                width={500}
                height={600}
                className="
                  object-cover w-full h-full rounded-lg 
                  transform transition-transform duration-300 ease-in-out 
                  group-hover:scale-115 group-hover:shadow-2xl group-hover:z-10"
              />
            </div>
            <div className="bg-slate-700 rounded-lg opacity-0 shadow-lg hover:shadow-2xl hover:z-10 relative cursor-pointer transition-shadow duration-300 ease-in-out group">
              <Image
                src="/images/chaewon3.jpeg"
                alt="Chaewon Image 3"
                width={500}
                height={600}
                className="
                  object-cover w-full h-full rounded-lg 
                  transform transition-transform duration-300 ease-in-out 
                  group-hover:scale-115 group-hover:shadow-2xl group-hover:z-10"
              />
            </div>
          </div>
        </div>

        <footer className="mt-auto pt-8 text-xs text-slate-500 text-center">
          Ryan Chen - Computer Science @ NUS
        </footer>
      </div>
    </>
  );
}