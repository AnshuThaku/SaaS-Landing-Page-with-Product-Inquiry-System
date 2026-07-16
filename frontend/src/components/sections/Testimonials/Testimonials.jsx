import TestimonialCard from "./TestimonialCard";
import testimonialsData from "./testimonialsData";

const Testimonials = () => (
  <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-gray-50 py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Customer stories</p>
        <h2 id="testimonials-heading" className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Trusted by Growing Businesses
        </h2>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Thousands of companies rely on CRM to streamline customer
          relationships, increase productivity, and accelerate sales growth.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
