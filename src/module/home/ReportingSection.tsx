import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets';
import { CheckCircle2, ShieldCheck, FileSpreadsheet, BellRing } from 'lucide-react';

const features = [
  {
    title: 'আয় ও ব্যয়ের সংক্ষিপ্ত দৈনিক রিপোর্ট',
    desc: 'প্রতিদিনের গুরুত্বপূর্ণ আয় ও ব্যয়ের হিসাব স্বয়ংক্রিয়ভাবে SMS ও ড্যাশবোর্ডে দেখে নিন।',
    icon: FileSpreadsheet,
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/60',
  },
  {
    title: 'দৈনিক উপস্থিতি ও অনুপস্থিতি বিশ্লেষণ',
    desc: 'শিক্ষক, শিক্ষার্থী ও কর্মচারীদের দৈনিক উপস্থিতি স্বয়ংক্রিয় সংগ্রহ এবং তাৎক্ষণিক রিপোর্ট।',
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60',
  },
  {
    title: 'অটো ডে-ক্লোজিং হিসাব সংরক্ষণ',
    desc: 'প্রতি কর্মদিবস শেষে কোনো হিসাববিদ ছাড়াই স্বয়ংক্রিয়ভাবে ক্যাশ ও ব্যাংক ব্যালেন্স ক্লোজিং।',
    icon: ShieldCheck,
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-950/60',
  },
  {
    title: 'রিয়েল-টাইম SMS ও মোবাইল নোটিফিকেশন',
    desc: 'বকেয়া ফি, নোটিশ, পরীক্ষার ফলাফল এবং জরুরি তথ্য সরাসরি অভিভাবকের মোবাইলে পৌঁছে যায়।',
    icon: BellRing,
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/60',
  },
];

const SmartReportingSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>নিশ্চিন্ত ও নির্ভুল প্রশাসন</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            টেনশন মুক্ত থাকুন, সব রিপোর্ট থাকবে{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              হাতের মুঠোয়
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            আধুনিক School ERP ব্যবস্থার মাধ্যমে প্রতিদিনের গুরুত্বপূর্ণ রিপোর্ট
            ও আপডেট সরাসরি আপনার মোবাইলে পৌঁছে যাবে। আলাদা করে কাউকে জিজ্ঞাসা
            করার প্রয়োজন নেই।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Feature List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group flex gap-4 sm:gap-5 items-start p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800/80 transition-all duration-300"
                >
                  {/* Icon Capsule */}
                  <div
                    className={`w-12 h-12 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 p-2 sm:p-3">
                <Image
                  src={assets.agent}
                  alt="Reporting Illustration"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    অটো জেনারেটেড রিপোর্ট
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    PDF ও Excel সাপোর্ট
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartReportingSection;
