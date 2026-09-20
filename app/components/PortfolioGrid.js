'use client';

import { useEffect, useRef } from 'react';
import { Film } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';

const clientReels = [
  {
    src: '/videos/clip_1.mp4',
    poster: '/images/poster_1.jpg',
    title: 'App Promotion',
    category: 'Maya AI',
    tag: 'SaaS / AI Launch',
  },
  {
    src: '/videos/clip_2.mp4',
    poster: '/images/poster_2.jpg',
    title: 'Brand Storytelling',
    category: 'Maya AI',
    tag: 'Narrative & Lifestyle',
  },
  {
    src: '/videos/clip_3.mp4',
    poster: '/images/poster_3.jpg',
    title: 'Creative Transition',
    category: 'GENNETZ Originals',
    tag: 'Motion & Visual FX',
  },
  {
    src: '/videos/clip_4.mp4',
    poster: '/images/poster_4.jpg',
    title: 'Product Showcase',
    category: 'Maya AI',
    tag: 'Commercial Feature',
  },
  {
    src: '/videos/clip_5.mp4',
    poster: '/images/poster_5.jpg',
    title: 'Business Cinematic',
    category: 'Mahindra',
    tag: 'Automotive B-Roll',
  },
  {
    src: '/videos/clip_6.mp4',
    poster: '/images/poster_6.jpg',
    title: 'Event Coverage',
    category: 'Special Events',
    tag: 'Live Culture & Moments',
  },
];

export default function PortfolioGrid() {
  const sectionRef = useRef(null);

  // Play videos when in viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const videos = sectionRef.current.querySelectorAll('video');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play().catch(() => {});
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="work" className="work relative w-full overflow-hidden py-24 bg-[#070708]" ref={sectionRef}>
      {/* Background Graphic Accent */}
      <div className="pointer-events-none absolute right-0 bottom-0 opacity-20">
        <svg
          className="text-neutral-800"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_work_bg)">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </g>
          <defs>
            <clipPath id="clip0_work_bg">
              <rect fill="white" height="154" width="460" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-14 flex max-w-4xl flex-col items-center px-4 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/25 shadow-[0_0_20px_rgba(20,184,166,0.25)]">
            <Film size={22} />
          </div>

          <h2 className="relative mb-3 font-head font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            OUR FEATURED WORK
          </h2>
          <p className="max-w-2xl text-neutral-400 text-base sm:text-lg mb-4">
            High-converting Instagram reels produced, shot, and edited for real brands.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-teal-400">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
            Auto-scrolling &bull; Hover on any reel to pause &amp; watch
          </span>
        </div>

        {/* Auto-scrolling Reels Track with Pause-on-Hover */}
        <div className="marquee-wrapper relative w-full overflow-hidden">
          {/* Edge Gradient Fade Masks */}
          <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-16 sm:w-32 bg-gradient-to-r from-[#070708] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-16 sm:w-32 bg-gradient-to-l from-[#070708] to-transparent" />

          <Marquee
            pauseOnHover={true}
            repeat={3}
            className="[--duration:40s] [--gap:1.5rem] py-6"
          >
            {clientReels.map((reel, index) => (
              <div
                key={index}
                className="group relative w-64 sm:w-72 shrink-0 flex flex-col cursor-pointer"
              >
                {/* Reel Card */}
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-300 group-hover:scale-[1.03] group-hover:border-teal-500/60 group-hover:shadow-[0_16px_40px_rgba(20,184,166,0.3)]">
                  <video
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={reel.src}
                    poster={reel.poster}
                    muted
                    playsInline
                    loop
                    autoPlay
                  />

                  {/* Top Client Badge */}
                  <div className="absolute top-3.5 left-3.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
                    <span className="text-[11px] font-semibold text-neutral-300 tracking-wide">
                      {reel.category}
                    </span>
                  </div>

                  {/* Bottom Info Overlay Badge */}
                  <div className="absolute bottom-0 w-full rounded-b-2xl bg-neutral-950/85 backdrop-blur-md p-4 border-t border-white/10 transition-all duration-300 group-hover:bg-neutral-950/95">
                    <h3 className="font-semibold text-white text-base leading-tight mb-1">
                      {reel.title}
                    </h3>
                    <p className="text-teal-400 text-xs font-medium tracking-wide">
                      {reel.tag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Client Testimonial Highlight */}
        <div className="mx-auto mt-16 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-6 font-medium text-lg text-neutral-200 leading-relaxed md:text-xl">
            &ldquo;The exceptional execution from GENNETZ truly impressed us. We
            suggested a creative direction, and their production team delivered it with
            remarkable speed, strategy, and cinematic quality!&rdquo;
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="text-center">
              <p className="font-semibold text-white text-base">
                Maya AI Launch Team
              </p>
              <p className="text-teal-400 text-xs font-medium tracking-wide">
                Client Partner &bull; Viral App Campaign
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
