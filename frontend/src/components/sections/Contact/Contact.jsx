import { FiCheck } from "react-icons/fi";
import InquiryForm from "./InquiryForm";
import { contactBenefits, contactHighlights } from "./contactData";

const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Contact sales</p>
        <h2 id="contact-heading" className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Ready to Transform Your Sales Process?
        </h2>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Tell us about your business and our team will contact you with a
          personalized CRM solution.
        </p>
      </div>

      <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <aside className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-9" aria-label="Contact options">
          <div className="space-y-4">
            {contactHighlights.map(({ description, icon: Icon, title }) => (
              <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5" key={title}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon aria-hidden="true" size={20} /></span>
                <div><h3 className="font-semibold text-gray-900">{title}</h3><p className="mt-1 text-sm leading-6 text-gray-600">{description}</p></div>
              </div>
            ))}
          </div>
          <ul className="mt-8 space-y-3 border-t border-gray-200 pt-7">
            {contactBenefits.map((benefit) => (
              <li className="flex items-center gap-3 text-sm font-medium text-gray-700" key={benefit}><FiCheck aria-hidden="true" className="text-blue-600" size={18} />{benefit}</li>
            ))}
          </ul>
        </aside>

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-200/60 sm:p-9">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Tell us about your team</h3>
          <p className="mt-2 text-gray-600">We’ll help you find the right solution for your business.</p>
          <div className="mt-8"><InquiryForm /></div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
