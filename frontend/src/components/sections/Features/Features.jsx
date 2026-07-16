import FeatureCard from "./FeatureCard";
import featuresData from "./featuresData";

const Features = () => (
  <section id="features" aria-labelledby="features-heading" className="bg-gray-50 py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Built to scale
        </p>
        <h2 id="features-heading" className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Powerful Features Built for Modern Businesses
        </h2>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Everything you need to manage leads, customers, sales pipelines, and
          team collaboration from one intelligent CRM platform.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature) => (
          <FeatureCard feature={feature} key={feature.title} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
