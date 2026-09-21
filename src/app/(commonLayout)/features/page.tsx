import React from 'react';
import Admission from '@/module/features/Admission';
import AdmitCardSection from '@/module/features/AdmitCardGeneration';
import Attendance from '@/module/features/Attendance';
import FeeCollectionSection from '@/module/features/FeeCollcetionSection';
import OtherFeatures from '@/module/features/OtherFeatures';
import ResultPublish from '@/module/features/ResultPublish';
import Heading from '@/module/shared/Heading';

const quickNav = [
  { name: 'স্মার্ট হাজিরা', href: '#attendance-feature' },
  { name: 'অনলাইন ভর্তি', href: '#admission-feature' },
  { name: 'ফলাফল প্রকাশ', href: '#result-feature' },
  { name: 'অ্যাডমিট কার্ড', href: '#admit-feature' },
  { name: 'ফি কালেকশন', href: '#fee-feature' },
  { name: 'অন্যান্য সুবিধা', href: '#other-feature' },
];

export default async function page() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden scroll-smooth">
      <Heading
        heading="Hello Soft ERP-এর প্রধান ফিচারসমূহ"
        badge="আধুনিক ফিচার তালিকা"
        subtitle="ডিজিটাল উপস্থিতি, অনলাইন ভর্তি, স্বয়ংক্রিয় ফলাফল ও দ্রুত ফি কালেকশন সহ যাবতীয় আধুনিক সুবিধা"
      />

      {/* In-Page Quick Navigation Anchor Bar */}
      <div className="sticky top-[60px] z-30 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 shadow-xs py-3">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 justify-start sm:justify-center">
            {quickNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all shadow-xs shrink-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Attendance />
      <Admission />
      <ResultPublish />
      <AdmitCardSection />
      <FeeCollectionSection />
      <OtherFeatures />
    </div>
  );
}
