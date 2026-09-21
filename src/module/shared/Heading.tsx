import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight, Sparkles } from 'lucide-react';

interface HeadingProps {
  heading?: string;
  badge?: string;
  subtitle?: string;
}

export default async function Heading({
  heading = '',
  badge = 'Hello Soft ERP',
  subtitle = 'আধুনিক প্রযুক্তিতে শিক্ষা প্রতিষ্ঠান পরিচালনার সম্পূর্ণ ডিজিটাল সল্যুশন',
}: HeadingProps) {
  // If heading starts with hyphen like "-এর ...", format smoothly
  const formattedHeading = heading.startsWith('-')
    ? `Hello Soft ERP${heading}`
    : heading;

  return (
    <div className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
          <Link
            href="/"
            className="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>হোম</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-blue-400 font-medium">{badge}</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
          {formattedHeading}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
