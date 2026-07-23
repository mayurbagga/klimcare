import { useEffect, useMemo, useState } from 'react';
import { Activity, Mail, Facebook, Twitter, Instagram, Linkedin, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site.config';

const socialIconMap: Record<string, any> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

function useCountdown(target: string) {
  const targetDate = useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetDate - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function ComingSoon() {
  const cs = siteConfig.comingSoon;
  const { days, hours, minutes, seconds } = useCountdown(cs.launchDate);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-animated-gradient flex items-center justify-center px-5 py-12">
      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-200/40 blur-3xl animate-float" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl animate-float-slow" />
      </div>

      {/* Floating medical icons */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <Activity
            key={i}
            className="absolute text-primary-300/30 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              width: `${20 + i * 6}px`,
              height: `${20 + i * 6}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        {/* Logo / brand */}
        <div className="mb-8 flex flex-col items-center gap-3 animate-fade-in-down">
          <img
            src={siteConfig.brand.logo}
            alt="Klimcare Logo"
            className="h-24 w-auto max-w-[280px] object-contain rounded-2xl bg-white p-2 shadow-lg shadow-primary-500/20 animate-pulse-soft"
          />
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-600 backdrop-blur-sm border border-primary-100 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5" />
          Coming Soon
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl animate-fade-in-up">
          {cs.title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
          {cs.description}
        </p>

        {/* Countdown */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          {units.map((u) => (
            <div
              key={u.label}
              className="group rounded-2xl border border-primary-100 bg-white/80 px-3 py-5 backdrop-blur-sm transition-all duration-300 hover:border-primary-300 hover:bg-white hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1"
            >
              <div className="font-display text-3xl font-extrabold text-primary-600 sm:text-4xl tabular-nums">
                {String(u.value).padStart(2, '0')}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {u.label}
              </div>
            </div>
          ))}
        </div>

        {/* Email signup */}
        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={cs.emailPlaceholder}
              className="w-full rounded-full border border-primary-200 bg-white/90 py-3.5 pl-11 pr-4 text-sm text-neutral-700 outline-none transition-all placeholder:text-neutral-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
            />
          </div>
          <button type="submit" className="btn-primary whitespace-nowrap">
            Notify Me
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-sm font-medium text-primary-600 animate-fade-in">
            Thank you! We'll let you know when we go live.
          </p>
        )}

        {/* Socials */}
        <div className="mt-12 flex items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          {cs.socials.map((s: any) => {
            const Icon = socialIconMap[s.icon] ?? Activity;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-100 bg-white/80 text-neutral-500 backdrop-blur-sm transition-all duration-300 hover:border-primary-300 hover:bg-primary-500 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} {cs.subtitle}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
