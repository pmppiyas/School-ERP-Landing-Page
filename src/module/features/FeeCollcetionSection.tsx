import Image from 'next/image';
import { CheckCircle2, WalletCards } from 'lucide-react';
import { assets } from '@/assets';

const feeFeatures = [
  'আজ কত টাকা ফি কালেকশন হয়েছে — তাৎক্ষণিক রিয়েল-টাইম ড্যাশবোর্ড ভিউ',
  'গত মাস ও নির্দিষ্ট যেকোনো তারিখের মোট ফি আদায় ও ব্যালেন্স রিপোর্ট',
  'শ্রেণিভিত্তিক ও সেকশনভিত্তিক আদায় ও বকেয়ার পুঙ্খানুপুঙ্খ বিশ্লেষণ',
  'বকেয়া ফি থাকা অভিভাবকদের জন্য এক ক্লিকে স্বয়ংক্রিয় বকেয়া রিমাইন্ডার SMS',
];

const FeeCollectionSection = async () => {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-white dark:bg-slate-950 scroll-mt-20"
      id="fee-feature"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <WalletCards className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>স্মার্ট ফিন্যান্স ও লেজার</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              ফি কালেকশন ও{' '}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                রিপোর্টিং সিস্টেম
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              আমাদের School ERP সফটওয়্যার আপনার প্রতিষ্ঠানের সম্পূর্ণ
              ফি কালেকশনকে রূপান্তর করে একটি শক্তিশালী রিপোর্টিং সিস্টেমে।
              প্রতিদিন, মাসিক কিংবা শ্রেণিভিত্তিক সব হিসাব থাকবে আপনার হাতের মুঠোয়।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              {feeFeatures.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
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
                  src={assets.fee}
                  alt="Fee Collection Report"
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

export default FeeCollectionSection;
