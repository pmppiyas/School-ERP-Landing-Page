import Heading from '@/module/shared/Heading';
import SolutionsSection from '@/module/solutions/SolutionsSection';

const page = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Heading
        heading="Hello Soft ERP-এর সমাধানসমূহ"
        badge="ডিজিটাল সমাধান"
        subtitle="শিক্ষা প্রতিষ্ঠানের প্রতিটি বিভাগের জন্য বাস্তবসম্মত, নির্ভরযোগ্য ও কার্যকর ক্লাউড সল্যুশন"
      />
      <SolutionsSection />
    </div>
  );
};

export default page;
