import DocumentGeneration from '@/module/management/Document';
import FeeManagement from '@/module/management/Fee';
import ResultManagement from '@/module/management/Result';
import ClassSchedule from '@/module/management/Schedule';
import StudentManagement from '@/module/management/Student';
import TeacherManagement from '@/module/management/Teacher';
import Heading from '@/module/shared/Heading';

const page = async() => {
  return (
    <div>
      <Heading heading="-এর স্কুল পরিচালনার মডিউলসমূহ" />
      <StudentManagement />
      <TeacherManagement />
      <ClassSchedule />
      <FeeManagement />
      <ResultManagement />
      <DocumentGeneration/>
    </div>
  );
};

export default page;
