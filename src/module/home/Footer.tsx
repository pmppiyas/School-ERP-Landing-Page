import React from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/module/shared/Logo';

const Footer = () => {
  return (
    <footer className="relative w-full py-16 bg-linear-to-br from-blue-950 via-indigo-950 to-black text-white">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About / Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo Placeholder */}
              <Logo />
            </div>
            <p className="text-gray-300 leading-relaxed">
              আমাদের School ERP সফটওয়্যার দিয়ে আপনার শিক্ষা প্রতিষ্ঠান সহজে এবং
              দ্রুত পরিচালনা করুন।
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Modules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="flex items-center gap-2 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" /> info@schoolerp.com
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" /> +880 1234 567890
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-3">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Hello Soft ERP. সব অধিকার সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
};

export default Footer;
