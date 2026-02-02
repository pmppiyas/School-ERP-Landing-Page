import AllModulesPage from '@/module/home/AllModule';
import Banner from '@/module/home/Banner';
import Features from '@/module/home/Features';
import HubSection from '@/module/home/HubSection';
import QuickActionsSection from '@/module/home/QuickActionSection';
import SmartReportingSection from '@/module/home/ReportingSection';
import UserCountSection from '@/module/home/UserCountSection';

export default function Home() {
  return (
    <div className="flex flex-col space-y-24 min-h-screen w-full mx-auto items-center justify-center font-sans">
      <Banner />
      <HubSection />
      <Features />
      <AllModulesPage />
      <QuickActionsSection />
      <SmartReportingSection />
      <UserCountSection />
    </div>
  );
}
