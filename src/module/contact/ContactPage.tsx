"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative bg-linear-to-br from-blue-950 via-indigo-950 to-black text-white py-24 overflow-hidden">

      {/* Background SVG Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-auto opacity-20 pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#grad)"
          d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,149.3C840,149,960,203,1080,218.7C1200,235,1320,213,1380,202.7L1440,192L1440,0L0,0Z"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 leading-snug">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-lg text-slate-300">
            যেকোনো প্রশ্ন বা সহায়তার জন্য নিচের ফর্মটি পূরণ করুন বা আমাদের সরাসরি যোগাযোগ করুন। আমরা দ্রুত আপনাকে উত্তর দেব।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl"
          >
            <div className="space-y-2">
               <label className="text-sm font-medium text-slate-300">আপনার নাম</label>
               <input
                 type="text"
                 name="name"
                 placeholder="উদা: রহিম আহমেদ"
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
               />
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium text-slate-300">আপনার ইমেইল</label>
               <input
                 type="email"
                 name="email"
                 placeholder="example@mail.com"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
               />
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium text-slate-300">আপনার বার্তা</label>
               <textarea
                 name="message"
                 placeholder="আপনার কথাটি এখানে লিখুন..."
                 value={formData.message}
                 onChange={handleChange}
                 required
                 rows={5}
                 className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all"
               ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg"
            >
              বার্তা পাঠান
            </button>
          </form>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">ফোন করুন</h3>
              <p className="text-slate-300">+880 1234 567 890</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">ইমেইল করুন</h3>
              <p className="text-slate-300">support@schoolerp.com</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">অফিস ঠিকানা</h3>
              <p className="text-slate-300">ঢাকা, বাংলাদেশ</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">অফিস সময়</h3>
              <p className="text-slate-300">রবিবার - বৃহস্পতিবার, ৯:০০ AM - ৬:০০ PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
