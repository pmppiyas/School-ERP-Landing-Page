import Image from 'next/image';
import { CheckCircle2, UserCheck } from 'lucide-react';
import { assets } from '@/assets';

const studentManagementFeatures = [
  {
    title: 'শিক্ষার্থী ডাটাবেস',
    desc: 'শিক্ষার্থীদের সম্পূর্ণ প্রোফাইল, রোল, বিভাগ, রক্তগ্রুপ ও অভিভাবক তথ্য এক ক্লিকে সংরক্ষণ ও অনুসন্ধান।',
  },
  {
    title: 'ডিজিটাল ভর্তি প্রক্রিয়া',
    desc: 'অনলাইন ও অফলাইন ভর্তি প্রক্রিয়া সম্পূর্ণ ডিজিটাল। আবেদন ফরম যাচাই ও আইডি কার্ড তৈরি কয়েক সেকেন্ডে।',
  },
  {
    title: 'উপস্থিতি ও আচরণ ট্র্যাকিং',
    desc: 'দৈনিক ক্লাসে উপস্থিতি, অনুপস্থিতি এবং শিক্ষার্থীর আচরণ ও ডিসিপ্লিন রেকর্ড মনিটরিং।',
  },
  {
    title: 'একাডেমিক প্রগ্রেস রিপোর্ট',
    desc: 'ছাত্রদের প্রতিটি টার্মের ফলাফল, মেধা তালিকা ও পেমেন্ট হিস্ট্রি এক ক্লিকে দেখা ও প্রিন্ট নেওয়া।',
  },
];

const StudentManagement = async () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white dark:bg-slate-950" id="student-management">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>শিক্ষার্থী তথ্যভাণ্ডার</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              ছাত্র ব্যবস্থাপনা{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                মডিউল
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              আমাদের সফটওয়্যারের মাধ্যমে ছাত্রদের সমস্ত তথ্য, উপস্থিতি ও ফলাফল
              সহজে এবং দ্রুত পরিচালনা করা সম্ভব।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {studentManagementFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
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
                  src={assets.student}
                  alt="Student Management"
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

export default StudentManagement;
