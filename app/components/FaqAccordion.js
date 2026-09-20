'use client';

import React from 'react';
import { FaqAccordion } from '@/components/ui/faq-chat-accordion';

const gennetzFaqData = [
  {
    id: 1,
    question: "Do I need to give you my Instagram password?",
    answer: "No. I use official platform access via Meta Business Suite and collaborator roles. Your password stays strictly with you, and you can revoke access anytime with one click.",
    icon: "🔒",
    iconPosition: "left",
  },
  {
    id: 2,
    question: "What if I don't like a piece of content?",
    answer: "Every piece goes through your review before publishing. Revisions to edit cuts, pacing, captions, and music are included. Major changes (a completely new concept or full reshoot) are quoted separately before any extra work begins.",
    icon: "✍️",
    iconPosition: "right",
  },
  {
    id: 3,
    question: "Do you run paid ads?",
    answer: "Paid advertising isn't included in any monthly organic plan. If you need ad campaign strategy, I can manage paid campaigns for a separate fee — but the ad budget is always paid directly by you, and no ad runs without your sign-off.",
    icon: "📈",
    iconPosition: "left",
  },
  {
    id: 4,
    question: "Can you guarantee followers or growth?",
    answer: "No — and I won't pretend to. No honest creator can guarantee specific follower counts or overnight virality. What I guarantee is consistent, high-craft execution, real performance data, and an organic system built from the same principles that took me to 100K.",
    icon: "🛡️",
    iconPosition: "right",
  },
  {
    id: 5,
    question: "What about Meta Verified?",
    answer: "Meta Verified onboarding guidance is included in ELITE, GROWTH, and FLEX plans. Meta controls eligibility and pricing. If Meta raises its subscription price, the difference is passed through — but you'll always know beforehand.",
    icon: "✅",
    iconPosition: "left",
  },
];

export default function FaqAccordionSection() {
  return (
    <div className="reveal w-full max-w-3xl mx-auto py-2">
      <FaqAccordion 
        data={gennetzFaqData}
        timestamp="Updated daily • Verified Onboarding"
        className="p-0"
        questionClassName="text-sm sm:text-base py-2.5 px-4 rounded-xl border border-white/10"
        answerClassName="max-w-xl text-sm sm:text-base leading-relaxed px-5 py-3 rounded-2xl shadow-lg border border-teal-400/20"
      />
    </div>
  );
}
