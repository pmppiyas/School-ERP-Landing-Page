import Image from 'next/image';
import { CheckCircle2, UserPlus } from 'lucide-react';
import { assets } from '@/assets';

const admissionFeatures = [
  'অনলাইন ফর্মের মাধ্যমে ঘরে বসেই নতুন শিক্ষার্থী ভর্তি',
  'ভর্তি আবেদন অটোমেটিক যাচাই, বাছাই ও দ্রুত অনুমোদন',
  'ছবি ও সকল প্রয়োজনীয় ডকুমেন্ট আপলোড ও নিরাপদ সংরক্ষণ',
  'ভর্তি নিশ্চিতকরণ সংক্রান্ত তাৎক্ষণিক SMS ও ই-মেইল নোটিফিকেশন',
];

const Admission = async () => {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800 scroll-mt-20"
      id="admission-feature"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 p-2 sm:p-3">
                <Image
                  src={assets.admission}
                  alt="Online Admission System"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <UserPlus className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>ডিজিটাল আবেদন প্রক্রিয়া</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              অনলাইন ভর্তি{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ব্যবস্থাপনা
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              আমাদের School ERP সফটওয়্যারের মাধ্যমে ভর্তি প্রক্রিয়া হবে
              সম্পূর্ণ অনলাইন, দ্রুত এবং ঝামেলামুক্ত। আবেদন থেকে অনুমোদন—
              সবকিছু এক প্ল্যাটফর্মে।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {admissionFeatures.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
