import React from 'react';
import DemoPage from '@/module/demo/DemoPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'লাইভ ডেমো | Hello Soft ERP',
  description:
    'অ্যাডমিন, শিক্ষক ও শিক্ষার্থী হিসেবে সরাসরি Hello Soft School ERP ডেমো এক্সপ্লোর করুন।',
};

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <DemoPage />
    </div>
  );
};

export default page;
