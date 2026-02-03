import { Users, UserCheck, CreditCard, FileCheck, Smartphone, BookOpen, Bus, Bell, Clipboard } from 'lucide-react';

export const solutions = [
  {
    title: 'শিক্ষার্থী ব্যবস্থাপনা',
    desc: 'ভর্তি, প্রোফাইল, ক্লাস, রোল, অভিভাবক তথ্য এবং শিক্ষার্থীর সম্পূর্ণ রেকর্ড ব্যবস্থাপনা।',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'শিক্ষক ও স্টাফ ব্যবস্থাপনা',
    desc: 'শিক্ষক ও কর্মচারীর তথ্য, দায়িত্ব, বিষয় বরাদ্দ এবং উপস্থিতি নিয়ন্ত্রণ।',
    icon: <UserCheck className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'হাজিরা ব্যবস্থাপনা',
    desc: 'শিক্ষার্থী ও শিক্ষকের দৈনিক হাজিরা ডিজিটালভাবে সংরক্ষণ ও রিপোর্ট।',
    icon: <Clipboard className="w-8 h-8" />,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'ফি ও হিসাব ব্যবস্থাপনা',
    desc: 'ফি কালেকশন, বেতন, রসিদ, ডিসকাউন্ট এবং আর্থিক রিপোর্ট তৈরি।',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'from-orange-400 to-orange-500',
  },
  {
    title: 'ক্লাস রুটিন ব্যবস্থাপনা',
    desc: 'ক্লাস, বিষয় এবং শিক্ষক অনুযায়ী স্মার্ট সময়সূচি তৈরি।',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'পরীক্ষা ও ফলাফল ব্যবস্থাপনা',
    desc: 'পরীক্ষা নিয়ন্ত্রণ, মার্কস এন্ট্রি, গ্রেডিং এবং রেজাল্ট প্রকাশ।',
    icon: <FileCheck className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'ডায়েরি ও নোটিশ',
    desc: 'হোমওয়ার্ক, নোটিশ, ঘোষণা এবং একাডেমিক আপডেট শেয়ার।',
    icon: <Bell className="w-8 h-8" />,
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    title: 'লাইব্রেরি ব্যবস্থাপনা',
    desc: 'বই সংরক্ষণ, ইস্যু-রিটার্ন, জরিমানা এবং লাইব্রেরি রিপোর্ট।',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-teal-500 to-teal-600',
  },
  {
    title: 'পরিবহন ব্যবস্থাপনা',
    desc: 'স্কুল বাস, রুট, চালক এবং শিক্ষার্থী বরাদ্দ ব্যবস্থাপনা।',
    icon: <Bus className="w-8 h-8" />,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'SMS ও নোটিফিকেশন',
    desc: 'শিক্ষার্থী ও অভিভাবকদের জন্য SMS, নোটিফিকেশন এবং অ্যালার্ট পাঠানো।',
    icon: <Bell className="w-8 h-8" />,
    color: 'from-purple-400 to-purple-500',
  },
  {
    title: 'রিপোর্ট ও অ্যানালিটিক্স',
    desc: 'একাডেমিক ও ফাইন্যান্সিয়াল রিপোর্ট এবং বিশ্লেষণ তৈরি।',
    icon: <FileCheck className="w-8 h-8" />,
    color: 'from-rose-400 to-rose-500',
  },
  {
    title: 'সিস্টেম সেটিংস',
    desc: 'সেশন, ক্লাস, বিষয়, গ্রেড, ইউজার রোল এবং পারমিশন কনফিগারেশন।',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'from-gray-500 to-gray-600',
  },
];


const SolutionsSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">


        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-r ${solution.color} text-white`}
              >
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {solution.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
