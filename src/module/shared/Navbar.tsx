'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  Home,
  Layers,
  LayoutGrid,
  ShieldCheck,
  PhoneCall,
  LogIn,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/module/shared/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { env } from '@/config/env';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile drawer on desktop resize & on Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'হোম', href: '/', icon: Home },
    { name: 'ফিচারসমূহ', href: '/features', icon: Layers },
    { name: 'ম্যানেজমেন্ট', href: '/management', icon: LayoutGrid },
    { name: 'সমাধান', href: '/solutions', icon: ShieldCheck },
    { name: 'লাইভ ডেমো', href: '/demo', icon: Sparkles },
    { name: 'যোগাযোগ', href: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      {/* Outside Click / Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-blue-950/25 backdrop-blur-[2px] md:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 inset-x-0 z-50 pt-2 pb-2 sm:pt-3 sm:pb-3 px-3 sm:px-6 pointer-events-none transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md' : 'backdrop-blur-xs'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full pointer-events-auto transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 text-slate-900 backdrop-blur-2xl border border-blue-200/90 shadow-[0_12px_40px_-5px_rgba(37,99,235,0.2)]'
              : 'bg-white/90 text-slate-900 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.1)]'
          }`}
        >
          {/* Brand Logo */}
          <Logo onClick={() => setIsOpen(false)} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/90 border border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/30 font-bold'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side CTA Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`${env.frontendUrl}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-sm font-bold text-slate-700 hover:text-blue-600 px-3 py-1.5 transition-colors"
            >
              লগইন
            </a>

            <Button
              size="sm"
              asChild
              className="relative group overflow-hidden rounded-full bg-linear-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:via-indigo-700 hover:to-sky-700 text-white text-xs lg:text-sm font-bold px-5 h-9 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              <Link href="/demo" className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-200 group-hover:rotate-12 transition-transform" />
                <span>ফ্রি ডেমো</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="md:hidden flex items-center gap-1.5">
            <Button
              size="sm"
              asChild
              className="bg-linear-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold h-7.5 px-3 rounded-full shadow-xs"
            >
              <Link href="/demo" onClick={() => setIsOpen(false)}>
                ডেমো
              </Link>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-full text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {isOpen && (
          <div className="md:hidden max-w-7xl mx-auto mt-2 p-4 rounded-3xl bg-white/98 backdrop-blur-2xl border border-blue-100/90 shadow-2xl pointer-events-auto animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-50 border border-blue-200 text-blue-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-xl ${
                        isActive
                          ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              <div className="h-px bg-slate-100 my-2" />

              {/* Mobile Footer Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full rounded-2xl border-slate-200 text-slate-800 bg-slate-50 hover:bg-slate-100 font-bold"
                >
                  <a
                    href={`${env.frontendUrl}/login`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>লগইন</span>
                  </a>
                </Button>

                <Button
                  size="sm"
                  asChild
                  className="w-full rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-sky-600 text-white font-bold shadow-md shadow-blue-500/25"
                >
                  <Link
                    href="/demo"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5"
                  >
                    <span>ডেমো নিন</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
