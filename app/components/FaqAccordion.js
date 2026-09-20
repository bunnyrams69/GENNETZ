'use client';

import React from 'react';
import { FaqAccordion } from '@/components/ui/faq-chat-accordion';

const gennetzFaqData = [
  {
    id: 1,
    question: "Do I need to give you my Instagram password?",
    answer: "No. GENNETZ uses official platform access (Meta Business Suite / Instagram collaborator roles). Your password stays with you, and you can revoke access anytime.",
    icon: "🔒",
    iconPosition: "left",
  },
  {
    id: 2,
    question: "What if I don't like a piece of content?",
    answer: "Every piece goes through an approval process before publishing. Reasonable changes are included. Major changes (full reshoot, completely new concept) are quoted separately before any extra work begins.",
    icon: "✍️",
    iconPosition: "right",
  },
  {
    id: 3,
    question: "Do you run paid ads?",
    answer: "Paid advertising isn't included in any plan. If you want ads, GENNETZ can manage campaigns for a separate fee — but the ad budget is always paid by you, and no campaign starts without your approval.",
    icon: "📈",
    iconPosition: "left",
  },
  {
    id: 4,
    question: "Can you guarantee followers or growth?",
    answer: "No — and we won't pretend to. No agency can guarantee specific follower counts, viral content, or sales. What we guarantee is consistent professional work, real performance data, and a process that improves month over month.",
    icon: "🛡️",
    iconPosition: "right",
  },
  {
    id: 5,
    question: "What about Meta Verified?",
    answer: "Meta Verified support is included in ELITE, GROWTH, and FLEX plans. Meta controls eligibility and pricing. If Meta raises its subscription price, the difference is passed through — but you'll always be told beforehand.",
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
