const NavLinks = ({ links, onNavigate, className = "" }) => (
  <ul className={className}>
    {links.map(({ label, href }) => (
      <li key={href}>
        <a
          className="rounded-md px-1 py-2 font-medium text-gray-700 outline-none transition-all duration-300 hover:text-black focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
          href={href}
          onClick={onNavigate}
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
);

export default NavLinks;
