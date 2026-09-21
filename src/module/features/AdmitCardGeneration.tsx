import Image from 'next/image';
import { CheckCircle2, Printer } from 'lucide-react';
import { assets } from '@/assets';

const admitCardFeatures = [
  'এক ক্লিকেই পুরো ক্লাসের বাল্ক অ্যাডমিট কার্ড একসাথে জেনারেট',
  'শিক্ষার্থীর ছবি, রোল, রেজিস্ট্রেশন ও পরীক্ষার রুটিন সহ অটো ফরম্যাটিং',
  'সহজে হাই-কোয়ালিটি PDF আকারে ডাউনলোড ও প্রিন্ট সুবিধা',
  'সাময়িক ও বার্ষিক পরীক্ষা অনুযায়ী প্রতিষ্ঠানের লোগো সহ কাস্টম ডিজাইন',
];

const AdmitCardSection = async () => {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800 scroll-mt-20"
      id="admit-feature"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 p-2 sm:p-3">
                <Image
                  src={assets.printer}
                  alt="Admit Card Generator"
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
              <Printer className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>মুদ্রণ ও ডকুমেন্ট অটোমেশন</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              অ্যাডমিট কার্ড{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                জেনারেশন
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              পরীক্ষার জন্য অ্যাডমিট কার্ড তৈরি এখন মাত্র কয়েক সেকেন্ডের কাজ।
              ম্যানুয়ালি ঘণ্টার পর ঘণ্টা সময় নষ্ট না করে সম্পূর্ণ অটোমেটেডভাবে
              প্রিন্ট নিন।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {admitCardFeatures.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xs"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
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

export default AdmitCardSection;
