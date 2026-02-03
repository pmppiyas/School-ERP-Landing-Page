import {
  Users,
  UserCog,
  ClipboardCheck,
  CreditCard,
  CalendarDays,
  BookOpenCheck,
  FileText,
  Bus,
  Library,
  MessageSquare,
  BarChart3,
  Settings,
} from 'lucide-react';

import hero1 from '@/assets/hero3.jpg';
import hero2 from '@/assets/hero4.jpg';
import hero3 from '@/assets/hero5.jpg';
import agent from '@/assets/agent.png';
import biomet from '@/assets/biomet.jpg';
import admission from '@/assets/admission.jpg';
import result from '@/assets/result.jpg';
import printer from '@/assets/printer.png';
import fee from '@/assets/fee.jpg';

export const bannerSlides = [
  {
    title: 'স্কুল ব্যবস্থাপনা সিস্টেম',
    subtitle: 'আধুনিক প্রযুক্তিতে শিক্ষা প্রতিষ্ঠান পরিচালনা',
    desc: 'ডিজিটাল উপস্থিতি, ফলাফল প্রস্তুত, এডমিট কার্ড জেনারেট সহ সম্পূর্ণ স্কুল ব্যবস্থাপনা এক প্ল্যাটফর্মে।',
    features: ['ডিজিটাল হাজিরা', 'রেজাল্ট ম্যানেজমেন্ট', 'এডমিট কার্ড'],
    image: hero1,
    bg: 'bg-gradient-to-br from-blue-950 via-indigo-950 to-black',
    accent: 'text-blue-300',
    glow: 'bg-blue-500/20',
  },
  {
    title: 'কলেজ ম্যানেজমেন্ট সফটওয়্যার',
    subtitle: 'সহজ এবং কার্যকর ব্যবস্থাপনা',
    desc: 'ছাত্র-ছাত্রী তথ্য, পরীক্ষার ফলাফল, সার্টিফিকেট তৈরি - সবকিছু একটি সিস্টেমে।',
    features: ['স্টুডেন্ট ডাটাবেস', 'অনলাইন রেজাল্ট', 'সার্টিফিকেট জেনারেট'],
    image: hero2,
    bg: 'bg-gradient-to-br from-fuchsia-950 via-purple-950 to-black',
    accent: 'text-fuchsia-300',
    glow: 'bg-fuchsia-500/20',
  },
  {
    title: 'মাদ্রাসা পরিচালনা সিস্টেম',
    subtitle: 'ইসলামিক শিক্ষা প্রতিষ্ঠানের জন্য বিশেষায়িত',
    desc: 'মাদ্রাসার সকল প্রশাসনিক কাজ ডিজিটাল পদ্ধতিতে সম্পন্ন করুন সহজেই।',
    features: ['শিক্ষার্থী তথ্য', 'পরীক্ষা ব্যবস্থাপনা', 'রিপোর্ট তৈরি'],
    image: hero3,
    bg: 'bg-gradient-to-br from-emerald-950 via-teal-950 to-black',
    accent: 'text-emerald-300',
    glow: 'bg-emerald-500/20',
  },
];

export const allmodulePage = [
  {
    title: 'শিক্ষার্থী ব্যবস্থাপনা',
    desc: 'ভর্তি, প্রোফাইল, ক্লাস, রোল, অভিভাবক তথ্য ও শিক্ষার্থীর সম্পূর্ণ রেকর্ড ব্যবস্থাপনা।',
    icon: Users,
  },
  {
    title: 'শিক্ষক ও স্টাফ ব্যবস্থাপনা',
    desc: 'শিক্ষক ও কর্মচারীর তথ্য, দায়িত্ব, বিষয় বরাদ্দ ও উপস্থিতি নিয়ন্ত্রণ।',
    icon: UserCog,
  },
  {
    title: 'হাজিরা ব্যবস্থাপনা',
    desc: 'শিক্ষার্থী ও শিক্ষকের দৈনিক হাজিরা ডিজিটালভাবে সংরক্ষণ ও রিপোর্ট।',
    icon: ClipboardCheck,
  },
  {
    title: 'ফি ও হিসাব ব্যবস্থাপনা',
    desc: 'ফি কালেকশন, বেতন, রসিদ, ডিসকাউন্ট ও আর্থিক রিপোর্ট।',
    icon: CreditCard,
  },
  {
    title: 'ক্লাস রুটিন ব্যবস্থাপনা',
    desc: 'ক্লাস, বিষয় ও শিক্ষক অনুযায়ী স্মার্ট সময়সূচি তৈরি।',
    icon: CalendarDays,
  },
  {
    title: 'পরীক্ষা ও ফলাফল ব্যবস্থাপনা',
    desc: 'পরীক্ষা নিয়ন্ত্রণ, মার্কস এন্ট্রি, গ্রেডিং ও রেজাল্ট প্রকাশ।',
    icon: BookOpenCheck,
  },
  {
    title: 'ডায়েরি ও নোটিশ',
    desc: 'হোমওয়ার্ক, নোটিশ, ঘোষণা ও একাডেমিক আপডেট শেয়ার।',
    icon: FileText,
  },
  {
    title: 'লাইব্রেরি ব্যবস্থাপনা',
    desc: 'বই সংরক্ষণ, ইস্যু-রিটার্ন, জরিমানা ও লাইব্রেরি রিপোর্ট।',
    icon: Library,
  },
  {
    title: 'পরিবহন ব্যবস্থাপনা',
    desc: 'স্কুল বাস, রুট, চালক ও শিক্ষার্থী বরাদ্দ ব্যবস্থাপনা।',
    icon: Bus,
  },
  {
    title: 'SMS ও নোটিফিকেশন',
    desc: 'শিক্ষার্থী ও অভিভাবকদের জন্য SMS, নোটিফিকেশন ও অ্যালার্ট।',
    icon: MessageSquare,
  },
  {
    title: 'রিপোর্ট ও অ্যানালিটিক্স',
    desc: 'একাডেমিক ও ফাইন্যান্সিয়াল রিপোর্ট ও বিশ্লেষণ।',
    icon: BarChart3,
  },
  {
    title: 'সিস্টেম সেটিংস',
    desc: 'সেশন, ক্লাস, বিষয়, গ্রেড, ইউজার রোল ও পারমিশন কনফিগারেশন।',
    icon: Settings,
  },
];

export const atttendaceFeatures = [
  'শিক্ষার্থী ও শিক্ষকদের দৈনিক হাজিরা অটোমেটিকভাবে সংরক্ষণ',
  'অভিভাবকদের কাছে হাজিরার তথ্য এসএমএস নোটিফিকেশন',
  'মাসিক ও বাৎসরিক হাজিরা রিপোর্ট এক ক্লিকে',
  'ম্যানুয়াল ভুল ছাড়াই নির্ভুল উপস্থিতি হিসাব',
];

export const assets = { agent, biomet, admission, result, printer, fee };
