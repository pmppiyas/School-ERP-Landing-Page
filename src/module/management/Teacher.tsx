import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets } from '@/assets';

const teacherManagementFeatures = [
  {
    title: 'শিক্ষক তালিকা',
    desc: 'শিক্ষকদের সকল তথ্য এক জায়গায় সংরক্ষণ। নাম, বিভাগ, বিষয় ও অন্যান্য ডিটেইল এক ক্লিকে দেখুন।',
  },
  {
    title: 'শিফট ও ক্লাস অ্যাসাইন',
    desc: 'শিক্ষকদের ক্লাস ও শিফট নির্ধারণ করুন সহজভাবে।',
  },
  {
    title: 'হাজিরা ট্র্যাকিং',
    desc: 'শিক্ষকদের উপস্থিতি অটোমেটিকভাবে ট্র্যাক করুন এবং রিপোর্ট তৈরি করুন।',
  },
  {
    title: 'ফলাফল ও গ্রেডিং',
    desc: 'শিক্ষকদের মাধ্যমে ছাত্রদের ফলাফল ও গ্রেড আপডেট ও রিপোর্ট জেনারেট করা।',
  },
];

const TeacherManagement = async () => {
  return (
    <section className="bg-background py-24" id="teacher-management">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src={assets.teacher}
                alt="Teacher Management"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="space-y-6">
            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-extrabold
                         bg-linear-to-r from-primary via-primary/80 to-purple-600
                         bg-clip-text text-transparent leading-snug"
            >
              শিক্ষক ব্যবস্থাপনা মডিউল
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              আমাদের সফটওয়্যারের মাধ্যমে শিক্ষকদের সমস্ত তথ্য, উপস্থিতি, ক্লাস অ্যাসাইনমেন্ট এবং ফলাফল সহজে পরিচালনা করা সম্ভব।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {teacherManagementFeatures.map((feature, index) => (
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

export default TeacherManagement;
