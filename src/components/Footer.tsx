import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export function Footer() {
  const f = siteConfig.footer;
  const c = siteConfig.contact;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-primary-900 text-primary-200">
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 h-60 w-60 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-7xl py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 shadow-lg shadow-accent-500/30">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <span className="font-display text-xl font-bold text-white">{siteConfig.brand.logoText}</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-300">{f.description}</p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-800 text-primary-300 transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-white hover:-translate-y-1"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {f.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-primary-300 transition-colors hover:text-accent-400"
                  >
                    <span className="h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                <a href={`mailto:${c.email}`} className="transition-colors hover:text-accent-400">{c.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                <a href={`tel:${c.phone}`} className="transition-colors hover:text-accent-400">{c.phone}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                {c.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-800 pt-6 sm:flex-row">
          <p className="text-xs text-primary-400">
            &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 rounded-full border border-primary-800 px-4 py-2 text-xs font-medium text-primary-300 transition-all hover:border-accent-500 hover:text-accent-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
