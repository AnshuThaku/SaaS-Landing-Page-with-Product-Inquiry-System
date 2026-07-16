import { FiArrowRight, FiCheck } from "react-icons/fi";

const HeroContent = () => (
  <div className="max-w-2xl">
    <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
      <FiCheck aria-hidden="true" className="text-blue-600" />
      Trusted by 10,000+ Businesses
    </p>

    <h1 className="mt-7 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl lg:leading-[1.05]">
      Grow your business with a modern CRM platform.
    </h1>

    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
      Manage leads, automate workflows, track your sales pipeline, and build
      stronger customer relationships from one intuitive platform.
    </p>

    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
        href="#start-free-trial"
      >
        Start Free Trial
        <FiArrowRight aria-hidden="true" />
      </a>
      <a
        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
        href="#contact-sales"
      >
        Contact Sales
      </a>
    </div>
  </div>
);

export default HeroContent;
