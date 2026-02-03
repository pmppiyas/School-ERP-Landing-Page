import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets } from '@/assets';

const studentManagementFeatures = [
  {
    title: 'ছাত্র তালিকা',
    desc: 'শিক্ষার্থীদের সম্পূর্ণ তথ্য এক জায়গায় সংরক্ষণ করুন। নাম, রোল, ক্লাস ও অন্যান্য ডিটেইল এক ক্লিকে দেখুন।',
  },
  {
    title: 'অনলাইন ভর্তি',
    desc: 'নতুন ছাত্রের ভর্তি প্রক্রিয়া সম্পূর্ণ ডিজিটাল। ফর্ম পূরণ ও যাচাই এক ক্লিকে।',
  },
  {
    title: 'ছাত্র প্রোফাইল',
    desc: 'প্রতিটি শিক্ষার্থীর প্রোফাইল আপডেট এবং এক ক্লিকে অ্যাক্সেস।',
  },
  {
    title: 'রেকর্ড রিপোর্ট',
    desc: 'ছাত্রদের উপস্থিতি, ফলাফল, ফি রেকর্ড সবকিছু এক জায়গায় দেখুন।',
  },
];

const StudentManagement = async () => {
  return (
    <section className="bg-background py-24" id="student-management">
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
              ছাত্র ব্যবস্থাপনা মডিউল
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              আমাদের সফটওয়্যারের মাধ্যমে ছাত্রদের সমস্ত তথ্য, উপস্থিতি ও ফলাফল সহজে এবং দ্রুত পরিচালনা করা সম্ভব।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {studentManagementFeatures.map((feature, index) => (
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
                src={assets.student}
                alt="Student Management"
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

export default StudentManagement;
