'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', sectionId: 'home', basePage: '/' },
    { name: 'About Me', href: '/#about-me', sectionId: 'about-me', basePage: '/' },
    { name: 'Experience', href: '/#experience', sectionId: 'experience', basePage: '/' },
    { name: 'Projects', href: '/#projects', sectionId: 'projects', basePage: '/' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    sectionId?: string,
    basePage?: string
  ) => {
    if (sectionId && basePage) {
      if (pathname === basePage) {
        e.preventDefault(); // Stop Next.js Link from navigating
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          const headerEl = document.querySelector('header');
          const headerHeight = headerEl ? headerEl.offsetHeight : 0;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } else {
      }
    }
  };


  return (
    <header className="bg-slate-900/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg w-full overflow-x-hidden hover:scale-105 duration-500 transition-all">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-center items-center">
        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 items-center">
          {navLinks.map((linkItem) => {
            let isActive = false;
            if (linkItem.sectionId && linkItem.basePage === pathname) {
              // Active if on the base page and the hash matches the sectionId
              isActive = typeof window !== 'undefined' && window.location.hash === `#${linkItem.sectionId}`;
            }

            return (
              <li key={linkItem.name} className="whitespace-nowrap">
                <Link
                  href={linkItem.href}
                  onClick={(e) => handleLinkClick(e, linkItem.href, linkItem.sectionId, linkItem.basePage)}
                  className={`
                    text-base sm:text-lg cursor-pointer
                    hover:text-sky-300
                    transition-all duration-200
                    inline-block hover:scale-105
                    ${isActive ? 'text-sky-300 font-semibold border-b-2 border-sky-300 pb-1' : 'text-slate-300'}
                  `}
                >
                  {linkItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}