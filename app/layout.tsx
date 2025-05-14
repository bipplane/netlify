import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ryan Chen - CS @ NUS ',
  description: 'Personal website',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 overflow-x-hidden`}>
        <Header />
        <main className="overflow-x-hidden w-full">{children}</main>
      </body>
    </html>
  );
}