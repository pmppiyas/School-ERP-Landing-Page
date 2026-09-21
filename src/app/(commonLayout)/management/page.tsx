import DocumentGeneration from '@/module/management/Document';
import FeeManagement from '@/module/management/Fee';
import ResultManagement from '@/module/management/Result';
import ClassSchedule from '@/module/management/Schedule';
import StudentManagement from '@/module/management/Student';
import TeacherManagement from '@/module/management/Teacher';
import Heading from '@/module/shared/Heading';

const page = async () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Heading
        heading="Hello Soft ERP-এর স্কুল পরিচালনার মডিউলসমূহ"
        badge="ম্যানেজমেন্ট মডিউল"
        subtitle="ছাত্র-ছাত্রী, শিক্ষক, ক্লাসের সময়সূচি, ফি ও পরীক্ষার ফলাফল পরিচালনার স্বয়ংক্রিয় সিস্টেম"
      />
      <StudentManagement />
      <TeacherManagement />
      <ClassSchedule />
      <FeeManagement />
      <ResultManagement />
      <DocumentGeneration />
    </div>
  );
};

export default page;
