import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets, atttendaceFeatures } from '@/assets';


const Attendance = async () => {
  return (
    <section className="bg-background py-20">
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
              স্মার্ট হাজিরা ব্যবস্থাপনা
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              আমাদের School ERP সফটওয়্যারের মাধ্যমে শিক্ষার্থী, শিক্ষক ও স্টাফদের
              হাজিরা ব্যবস্থাপনা হবে সম্পূর্ণ ডিজিটাল, দ্রুত এবং নির্ভুল।
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {atttendaceFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src={assets.biomet}
                alt="Attendance Management"
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

export default Attendance;
