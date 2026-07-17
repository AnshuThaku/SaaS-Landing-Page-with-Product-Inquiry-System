import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../../../constants/navigation";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 font-sans backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-16 md:h-18 lg:h-20 items-center justify-between">          <Logo />

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <NavLinks className="flex items-center gap-8" links={navLinks} />
          </nav>

          <a
            className="hidden rounded-full bg-black px-6 py-3 font-medium text-white outline-none transition-all duration-300 hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 lg:inline-flex"
            href="#start-free-trial"
          >
            Start Free Trial
          </a>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex rounded-md p-2 text-gray-700 outline-none transition-colors hover:text-black focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 lg:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            {isMenuOpen ? <FiX aria-hidden="true" size={24} /> : <FiMenu aria-hidden="true" size={24} />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation">
        <MobileMenu isOpen={isMenuOpen} links={navLinks} onClose={closeMenu} />
      </div>
    </header>
  );
};

export default Navbar;
