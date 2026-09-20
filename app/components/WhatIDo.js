'use client';

import React from 'react';
import { Compass, PenTool, Clapperboard, BarChart3, ArrowRight } from 'lucide-react';
import OptimizedTiltCard from './OptimizedTiltCard';

const pillars = [
  {
    number: '01',
    category: 'STRATEGY',
    title: 'Research & Strategy',
    description:
      'I dissect your current account, audit top competitors in your niche, map your ideal audience personas, and establish a clear editorial direction tailored to drive saves, shares, and inquiries.',
    points: [
      'Full Instagram profile & grid audit',
      'Competitor & niche trend intelligence',
      'Audience mapping & tone-of-voice guide',
      'Content pillars & monthly themes',
    ],
    icon: Compass,
  },
  {
    number: '02',
    category: 'CONTENT',
    title: 'Content Creation & Scripting',
    description:
      'High-retention reel concepts, hook engineering, carousel drafts, and story arcs designed to capture attention in the first 2 seconds and convert casual viewers into engaged followers.',
    points: [
      'High-converting 2-second hook writing',
      'Full scripts & talking-point storyboards',
      'Carousel posts, graphics & carousels',
      'Daily story strategies & conversion prompts',
    ],
    icon: PenTool,
  },
  {
    number: '03',
    category: 'PRODUCTION',
    title: 'Shooting & Personal Editing',
    description:
      'I personally direct your shooting visits (where included in your plan) and edit every reel. No generic templates — dynamic cuts, custom typography, sound design, and color grading.',
    points: [
      'Planned in-person shooting direction',
      'Personal video editing on every reel',
      'Dynamic caption animation & sound design',
      'Color correction & cinematic pacing',
    ],
    icon: Clapperboard,
  },
  {
    number: '04',
    category: 'MANAGEMENT',
    title: 'Publishing & Analytics',
    description:
      'I handle timing, captions, tags, and audience interaction to boost algorithmic distribution. Every month, I deliver transparent performance analytics and strategic pivots.',
    points: [
      'Peak-engagement schedule & publishing',
      'Caption writing & hashtag optimization',
      'Comment interaction & community nurturing',
      'In-depth monthly growth & analytics report',
    ],
    icon: BarChart3,
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="services py-24 bg-[#090d12] border-t border-b border-white/5 relative">
      <div className="container">
        <div className="section-header reveal mb-16 text-center">
          <div className="eyebrow-badge inline-flex items-center gap-2 mb-3">
            <span className="pulse-dot"></span>
            <span>END-TO-END EXECUTION</span>
          </div>
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            WHAT I DO
          </h2>
          <p className="subline max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg">
            Four pillars of personal execution &mdash; from strategic research to camera, editing, and monthly performance reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <OptimizedTiltCard
                key={idx}
                className="reveal bg-[#11141a]/90 border border-white/10 hover:border-teal-500/40 rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_40px_rgba(20,184,166,0.12)] group"
                data-delay={idx * 100}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-head text-2xl font-black text-teal-400/80">
                        {pillar.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        {pillar.category}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="font-head text-2xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <ArrowRight size={14} className="text-teal-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                  <span className="text-teal-400 font-medium">Personal Direction</span>
                  <span>Chaithu &bull; GEN-NETZ</span>
                </div>
              </OptimizedTiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
