'use client';

import React from 'react';
import { UserCheck, Video, Sliders, ShieldCheck } from 'lucide-react';
import OptimizedTiltCard from './OptimizedTiltCard';

const differenceCards = [
  {
    icon: UserCheck,
    title: "I've been in your position.",
    description:
      "I started at absolute zero and personally grew to over 100K followers through relentless content iteration and strategy. No paid follower hacks, no shortcuts — I know what works because I lived it.",
    badge: "0 → 100K REAL EXPERIENCE",
  },
  {
    icon: Video,
    title: "I edit personally. Every reel.",
    description:
      "Your footage is never handed off to junior interns or cheap outsourced teams. Every hook, frame transition, subtitle cadence, and sound cue is edited by me with the exact standards I put into my own channels.",
    badge: "100% IN-HOUSE CRAFT",
  },
  {
    icon: Sliders,
    title: "I'm specific about what I do.",
    description:
      "Strategy, scripting, shooting visits, editing, publishing, community support, and analytics. Every deliverable is clearly scoped so you know exactly what is happening each week without guesswork.",
    badge: "CLEAR BOUNDARIES & SPECS",
  },
  {
    icon: ShieldCheck,
    title: "No viral number promises.",
    description:
      "I won't sell you fake promises of 10K followers in 30 days. I build a sustainable, authentic content engine that attracts real buyers and community — backed by transparent monthly performance data.",
    badge: "HONEST DATA & SYSTEMS",
  },
];

export default function WhyDifferent() {
  return (
    <section id="why-different" className="py-24 bg-[#070708] border-t border-white/5 relative">
      {/* Subtle background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true" 
      />

      <div className="container relative z-10">
        <div className="section-header reveal mb-16 text-center">
          <div className="eyebrow-badge inline-flex items-center gap-2 mb-3">
            <span className="pulse-dot"></span>
            <span>CREATOR ADVANTAGE</span>
          </div>
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            WHY GEN-NETZ IS DIFFERENT
          </h2>
          <p className="subline max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg">
            The difference between an agency that promises numbers and a creator who builds systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {differenceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <OptimizedTiltCard
                key={idx}
                className="reveal bg-[#0d0e10]/90 border border-white/10 hover:border-teal-500/40 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_35px_rgba(20,184,166,0.15)] group"
                data-delay={idx * 100}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-teal-400/80 bg-teal-500/5 px-2.5 py-1 rounded-full border border-teal-500/15">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-head text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide">
                    &ldquo;{card.title}&rdquo;
                  </h3>

                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
                  <span>Chaithu&apos;s Standard</span>
                </div>
              </OptimizedTiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
