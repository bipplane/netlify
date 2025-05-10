import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Feel free to change font
import './globals.css'
import Header from '@/components/header'; // Import the header component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ryan Chen - CS @ NUS ',
  description: 'Personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}> {/* Added bg-slate-900 as a default fallback */}
        <Header /> {/* <<< Add the Header component here */}
        <main>{children}</main> {/* Wrap children in a main tag for semantics if not already done in pages */}
      </body>
    </html>
  );
}