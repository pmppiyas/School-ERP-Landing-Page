import { Users, CreditCard, FileCheck, Smartphone } from 'lucide-react';

const features = [
  {
    title: 'স্মার্ট হাজিরা',
    desc: 'RFID এবং অ্যাপ ভিত্তিক হাজিরা সিস্টেম যা অভিভাবকদের কাছে অটো এসএমএস পাঠায়।',
    icon: <Users className="w-8 h-8" />,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'অনলাইন ফি',
    desc: 'বিকাশ, নগদ বা রকেটের মাধ্যমে টিউশন ফি সংগ্রহ করুন একদম সহজে।',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'অটো রেজাল্ট',
    desc: 'পরীক্ষার নম্বর ইনপুট দিলেই গ্রেডিং সিস্টেম অনুযায়ী স্বয়ংক্রিয় মার্কশিট তৈরি।',
    icon: <FileCheck className="w-8 h-8" />,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    title: 'মোবাইল অ্যাপ',
    desc: 'শিক্ষক, শিক্ষার্থী এবং অভিভাবকদের জন্য আলাদা ডেডিকেটেড মোবাইল অ্যাপ্লিকেশন।',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="
      text-3xl md:text-4xl font-bold tracking-tight mb-4
      bg-linear-to-r from-primary via-primary/80 to-foreground
      bg-clip-text text-transparent leading-relaxed
    "
          >
            আমাদের সফটওয়্যার কেন সেরা?
          </h2>

          <p className="text-lg text-muted-foreground">
            শিক্ষা প্রতিষ্ঠানের সকল জটিল কাজকে সহজ করতে আমরা নিয়ে এসেছি
            অত্যাধুনিক সব ফিচার।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`mb-4 inline-block p-3 rounded-xl ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
