"use client"; // ⚠ This makes it a Client Component

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book consultation?",
      answer: "You can book a consultation via the 'Request Consultation' button or by contacting us directly via phone or email."
    },
    {
      question: "What are your fees?",
      answer: "Our fees depend on the complexity of the case. We offer transparent pricing and will provide a detailed quote before proceeding."
    },
    {
      question: "Do you take pro bono cases?",
      answer: "Yes, we consider select pro bono cases based on social impact and merit. Contact us to discuss your case."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  return (
    <section className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-black">
          Common Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded shadow cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}