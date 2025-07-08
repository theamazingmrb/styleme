"use client";

import React from "react";

const faqs = [
  {
    question: "How do I book a personal styling session?",
    answer:
      "You can book your session directly thru the website by selecting your preferred package and date.",
  },
  {
    question: "Are virtual styling sessions available?",
    answer:
      "Yes! We offer both in-person and virtual styling sessions to accommodate your needs. Virtual sessions are conducted via video call and are just as interactive and personalized as in-person consultations.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Our services include wardrobe edits, personal shopping, event styling, and ongoing style support. Each service is tailored to your unique preferences and goals.",
  },
  {
    question: "Can I get a customized package?",
    answer:
      "Absolutely. If our standard packages don't quite fit your needs, please contact us and we'll create a custom package just for you.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You may cancel or reschedule your session up to 24 hours in advance for a full refund. Cancellations made within 24 hours of the session are non-refundable.",
  },
  {
    question: "How should I prepare for my session?",
    answer:
      "After booking, you'll receive a preparation guide with tips on how to get the most out of your session. Feel free to share any specific goals or questions beforehand!",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif text-center text-[#9b8579] mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 border border-[#e6e0d4]">
              <h2 className="text-xl font-semibold text-[#b8a99a] mb-2">{faq.question}</h2>
              <p className="text-[#333] text-base leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
