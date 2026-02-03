import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets } from '@/assets';

const classScheduleFeatures = [
  {
    title: 'ক্লাস তৈরি',
    desc: 'শুধু কয়েক ক্লিকেই নতুন ক্লাস তৈরি করুন এবং বিভাগের সাথে যুক্ত করুন।',
  },
  {
    title: 'শিফট ও সময় নির্ধারণ',
    desc: 'শিক্ষক, বিষয় ও ক্লাসের সময়সূচি নির্ধারণ করুন সহজভাবে।',
  },
  {
    title: 'শিফট অ্যাসাইনমেন্ট',
    desc: 'প্রতিটি ক্লাসের জন্য শিক্ষকদের স্বয়ংক্রিয়ভাবে শিফট অ্যাসাইন করুন।',
  },
  {
    title: 'রিপোর্ট জেনারেশন',
    desc: 'ক্লাসের সময়সূচি এবং শিক্ষকের অ্যাসাইনমেন্ট রিপোর্ট এক ক্লিকে জেনারেট।',
  },
];

const ClassSchedule = async () => {
  return (
    <section className="bg-background py-24" id="class-schedule">
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
              ক্লাস সময়সূচি ও ব্যবস্থাপনা
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              শিক্ষার্থীদের ক্লাস, সময় এবং শিক্ষকের অ্যাসাইনমেন্ট সহজে নির্ধারণ করুন এবং সব সময়সূচি এক জায়গায় রাখুন।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {classScheduleFeatures.map((feature, index) => (
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
            <div className="relative w-full max-w-md h-100 lg:h-125">
              <Image
                src={assets.schedule}
                alt="Class Schedule Management"
                fill
                className="rounded-2xl shadow-xl "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
