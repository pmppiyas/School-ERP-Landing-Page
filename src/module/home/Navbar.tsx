'use client';

import { useState, useEffect } from 'react';
import { School, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Management', href: '#management' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 text-slate-900 shadow-md backdrop-blur-md py-2 border-b border-slate-200'
          : 'bg-transparent text-white py-4 border-b border-white/10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 ${
                scrolled
                  ? 'bg-primary text-white shadow-lg rotate-0'
                  : 'bg-white/20 text-white backdrop-blur-sm rotate-[-10deg]'
              }`}
            >
              <School size={22} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              EduSmart{' '}
              <span
                className={`transition-colors duration-500 ${
                  scrolled ? 'text-primary' : 'text-white font-medium'
                }`}
              >
                ERP
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-300 hover:text-primary relative group ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className={`transition-colors ${scrolled ? 'text-slate-700' : 'text-white hover:bg-white/10'}`}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className={`shadow-lg transition-transform hover:scale-105 active:scale-95 ${
                scrolled
                  ? 'bg-primary'
                  : 'bg-white text-primary hover:bg-slate-100 border-none font-bold'
              }`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                scrolled
                  ? 'text-slate-900 bg-slate-100'
                  : 'text-white bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className={`md:hidden absolute left-0 w-full px-4 pb-8 pt-4 shadow-2xl animate-in slide-in-from-top-5 duration-500 rounded-b-3xl ${
              scrolled
                ? 'bg-white border-b'
                : 'bg-slate-900/95 backdrop-blur-xl text-white'
            }`}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    scrolled ? 'text-slate-800' : 'text-white/90'
                  } hover:text-primary`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-200/20 w-full" />
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className={
                    scrolled
                      ? 'border-slate-300'
                      : 'border-white/20 text-white bg-transparent'
                  }
                >
                  Sign In
                </Button>
                <Button className="w-full shadow-xl">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
