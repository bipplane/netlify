'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OptimizedImage, ImageFallback } from '@/app/imageurl';

gsap.registerPlugin(ScrollTrigger);

// Codelink, tag is optional
const projectsData = [
  {
    id: 1,
    title: "Harvard CS50's Introduction to AI with Python",
    description: "Completed hands-on projects to gain exposure to the theory behind graph search algorithms, classification, optimisation, reinforcement learning, and other topics in AI/ML.",
    image: "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/CS50AI_pll.png?itok=xPwrFW6A",
    codeLink: "https://github.com/bipplane/ai50",
    tag: "Online Course"
  },
  {
    id: 2,
    title: "CS2103T SE Project (Chatbot)",
    description: "Developed a chatbot application using Java and JavaFX that helps a person to keep track of various tasks, with added personalisation.",
    image: "https://bipplane.github.io/ip/deadlinetest.png",
    codeLink: "https://github.com/bipplane/ip",
    tag: "School Project"
  },
  {
    id: 3,
    title: "CS2103T SE Project (Address Book)",
    description: "Developed an address book application using Java and JavaFX, focusing on software engineering principles and best practices.",
    image: "https://raw.githubusercontent.com/AY2425S2-CS2103T-T16-4/tp/master/docs/images/Ui.png",
    codeLink: "https://github.com/bipplane/portfolio",
    tag: "School Project"
  },
  {
    id: 4,
    title: "Personal Website",
    description: "Designed and developed my personal website using Next.js, TypeScript, and Tailwind CSS, showcasing expertise and personal interests.",
    image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/68244f145f369b00085983b5/screenshot_2025-05-14-08-07-31-0000.webp&fit=cover&h=330&q=40&w=528",
    codeLink: "https://github.com/bipplane/netlify",
    tag: "Side Project"
  }
];

export default function ProjectPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  // Card tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 35;
    const tiltY = (centerX - x) / 35;
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.boxShadow = `
      0 10px 30px -15px rgba(2, 12, 27, 0.7),
      ${tiltY/2}px ${tiltX/2}px 20px -15px rgba(56, 189, 248, 0.2)`;

    // GSAP animations for button and tag on hover
    const button = card.querySelector('.view-code-button');
    const tag = card.querySelector('.project-tag');

    if (button) {
      gsap.to(button, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
    }
    if (tag) {
      gsap.to(tag, { scale: 1.05, brightness: 1.1, duration: 0.3, ease: 'power2.out' });
    }
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    card.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';

    // Revert GSAP animations
    const button = card.querySelector('.view-code-button');
    const tag = card.querySelector('.project-tag');

    if (button) {
      gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
    }
    if (tag) {
      gsap.to(tag, { scale: 1, brightness: 1, duration: 0.3, ease: 'power2.inOut' });
    }
  };

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

    // Animate project cards with staggered effect
    if (projectsContainerRef.current) {
      const cards = projectsContainerRef.current.querySelectorAll('.project-card');
      
      tl.fromTo(
        cards,
        { 
          y: 50, 
          opacity: 0,
          rotationX: 15,
          rotationY: -15
        },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          rotationY: 0,
          stagger: 0.15, 
          duration: 0.7, 
          ease: 'back.out(1.5)' 
        },
        '-=0.3'
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-16 md:py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white p-8 antialiased flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-6 text-center opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-300 to-indigo-100">
          Projects
        </h2>

        <div ref={descriptionRef} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 opacity-0 text-center max-w-3xl mx-auto">
          <p className="mb-6">
            Some of the cool stuff I&apos;ve worked on!
          </p>
        </div>

        {/* Project cards container */}
        <div 
          ref={projectsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mt-8"
        >
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="project-card relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl overflow-hidden transition-all duration-300 opacity-0 h-full flex flex-col"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out' }}
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden select-none" style={{ transform: 'translateZ(10px)' }}>
                {project.image ? (
                  <OptimizedImage 
                    src={project.image} 
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ transform: 'translateZ(20px)' }}
                    objectFit="cover"
                  />
                ) : (
                  <ImageFallback className="w-full h-full" /> // Use ImageFallback for consistency
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow" style={{ transform: 'translateZ(30px)' }}>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
                
                {/* Links and Tag container */}
                <div className="flex items-center justify-between mt-auto pt-3 select-none" style={{ transform: 'translateZ(40px)' }}> 
                  <div> {/* View Code (left side) */}
                    {project.codeLink && (
                      <Link 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="view-code-button inline-flex items-center px-4 py-2 bg-slate-700 rounded-md text-white text-sm font-medium hover:bg-slate-600 transition-all duration-300"
                      >
                        View Code
                      </Link>
                    )}
                  </div>
                  
                  {/* Tag (right side) */}
                  {project.tag && (
                    <div className="project-tag text-xs px-3 py-2 rounded-full font-medium shadow-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white select-none">
                      {project.tag}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-16 text-xs text-slate-500 text-center">
        Ryan Chen - Computer Science @ NUS
      </footer>
    </section>
  );
}