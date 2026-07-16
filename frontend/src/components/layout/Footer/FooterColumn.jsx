const FooterColumn = ({ title, links }) => (
  <nav aria-label={title}>
    <h3 className="font-semibold text-white">{title}</h3>
    <ul className="mt-5 space-y-3">
      {links.map(({ href, label }) => (
        <li key={label}>
          <a className="rounded-sm text-sm text-gray-400 outline-none transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900" href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default FooterColumn;
