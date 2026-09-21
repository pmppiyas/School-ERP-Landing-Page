import React from 'react';
import { School, Users, UserCheck, HeartHandshake, Sparkles } from 'lucide-react';

const stats = [
  {
    count: '১০০+',
    label: 'সক্রিয় প্রতিষ্ঠান',
    desc: 'স্কুল, কলেজ ও মাদ্রাসায় সফলভাবে চালু',
    icon: School,
    gradient: 'from-blue-400 to-cyan-400',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    count: '৫০,০০০+',
    label: 'সন্তুষ্ট শিক্ষার্থী',
    desc: 'প্রতিদিন ডিজিটাল হাজিরা ও রেজাল্ট গ্রহণকারী',
    icon: Users,
    gradient: 'from-purple-400 to-pink-400',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    count: '২,৫০০+',
    label: 'দক্ষ শিক্ষক ও স্টাফ',
    desc: 'সহজে ক্লাস, মার্কস ও উপস্থিতি পরিচালনাকারী',
    icon: UserCheck,
    gradient: 'from-emerald-400 to-teal-400',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    count: '৪৫,০০০+',
    label: 'আস্থাভাজন অভিভাবক',
    desc: 'প্রতিদিন নিয়মিত SMS ও নোটিফিকেশন প্রাপক',
    icon: HeartHandshake,
    gradient: 'from-amber-400 to-orange-400',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
  },
];

const UserCountSection = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-black text-white border-t border-slate-800">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>আমাদের অর্জন ও প্রভাব</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            প্রতিটি প্রতিষ্ঠানের অটল বিশ্বাস আর{' '}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              আমাদের অগ্রযাত্রা
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            আমাদের সফটওয়্যারটি শুধুমাত্র একটি মাধ্যম নয়, বরং শত শত শিক্ষা
            প্রতিষ্ঠানের প্রশাসনিক সফলতার নির্ভরযোগ্য সঙ্গী।
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-5 flex items-center justify-center rounded-2xl ${stat.iconBg} border group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>

                {/* Count with Gradient */}
                <div
                  className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-2 bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent tracking-tight`}
                >
                  {stat.count}
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserCountSection;
