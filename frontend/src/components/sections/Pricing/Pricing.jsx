import PricingCard from "./PricingCard";
import pricingData from "./pricingData";

const Pricing = () => (
  <section id="pricing" aria-labelledby="pricing-heading" className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Pricing</p>
        <h2 id="pricing-heading" className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Simple Pricing for Every Business
        </h2>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Choose a plan that scales with your business. Upgrade anytime as your
          team grows.
        </p>
      </div>

      <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingData.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
