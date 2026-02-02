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
} from 'lucide-react';

const HubSection = () => {
  const modules = [
    // Left Side
    {
      title: 'শিক্ষার্থী ব্যবস্থাপনা',
      icon: <UserCircle />,
      color: 'bg-green-600',
      side: 'left',
    },
    {
      title: 'বেতন আদায় ব্যবস্থাপনা',
      icon: <Wallet />,
      color: 'bg-blue-800',
      side: 'left',
    },
    {
      title: 'শিক্ষক/শিক্ষার্থীর হাজিরা ব্যবস্থাপনা',
      icon: <ClipboardCheck />,
      color: 'bg-red-600',
      side: 'left',
    },
    {
      title: 'অনলাইন বেতন আদায়',
      icon: <CreditCard />,
      color: 'bg-cyan-500',
      side: 'left',
    },
    {
      title: 'শিক্ষকদের বেতন ব্যবস্থাপনা',
      icon: <Users />,
      color: 'bg-purple-600',
      side: 'left',
    },

    // Right Side
    {
      title: 'একাডেমিক ব্যবস্থাপনা',
      icon: <BookOpen />,
      color: 'bg-green-500',
      side: 'right',
    },
    {
      title: 'বেসিক অ্যাকাউন্টস',
      icon: <Calculator />,
      color: 'bg-blue-700',
      side: 'right',
    },
    {
      title: 'রেজাল্ট ব্যবস্থাপনা',
      icon: <Trophy />,
      color: 'bg-red-500',
      side: 'right',
    },
    {
      title: 'অনলাইন ভর্তি ব্যবস্থাপনা',
      icon: <UserPlus />,
      color: 'bg-cyan-600',
      side: 'right',
    },
    {
      title: 'ডায়নামিক ওয়েব সল্যুশন',
      icon: <Globe />,
      color: 'bg-fuchsia-700',
      side: 'right',
    },
  ];

  return (
    <section className=" overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4 relative">
          {/* Left Column */}
          <div className="flex flex-col gap-6 z-10 w-full lg:w-auto">
            {modules
              .filter((m) => m.side === 'left')
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-end group cursor-pointer"
                >
                  <div
                    className={`${item.color} text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-transform group-hover:-translate-x-2`}
                  >
                    <span className="font-medium text-lg whitespace-nowrap">
                      {item.title}
                    </span>
                    <div className="bg-white/20 p-2 rounded-full">
                      {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                  </div>
                  {/* Connecting Line (Hidden on mobile) */}
                  <div className="hidden lg:block h-0.5 w-12 bg-slate-300 -mr-2"></div>
                </div>
              ))}
          </div>

          {/* Center Logo */}
          <div className="relative">
            <div className="w-64 h-32 lg:w-80 lg:h-40 bg-white border-4 border-cyan-500 rounded-[40px] shadow-2xl flex items-center justify-center flex-col p-4 z-20 relative">
              <h2 className="text-4xl lg:text-5xl font-bold italic tracking-tighter">
                <span className="text-blue-600">Hello Soft</span>
                <span className="block text-red-500 text-center -mt-2">
                  ERP
                </span>
              </h2>
              <div className="absolute -bottom-4 bg-white px-4 py-1 rounded-full border border-slate-200 text-xs font-bold text-green-600 uppercase tracking-widest">
                Solution Provider
              </div>
            </div>

            {/* Animated Ring Around Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] border-2 border-dashed border-slate-200 rounded-full -z-10 animate-[spin_60s_linear_infinite]"></div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 z-10 w-full lg:w-auto">
            {modules
              .filter((m) => m.side === 'right')
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-start group cursor-pointer"
                >
                  <div className="hidden lg:block h-0.5 w-12 bg-slate-300 -ml-2"></div>
                  <div
                    className={`${item.color} text-white px-6 py-3 rounded-full shadow-lg flex items-center flex-row-reverse gap-3 transition-transform group-hover:translate-x-2`}
                  >
                    <span className="font-medium text-lg whitespace-nowrap">
                      {item.title}
                    </span>
                    <div className="bg-white/20 p-2 rounded-full">
                      {React.cloneElement(item.icon, { size: 24 })}
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
