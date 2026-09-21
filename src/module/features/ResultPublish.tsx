import Image from 'next/image';
import { CheckCircle2, Award } from 'lucide-react';
import { assets } from '@/assets';

const resultFeatures = [
  'নম্বর ইনপুট দিলেই জিপিএ ও গ্রেডিং অনুযায়ী স্বয়ংক্রিয় ফলাফল তৈরি',
  'শিক্ষা বোর্ড স্ট্যান্ডার্ড মার্কশিট ও প্রোগ্রেসিভ টেবুলেশন শিট জেনারেশন',
  'শিক্ষার্থী ও অভিভাবকদের জন্য রোল বা আইডি দিয়ে অনলাইন ফলাফল দেখার সুযোগ',
  'এক ক্লিকে সকল শিক্ষার্থীর রেজাল্ট সংক্রান্ত অটো SMS অভিভাবকদের ফোনে পাঠানো',
];

const ResultPublish = async () => {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-white dark:bg-slate-950 scroll-mt-20"
      id="result-feature"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>নিখুঁত ফলাফল প্রস্তুতকরণ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              ফলাফল প্রকাশ{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ব্যবস্থাপনা
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              আমাদের School ERP সফটওয়্যারের মাধ্যমে পরীক্ষার ফলাফল তৈরি,
              যাচাই এবং প্রকাশ হবে দ্রুত, নির্ভুল ও ঝামেলামুক্ত। শিক্ষার্থী ও
              অভিভাবকরা সহজেই অনলাইনে ফলাফল দেখতে পারবেন।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {resultFeatures.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 p-2 sm:p-3">
                <Image
                  src={assets.result}
                  alt="Result Publish System"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPublish;
