'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  UserCog,
  ClipboardCheck,
  CreditCard,
  CalendarDays,
  BookOpenCheck,
  FileText,
  Library,
  Bus,
  MessageSquare,
  BarChart3,
  Settings,
  ArrowRight,
  Sparkles,
  Check,
  Layers,
} from 'lucide-react';

const enrichedModules = [
  {
    id: 'student',
    title: 'শিক্ষার্থী ব্যবস্থাপনা',
    category: 'প্রশাসনিক',
    desc: 'ভর্তি প্রক্রিয়া, ডিজিটাল প্রোফাইল, ক্লাস, সেকশন, রোল ও অভিভাবক তথ্য এক ক্লিকে সংরক্ষণ ও অনুসন্ধান।',
    highlights: ['অনলাইন ও অফলাইন ভর্তি', 'ডিজিটাল আইডি ও পূর্ণাঙ্গ প্রোফাইল'],
    icon: Users,
    gradient: 'from-blue-600 to-indigo-600',
    iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400',
    iconBorder: 'border-blue-100 dark:border-blue-900/60',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200/80 dark:bg-blue-950/70 dark:text-blue-300',
    href: '/management#student-management',
  },
  {
    id: 'teacher',
    title: 'শিক্ষক ও স্টাফ ব্যবস্থাপনা',
    category: 'প্রশাসনিক',
    desc: 'শিক্ষক ও কর্মচারীর ডাটাবেস, পদবি, বিষয় বরাদ্দ, ক্লাস শিডিউল এবং মাসিক উপস্থিতি নিয়ন্ত্রণ।',
    highlights: ['বিষয় ও শিফট বণ্টন', 'ছুটি ও বায়োমেট্রিক রেকর্ড'],
    icon: UserCog,
    gradient: 'from-indigo-600 to-purple-600',
    iconBg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400',
    iconBorder: 'border-indigo-100 dark:border-indigo-900/60',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/70 dark:text-indigo-300',
    href: '/management#teacher-management',
  },
  {
    id: 'attendance',
    title: 'হাজিরা ব্যবস্থাপনা',
    category: 'একাডেমিক',
    desc: 'শিক্ষার্থী ও শিক্ষকদের দৈনিক হাজিরা ডিজিটালভাবে সংরক্ষণ এবং অনুপস্থিতিতে তাৎক্ষণিক SMS নোটিফিকেশন।',
    highlights: ['RFID ও বায়োমেট্রিক সাপোর্ট', 'অভিভাবকদের ইনস্ট্যান্ট SMS'],
    icon: ClipboardCheck,
    gradient: 'from-emerald-600 to-teal-600',
    iconBg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400',
    iconBorder: 'border-emerald-100 dark:border-emerald-900/60',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/70 dark:text-emerald-300',
    href: '/features',
  },
  {
    id: 'fee',
    title: 'ফি ও হিসাব ব্যবস্থাপনা',
    category: 'আর্থিক ও রিপোর্ট',
    desc: 'বিকাশ, নগদ, রকেটের মাধ্যমে টিউশন ফি সংগ্রহ, বকেয়া ট্র্যাকিং ও তাৎক্ষণিক মানি রিসিট প্রদান।',
    highlights: ['অনলাইন ফি কালেকশন', 'অটো মানি রিসিট ও ভাউচার'],
    icon: CreditCard,
    gradient: 'from-emerald-600 to-green-600',
    iconBg: 'bg-green-50 text-green-600 dark:bg-green-950/60 dark:text-green-400',
    iconBorder: 'border-green-100 dark:border-green-900/60',
    tagColor: 'bg-green-50 text-green-700 border-green-200/80 dark:bg-green-950/70 dark:text-green-300',
    href: '/management#fee-management',
  },
  {
    id: 'schedule',
    title: 'ক্লাস রুটিন ব্যবস্থাপনা',
    category: 'একাডেমিক',
    desc: 'ক্লাস, সেকশন, বিষয় ও শিক্ষক অনুযায়ী কনফ্লিক্ট-মুক্ত আধুনিক ক্লাস সময়সূচি প্রণয়ন।',
    highlights: ['কনফ্লিক্ট-ফ্রি শিডিউলিং', 'প্রিন্ট ও মোবাইল রুটিন ভিউ'],
    icon: CalendarDays,
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400',
    iconBorder: 'border-amber-100 dark:border-amber-900/60',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/70 dark:text-amber-300',
    href: '/management#class-schedule',
  },
  {
    id: 'result',
    title: 'পরীক্ষা ও ফলাফল ব্যবস্থাপনা',
    category: 'একাডেমিক',
    desc: 'নম্বর ইনপুট দিলেই গ্রেডিং অনুযায়ী স্বয়ংক্রিয় মার্কশিট, মেরিট লিস্ট ও দ্রুত রেজাল্ট প্রকাশ।',
    highlights: ['অটো জিপিএ ও মার্কশিট', 'মেধা তালিকা ও SMS রেজাল্ট'],
    icon: BookOpenCheck,
    gradient: 'from-rose-500 to-red-600',
    iconBg: 'bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400',
    iconBorder: 'border-rose-100 dark:border-rose-900/60',
    tagColor: 'bg-rose-50 text-rose-700 border-rose-200/80 dark:bg-rose-950/70 dark:text-rose-300',
    href: '/management#result-management',
  },
  {
    id: 'notice',
    title: 'ডায়েরি ও নোটিশ বোর্ড',
    category: 'যোগাযোগ ও অন্যান্য',
    desc: 'দৈনিক হোমওয়ার্ক, ক্লাস ওয়ার্ক, নোটিশ, ছুটি ও জরুরি ঘোষণা ডিজিটালভাবে দ্রুত শেয়ার।',
    highlights: ['ডিজিটাল স্টুডেন্ট ডায়েরি', 'নোটিশ ও সার্কুলার পুশ'],
    icon: FileText,
    gradient: 'from-purple-600 to-violet-600',
    iconBg: 'bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400',
    iconBorder: 'border-purple-100 dark:border-purple-900/60',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/70 dark:text-purple-300',
    href: '/solutions',
  },
  {
    id: 'library',
    title: 'লাইব্রেরি ব্যবস্থাপনা',
    category: 'একাডেমিক',
    desc: 'বইয়ের ডিজিটাল তালিকা, বারকোড স্ক্যানিং, ইস্যু-রিটার্ন এবং লেট ফি জরিমানা ট্র্যাকিং।',
    highlights: ['বারকোড বুক ট্র্যাকিং', 'ইস্যু ও রিটার্ন রিমাইন্ডার'],
    icon: Library,
    gradient: 'from-teal-600 to-cyan-600',
    iconBg: 'bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400',
    iconBorder: 'border-teal-100 dark:border-teal-900/60',
    tagColor: 'bg-teal-50 text-teal-700 border-teal-200/80 dark:bg-teal-950/70 dark:text-teal-300',
    href: '/solutions',
  },
  {
    id: 'bus',
    title: 'পরিবহন ব্যবস্থাপনা',
    category: 'প্রশাসনিক',
    desc: 'স্কুল বাস ও ভ্যান ট্র্যাকিং, রুট ও স্টপেজ নির্ধারণ এবং শিক্ষার্থীদের সিট বরাদ্দ নিয়ন্ত্রণ।',
    highlights: ['রুট ও ড্রপ পয়েন্ট শিডিউল', 'পরিবহন ফি ট্র্যাকিং'],
    icon: Bus,
    gradient: 'from-cyan-600 to-blue-600',
    iconBg: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400',
    iconBorder: 'border-cyan-100 dark:border-cyan-900/60',
    tagColor: 'bg-cyan-50 text-cyan-700 border-cyan-200/80 dark:bg-cyan-950/70 dark:text-cyan-300',
    href: '/solutions',
  },
  {
    id: 'sms',
    title: 'SMS ও নোটিফিকেশন',
    category: 'যোগাযোগ ও অন্যান্য',
    desc: 'হাজিরা, বকেয়া ফি, পরীক্ষার তারিখ ও নোটিশ সংক্রান্ত এক ক্লিকে বাল্ক SMS প্রেরণ।',
    highlights: ['বাংলা ও ইংরেজি SMS', 'রিয়েল-টাইম ডেলিভারি রিপোর্ট'],
    icon: MessageSquare,
    gradient: 'from-pink-600 to-rose-600',
    iconBg: 'bg-pink-50 text-pink-600 dark:bg-pink-950/60 dark:text-pink-400',
    iconBorder: 'border-pink-100 dark:border-pink-900/60',
    tagColor: 'bg-pink-50 text-pink-700 border-pink-200/80 dark:bg-pink-950/70 dark:text-pink-300',
    href: '/solutions',
  },
  {
    id: 'reports',
    title: 'রিপোর্ট ও অ্যানালিটিক্স',
    category: 'আর্থিক ও রিপোর্ট',
    desc: 'প্রতিষ্ঠানের সামগ্রিক আয়-ব্যয়, ছাত্র-শিক্ষক অনুপাত ও একাডেমিক অগ্রগতির পুঙ্খানুপুঙ্খ ড্যাশবোর্ড।',
    highlights: ['দৈনিক ডে-ক্লোজিং রিপোর্ট', 'PDF ও Excel ফাইল এক্সপোর্ট'],
    icon: BarChart3,
    gradient: 'from-fuchsia-600 to-purple-600',
    iconBg: 'bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-950/60 dark:text-fuchsia-400',
    iconBorder: 'border-fuchsia-100 dark:border-fuchsia-900/60',
    tagColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200/80 dark:bg-fuchsia-950/70 dark:text-fuchsia-300',
    href: '/solutions',
  },
  {
    id: 'settings',
    title: 'সিস্টেম সেটিংস ও সিকিউরিটি',
    category: 'প্রশাসনিক',
    desc: 'নতুন শিক্ষাবর্ষ, ক্লাস, শাখা, গ্রেড স্কেল ও রোল-ভিত্তিক অ্যাডমিন পারমিশন নিয়ন্ত্রণ।',
    highlights: ['অটোমেটেড ক্লাউড ব্যাকআপ', 'রোল বেসড ইউজার পারমিশন'],
    icon: Settings,
    gradient: 'from-slate-700 to-slate-900',
    iconBg: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    iconBorder: 'border-slate-200 dark:border-slate-700',
    tagColor: 'bg-slate-100 text-slate-700 border-slate-200/80 dark:bg-slate-800 dark:text-slate-300',
    href: '/solutions',
  },
];

const categories = [
  'সকল মডিউল',
  'একাডেমিক',
  'প্রশাসনিক',
  'আর্থিক ও রিপোর্ট',
  'যোগাযোগ ও অন্যান্য',
];

const AllModulesPage = () => {
  const [activeCategory, setActiveCategory] = useState('সকল মডিউল');

  const filteredModules =
    activeCategory === 'সকল মডিউল'
      ? enrichedModules
      : enrichedModules.filter((m) => m.category === activeCategory);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-linear-to-b from-white via-slate-50/40 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 overflow-hidden">
      {/* Decorative Grid & Ambient Blur */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold shadow-xs">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>সম্পূর্ণ মডিউল ক্যাটালগ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            আমাদের স্কুল ERP{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              মডিউলসমূহ
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            ভর্তি থেকে শুরু করে ফলাফল, ফি, হাজিরা, নোটিশ ও বিস্তারিত রিপোর্ট —
            স্কুল পরিচালনার সকল ম্যানেজমেন্ট এক প্ল্যাটফর্মে সাজানো হয়েছে।
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
                {cat === 'সকল মডিউল' && ` (${enrichedModules.length})`}
              </button>
            );
          })}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredModules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 sm:p-8 shadow-xs hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Gradient Accent Line on Hover */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-linear-to-r ${module.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Top Row: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${module.iconBg} ${module.iconBorder} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${module.tagColor}`}
                    >
                      {module.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-5">
                    {module.desc}
                  </p>

                  {/* Key Highlights / Feature Bullets */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    {module.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    রেডি মডিউল
                  </span>

                  <Link
                    href={module.href}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xs group-hover:translate-x-0.5"
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

export default AllModulesPage;
