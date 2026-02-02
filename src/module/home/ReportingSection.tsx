import { assets } from '@/assets';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'আয় ও ব্যয়ের সংক্ষিপ্ত রিপোর্ট',
    desc: 'প্রতিদিনের গুরুত্বপূর্ণ আয় ও ব্যয়ের সংক্ষিপ্ত রিপোর্ট সরাসরি এসএমএসের মাধ্যমে পান।',
  },
  {
    title: 'দৈনিক উপস্থিতি রিপোর্ট',
    desc: 'শিক্ষক ও স্টাফদের দৈনিক উপস্থিতি স্বয়ংক্রিয়ভাবে সংগ্রহ ও রিপোর্ট করুন।',
  },
  {
    title: 'অটো ডে ক্লোজিং রিপোর্ট',
    desc: 'প্রতিদিন শেষে অটোমেটেডভাবে আপনার প্রতিষ্ঠানের আয় ও ব্যয়ের রিপোর্ট তৈরি ও সংরক্ষণ।',
  },
  {
    title: 'রিয়েল-টাইম নোটিফিকেশন',
    desc: 'এসএমএস ও ই-মেইলের মাধ্যমে গুরুত্বপূর্ণ নোটিফিকেশন সরাসরি পান।',
  },
];

const SmartReportingSection = () => {
  return (
    <section className="bg-background ">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-center
                       bg-linear-to-r from-primary via-primary/80 to-purple-600
                       bg-clip-text text-transparent mb-6 leading-relaxed"
          >
            টেনশন মুক্ত থাকুন
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            আধুনিক School ERP ব্যবস্থার মাধ্যমে প্রতিদিনের গুরুত্বপূর্ণ রিপোর্ট
            ও আপডেট সরাসরি আপনার মোবাইলে পৌঁছে যাবে। আলাদা করে কাউকে জিজ্ঞাসা
            করার প্রয়োজন নেই।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex gap-5 items-start p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary shrink-0">
                    <CheckCircle className="w-7 h-7" />
                  </span>

                  {/* Feature Text */}
                  <div>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src={assets.agent}
                height={500}
                width={500}
                alt="Illustration"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartReportingSection;
