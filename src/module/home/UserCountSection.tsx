import React from 'react';
import { School, Users, UserCheck, User } from 'lucide-react';

const stats = [
  {
    count: '31+',
    label: 'স্কুল',
    icon: <School className="w-10 h-10 text-blue-500" />,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    count: '5700+',
    label: 'শিক্ষার্থী',
    icon: <Users className="w-10 h-10 text-purple-500" />,
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    count: '468+',
    label: 'শিক্ষক',
    icon: <UserCheck className="w-10 h-10 text-emerald-500" />,
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    count: '4870+',
    label: 'অভিভাবক',
    icon: <User className="w-10 h-10 text-orange-500" />,
    gradient: 'from-orange-400 to-orange-500',
  },
];

const UserCountSection = () => {
  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-purple-100 to-primary/30 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-extrabold
               bg-linear-to-r from-primary via-primary/80 to-purple-600
               bg-clip-text text-transparent mb-4 leading-snug"
          >
            আমাদের সফটওয়্যার ব্যবহারকারীর সংখ্যা
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground">
            প্রতিটি বিভাগে কতজন ব্যবহারকারী আছে তা এক নজরে দেখুন। আমাদের School
            ERP প্ল্যাটফর্ম ব্যবহার করে আপনার প্রতিষ্ঠান পরিচালনা সহজ, দ্রুত ও
            নিরাপদ।
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg
                         hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white/30">
                {stat.icon}
              </div>

              {/* Count with Gradient */}
              <div
                className={`text-3xl md:text-4xl font-extrabold mb-2 bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.count}
              </div>

              {/* Label */}
              <p className="text-lg md:text-xl text-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserCountSection;
