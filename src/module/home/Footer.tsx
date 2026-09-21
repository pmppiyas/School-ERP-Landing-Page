import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import Logo from '@/module/shared/Logo';

const quickLinks = [
  { name: 'হোম পেজ', href: '/' },
  { name: 'প্রধান ফিচারসমূহ', href: '/features' },
  { name: 'ম্যানেজমেন্ট মডিউল', href: '/management' },
  { name: 'সমাধানসমূহ', href: '/solutions' },
  { name: 'যোগাযোগ ও ডেমো', href: '/contact' },
];

const moduleLinks = [
  { name: 'শিক্ষার্থী তথ্য ডাটাবেস', href: '/management#student-management' },
  { name: 'ডিজিটাল উপস্থিতি ও SMS', href: '/features' },
  { name: 'অনলাইন ফি কালেকশন', href: '/management#fee-management' },
  { name: 'স্বয়ংক্রিয় রেজাল্ট ও গ্রেডিং', href: '/features' },
  { name: 'অ্যাডমিট কার্ড জেনারেশন', href: '/features' },
];

const Footer = () => {
  return (
    <footer className="relative w-full pt-16 pb-12 bg-linear-to-b from-slate-950 via-slate-900 to-black text-white border-t border-slate-800/80 overflow-hidden">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-28 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <Logo variant="light" />
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              আধুনিক শিক্ষা প্রতিষ্ঠানের প্রশাসনিক ও একাডেমিক কার্যক্রমকে ১০০%
              ডিজিটাল, দ্রুত এবং নির্ভুল করতে তৈরি হয়েছে Hello Soft ERP।
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-blue-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>১০০% নিরাপদ ক্লাউড ব্যাকআপ এবং সুরক্ষিত ডেটাবেস</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white">
              পেজসমূহ
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Modules (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white">
              জনপ্রিয় মডিউল
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {moduleLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Support (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white">
              যোগাযোগ ও ঠিকানা
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:info@schoolerp.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@schoolerp.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="tel:+8801234567890"
                  className="hover:text-blue-400 transition-colors"
                >
                  +880 1234 567890
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-sky-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-blue-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Hello Soft ERP. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              গোপনীয়তা নীতি
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              ব্যবহারের শর্তাবলী
            </Link>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              সাপোর্ট পোর্টাল
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
