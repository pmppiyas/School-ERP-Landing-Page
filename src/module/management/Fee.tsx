import Image from 'next/image';
import { CheckCircle2, CreditCard } from 'lucide-react';
import { assets } from '@/assets';

const feeManagementFeatures = [
  {
    title: 'ডায়নামিক ফি স্ট্রাকচার',
    desc: 'বিভাগ, ক্লাস, কোটা ও শিক্ষার্থীর ধরন অনুযায়ী ভিন্ন ভিন্ন ফি ও ওয়েভার কাঠামো তৈরি।',
  },
  {
    title: 'অনলাইন ও ব্যাংক পেমেন্ট',
    desc: 'বিকাশ, নগদ, রকেট ও ব্যাংকের মাধ্যমে সরাসরি ফি কালেকশন ও লেজারে স্বয়ংক্রিয় পোস্টিং।',
  },
  {
    title: 'বকেয়া হিসাব ও অটো রিমাইন্ডার',
    desc: 'কোন কোন শিক্ষার্থীর কোন মাসের কত ফি বাকি রয়েছে তার স্বয়ংক্রিয় হিসাব ও অভিভাবকদের SMS।',
  },
  {
    title: 'ইনস্ট্যান্ট রিসিট ও ভাউচার',
    desc: 'প্রতিটি ফি কালেকশনের সাথে সাথেই ডিজিটাল মানি রিসিট প্রিন্ট এবং SMS নোটিফিকেশন।',
  },
];

const FeeManagement = async () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800" id="fee-management">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 p-2 sm:p-3">
                <Image
                  src={assets.fee}
                  alt="Fee Management"
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
              <CreditCard className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>নিরাপদ ফি কালেকশন</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              ফি ব্যবস্থাপনা{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                মডিউল
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              আমাদের School ERP সফটওয়্যারের মাধ্যমে ফি আদায়, বকেয়া ট্র্যাকিং
              এবং রসিদ জেনারেশন সহজ, দ্রুত এবং সম্পূর্ণ স্বচ্ছভাবে পরিচালনা করুন।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {feeManagementFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
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

export default FeeManagement;
