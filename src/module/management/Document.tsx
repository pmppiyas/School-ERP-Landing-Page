import React from 'react';
import { FileText, Award, CreditCard, FileSpreadsheet, Sparkles } from 'lucide-react';

const documents = [
  {
    title: 'অ্যাডমিট কার্ড শিট',
    desc: 'পরীক্ষার জন্য শিক্ষার্থীদের ছবি ও রুটিন সম্বলিত অ্যাডমিট কার্ড দ্রুত জেনারেট করুন।',
    icon: FileText,
    color: 'from-blue-600 to-indigo-600',
    bg: 'bg-blue-50 dark:bg-blue-950/60',
    border: 'border-blue-200/60',
  },
  {
    title: 'প্রশংসাপত্র ও প্রত্যয়ন',
    desc: 'শিক্ষার্থীদের মেধা ও কৃতিত্ব অনুযায়ী টেস্টিমোনিয়াল ও চারিত্রিক সনদ তৈরি ও ডাউনলোড।',
    icon: Award,
    color: 'from-purple-600 to-pink-600',
    bg: 'bg-purple-50 dark:bg-purple-950/60',
    border: 'border-purple-200/60',
  },
  {
    title: 'বেতন পে-স্লিপ ও ভাউচার',
    desc: 'শিক্ষক ও স্টাফদের মাসিক বেতন ও বোনাস অনুযায়ী স্বয়ংক্রিয় পে-স্লিপ বিতরণ।',
    icon: CreditCard,
    color: 'from-emerald-600 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60',
    border: 'border-emerald-200/60',
  },
  {
    title: 'প্রশাসনিক হিসাব রিপোর্ট',
    desc: 'শিক্ষার্থী, ফি, উপস্থিতি ও পরীক্ষার সমস্ত বাৎসরিক হিসাব রিপোর্ট তৈরি ও সংরক্ষণ।',
    icon: FileSpreadsheet,
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 dark:bg-amber-950/60',
    border: 'border-amber-200/60',
  },
];

const DocumentGeneration = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>স্বয়ংক্রিয় সনদ ও রসিদ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            ডকুমেন্ট{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              জেনারেশন
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            স্কুল পরিচালনার জন্য প্রয়োজনীয় সকল সনদ, রিপোর্ট ও ডকুমেন্ট তৈরি করুন
            মাত্র কয়েক ক্লিকেই।
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {documents.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800/80 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div
                  className={`mb-5 w-14 h-14 flex items-center justify-center rounded-2xl bg-linear-to-r ${doc.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  {doc.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {doc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocumentGeneration;
