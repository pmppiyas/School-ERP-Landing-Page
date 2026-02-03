import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { assets } from '@/assets';

const FeeCollectionSection = async () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-extrabold
                         bg-linear-to-r from-primary via-primary/80 to-purple-600
                         bg-clip-text text-transparent leading-relaxed"
            >
              ফি কালেকশন ও রিপোর্টিং সিস্টেম
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              আমাদের School ERP সফটওয়্যার আপনার প্রতিষ্ঠানের সম্পূর্ণ
              ফি কালেকশনকে রূপান্তর করে একটি শক্তিশালী রিপোর্টিং সিস্টেমে।
              প্রতিদিন, মাসিক কিংবা শ্রেণিভিত্তিক সব হিসাব থাকবে আপনার হাতের মুঠোয়।
            </p>

            <ul className="space-y-4">
              {[
                'আজ কত টাকা ফি কালেকশন হয়েছে — তাৎক্ষণিক ড্যাশবোর্ড ভিউ',
                'গত মাস ও নির্দিষ্ট সময়ের মোট ফি রিপোর্ট',
                'শ্রেণিভিত্তিক ও সেকশনভিত্তিক ফি কালেকশন বিশ্লেষণ',
                'বকেয়া ও আদায়কৃত ফি আলাদা করে রিপোর্ট জেনারেশন',
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

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={assets.fee}
              alt="Fee Collection Report"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeeCollectionSection;
