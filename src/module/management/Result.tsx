import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets } from '@/assets';

const resultFeatures = [
  {
    title: 'পরীক্ষার ফলাফল তৈরি',
    desc: 'শিক্ষার্থীর নম্বর অনুযায়ী স্বয়ংক্রিয়ভাবে গ্রেডিং ও মার্কশিট তৈরি।',
  },
  {
    title: 'বিভাগ ও ক্লাস অনুযায়ী রিপোর্ট',
    desc: 'ক্লাস, বিষয় এবং শিক্ষার্থী অনুযায়ী বিস্তারিত ফলাফল রিপোর্ট।',
  },
  {
    title: 'অটোমেটেড মার্কশিট',
    desc: 'PDF আকারে মার্কশিট জেনারেট এবং ডাউনলোড সুবিধা।',
  },
  {
    title: 'নোটিফিকেশন',
    desc: 'পরীক্ষার ফলাফল প্রকাশের সঙ্গে সঙ্গে অভিভাবকদের কাছে স্বয়ংক্রিয় নোটিফিকেশন।',
  },
];

const ResultManagement = async () => {
  return (
    <section className="bg-background py-24" id="result-management">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-extrabold
                         bg-linear-to-r from-primary via-primary/80 to-purple-600
                         bg-clip-text text-transparent leading-snug"
            >
              ফলাফল ব্যবস্থাপনা মডিউল
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              পরীক্ষার ফলাফল তৈরি, মার্কশিট জেনারেশন এবং রিপোর্টিং সম্পূর্ণ ডিজিটাল ও স্বয়ংক্রিয়। অভিভাবক ও শিক্ষার্থীরা সহজেই ফলাফল পেতে পারেন।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {resultFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <p className="text-foreground leading-relaxed">
                    <span className="font-medium">{feature.title}:</span> {feature.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src={assets.result}
                alt="Result Management"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultManagement;
