'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { bannerSlides } from '@/assets/bannerSlides';

const Banner = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500 }),
  ]);

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="flex">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`flex-[0_0_100%] min-h-screen flex items-center ${slide.bg} text-white relative pt-20 pb-8`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur border border-white/20">
                    শিক্ষা প্রতিষ্ঠান সমাধান
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:leading-22">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2
                    className={`text-2xl md:text-3xl font-semibold ${slide.accent}`}
                  >
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {slide.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/15 shadow-sm"
                      >
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm font-medium text-white/90">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6">
                    <button className="px-8 py-3 rounded-md font-medium bg-primary text-primary-foreground hover:scale-[1.03] hover:shadow-lg transition-all">
                      ফ্রি ট্রায়াল শুরু করুন
                    </button>

                    <button
                      className="px-8 py-3 rounded-md font-medium bg-white/10 text-white  border border-white/20 hover:bg-white/20
                                 transition-all"
                    >
                      ডিমো দেখুন
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative hidden lg:block">
                  <div className="relative h-100 w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Glow Effects */}
                  <div
                    className={`absolute -top-10 -right-10 w-48 h-48 ${slide.glow} rounded-full blur-3xl`}
                  />
                  <div
                    className={`absolute -bottom-10 -left-10 w-48 h-48 ${slide.glow} rounded-full blur-3xl`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
