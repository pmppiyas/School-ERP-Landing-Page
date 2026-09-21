import Image from 'next/image';
import { CheckCircle2, Award } from 'lucide-react';
import { assets } from '@/assets';

const resultFeatures = [
  {
    title: 'স্বয়ংক্রিয় গ্রেডিং ও জিপিএ',
    desc: 'বোর্ড কারিকুলাম ও নিজস্ব গ্রেডিং স্কেল অনুযায়ী প্রাপ্ত নম্বরের নির্ভুল গ্রেড ও পয়েন্ট হিসাব।',
  },
  {
    title: 'ক্লাস ও শাখাভিত্তিক মেধা তালিকা',
    desc: 'ক্লাস, সেকশন ও বিষয়ভিত্তিক পজিশন ও টপারদের তালিকা নিমেষেই তৈরি ও প্রদর্শন।',
  },
  {
    title: 'আকর্ষণীয় মার্কশিট জেনারেশন',
    desc: 'প্রতিষ্ঠানের মনোগ্রাম ও প্রধান শিক্ষকের ডিজিটাল স্বাক্ষর সহ প্রফেশনাল মার্কশিট প্রিন্ট।',
  },
  {
    title: 'রেজাল্ট SMS ব্রডকাস্ট',
    desc: 'রেজাল্ট প্রকাশের সাথে সাথেই অভিভাবকদের মোবাইল নম্বরে পূর্ণাঙ্গ মার্কস ও জিপিএ বার্তা পৌঁছানো।',
  },
];

const ResultManagement = async () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white dark:bg-slate-950" id="result-management">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>নিখুঁত ফলাফল প্রসেসিং</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              ফলাফল ব্যবস্থাপনা{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                মডিউল
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              পরীক্ষার ফলাফল তৈরি, মার্কশিট জেনারেশন এবং রিপোর্টিং সম্পূর্ণ ডিজিটাল
              ও স্বয়ংক্রিয়। অভিভাবক ও শিক্ষার্থীরা সহজেই স্বচ্ছভাবে ফলাফল দেখতে পারেন।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {resultFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <div className="text-sm sm:text-base leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      {feature.title}:
                    </strong>{' '}
                    <span className="text-slate-600 dark:text-slate-300 font-normal">
                      {feature.desc}
                    </span>
                  </div>
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
                  alt="Result Management"
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

export default ResultManagement;
