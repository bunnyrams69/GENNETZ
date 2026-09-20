'use client';

import React from 'react';
import { MessageCircle, Award, Film, Layers, Sparkles } from 'lucide-react';
import MagneticLiquidButton from './MagneticLiquidButton';
import OptimizedTiltCard from './OptimizedTiltCard';

const skills = [
  '100K+ personal audience',
  'Personal editor',
  'Camera & shooting',
  'Content writing',
  'Instagram strategy',
  'Analytics & reporting',
  'Lifestyle niche',
  'Business niche',
  'Creator niches',
];

const credentialCards = [
  {
    icon: Award,
    title: '0 → 100K',
    subtitle: 'Organic Growth Proof',
    desc: 'Built my personal audience completely from scratch with zero ad spend, no fake follower hacks, and no shortcuts.',
  },
  {
    icon: Film,
    title: 'Personal Editor',
    subtitle: 'No Outsourcing',
    desc: 'Every reel, frame, audio hit, and hook is crafted by me. I never pass your brand to junior interns or cheap contractors.',
  },
  {
    icon: Layers,
    title: 'Multi-Niche Creator',
    subtitle: 'Proven Versatility',
    desc: 'Deep experience across lifestyle aesthetics, business lead-generation, and creator-led narrative formats.',
  },
  {
    icon: Sparkles,
    title: 'Known in the Space',
    subtitle: 'Active & Accountable',
    desc: 'An active creator with a real, visible presence. My reputation is directly tied to the success of your account.',
  },
];

export default function AboutChaithu() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#06080b] border-t border-white/5 relative overflow-hidden">
      {/* Luminous background accents */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[350px] bg-teal-500/5 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-10 w-[400px] h-[250px] bg-cyan-500/5 blur-[110px] rounded-full pointer-events-none"
        aria-hidden="true" 
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story, Pull Quote, Chips, CTAs */}
          <div className="lg:col-span-7 space-y-8 reveal reveal-left">
            <div>
              <div className="eyebrow-badge inline-flex items-center gap-2 mb-3">
                <span className="pulse-dot"></span>
                <span>THE CREATOR BEHIND GEN-NETZ</span>
              </div>
              <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                I&apos;M CHAITHU.<br />
                <span className="accent text-teal-400">I BUILT THIS FROM NOTHING.</span>
              </h2>
            </div>

            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                I built my personal Instagram from 0 to over 100K followers. Not by hiring an agency, not by running ads, and not by getting lucky. I did it by testing thousands of hooks, editing hundreds of reels late into the night, and mastering what genuinely stops the thumb and earns loyalty.
              </p>
              <p>
                I&apos;ve created across lifestyle, business, and creator niches &mdash; each with completely different audience psychologies. When you hire GEN-NETZ, you aren&apos;t handed off to a 21-year-old intern who has never built a following in their life. You get my personal eyes, camera direction, and editing on every single post.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="relative border-l-2 border-teal-400 pl-6 py-2 my-8 bg-teal-500/[0.03] rounded-r-xl">
              <p className="font-head text-xl sm:text-2xl text-white italic tracking-wide leading-snug">
                &ldquo;I know what it feels like to post into silence. I also know what it takes to get to 100K. That&apos;s the difference I bring.&rdquo;
              </p>
              <span className="block mt-2 text-xs uppercase tracking-widest text-teal-400 font-semibold">
                &mdash; Chaithu, Founder &amp; Lead Strategist
              </span>
            </div>

            {/* Chips / Skill Badges */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                Core Capabilities &amp; Niches
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:border-teal-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Two CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticLiquidButton
                variant="aurora"
                size="md"
                href="https://www.instagram.com/chaithu.z/"
                target="_blank"
                leftIcon={
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                }
                className="font-head uppercase tracking-wider text-sm"
              >
                My Personal Instagram &nearr;
              </MagneticLiquidButton>

              <MagneticLiquidButton
                variant="glass"
                size="md"
                href="https://wa.me/916383884581?text=Hi%20Chaithu,%20I'd%20love%20to%20work%20with%20you%20on%20my%20Instagram"
                target="_blank"
                leftIcon={<MessageCircle size={18} />}
                className="font-head uppercase tracking-wider text-sm"
              >
                Work with me &rarr;
              </MagneticLiquidButton>
            </div>
          </div>

          {/* Right Column: 4 Credential Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 reveal reveal-right">
            {credentialCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <OptimizedTiltCard
                  key={idx}
                  className="bg-[#0e1117]/90 border border-white/10 hover:border-teal-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_30px_rgba(20,184,166,0.15)] group"
                  data-delay={idx * 80}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 group-hover:scale-105 transition-all">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-head text-2xl font-bold text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-teal-400/90 text-xs font-semibold uppercase tracking-wider mb-3">
                      {card.subtitle}
                    </p>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-neutral-500 font-medium">
                    <span className="w-1 h-1 rounded-full bg-teal-400" />
                    <span>Verified Creator Standard</span>
                  </div>
                </OptimizedTiltCard>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
