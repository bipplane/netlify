'use client'; // Required for GSAP animations and event handlers

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Head from 'next/head'; // For better SEO and tab title

// You can use actual icons from react-icons or svgs if you prefer
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }

    // Animate title
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5' // Start 0.5s before the previous animation ends
      );
    }

    // Animate links
    if (linksRef.current) {
      tl.fromTo(
        linksRef.current.children, // Animate children of the div
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=0.3'
      );
    }
  }, []);

  return (
    <>
      {/* This Head component is for the browser tab title and meta description */}
      <Head>
        <title>Ryan Chen - CS Student @ NUS</title>
        <meta name="description" content="Ryan Chen's personal portfolio. Computer Science student at the National University of Singapore." />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 antialiased">
        <div className="text-center">
          <h1 ref={nameRef} className="text-5xl md:text-7xl font-bold mb-3 opacity-0">
            Ryan Chen
          </h1>
          <p ref={titleRef} className="text-xl md:text-2xl text-sky-300 mb-10 opacity-0">
            Computer Science Student
            <br className="sm:hidden"/> {/* Break line on small screens for better layout */}
            <span className="hidden sm:inline"> at the </span>
            <span className="block sm:inline">National University of Singapore</span>
          </p>

          <div ref={linksRef} className="flex justify-center space-x-6 opacity-0">
            <a
              href="https://www.linkedin.com/in/ryanno3o/" // LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center space-x-2 group"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
              <span className="group-hover:underline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/bipplane" // GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center space-x-2 group"
              aria-label="GitHub Profile"
            >
              <GithubIcon />
              <span className="group-hover:underline">GitHub</span>
            </a>
          </div>
        </div>

        <footer className="absolute bottom-4 text-xs text-slate-500">
          Built with Next.js, Tailwind CSS & GSAP.
        </footer>
      </main>
    </>
  );
}