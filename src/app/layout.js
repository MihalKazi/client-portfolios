import { Crimson_Pro, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

// 1. We must specify the weights for Crimson Pro
const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-serif' 
});

// 2. We must specify the weights for IBM Plex Mono to fix the build error
const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mono' 
});

export const metadata = {
  title: 'Minhaj Aman | Digital Rights Researcher',
  description: 'Digital Rights & Information Integrity Researcher',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${crimsonPro.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}