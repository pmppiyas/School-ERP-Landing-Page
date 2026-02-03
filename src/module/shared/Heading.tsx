import React from 'react';

export default async function Heading({ heading }: { heading?: string }) {
  return (
    <div className="relative w-full h-60 lg:h-76 bg-linear-to-br from-fuchsia-950 via-purple-950 to-black/80 overflow-hidden flex flex-col items-center justify-center">

      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#grad)"
          d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,149.3C840,149,960,203,1080,218.7C1200,235,1320,213,1380,202.7L1440,192L1440,0L0,0Z"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 space-y-3">
         <h1 className="text-3xl md:text-4xl font-semibold text-white text-center">Hello Soft ERP</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          {heading}
        </h2>
      </div>
    </div>
  );
}
