import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, links, onClose }) => (
  <div
    aria-hidden={!isOpen}
    className={`overflow-hidden border-t border-gray-200 transition-all duration-300 lg:hidden ${
      isOpen
        ? "visible max-h-96 translate-y-0 opacity-100"
        : "invisible max-h-0 -translate-y-2 opacity-0"
    }`}
    inert={!isOpen ? "" : undefined}
  >
    <div className="px-6 py-5">
      <nav aria-label="Mobile navigation">
        <NavLinks
          className="flex flex-col items-start gap-1"
          links={links}
          onNavigate={onClose}
        />
      </nav>
      <a
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 font-medium text-white outline-none transition-all duration-300 hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
        href="#start-free-trial"
        onClick={onClose}
      >
        Start Free Trial
      </a>
    </div>
  </div>
);

export default MobileMenu;
