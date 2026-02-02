import AllModulesPage from '@/module/home/AllModule';
import Banner from '@/module/home/Banner';
import Features from '@/module/home/Features';
import HubSection from '@/module/home/HubSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto max-w-7xl items-center justify-center font-sans">
      <Banner />
      <Features />
      <HubSection />
      <AllModulesPage />
    </div>
  );
}
