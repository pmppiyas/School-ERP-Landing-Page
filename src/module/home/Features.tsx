'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  CreditCard,
  FileCheck,
  Smartphone,
  Printer,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowRight,
  Bell,
  Award,
  Lock,
} from 'lucide-react';

const coreFeatures = [
  {
    id: 'attendance',
    title: 'স্মার্ট বায়োমেট্রিক হাজিরা ও অটো SMS',
    subtitle: 'অভিভাবকের ফোনে তাৎক্ষণিক নোটিফিকেশন',
    desc: 'RFID কার্ড কিংবা ফিঙ্গারপ্রিন্ট পাঞ্চের মাধ্যমে শিক্ষার্থী ও শিক্ষকদের উপস্থিতি স্বয়ংক্রিয়ভাবে সংরক্ষিত হয় এবং অনুপস্থিত থাকলে সাথে সাথে অভিভাবকের ফোনে বাংলা SMS পৌঁছে যায়।',
    icon: Users,
    gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400',
    iconBorder: 'border-blue-200/80 dark:border-blue-900/60',
    tag: '৯৯.৯% নির্ভুল ট্র্যাকিং',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200/80 dark:bg-blue-950/70 dark:text-blue-300',
    mockupType: 'sms',
    mockupText: '✉️ SMS: তামিম আজ সকাল ০৮:২৫ মিনিটে বিদ্যালয়ে উপস্থিত হয়েছে।',
    bullets: [
      'বায়োমেট্রিক ও RFID পাঞ্চ মেশিন ইন্টিগ্রেশন',
      'অনুপস্থিত শিক্ষার্থীদের তালিকায় ১ ক্লিকে অভিভাবক SMS',
      'শিক্ষক ও কর্মচারীদের দৈনিক শিফট ও ইন-আউট টাইম লগ',
    ],
    href: '/features',
  },
  {
    id: 'fee',
    title: 'ডিজিটাল ফি কালেকশন ও অনলাইন পেমেন্ট',
    subtitle: 'বিকাশ, নগদ ও কার্ডে ফি আদায়',
    desc: 'বিকাশ, নগদ, রকেট কিংবা ভিসা কার্ডের মাধ্যমে অভিভাবকরা ঘরে বসেই শিক্ষার্থীদের টিউশন ফি প্রদান করতে পারেন। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই ডিজিটাল মানি রিসিট তৈরি হয়।',
    icon: CreditCard,
    gradient: 'from-emerald-600 via-teal-600 to-green-500',
    iconBg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400',
    iconBorder: 'border-emerald-200/80 dark:border-emerald-900/60',
    tag: 'শূন্য বকেয়া সমাধান',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/70 dark:text-emerald-300',
    mockupType: 'receipt',
    mockupText: '💳 পেমেন্ট সফল: ৳২,৫০০ • মানি রিসিট #REC-9821 ✓',
    bullets: [
      'বিকাশ, নগদ, রকেট ও অনলাইন গেটওয়ে সাপোর্ট',
      'বকেয়া ফি হিসাব ও অটোমেটেড বকেয়া রিমাইন্ডার SMS',
      'প্রতিদিনের মোট আদায়ের স্বয়ংক্রিয় ডে-ক্লোজিং হিসাব',
    ],
    href: '/management#fee-management',
  },
  {
    id: 'result',
    title: 'স্বয়ংক্রিয় ফলাফল ও মার্কশিট জেনারেশন',
    subtitle: 'গ্রেডিং ও টেবুলেশন শিট এক ক্লিকে',
    desc: 'পরীক্ষার নম্বর ইনপুট দেওয়ার সাথে সাথেই জাতীয় শিক্ষাবোর্ড কিংবা প্রতিষ্ঠানের নিজস্ব গ্রেডিং স্কেল অনুযায়ী সম্পূর্ণ নির্ভুল মার্কশিট, মেরিট লিস্ট ও টেবুলেশন শিট তৈরি হয়ে যায়।',
    icon: FileCheck,
    gradient: 'from-rose-500 via-pink-600 to-amber-500',
    iconBg: 'bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400',
    iconBorder: 'border-rose-200/80 dark:border-rose-900/60',
    tag: '১ ক্লিকে রেজাল্ট প্রসেসিং',
    tagColor: 'bg-rose-50 text-rose-700 border-rose-200/80 dark:bg-rose-950/70 dark:text-rose-300',
    mockupType: 'result',
    mockupText: '🏆 GPA 5.00 (Golden A+) • মেধা স্থান: ১ম শ্রেণিভিত্তিক ✓',
    bullets: [
      'বিষয়ভিত্তিক প্রাপ্ত নম্বর ও স্বয়ংক্রিয় জিপিএ হিসাব',
      'প্রতিষ্ঠান প্রধানের স্বাক্ষর সহ প্রিন্ট-রেডি মার্কশিট',
      'রেজাল্ট প্রকাশের সাথে সাথেই অভিভাবকদের ফোনে ফলাফল SMS',
    ],
    href: '/management#result-management',
  },
  {
    id: 'app',
    title: 'শিক্ষক, শিক্ষার্থী ও অভিভাবক মোবাইল অ্যাপ',
    subtitle: 'স্মার্টফোনে প্রতিষ্ঠানের সকল তথ্য',
    desc: 'অভিভাবক, শিক্ষার্থী ও শিক্ষকদের জন্য আলাদা ইউজার-ফ্রেন্ডলি মোবাইল অ্যাপ। প্রতিদিনের বাড়ির কাজ, ক্লাস রুটিন, পরীক্ষার নোটিশ এবং উপস্থিতির আপডেট এখন হাতের মুঠোয়।',
    icon: Smartphone,
    gradient: 'from-purple-600 via-violet-600 to-indigo-500',
    iconBg: 'bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400',
    iconBorder: 'border-purple-200/80 dark:border-purple-900/60',
    tag: 'Android ও iOS রেডি',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/70 dark:text-purple-300',
    mockupType: 'app',
    mockupText: '📱 লাইভ পুশ নোটিফিকেশন: আগামীকালের ক্লাস টেস্টের সিলেবাস',
    bullets: [
      'অভিভাবকের জন্য সন্তান মনিটরিং পোর্টাল',
      'শিক্ষকদের মোবাইল থেকে সরাসরি নম্বর ও উপস্থিতি ইনপুট',
      'ডিজিটাল স্টুডেন্ট ডায়েরি ও ক্লাসের নোটিশ বোর্ড',
    ],
    href: '/features',
  },
  {
    id: 'admit',
    title: 'অ্যাডমিট কার্ড ও প্রশংসাপত্র অটোমেশন',
    subtitle: 'কয়েক সেকেন্ডেই বাল্ক ডকুমেন্ট তৈরি',
    desc: 'ম্যানুয়ালি ঘণ্টার পর ঘণ্টা লিখে নয়, এক ক্লিকেই সম্পূর্ণ ক্লাসের সকল শিক্ষার্থীর ছবি, রোল নম্বর ও পরীক্ষার রুটিন সম্বলিত অ্যাডমিট কার্ড ও প্রশংসাপত্র প্রিন্ট করুন।',
    icon: Printer,
    gradient: 'from-amber-500 via-orange-600 to-red-500',
    iconBg: 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400',
    iconBorder: 'border-amber-200/80 dark:border-amber-900/60',
    tag: 'বাল্ক প্রিন্ট সুবিধা',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/70 dark:text-amber-300',
    mockupType: 'admit',
    mockupText: '📄 অ্যাডমিট কার্ড • রোল: ১২ • QR কোড ও ছবি সহ প্রিন্ট রেডি',
    bullets: [
      'এক ক্লিকে শত শত শিক্ষার্থীর বাল্ক অ্যাডমিট জেনারেশন',
      'প্রতিষ্ঠানের নিজস্ব লোগো ও ওয়াটারমার্ক যুক্ত করার সুবিধা',
      'টেস্টিমোনিয়াল, চারিত্রিক সনদ ও ট্রান্সক্রিপ্ট প্রিন্ট',
    ],
    href: '/features',
  },
  {
    id: 'security',
    title: '১০০% ক্লাউড ব্যাকআপ ও সর্বোচ্চ সাইবার নিরাপত্তা',
    subtitle: 'আজীবন ডেটা সুরক্ষার নিশ্চয়তা',
    desc: 'আপনার প্রতিষ্ঠানের ছাত্র, শিক্ষক ও আর্থিক হিসাবের সমস্ত ডেটা এনক্রিপ্ট করে ক্লাউডে সুরক্ষিত রাখা হয়। প্রতিদিন স্বয়ংক্রিয় ব্যাকআপ থাকায় ডেটা হারানোর কোনো ভয় নেই।',
    icon: ShieldCheck,
    gradient: 'from-cyan-600 via-blue-600 to-slate-700',
    iconBg: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400',
    iconBorder: 'border-cyan-200/80 dark:border-cyan-900/60',
    tag: '256-Bit এনক্রিপশন',
    tagColor: 'bg-cyan-50 text-cyan-700 border-cyan-200/80 dark:bg-cyan-950/70 dark:text-cyan-300',
    mockupType: 'security',
    mockupText: '🔒 SSL সিকিউরড • স্বয়ংক্রিয় ডেইলি ক্লাউড ব্যাকআপ সক্রিয়',
    bullets: [
      '২৪/৭ স্বয়ংক্রিয় রিয়েল-টাইম ক্লাউড ব্যাকআপ',
      'রোল-ভিত্তিক ইউজার পারমিশন (প্রিন্সিপাল, একাউন্টস, টিচার)',
      'কম্পিউটার বা মোবাইল নষ্ট হলেও কোনো ডেটা হারাবে না',
    ],
    href: '/solutions',
  },
];

const Features = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800 overflow-hidden">
      {/* Background Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>আধুনিক প্রযুক্তি ও স্বয়ংক্রিয় প্রশাসন</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            যেসব ফিচারে আমরা{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              অন্যদের চেয়ে অনন্য
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            শিক্ষা প্রতিষ্ঠানের প্রতিটি প্রশাসনিক ও একাডেমিক কাজকে নিমেষেই সহজ,
            স্বয়ংক্রিয় ও নির্ভুল করতে তৈরি হয়েছে আমাদের শীর্ষস্থানীয় ফিচারসমূহ।
          </p>
        </div>

        {/* Features Grid - 6 High Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-7 sm:p-8 shadow-xs hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Hover Gradient Bar */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Card Header: Icon + Benefit Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconBorder} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>

                  {/* Interactive UI Simulation Badge */}
                  <div className="mb-5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2 shadow-inner">
                    <span className="shrink-0 flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="truncate">{item.mockupText}</span>
                  </div>

                  {/* Key Highlights Checklist */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                    {item.bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    ফিচার ডেমো
                  </span>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xs group-hover:translate-x-0.5"
                  >
                    <span>বিস্তারিত দেখুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
