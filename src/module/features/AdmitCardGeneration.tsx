import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets } from '@/assets';

const AdmitCardSection = async () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src={assets.printer}
              alt="Admit Card"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-extrabold
                         bg-linear-to-r from-primary via-primary/80 to-purple-600
                         bg-clip-text text-transparent leading-relaxed"
            >
              অ্যাডমিট কার্ড জেনারেশন
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              পরীক্ষার জন্য অ্যাডমিট কার্ড তৈরি এখন মাত্র কয়েক সেকেন্ডের কাজ।
              সম্পূর্ণ অটোমেটেড ও ঝামেলামুক্ত সিস্টেম।
            </p>

            <ul className="space-y-4">
              {[
                'এক ক্লিকে বাল্ক অ্যাডমিট কার্ড জেনারেট',
                'শিক্ষার্থীর তথ্য অনুযায়ী অটো ফরম্যাটিং',
                'PDF আকারে ডাউনলোড ও প্রিন্ট সুবিধা',
                'পরীক্ষা অনুযায়ী আলাদা ডিজাইন সাপোর্ট',
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <p className="text-foreground leading-relaxed">{item}</p>
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
