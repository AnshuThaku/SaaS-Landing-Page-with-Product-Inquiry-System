import { FiStar } from "react-icons/fi";

const TestimonialCard = ({ testimonial }) => {
  const { avatar, company, name, review, title } = testimonial;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/70">
      <div className="flex items-center gap-4">
        <img alt={`${name} avatar`} className="h-12 w-12 rounded-full border border-gray-100" height="48" src={avatar} width="48" />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="mt-0.5 text-sm text-gray-600">{title}, {company}</p>
        </div>
      </div>

      <div aria-label="5 out of 5 stars" className="mt-6 flex gap-1 text-yellow-400" role="img">
        {Array.from({ length: 5 }, (_, index) => (
          <FiStar aria-hidden="true" fill="currentColor" key={index} size={16} />
        ))}
      </div>

      <blockquote className="mt-5 flex-1 text-[0.975rem] leading-7 text-gray-600">
        “{review}”
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
