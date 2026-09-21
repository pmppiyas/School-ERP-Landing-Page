import React from 'react';
import { ArrowRight, Clock, Zap, UserPlus, FileCheck, CreditCard, Sparkles } from 'lucide-react';

const quickActions = [
  {
    time: '১৫ সেকেন্ডে',
    title: 'নতুন ছাত্র নিবন্ধন',
    desc: 'ফর্ম পূরণ থেকে আইডি তৈরি ও অটো রোল প্রদান',
    icon: UserPlus,
    color: 'from-blue-600 to-indigo-600',
    badgeBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200/60',
  },
  {
    time: '১০ সেকেন্ডে',
    title: 'অনলাইন ভর্তি অনুমোদন',
    desc: 'আবেদন যাচাই ও এক ক্লিকে ভর্তি নিশ্চিতকরণ',
    icon: Sparkles,
    color: 'from-purple-600 to-pink-600',
    badgeBg: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200/60',
  },
  {
    time: '৫ সেকেন্ডে',
    title: 'ফি কালেকশন ও রিসিট',
    desc: 'পেমেন্ট গ্রহণ ও তাৎক্ষণিক প্রিন্টেবল ভাউচার',
    icon: CreditCard,
    color: 'from-emerald-600 to-teal-600',
    badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200/60',
  },
  {
    time: '১০ সেকেন্ডে',
    title: 'ফলাফল প্রকাশ ও SMS',
    desc: 'গ্রেড শিট তৈরি ও অভিভাবকদের ফোনে ফলাফল',
    icon: FileCheck,
    color: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200/60',
  },
];

const QuickActionsSection = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-linear-to-b from-blue-50/50 via-indigo-50/30 to-white dark:from-slate-900/50 dark:via-slate-900/80 dark:to-slate-950 border-t border-slate-100 dark:border-slate-800">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold shadow-xs">
            <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>সুপারফাস্ট অটোমেশন</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            কয়েক সেকেন্ডেই সম্পন্ন করুন{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              প্রতিদিনের কাজ
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            ম্যানুয়াল খাতা-কলমের ঝামেলা বাদ দিন। Hello Soft ERP-তে সবচেয়ে বড় কাজগুলো
            সম্পন্ন হয় চোখের পলকে।
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {quickActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center p-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Time Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold border mb-6 ${action.badgeBg}`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{action.time}</span>
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-r ${action.color} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {action.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {action.desc}
                </p>

                {/* Arrow Accent */}
                <div className="mt-6 flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <span>ঝটপট শুরু করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActionsSection;
