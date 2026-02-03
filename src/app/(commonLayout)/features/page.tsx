import Admission from '@/module/features/Admission';
import AdmitCardSection from '@/module/features/AdmitCardGeneration';
import Attendance from '@/module/features/Attendance';
import FeeCollectionSection from '@/module/features/FeeCollcetionSection';
import OtherFeatures from '@/module/features/OtherFeatures';
import ResultPublish from '@/module/features/ResultPublish';
import Heading from '@/module/shared/Heading';

export default async function page() {
  return (
    <div>
      <Heading heading="-এর প্রধান ফিচারসমূহ" />
      <Attendance />
      <Admission />
      <ResultPublish />
      <AdmitCardSection />
      <FeeCollectionSection />
      <OtherFeatures/>
    </div>
  );
}
