'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Zap,
  TrendingUp,
  School,
  GraduationCap,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { assets } from '@/assets';

const institutionTypes = [
  {
    id: 'school',
    name: 'স্কুল ম্যানেজমেন্ট',
    icon: School,
    badge: 'প্রাইমারি ও হাই স্কুল',
    desc: 'ক্লাস, সেকশন, রোল, দৈনিক হাজিরা ও প্রগ্রেসিভ রেজাল্ট শিট ব্যবস্থাপনা।',
  },
  {
    id: 'college',
    name: 'কলেজ ইআরপি',
    icon: GraduationCap,
    badge: 'এইচএসসি ও ডিগ্রি',
    desc: 'গ্রুপ ভিত্তিক বিষয় চয়েস, টার্ম ফাইনাল মার্কস ও দ্রুত গ্রেডিং হিসাব।',
  },
  {
    id: 'madrasa',
    name: 'মাদ্রাসা সিস্টেম',
    icon: Building2,
    badge: 'কওমি ও আলিয়া',
    desc: 'হিফজ ও কিতাব বিভাগ, বোর্ড স্ট্যান্ডার্ড মার্কশিট ও কাস্টমাইজড ফি কাঠামো।',
  },
];

const highlights = [
  '১০০+ শিক্ষা প্রতিষ্ঠানে সক্রিয়',
  '৯৯.৯% নির্ভুল রেজাল্ট ও গ্রেডিং',
  'অটোমেটেড SMS ও ইনস্ট্যান্ট হাজিরা',
  '১০০% ক্লাউড ব্যাকআপ ও নিরাপদ',
];

const Banner = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full pt-28 md:pt-36 pb-16 lg:pb-24 overflow-hidden bg-linear-to-b from-blue-50/40 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-linear-to-tr from-blue-400/15 via-indigo-500/15 to-purple-400/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/70 border border-blue-200/70 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium shadow-xs backdrop-blur-sm animate-in fade-in duration-500">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>স্মার্ট ও আধুনিক শিক্ষা প্রতিষ্ঠান ইআরপি</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2] sm:leading-[1.18]">
            শিক্ষা প্রতিষ্ঠান পরিচালনার সকল সমাধান{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              এক প্ল্যাটফর্মে
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            ভর্তি, ডিজিটাল হাজিরা, দ্রুত রেজাল্ট তৈরি, স্বয়ংক্রিয় SMS এবং ফি কালেকশন —
            আপনার প্রতিষ্ঠান পরিচালনা করুন ১০০% ডিজিটাল ও নির্ভুলভাবে।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Button
              size="lg"
              asChild
              className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base px-7 h-12 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>ফ্রি ডেমো বুক করুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 font-medium text-base px-6 h-12 rounded-xl"
            >
              <Link href="/features" className="flex items-center gap-2">
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                <span>ফিচারসমূহ দেখুন</span>
              </Link>
            </Button>
          </div>

          {/* Key Value Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Institution Type Selector Tabs */}
        <div className="w-full max-w-2xl mx-auto mt-12 mb-8">
          <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80">
            {institutionTypes.map((type, idx) => {
              const Icon = type.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">{type.name}</span>
                  <span className="sm:hidden">{type.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2.5">
            {institutionTypes[activeTab].desc}
          </p>
        </div>

        {/* Hero Showcase / Dashboard Mockup */}
        <div className="w-full max-w-5xl mx-auto relative mt-8">
          <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/60 dark:bg-slate-900/60 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
            {/* Mockup Window Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-slate-800/60 mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 font-mono">
                app.hellosoft-erp.com/dashboard
              </div>
              <div className="w-10" />
            </div>

            {/* Dashboard Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/50">
              <Image
                src={assets.home}
                alt="Hello Soft ERP Dashboard"
                fill
                priority
                className="object-cover object-top hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Floating Glass Stat Card 1 - Attendance */}
            <div className="absolute -left-2 sm:-left-6 top-1/3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-in fade-in duration-700">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">আজকের হাজিরা</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>৯৮.৪%</span>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-sm">+২.১%</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Stat Card 2 - Results */}
            <div className="absolute -right-2 sm:-right-6 bottom-10 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-in fade-in duration-700 delay-150">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">ফলাফল তৈরি</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  <span>স্বয়ংক্রিয় প্রসেসিং</span>
                  <ShieldCheck className="w-4 h-4 text-blue-600 inline" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
