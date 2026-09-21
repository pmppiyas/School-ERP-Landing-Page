import Image from 'next/image';
import { CheckCircle2, CalendarRange } from 'lucide-react';
import { assets } from '@/assets';

const classScheduleFeatures = [
  {
    title: 'স্মার্ট রুটিন তৈরি',
    desc: 'কয়েক ক্লিকেই প্রতিটি ক্লাস, সেকশন ও শিফটের জন্য কনফ্লিক্ট-মুক্ত রুটিন তৈরি।',
  },
  {
    title: 'শিক্ষক ও বিষয় ম্যাপিং',
    desc: 'কোন শিক্ষক একই সময়ে দুইটি ক্লাসে যেন না পড়েন, তা স্বয়ংক্রিয়ভাবে চেক করা।',
  },
  {
    title: 'বিকল্প শিক্ষক বণ্টন',
    desc: 'কোন শিক্ষক অনুপস্থিত থাকলে তাৎক্ষণিকভাবে অন্য শিক্ষককে বিকল্প ক্লাস প্রদান।',
  },
  {
    title: 'প্রিন্ট ও মোবাইল ভিউ',
    desc: 'শিক্ষার্থী ও শিক্ষকদের ফোনে রুটিনের আপডেট এবং দেওয়ালে লাগানোর মতো রুটিন প্রিন্ট।',
  },
];

const ClassSchedule = async () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white dark:bg-slate-950" id="class-schedule">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <CalendarRange className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>কনফ্লিক্ট-মুক্ত সময়সূচি</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              ক্লাস সময়সূচি ও{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                রুটিন ম্যানেজমেন্ট
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              শিক্ষার্থীদের ক্লাস, সময় এবং শিক্ষকের অ্যাসাইনমেন্ট সহজে নির্ধারণ
              করুন এবং সব সময়সূচি এক জায়গায় নিখুঁতভাবে সংগঠিত রাখুন।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {classScheduleFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
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
                  src={assets.schedule}
                  alt="Class Schedule Management"
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

export default ClassSchedule;
