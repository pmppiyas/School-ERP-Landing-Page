'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  GraduationCap,
  User,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { env } from '@/config/env';

const demoRoles = [
  {
    id: 'admin',
    title: 'অ্যাডমিন ডেমো',
    badge: 'পূর্ণাঙ্গ প্রশাসনিক ক্ষমতা',
    roleName: 'সুপার অ্যাডমিন / প্রতিষ্ঠান প্রধান',
    email: env.admin.email,
    password: env.admin.password,
    icon: ShieldCheck,
    gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-400',
    cardBorder: 'hover:border-blue-500 dark:hover:border-blue-400',
    buttonColor:
      'bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25',
    bullets: [
      'শিক্ষার্থী ও শিক্ষক ডাটাবেস সম্পূর্ণ ম্যানেজমেন্ট',
      'টার্ম পরীক্ষার ফলাফল তৈরি, মার্কশিট ও গ্রেডিং হিসাব',
      'ফি কালেকশন, বকেয়া হিসাব ও অনলাইন লেজার',
      'নোটিশ বোর্ড, বাল্ক SMS ব্রডকাস্ট ও রোল পারমিশন',
    ],
  },
  {
    id: 'teacher',
    title: 'শিক্ষক ডেমো',
    badge: 'একাডেমিক ও ক্লাস মনিটরিং',
    roleName: 'সহকারী / সিনিয়র শিক্ষক',
    email: env.teacher.email,
    password: env.teacher.password,
    icon: GraduationCap,
    gradient: 'from-purple-600 via-violet-600 to-indigo-500',
    iconBg:
      'bg-purple-50 text-purple-600 dark:bg-purple-950/70 dark:text-purple-400',
    cardBorder: 'hover:border-purple-500 dark:hover:border-purple-400',
    buttonColor:
      'bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:to-violet-700 shadow-purple-500/25',
    bullets: [
      'ক্লাসের শিক্ষার্থীদের ডিজিটাল উপস্থিতি ট্র্যাকিং',
      'বিষয়ভিত্তিক পরীক্ষার নম্বর ইনপুট ও গ্রেড শিট ভিউ',
      'দৈনিক ক্লাস সময়সূচি ও রুটিন চেকিং',
      'শিক্ষার্থীদের হোমওয়ার্ক ও ডায়েরি পোস্ট করা',
    ],
  },
  {
    id: 'student',
    title: 'শিক্ষার্থী ডেমো',
    badge: 'শিক্ষার্থী ও অভিভাবক পোর্টাল',
    roleName: 'শিক্ষার্থী / অভিভাবক একাউন্ট',
    email: env.student.email,
    password: env.student.password,
    icon: User,
    gradient: 'from-emerald-600 via-teal-600 to-green-500',
    iconBg:
      'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/70 dark:text-emerald-400',
    cardBorder: 'hover:border-emerald-500 dark:hover:border-emerald-400',
    buttonColor:
      'bg-linear-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/25',
    bullets: [
      'টার্ম পরীক্ষার অনলাইন মার্কশিট ও রেজাল্ট দেখা',
      'দৈনিক ক্লাসে উপস্থিতি ও ছুটির হিস্ট্রি ট্র্যাকিং',
      'বকেয়া ও পরিশোধিত টিউশন ফির ডিজিটাল রসিদ',
      'স্কুলের ছুটির তালিকা ও জরুরি নোটিশ প্রাপ্তি',
    ],
  },
];

const DemoPage = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const buildLoginUrl = (email: string, pass: string) => {
    return `${env.frontendUrl}/login?email=${encodeURIComponent(
      email
    )}&password=${encodeURIComponent(pass)}`;
  };

  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-20 lg:pb-28 bg-linear-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Decorative Grid & Ambient Blur */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none -z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>লাইভ সিস্টেম ডেমো অ্যাক্সেস</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            রোল ভিত্তিক{' '}
            <span className="bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              লাইভ ডেমো এক্সপ্লোর করুন
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            এডমিন, শিক্ষক ও শিক্ষার্থী—যেকোনো রোলে সরাসরি লগইন করে Hello Soft
            ERP-এর প্রিমিয়াম কার্যকারিতা নিজে ব্যবহার করে দেখুন।
          </p>
        </div>

        {/* 3 Role-Based Demo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {demoRoles.map((role) => {
            const Icon = role.icon;
            const loginUrl = buildLoginUrl(role.email, role.password);

            return (
              <div
                key={role.id}
                className={`group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 ${role.cardBorder} p-7 sm:p-8 shadow-2xl transition-all duration-300 hover:bg-white/8 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
              >
                {/* Top Glowing Gradient Accent */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-linear-to-r ${role.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${role.iconBg} border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 border border-white/15 text-slate-200">
                      {role.badge}
                    </span>
                  </div>

                  {/* Title & Role Info */}
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {role.title}
                  </h2>
                  <p className="text-xs text-blue-400 font-medium mb-5">
                    {role.roleName}
                  </p>

                  {/* Credentials Box with Copy Feature */}
                  <div className="space-y-2.5 p-4 rounded-2xl bg-black/40 border border-white/10 mb-6">
                    {/* Email Row */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span>Email:</span>
                        <span className="font-mono text-white select-all">
                          {role.email}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(role.email, `${role.id}-email`)
                        }
                        className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="ইমেইল কপি করুন"
                      >
                        {copiedKey === `${role.id}-email` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Password Row */}
                    <div className="flex items-center justify-between text-xs pt-1.5 border-t border-white/10">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span>Password:</span>
                        <span className="font-mono text-white select-all">
                          {role.password}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(role.password, `${role.id}-pass`)
                        }
                        className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="পাসওয়ার্ড কপি করুন"
                      >
                        {copiedKey === `${role.id}-pass` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      এক নজরে সুবিধাসমূহ:
                    </p>
                    {role.bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Action Button */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.99] ${role.buttonColor}`}
                  >
                    <span>{role.title}-এ প্রবেশ করুন</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guidance Note Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-5 rounded-3xl bg-blue-950/40 border border-blue-500/30 backdrop-blur-md flex items-start gap-3.5 shadow-xl text-slate-300">
          <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="font-bold text-white">কিভাবে কাজ করে?</p>
            <p className="leading-relaxed">
              যেকোনো রোলের বাটনে ক্লিক করা মাত্রই ব্রাউজারটি সরাসরি{' '}
              <strong className="text-blue-300 font-mono">
                {env.frontendUrl}/login
              </strong>{' '}
              পেজে নতুন ট্যাবে ওপেন হবে এবং ইমেইল ও পাসওয়ার্ড স্বয়ংক্রিয়ভাবে ইনপুট
              হয়ে যাবে। আপনাকে কোনো কিছু টাইপ করতে হবে না, শুধু{' '}
              <strong className="text-white">"লগইন করুন"</strong> চাপলেই সেই
              রোলের ড্যাশবোর্ড ওপেন হবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPage;
