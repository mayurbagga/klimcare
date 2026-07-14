import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-primary-600/95 shadow-lg shadow-primary-950/20 backdrop-blur-md'
          : 'bg-primary-500 shadow-md'
      }`}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center">
          <img
            src={siteConfig.brand.logo}
            alt="Klimcare Logo"
            className="h-14 w-auto max-w-[180px] object-contain rounded-xl bg-white p-1 shadow-md shadow-primary-500/10 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active
                      ? 'text-white'
                      : 'text-primary-100 hover:text-white hover:bg-primary-600/40'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-500 transition-all duration-300 ${
                      active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors md:flex bg-primary-600 text-primary-50 hover:bg-primary-700`}
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.contact.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent-500/20 transition-all duration-300 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5 active:translate-y-0 hidden md:inline-flex"
          >
            Get in Touch
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors lg:hidden border-primary-400 bg-primary-600 text-white hover:bg-primary-700`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px mx-auto max-w-7xl border-t border-primary-600 bg-primary-600/95 py-4 backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((link, i) => {
              const active = location.pathname === link.path;
              return (
                <li
                  key={link.path}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className={open ? 'animate-fade-in-up' : ''}
                >
                  <Link
                    to={link.path}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors block ${
                      active ? 'bg-primary-700 text-white' : 'text-primary-100 hover:bg-primary-700/50 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent-500/20 transition-all duration-300 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/30 text-center block"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
