import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [openFaqId, setOpenFaqId] = useState(faqData[0].id);

  const toggleFaq = (faqId) => {
    setOpenFaqId((currentId) => (currentId === faqId ? null : faqId));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">FAQ</p>
          <h2 id="faq-heading" className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Everything you need to know about CRM before getting started.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqData.map((faq) => (
            <FAQItem
              faq={faq}
              isOpen={openFaqId === faq.id}
              key={faq.id}
              onToggle={() => toggleFaq(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
