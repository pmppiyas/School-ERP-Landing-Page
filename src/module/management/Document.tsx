import { CheckCircle } from 'lucide-react';

const documents = [
  {
    title: 'অ্যাডমিট শিট',
    desc: 'পরীক্ষার জন্য শিক্ষার্থীদের অ্যাডমিট শিট দ্রুত ও অটোমেটেডভাবে জেনারেট করুন।',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'টেস্টিমোনিয়াল',
    desc: 'শিক্ষার্থীদের পারফরম্যান্স অনুযায়ী টেস্টিমোনিয়াল তৈরি ও ডাউনলোড করুন।',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'পে স্লিপ',
    desc: 'শিক্ষক ও স্টাফদের মাসিক বেতন অনুযায়ী পে স্লিপ তৈরি ও বিতরণ করুন।',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'অন্যান্য রিপোর্ট',
    desc: 'শিক্ষার্থী, ফি, উপস্থিতি এবং ফলাফল সংক্রান্ত অন্যান্য গুরুত্বপূর্ণ রিপোর্ট জেনারেট করুন।',
    color: 'from-orange-400 to-orange-500',
  },
];

const DocumentGeneration = () => {
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
            ডকুমেন্ট জেনারেশন
          </h2>
          <p className="text-lg text-muted-foreground">
            স্কুল পরিচালনার জন্য প্রয়োজনীয় সকল ডকুমেন্ট তৈরি করুন কয়েক ক্লিকেই।
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300`}
            >
              <div
                className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-r ${doc.color} text-white`}
              >
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {doc.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {doc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentGeneration;
