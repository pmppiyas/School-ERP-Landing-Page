import React from 'react';
import {
  Users,
  UserCheck,
  CreditCard,
  FileCheck,
  Smartphone,
  BookOpen,
  Bus,
  Bell,
  ClipboardList,
  Library,
  BarChart3,
  Settings2,
  Sparkles,
} from 'lucide-react';

export const solutions = [
  {
    title: 'শিক্ষার্থী ব্যবস্থাপনা',
    desc: 'ভর্তি, প্রোফাইল, ক্লাস, রোল, অভিভাবক তথ্য এবং শিক্ষার্থীর সম্পূর্ণ রেকর্ড ব্যবস্থাপনা।',
    icon: Users,
    color: 'from-blue-600 to-indigo-600',
    bg: 'bg-blue-50 dark:bg-blue-950/60',
  },
  {
    title: 'শিক্ষক ও স্টাফ ব্যবস্থাপনা',
    desc: 'শিক্ষক ও কর্মচারীর তথ্য, দায়িত্ব, বিষয় বরাদ্দ এবং উপস্থিতি নিয়ন্ত্রণ।',
    icon: UserCheck,
    color: 'from-purple-600 to-pink-600',
    bg: 'bg-purple-50 dark:bg-purple-950/60',
  },
  {
    title: 'হাজিরা ব্যবস্থাপনা',
    desc: 'শিক্ষার্থী ও শিক্ষকের দৈনিক ডিজিটাল হাজিরা সংরক্ষণ এবং তাৎক্ষণিক SMS রিপোর্ট।',
    icon: ClipboardList,
    color: 'from-emerald-600 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60',
  },
  {
    title: 'ফি ও হিসাব ব্যবস্থাপনা',
    desc: 'অনলাইন ফি কালেকশন, বেতন, ডিজিটাল রসিদ, ডিসকাউন্ট এবং আর্থিক লেজার।',
    icon: CreditCard,
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 dark:bg-amber-950/60',
  },
  {
    title: 'ক্লাস রুটিন ব্যবস্থাপনা',
    desc: 'ক্লাস, বিষয় এবং শিক্ষক অনুযায়ী স্মার্ট কনফ্লিক্ট-মুক্ত সময়সূচি প্রণয়ন।',
    icon: BookOpen,
    color: 'from-indigo-600 to-blue-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/60',
  },
  {
    title: 'পরীক্ষা ও ফলাফল ব্যবস্থাপনা',
    desc: 'পরীক্ষা নিয়ন্ত্রণ, মার্কস এন্ট্রি, গ্রেডিং এবং স্বয়ংক্রিয় রেজাল্ট প্রকাশ।',
    icon: FileCheck,
    color: 'from-rose-500 to-red-600',
    bg: 'bg-rose-50 dark:bg-rose-950/60',
  },
  {
    title: 'ডায়েরি ও নোটিশ বোর্ড',
    desc: 'হোমওয়ার্ক, নোটিশ, জরুরি ঘোষণা এবং একাডেমিক ক্যালেন্ডার দ্রুত শেয়ার।',
    icon: Bell,
    color: 'from-yellow-500 to-amber-600',
    bg: 'bg-yellow-50 dark:bg-yellow-950/60',
  },
  {
    title: 'লাইব্রেরি ব্যবস্থাপনা',
    desc: 'বই ক্যাটালগিং, ইস্যু-রিটার্ন ট্র্যাকিং, জরিমানা এবং লাইব্রেরি রিপোর্ট।',
    icon: Library,
    color: 'from-teal-600 to-emerald-600',
    bg: 'bg-teal-50 dark:bg-teal-950/60',
  },
  {
    title: 'পরিবহন ব্যবস্থাপনা',
    desc: 'স্কুল বাস, রুট শিডিউল, ড্রাইভার তথ্য এবং শিক্ষার্থী সিট বরাদ্দ নিয়ন্ত্রণ।',
    icon: Bus,
    color: 'from-cyan-600 to-blue-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/60',
  },
  {
    title: 'SMS ও অ্যালার্ট সিস্টেম',
    desc: 'শিক্ষার্থী ও অভিভাবকদের জন্য জরুরি SMS, নোটিফিকেশন এবং কাস্টম নোটিশ পাঠানো।',
    icon: Smartphone,
    color: 'from-violet-600 to-purple-600',
    bg: 'bg-violet-50 dark:bg-violet-950/60',
  },
  {
    title: 'রিপোর্ট ও অ্যানালিটিক্স',
    desc: 'একাডেমিক প্রগ্রেস ও ফাইন্যান্সিয়াল লাভ-ক্ষতির বিশ্লেষণ ও ডেটা রিপোর্ট।',
    icon: BarChart3,
    color: 'from-fuchsia-600 to-pink-600',
    bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/60',
  },
  {
    title: 'সিস্টেম সেটিংস ও পারমিশন',
    desc: 'সেশন, ক্লাস, গ্রেড স্কেল, ইউজার রোল এবং অ্যাডমিন অ্যাক্সেস কনফিগারেশন।',
    icon: Settings2,
    color: 'from-slate-600 to-slate-800',
    bg: 'bg-slate-100 dark:bg-slate-800/60',
  },
];

const SolutionsSection = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-950">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>১২+ বিশেষায়িত মডিউল</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            প্রতিষ্ঠানের প্রতিটি কাজের জন্য{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              পরিপূর্ণ সমাধান
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            একটি প্ল্যাটফর্মেই প্রতিষ্ঠানের প্রশাসনিক, আর্থিক, একাডেমিক ও যোগাযোগ
            ব্যবস্থা পরিচালনা করুন কোনো ঝামেলা ছাড়াই।
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-r ${solution.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {solution.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-indigo-600 transition-colors">
                  রেডি সল্যুশন →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
