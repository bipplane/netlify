'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  // Work experience 
  const experiences = [
    {
      company: 'Home Team Science and Technology Agency (HTX)',
      companyUrl: 'https://www.htx.gov.sg/',
      logo: 'https://www.htx.gov.sg/images/default-source/logos/htx-logo.png?sfvrsn=7f30d9a0_1',
      position: 'Cloud Engineer Intern',
      period: 'May 2025 - Aug 2025',
      description: 'Worked on cloud infrastructure projects, focusing on automation and optimisation. Collaborated with cross-functional teams to enhance system reliability.',
      technologies: ['AWS', 'Next.js', 'Docker', 'Python', 'Workato']
    },
  ];

  const isExternalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
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

    // Animate the center timeline line
    if (timelineLineRef.current) {
      tl.fromTo(
        timelineLineRef.current,
        { height: 0, opacity: 0 },
        { height: '100%', opacity: 1, duration: 1.1, ease: 'power3.inOut' },
        '-=0.3'
      );
    }

    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      
      tl.fromTo(
        timelineItems,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.15,
          ease: 'power3.out' 
        },
        '-=0.9'
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 md:py-28 bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-700 text-white p-8 antialiased flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-16 text-center opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-300 brightness-90 pb-1">
          Work Experience
        </h2>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline center line */}
          <div 
            ref={timelineLineRef} 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-sky-400 to-indigo-500 opacity-0"
          ></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item relative mb-16 opacity-0">
              <div className="grid grid-cols-7 gap-4 items-start">
                {/* Left side: Role and Date */}
                <div className="col-span-3 text-right">
                  <h3 className="text-xl font-bold text-white mb-1 pb-1">{exp.position}</h3>
                  <p className="text-sm text-sky-300 font-medium">{exp.period}</p>
                </div>
                
                {/* Center: Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-5 h-5 bg-sky-400 rounded-full border-4 border-slate-800 z-10 shadow-glow pt-2"></div>
                
                {/* Right side: Company info */}
                <div className="col-span-4 pl-35">
                  <div className="flex items-center mb-3 pb-1">
                    {exp.logo && (
                      <div className="mr-3 bg-white p-1 rounded-md shadow-md flex-shrink-0 transition-transform duration-300 hover:scale-115">
                        {isExternalUrl(exp.logo) ? (
                          // External URL
                          <Image 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            width={50} 
                            height={50} 
                            className="object-contain"
                            unoptimized={true}
                          />
                        ) : (
                          // Local image
                          <Image 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            width={50} 
                            height={50} 
                            className="object-contain"
                          />
                        )}
                      </div>
                    )}
                    <Link href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105 inline-block">
                      <h4 className="text-lg font-semibold text-sky-300 hover:text-sky-200 transition-colors pl-3">
                        {exp.company}
                      </h4>
                    </Link>
                  </div>
                  <div className="w-15 h-1 bg-slate-700"></div>
                  <div className="mt-2 pt-1"> {/* Added a container with top margin */}
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-700 text-xs px-3 py-1 rounded-full text-sky-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*delete ts once more stuff is added*/}
      <div ref={sectionRef} className="text-lg md:text-xl text-slate-20 leading-relaxed mb-80 opacity-0 text-justify"></div> 
      </div>
    <footer className="mt-auto pt-8 text-xs text-slate-500 text-center">
        Ryan Chen - Computer Science @ NUS
    </footer>    
    </section>
  );
}