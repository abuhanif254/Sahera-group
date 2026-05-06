'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/5 border-t-0 border-x-0 !rounded-none">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-4 h-4 rounded-full border border-cyan-500/50 bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-colors" />
          <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">Sahera Group</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className={pathname === '/' ? 'text-cyan-400' : 'text-slate-400 hover:text-white transition-colors'}>Home</Link>
          <Link href="/ventures" className={pathname === '/ventures' ? 'text-cyan-400' : 'text-slate-400 hover:text-white transition-colors'}>Ventures</Link>
          <Link href="/about" className={pathname === '/about' ? 'text-cyan-400' : 'text-slate-400 hover:text-white transition-colors'}>About Us</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'text-cyan-400' : 'text-slate-400 hover:text-white transition-colors'}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
