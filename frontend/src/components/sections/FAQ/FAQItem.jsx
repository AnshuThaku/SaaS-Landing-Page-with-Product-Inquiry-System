import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  const answerId = `${faq.id}-answer`;

  return (
    <article className="rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-sm hover:shadow-gray-200/70">
      <h3>
        <button
          aria-controls={answerId}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left text-lg font-semibold text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
          onClick={onToggle}
          type="button"
        >
          {faq.question}
          <FiChevronDown
            aria-hidden="true"
            className={`shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            size={21}
          />
        </button>
      </h3>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        id={answerId}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-7 text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </article>
  );
};

export default FAQItem;
