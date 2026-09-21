import Image from 'next/image';
import { CheckCircle2, GraduationCap } from 'lucide-react';
import { assets } from '@/assets';

const teacherManagementFeatures = [
  {
    title: 'শিক্ষক ও স্টাফ ডিরেক্টরি',
    desc: 'শিক্ষকদের শিক্ষাগত যোগ্যতা, বিভাগ, পদবি ও ফোন নম্বর সহ কমপ্লিট ডাটাবেস।',
  },
  {
    title: 'শিফট ও ক্লাস অ্যাসাইনমেন্ট',
    desc: 'কোন শিক্ষক কোন ক্লাস ও বিষয়ে পাঠদান করবেন তা সহজে শিডিউল ও অ্যাসাইন করা।',
  },
  {
    title: 'স্বয়ংক্রিয় হাজিরা ও ছুটি',
    desc: 'শিক্ষকদের বায়োমেট্রিক হাজিরা, নৈমিত্তিক ছুটি ও ছুটির ব্যালেন্স স্বয়ংক্রিয় রেকর্ড।',
  },
  {
    title: 'নম্বর ইনপুট ও প্রগ্রেস ট্র্যাকিং',
    desc: 'শিক্ষকরা নিজ নিজ মোবাইল বা পোর্টাল থেকে সহজে শিক্ষার্থীদের পরীক্ষার নম্বর ইনপুট দিতে পারেন।',
  },
];

const TeacherManagement = async () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800" id="teacher-management">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 p-2 sm:p-3">
                <Image
                  src={assets.teacher}
                  alt="Teacher Management"
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
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>শিক্ষকমণ্ডলী ও পে-রোল</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              শিক্ষক ব্যবস্থাপনা{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                মডিউল
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              আমাদের সফটওয়্যারের মাধ্যমে শিক্ষকদের সমস্ত তথ্য, উপস্থিতি, ক্লাস অ্যাসাইনমেন্ট
              এবং পারফরম্যান্স সহজে ও নিখুঁতভাবে পরিচালনা করা সম্ভব।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {teacherManagementFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
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
        </div>
      </div>
    </section>
  );
};

export default TeacherManagement;
