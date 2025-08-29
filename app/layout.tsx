import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Nav } from '@/components/Nav';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s — Dikshith Reddy Macherla',
    default: 'Dikshith Reddy Macherla — ML & Data Science',
  },
  description: 'B.Sc. Computer Science @ Trent | ML & Data Science | Research Intern | Hackathon Winner | Dean\'s Honour Roll',
  keywords: ['Machine Learning', 'Data Science', 'Computer Science', 'Research', 'AI', 'MLOps'],
  authors: [{ name: 'Dikshith Reddy Macherla' }],
  creator: 'Dikshith Reddy Macherla',
  publisher: 'Dikshith Reddy Macherla',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dikshithreddy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://dikshithreddy.vercel.app',
    title: 'Dikshith Reddy Macherla — ML & Data Science',
    description: 'B.Sc. Computer Science @ Trent | ML & Data Science | Research Intern | Hackathon Winner | Dean\'s Honour Roll',
    siteName: 'Dikshith Reddy Macherla',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dikshith Reddy Macherla — ML & Data Science',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dikshith Reddy Macherla — ML & Data Science',
    description: 'B.Sc. Computer Science @ Trent | ML & Data Science | Research Intern | Hackathon Winner | Dean\'s Honour Roll',
    images: ['/og.jpg'],
    creator: '@dikshithreddym',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded-md"
        >
          Skip to main content
        </a>
        
        <Nav />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Analytics />
      </body>
    </html>
  );
}
