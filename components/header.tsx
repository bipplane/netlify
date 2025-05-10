'use client'; // This component uses client-side hooks (usePathname)

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // To highlight active link

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' }
    // Add more links here in the future (e.g., { name: 'Projects', href: '/projects' })
  ];

  return (
    <header className="bg-slate-800/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-sky-300 hover:text-sky-200 transition-colors">
            Ryan Chen
          </a>
        </Link>
        <ul className="flex space-x-6 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link href={link.href} legacyBehavior>
                  <a
                    className={`
                      text-lg 
                      hover:text-sky-300 
                      transition-colors 
                      duration-200
                      ${isActive ? 'text-sky-300 font-semibold border-b-2 border-sky-300 pb-1' : 'text-slate-300'}
                    `}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
