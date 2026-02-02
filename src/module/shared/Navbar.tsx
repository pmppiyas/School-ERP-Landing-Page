'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/module/shared/Logo';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Management', href: '#management' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0  w-full z-50 bg-transparent border-b border-white/10 backdrop-blur-[2px] ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden p-6  animate-in slide-in-from-top-2 duration-300 bg-card">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border" />
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
