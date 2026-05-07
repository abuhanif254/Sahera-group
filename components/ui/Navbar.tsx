'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-slate-200/50 dark:border-white/5 border-t-0 border-x-0 !rounded-none">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-4 h-4 rounded-full border border-cyan-500/50 bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-colors" />
          <span className="font-semibold text-slate-800 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">Sahera Group</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className={pathname === '/' ? 'text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'}>Home</Link>
          <Link href="/ventures" className={pathname === '/ventures' ? 'text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'}>Ventures</Link>
          <Link href="/about" className={pathname === '/about' ? 'text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'}>About Us</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'}>Contact</Link>
          <div className="w-px h-4 bg-slate-300 dark:bg-white/10 mx-2" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
