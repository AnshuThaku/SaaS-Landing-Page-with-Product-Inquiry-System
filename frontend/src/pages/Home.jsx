import Navbar from "../components/layout/navbar";
import Features from "../components/sections/Features";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
