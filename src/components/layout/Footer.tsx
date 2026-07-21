import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Magnetic } from "../common/MagneticButton";
import { Reveal } from "../common/Reveal";

const iconProps = { viewBox: "0 0 24 24", fill: "currentColor" as const, width: 15, height: 15 };

const InstagramIcon = () => (
  <svg {...iconProps}>
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.2 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77 4.9 4.9 0 0 1 1.77-1.15c.46-.16 1.26-.35 2.43-.4C8.42 2.2 8.8 2.2 12 2.2Zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0 11.13a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76Zm7.02-11.4a1.58 1.58 0 1 1-3.15 0 1.58 1.58 0 0 1 3.15 0Z" />
  </svg>
);
const FacebookIcon = () => (
  <svg {...iconProps}>
    <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.25 0-3.8 1.37-3.8 3.89v2.17H8v2.96h2.46V21h3.04Z" />
  </svg>
);
const TwitterIcon = () => (
  <svg {...iconProps}>
    <path d="M17.53 3h3.07l-6.71 7.67L21.75 21h-6.18l-4.84-6.34L4.16 21H1.08l7.18-8.2L1.25 3h6.34l4.38 5.79L17.53 3Zm-1.08 16.17h1.7L7.63 4.74h-1.8l10.62 14.43Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg {...iconProps}>
    <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM21 21h-3.38v-6.36c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.66-2.44 3.36V21H9.69V8.5h3.24v1.71h.05c.45-.86 1.56-1.77 3.21-1.77 3.43 0 4.06 2.26 4.06 5.19V21Z" />
  </svg>
);

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Private Brokerage",
  "Investment Advisory",
  "Property Management",
  "Architectural Consulting",
];

const socials = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: TwitterIcon, label: "Twitter" },
  { icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="relative border-t border-white/10 bg-black px-6 pb-8 pt-20 text-white sm:px-10 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid grid-cols-1 gap-14 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-luxury-serif text-2xl italic tracking-wide">
              Estatia
            </Link>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-white/50">
              Curated luxury residences where architecture meets nature. A
              private brokerage for those who seek timeless elegance.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <Magnetic
                  key={label}
                  as="a"
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors duration-300 hover:border-white hover:text-white"
                >
                  <Icon />
                </Magnetic>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/40">
              Quick Links
            </h4>
            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-light text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/40">
              Services
            </h4>
            <ul className="mt-6 space-y-3.5">
              {services.map((service) => (
                <li key={service} className="text-sm font-light text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/40">
              Newsletter
            </h4>
            <p className="mt-6 text-sm font-light leading-relaxed text-white/50">
              Subscribe for early access to new listings and market insight.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5 flex items-center border-b border-white/20 pb-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              >
                Join
              </button>
            </form>
            <p
              className={`mt-3 text-xs text-white/50 transition-opacity duration-500 ${
                subscribed ? "opacity-100" : "opacity-0"
              }`}
            >
              Thank you — you're on the list.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs font-light text-white/40">
            © {new Date().getFullYear()} Estatia Real Estate. All rights reserved.
          </p>
          <Magnetic
            as="button"
            onClick={scrollTop}
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[0.6rem] uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 hover:border-white hover:text-white"
          >
            Back to top
            <ArrowUp size={13} strokeWidth={1.5} />
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
