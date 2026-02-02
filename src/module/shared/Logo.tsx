import { School } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="transition-opacity hover:opacity-90">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <School size={24} />
        </div>

        <span className="text-xl font-bold tracking-tight text-white ">
          Hello Soft{' '}
          <span className="text-primary text-sm font-medium">ERP</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
