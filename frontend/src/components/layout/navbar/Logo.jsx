const Logo = ({ href = "/", onClick }) => (
  <a
    aria-label="CRM home"
    className="rounded-md text-xl font-bold tracking-tight text-gray-950 outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
    href={href}
    onClick={onClick}
  >
    CRM<span className="text-gray-400">.</span>
  </a>
);

export default Logo;
