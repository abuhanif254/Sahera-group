import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

import { Navbar } from '@/components/ui/Navbar';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Preloader } from '@/components/ui/Preloader';

import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Sahera Group | Venture Studio',
  description: 'Building the Future of the Digital Economy.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 selection:bg-cyan-500/30 suppressHydrationWarning transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Preloader />
          <CustomCursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
