import { FiCheck } from "react-icons/fi";

const PricingCard = ({ plan }) => {
  const { cta, description, features, highlighted, href, name, period, price } = plan;
  const textColor = highlighted ? "text-white" : "text-gray-900";
  const mutedTextColor = highlighted ? "text-gray-300" : "text-gray-600";

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10 ${
        highlighted
          ? "border-gray-900 bg-gray-900 shadow-xl shadow-gray-300/70 lg:scale-[1.03]"
          : "border-gray-200 bg-white shadow-sm shadow-gray-200/50"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
          Most Popular
        </span>
      )}

      <h3 className={`text-2xl font-semibold tracking-tight ${textColor}`}>{name}</h3>
      <p className={`mt-3 min-h-12 leading-6 ${mutedTextColor}`}>{description}</p>

      <div className="mt-8 flex items-end gap-1">
        <span className={`text-5xl font-bold tracking-tight ${textColor}`}>{price}</span>
        {period && <span className={`mb-1 text-sm ${mutedTextColor}`}>{period}</span>}
      </div>

      <ul className="mt-9 space-y-4" aria-label={`${name} plan features`}>
        {features.map((feature) => (
          <li className={`flex items-center gap-3 text-sm ${mutedTextColor}`} key={feature}>
            <FiCheck aria-hidden="true" className={highlighted ? "text-blue-400" : "text-blue-600"} size={17} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        aria-label={`${cta} with the ${name} plan`}
        className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 font-medium outline-none transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-4 ${
          highlighted
            ? "bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-white focus-visible:ring-offset-gray-900"
            : "bg-black text-white hover:bg-gray-800 focus-visible:ring-black"
        }`}
        href={href}
      >
        {cta}
      </a>
    </article>
  );
};

export default PricingCard;
