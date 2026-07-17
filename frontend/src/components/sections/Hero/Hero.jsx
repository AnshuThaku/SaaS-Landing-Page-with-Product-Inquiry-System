import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => (
  <main>
    <section
      aria-labelledby="hero-heading"
className="flex min-h-[calc(100vh-80px)] items-start lg:items-center bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-16"    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div id="hero-heading">
            <HeroContent />
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  </main>
);

export default Hero;