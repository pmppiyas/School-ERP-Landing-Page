import React from 'react';
import {
  UserCircle,
  Wallet,
  ClipboardCheck,
  CreditCard,
  Users,
  BookOpen,
  Calculator,
  Trophy,
  Globe,
  UserPlus,
  Sparkles,
} from 'lucide-react';

const HubSection = () => {
  const modules = [
    // Left Side
    {
      title: 'শিক্ষার্থী ব্যবস্থাপনা',
      icon: <UserCircle />,
      color: 'bg-emerald-600 hover:bg-emerald-700',
      side: 'left',
    },
    {
      title: 'বেতন আদায় ব্যবস্থাপনা',
      icon: <Wallet />,
      color: 'bg-blue-600 hover:bg-blue-700',
      side: 'left',
    },
    {
      title: 'শিক্ষক/শিক্ষার্থী হাজিরা',
      icon: <ClipboardCheck />,
      color: 'bg-rose-600 hover:bg-rose-700',
      side: 'left',
    },
    {
      title: 'অনলাইন ফি পেমেন্ট',
      icon: <CreditCard />,
      color: 'bg-cyan-600 hover:bg-cyan-700',
      side: 'left',
    },
    {
      title: 'শিক্ষকদের পে-রোল',
      icon: <Users />,
      color: 'bg-purple-600 hover:bg-purple-700',
      side: 'left',
    },

    // Right Side
    {
      title: 'একাডেমিক সিলেবাস',
      icon: <BookOpen />,
      color: 'bg-emerald-600 hover:bg-emerald-700',
      side: 'right',
    },
    {
      title: 'বেসিক অ্যাকাউন্টস',
      icon: <Calculator />,
      color: 'bg-blue-600 hover:bg-blue-700',
      side: 'right',
    },
    {
      title: 'রেজাল্ট ও গ্রেডিং শিট',
      icon: <Trophy />,
      color: 'bg-amber-600 hover:bg-amber-700',
      side: 'right',
    },
    {
      title: 'অনলাইন ভর্তি ব্যবস্থা',
      icon: <UserPlus />,
      color: 'bg-indigo-600 hover:bg-indigo-700',
      side: 'right',
    },
    {
      title: 'ডায়নামিক ওয়েব পোর্টাল',
      icon: <Globe />,
      color: 'bg-violet-600 hover:bg-violet-700',
      side: 'right',
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-linear-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
      {/* Decorative background circle blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>অল-ইন-ওয়ান সেন্ট্রাল হাব</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            কেন্দ্রীয় স্কুল ম্যানেজমেন্ট হাব
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            একটি শক্তিশালী সেন্ট্রাল প্ল্যাটফর্ম থেকেই আপনার প্রতিষ্ঠানের সকল
            প্রশাসনিক বিভাগ ও একাডেমিক কার্যক্রম পরিচালিত হবে স্বয়ংক্রিয়ভাবে।
          </p>
        </div>

        {/* Hub Interactive Display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 relative">
          {/* Left Column */}
          <div className="flex flex-col gap-4 z-10 w-full lg:w-auto items-center lg:items-end">
            {modules
              .filter((m) => m.side === 'left')
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center lg:justify-end w-full sm:w-auto group cursor-pointer"
                >
                  <div
                    className={`${item.color} text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-slate-200 flex items-center gap-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg w-full sm:w-auto justify-between sm:justify-start`}
                  >
                    <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
                      {item.title}
                    </span>
                    <div className="bg-white/20 p-1.5 rounded-full shrink-0">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                  </div>
                  {/* Connecting Line (Hidden on mobile) */}
                  <div className="hidden lg:block h-0.5 w-8 xl:w-12 bg-slate-300 group-hover:bg-blue-400 transition-colors -mr-2" />
                </div>
              ))}
          </div>

          {/* Center Logo Hub */}
          <div className="relative my-4 lg:my-0 shrink-0">
            <div className="w-64 h-36 sm:w-72 sm:h-40 lg:w-80 lg:h-44 bg-white/95 backdrop-blur-md border-4 border-cyan-500 rounded-[36px] shadow-2xl flex items-center justify-center flex-col p-4 z-20 relative ring-8 ring-cyan-500/10 hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tighter text-center">
                <span className="text-blue-600 drop-shadow-xs">Hello Soft</span>
                <span className="block text-rose-500 text-center -mt-1 font-extrabold tracking-widest text-2xl sm:text-3xl">
                  ERP
                </span>
              </h2>
              <div className="absolute -bottom-3.5 bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-1 rounded-full text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest shadow-md">
                স্মার্ট সমাধান
              </div>
            </div>

            {/* Animated Rings Around Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[155%] border-2 border-dashed border-cyan-300/60 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[145%] h-[175%] border border-blue-200/40 rounded-full -z-10 pointer-events-none" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 z-10 w-full lg:w-auto items-center lg:items-start">
            {modules
              .filter((m) => m.side === 'right')
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center lg:justify-start w-full sm:w-auto group cursor-pointer"
                >
                  <div className="hidden lg:block h-0.5 w-8 xl:w-12 bg-slate-300 group-hover:bg-blue-400 transition-colors -ml-2" />
                  <div
                    className={`${item.color} text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-slate-200 flex items-center flex-row-reverse gap-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg w-full sm:w-auto justify-between sm:justify-start`}
                  >
                    <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
                      {item.title}
                    </span>
                    <div className="bg-white/20 p-1.5 rounded-full shrink-0">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSection;
