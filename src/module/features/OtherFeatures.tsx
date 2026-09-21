import React from 'react';
import {
  FileText,
  CreditCard,
  BellRing,
  DownloadCloud,
  FileCheck,
  FolderLock,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    title: 'অ্যাডমিট কার্ড ও প্রশংসাপত্র',
    desc: 'পরীক্ষার জন্য অ্যাডমিট কার্ড ও শিক্ষার্থীদের প্রশংসাপত্র তৈরি করুন মাত্র এক ক্লিকে।',
    icon: FileText,
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/60',
  },
  {
    title: 'অটো পে-স্লিপ জেনারেশন',
    desc: 'শিক্ষক ও কর্মচারীদের মাসিক বেতন অনুযায়ী পে-স্লিপ ও ভাউচার অটোমেটেডভাবে তৈরি।',
    icon: CreditCard,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60',
  },
  {
    title: 'স্মার্ট নোটিফিকেশন সিস্টেম',
    desc: 'শিক্ষক, শিক্ষার্থী ও অভিভাবকদের জন্য জরুরি নোটিশ ও একাডেমিক আপডেট সরাসরি পৌঁছে দেওয়া।',
    icon: BellRing,
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/60',
  },
  {
    title: 'PDF ও Excel রিপোর্ট এক্সপোর্ট',
    desc: 'দৈনন্দিন, মাসিক বা বাৎসরিক সমস্ত হিসাব ও তালিকা নিমেষেই PDF বা Excel ফাইল আকারে ডাউনলোড।',
    icon: DownloadCloud,
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-950/60',
  },
  {
    title: 'কাস্টম প্রত্যয়ন ও সার্টিফিকেট',
    desc: 'প্রতিষ্ঠানের নিজস্ব লোগো ও ব্র্যান্ডিং অনুযায়ী চারিত্রিক সনদ ও ট্রান্সক্রিপ্ট তৈরি।',
    icon: FileCheck,
    color: 'text-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/60',
  },
  {
    title: 'নিরাপদ ডিজিটাল আর্কাইভ',
    desc: 'শিক্ষার্থীদের ভর্তি ফর্ম, জন্মসনদ ও প্রয়োজনীয় ফাইল আজীবনের জন্য ক্লাউডে সুরক্ষিত সংরক্ষণ।',
    icon: FolderLock,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/60',
  },
];

const OtherFeatures = () => {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800 scroll-mt-20"
      id="other-feature"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>প্রয়োজনীয় অতিরিক্ত টুলস</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            অন্যান্য কার্যকরী{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ফিচারসমূহ
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            আমাদের School ERP সফটওয়্যার শুধুমাত্র বড় মডিউল নয়,
            দৈনন্দিন কাজ সহজ করার জন্য প্রয়োজনীয় ছোট ছোট টুলসও অন্তর্ভুক্ত করে।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800/80 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl ${feature.bg} ${feature.color} mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherFeatures;
