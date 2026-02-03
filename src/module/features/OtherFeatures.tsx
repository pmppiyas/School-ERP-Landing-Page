import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'অ্যাডমিট কার্ড ও টেস্টিমোনিয়াল',
    desc: 'পরীক্ষার জন্য অ্যাডমিট কার্ড ও টেস্টিমোনিয়াল তৈরি করুন এক ক্লিকে।',
  },
  {
    title: 'পে-স্লিপ জেনারেশন',
    desc: 'শিক্ষক ও স্টাফদের জন্য পে-স্লিপ অটোমেটেডভাবে জেনারেট।',
  },
  {
    title: 'নোটিফিকেশন সিস্টেম',
    desc: 'শিক্ষক, ছাত্র ও অভিভাবকদের জন্য গুরুত্বপূর্ণ নোটিফিকেশন।',
  },
  {
    title: 'PDF/Excel রিপোর্ট',
    desc: 'দৈনন্দিন, মাসিক বা বাৎসরিক রিপোর্ট এক্সপোর্ট করুন PDF বা Excel আকারে।',
  },
  {
    title: 'কাস্টম সার্টিফিকেট',
    desc: 'স্কুলের ব্র্যান্ড অনুযায়ী সার্টিফিকেট ও অন্যান্য ডকুমেন্ট তৈরি করুন।',
  },
  {
    title: 'দ্রুত ডকুমেন্ট ম্যানেজমেন্ট',
    desc: 'ছোট ছোট ফিচার যা দৈনন্দিন কাজ সহজ করে, যেমন ডকুমেন্ট স্টোর ও শেয়ার।',
  },
];

const OtherFeatures = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold
                       bg-linear-to-r from-primary via-primary/80 to-purple-600
                       bg-clip-text text-transparent mb-4 leading-snug"
          >
            অন্যান্য কার্যকরী ফিচারসমূহ
          </h2>
          <p className="text-lg text-muted-foreground">
            আমাদের School ERP সফটওয়্যার শুধুমাত্র বড় মডিউল নয়,
            দৈনন্দিন কাজ সহজ করার জন্য প্রয়োজনীয় ছোট ছোট ফিচারও অন্তর্ভুক্ত করে।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-md
                         hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherFeatures;
