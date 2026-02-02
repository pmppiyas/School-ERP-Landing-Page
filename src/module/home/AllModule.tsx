'use client';

import { allmodulePage } from '@/assets';
import { GraduationCap } from 'lucide-react';

const AllModulesPage = () => {
  return (
    <main className=" bg-background">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-primary" />
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6
              bg-linear-to-r from-primary via-primary/80 to-foreground
              bg-clip-text text-transparent leading-relaxed "
          >
            আমাদের স্কুল ERP মডিউলসমূহ
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed ">
            আমাদের School ERP সফটওয়্যারটি একটি পূর্ণাঙ্গ শিক্ষা প্রতিষ্ঠান
            ব্যবস্থাপনা সিস্টেম। ভর্তি থেকে শুরু করে ফলাফল, ফি, হাজিরা, নোটিশ,
            রিপোর্ট —{' '}
            <span className="font-medium text-foreground">
              স্কুল পরিচালনার সকল ম্যানেজমেন্ট
            </span>{' '}
            এক প্ল্যাটফর্মে সমাধান করা হয়েছে।
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allmodulePage.map((module, index) => (
            <div
              key={index}
              className="group rounded-xl border bg-card p-6
                         shadow-sm hover:shadow-lg
                         transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <module.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {module.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllModulesPage;
