import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets } from '@/assets';

const feeManagementFeatures = [
  {
    title: 'ফি স্ট্রাকচার তৈরি',
    desc: 'বিভাগ, ক্লাস ও শিক্ষার্থীর ধরন অনুযায়ী ফি স্ট্রাকচার তৈরি করুন।',
  },
  {
    title: 'অনলাইন পেমেন্ট',
    desc: 'বিকাশ, নগদ ও রকেটের মাধ্যমে শিক্ষার্থীরা ফি অনলাইনে প্রদান করতে পারবে।',
  },
  {
    title: 'বকেয়া ফি ট্র্যাকিং',
    desc: 'মাসিক ও বকেয়া ফি সহজে ট্র্যাক করুন এবং স্বয়ংক্রিয় নোটিফিকেশন পাঠান।',
  },
  {
    title: 'রিসিপ্ট জেনারেশন',
    desc: 'প্রতিটি পেমেন্টের সঙ্গে স্বয়ংক্রিয়ভাবে রিসিপ্ট তৈরি ও ডাউনলোডের সুবিধা।',
  },
];

const FeeManagement = async () => {
  return (
    <section className="bg-background py-24" id="fee-management">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md h-100 lg:h-125">
              <Image
                src={assets.fee}
                alt="Fee Management"
                fill
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-extrabold
                         bg-linear-to-r from-primary via-primary/80 to-purple-600
                         bg-clip-text text-transparent leading-snug"
            >
              ফি ব্যবস্থাপনা মডিউল
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              আমাদের School ERP সফটওয়্যারের মাধ্যমে ফি আদায়, বকেয়া ট্র্যাকিং এবং রিসিপ্ট জেনারেশন সহজ, দ্রুত এবং স্বচ্ছভাবে পরিচালনা করুন।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {feeManagementFeatures.map((feature, index) => (
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

        </div>
      </div>
    </section>
  );
};

export default FeeManagement;
