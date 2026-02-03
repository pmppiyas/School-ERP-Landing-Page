import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets } from '@/assets';

const Admission = async () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md ">
              <Image
                src={assets.admission}
                alt="Online Admission System"
                width={500}
                height={500}
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
              অনলাইন ভর্তি ব্যবস্থাপনা
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              আমাদের School ERP সফটওয়্যারের মাধ্যমে ভর্তি প্রক্রিয়া হবে
              সম্পূর্ণ অনলাইন, দ্রুত এবং ঝামেলামুক্ত। আবেদন থেকে অনুমোদন—
              সবকিছু এক প্ল্যাটফর্মে।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {[
                'অনলাইন ফর্মের মাধ্যমে নতুন শিক্ষার্থী ভর্তি',
                'ভর্তি আবেদন অটোমেটিক যাচাই ও অনুমোদন',
                'ডকুমেন্ট আপলোড ও সংরক্ষণ এক জায়গায়',
                'ভর্তি সংক্রান্ত নোটিফিকেশন এসএমএস ও ই-মেইলে',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary shrink-0">
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

export default Admission;
