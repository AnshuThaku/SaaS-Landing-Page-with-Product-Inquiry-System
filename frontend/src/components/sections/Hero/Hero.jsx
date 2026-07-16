import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => (
  <main>
    <section aria-labelledby="hero-heading" className="flex min-h-[calc(100vh-5rem)] items-center bg-white py-16 sm:py-20 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div id="hero-heading"><HeroContent /></div>
          <HeroImage />
        </div>
      </div>
    </section>
  </main>
);

export default Hero;
