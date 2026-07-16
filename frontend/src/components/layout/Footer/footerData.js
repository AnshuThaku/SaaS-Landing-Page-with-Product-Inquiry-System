import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#documentation" },
      { label: "Help Center", href: "#help-center" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "support@crm.com", href: "mailto:support@crm.com" },
      { label: "+91 9876543210", href: "tel:+919876543210" },
      { label: "India", href: "#contact" },
    ],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FiLinkedin },
  { label: "GitHub", href: "https://github.com", icon: FiGithub },
  { label: "Twitter", href: "https://twitter.com", icon: FiTwitter },
  { label: "Facebook", href: "https://www.facebook.com", icon: FiFacebook },
];
