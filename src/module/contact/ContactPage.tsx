'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const contactInfo = [
  {
    title: 'ফোন করুন',
    desc: '+৮৮০ ১২৩৪ ৫৬৭ ৮৯০',
    sub: 'সকাল ৯টা - রাত ৮টা (শনি - বৃহঃ)',
    icon: Phone,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'ইমেইল পাঠান',
    desc: 'support@schoolerp.com',
    sub: 'যেকোনো জিজ্ঞাসায় ২৪/৭ সাপোর্ট',
    icon: Mail,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    title: 'অফিস ঠিকানা',
    desc: 'ধানমন্ডি, ঢাকা - ১২০৯',
    sub: 'বাংলাদেশ',
    icon: MapPin,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    title: 'অফিস সময়',
    desc: 'রবিবার - বৃহস্পতিবার',
    sub: 'সকাল ৯:০০ AM - সন্ধ্যা ৬:০০ PM',
    icon: Clock,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      institution: '',
      message: '',
    });
  };

  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-20 lg:pb-28 bg-linear-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>সরাসরি যোগাযোগ ও ডেমো বুকিং</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            আমাদের সাথে{' '}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              যোগাযোগ করুন
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            যেকোনো প্রশ্ন, ফ্রি ডেমো কিংবা পরামর্শের জন্য নিচের ফর্মটি পূরণ
            করুন বা আমাদের সরাসরি ফোন করুন। আমাদের এক্সপার্ট টিম দ্রুত যোগাযোগ করবে।
          </p>
        </div>

        {/* Main Grid: Form (7 cols) + Info (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  ধন্যবাদ! আপনার বার্তাটি পৌঁছে গেছে।
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  আমাদের প্রতিনিধি খুব শীঘ্রই আপনার প্রদত্ত মোবাইল নম্বরে অথবা
                  ইমেইলে যোগাযোগ করবেন।
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold text-white transition-colors"
                >
                  আরেকটি বার্তা পাঠান
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">
                      আপনার নাম <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="উদা: ড. রফিকুল ইসলাম"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm placeholder:text-slate-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">
                      মোবাইল নম্বর <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="০১৭১২-XXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">
                      আপনার ইমেইল <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="principal@school.edu.bd"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm placeholder:text-slate-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">
                      শিক্ষা প্রতিষ্ঠানের নাম
                    </label>
                    <input
                      type="text"
                      name="institution"
                      placeholder="উদা: আইডিয়াল মডেল একাডেমি"
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    আপনার বার্তা বা ডেমো রিকোয়েস্ট <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="আপনার প্রতিষ্ঠান সম্পর্কে বা কোন কোন ফিচার দেখতে চান লিখুন..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all text-sm placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3.5 rounded-xl font-bold text-white hover:opacity-95 active:scale-[0.99] transition-all shadow-lg shadow-blue-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>ফ্রি ডেমোর জন্য সাবমিট করুন</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 hover:bg-white/8 transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${info.bg} border flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-white">
                      {info.desc}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {info.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
