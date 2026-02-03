import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { assets } from '@/assets';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Hello Soft School ERP | Smart Institutional Management',
    template: '%s | Hello Soft School ERP',
  },
  description:
    'Manage admissions, results, exams, and attendance in one place. The ultimate digital solution for modern educational institutions.',
  keywords: [
    'School ERP',
    'School Management System',
    'Education Software',
    'Student Management',
    'Hello Soft',
  ],
  authors: [{ name: 'Hello Soft' }],
  creator: 'Hello Soft',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Hello Soft School ERP',
    title: 'Hello Soft School ERP - Digitalize Your Institution',
    description:
      'Transform your school with automated result processing, Excel integration, and smart reporting.',
    images: [
      {
       url: (assets.home).src,
        width: 1200,
        height: 630,
        alt: 'Hello Soft School ERP Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello Soft School ERP',
    description: 'Smart and Efficient School Management System.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
