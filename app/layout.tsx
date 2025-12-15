import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { profile } from '@/data/profile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
  keywords: ['Data Engineer', 'BI Analytics', 'Big Data', 'Business Intelligence', 'Data Visualization', 'Python', 'SQL', 'Power BI'],
  authors: [{ name: profile.name, url: 'https://github.com/BOUAYADYassine110' }],
  creator: profile.name,
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    type: 'website',
    locale: 'en_US',
    siteName: profile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Data & BI Analytics Engineer',
    email: profile.email,
    url: 'https://yourdomain.com',
    sameAs: [
      'https://github.com/BOUAYADYassine110',
      'https://www.linkedin.com/in/bouayad-yassine/',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
