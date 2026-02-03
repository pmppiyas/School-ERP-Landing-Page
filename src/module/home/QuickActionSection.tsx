import { ArrowRight } from 'lucide-react';

const quickActions = [
  {
    time: '15 সেকেন্ডে',
    title: 'নতুন ছাত্র নিবন্ধন',
    color: 'from-blue-500 to-blue-600',
  },
  {
    time: '10 সেকেন্ডে',
    title: 'অনলাইন ভর্তি',
    color: 'from-purple-500 to-purple-600',
  },
  {
    time: '5 সেকেন্ডে',
    title: 'ফি পেমেন্ট',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    time: '10 সেকেন্ডে',
    title: 'ফলাফল প্রকাশ',
    color: 'from-orange-400 to-orange-500',
  },
];

const QuickActionsSection = () => {
  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-purple-100 to-primary/30 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl font-medium
                       bg-linear-to-r from-primary via-primary/80 to-purple-600
                       bg-clip-text text-transparent mb-4 leading-snug"
          >
            আমাদের School ERP ব্যবস্থার মাধ্যমে প্রতিদিনের গুরুত্বপূর্ণ কাজগুলো
            হয়ে যাবে দ্রুত, সহজ ও organized।
          </h2>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {quickActions.map((action, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg
                         hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`px-5 py-3 rounded-full mb-6 text-white font-bold text-lg
                            bg-linear-to-r ${action.color} shadow-md`}
              >
                {action.time}
              </div>

              <h3 className="text-xl font-semibold text-foreground text-center mb-3">
                {action.title}
              </h3>

              <ArrowRight className="w-6 h-6 text-primary mt-2 animate-bounce" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActionsSection;
