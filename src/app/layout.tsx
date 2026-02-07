import type { Metadata, Viewport } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['300','400','600','700'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['600','700'] });

export const metadata: Metadata = {
  title: 'SSDEV',
  description: 'SSDEV — Minimal, performance-first web design & development for startups and growing teams, We build digital brands that convert',
  applicationName: 'SSDEV',
  keywords: ['web design', 'web development', 'SEO', 'startup', 'design systems', 'SSDEV'],
  authors: [{ name: 'SSDEV' }],
  openGraph: {
    title: 'SSDEV — We build digital brands that convert',
    description: 'Minimal, performance-first web design & development, We build digital brands that convert',
    type: 'website',
    siteName: 'SSDEV',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}


