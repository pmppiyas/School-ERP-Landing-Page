import Navbar from '@/module/shared/Navbar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
