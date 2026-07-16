import FooterColumn from "./FooterColumn";
import { footerColumns, socialLinks } from "./footerData";

const Footer = () => (
  <footer className="bg-gray-900 py-20 text-gray-300">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-8">
        <div className="max-w-xs">
          <a aria-label="CRM home" className="rounded-sm text-3xl font-bold tracking-tight text-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-gray-900" href="/">
            CRM<span className="text-gray-500">.</span>
          </a>
          <p className="mt-5 text-sm leading-7 text-gray-400">
            The modern CRM platform for teams that build stronger customer relationships.
          </p>
          <div className="mt-7 flex items-center gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a aria-label={label} className="grid h-9 w-9 place-items-center rounded-full text-gray-400 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900" href={href} key={label} rel="noreferrer" target="_blank">
                <Icon aria-hidden="true" size={18} />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => <FooterColumn {...column} key={column.title} />)}
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8">
        <p className="text-sm text-gray-500">© 2026 CRM. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
