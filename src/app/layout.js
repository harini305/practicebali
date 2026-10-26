import { Nunito, Alegreya } from 'next/font/google';
import { site } from '@/data/site';
import './globals.css';

// The two (and only two) font families used on the site.
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: 'The Practice Bali – Traditional Hatha Yoga in Canggu',
  description: site.description,
  openGraph: {
    title: 'The Practice – Traditional Hatha Yoga, Canggu, Bali',
    description: site.description,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/team-1487.webp', width: 1487, height: 588, alt: 'The Practice teaching team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Practice – Traditional Hatha Yoga, Canggu, Bali',
    description: site.description,
    images: ['/images/hero/team-1487.webp'],
  },
};

export const viewport = {
  themeColor: '#f6f1ea',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${nunito.variable} ${alegreya.variable}`}>
      <body>{children}</body>
    </html>
  );
}
