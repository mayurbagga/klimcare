import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShieldCheck, Star, Activity, Phone } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';

export function HomePage() {
  const home = siteConfig.home;
  const h = home.hero;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-pattern pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary-100/50 blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-accent-100/40 blur-3xl animate-float" />
        </div>

        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left lg:col-span-7">
              <div className="mb-6 inline-flex animate-fade-in-down">
                <span className="eyebrow">
                  <Heart className="h-3.5 w-3.5" />
                  {h.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-3xl font-extrabold leading-[1.15] text-neutral-900 sm:text-4xl lg:text-5xl animate-fade-in-up">
                {h.title}
              </h1>
              <p className="mt-5 font-display text-lg font-bold text-primary-600 sm:text-xl animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                {h.subHeading}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <Link to={h.primaryCta.path} className="btn-primary group">
                  {h.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to={h.secondaryCta.path} className="btn-secondary group">
                  {h.secondaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary-500" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-neutral-600">Premium Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium text-neutral-600">Fully vetted & compliant</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-right lg:col-span-5" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/20">
                <img src={h.image} alt="Klimcare Healthcare Recruitment" className="h-[24rem] w-full object-cover sm:h-[30rem] transition-transform duration-700 hover:scale-105" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-primary-100 bg-white/95 p-5 shadow-xl backdrop-blur-sm animate-float sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                    <Heart className="h-6 w-6 text-primary-500" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-neutral-900">24/7</div>
                    <div className="text-xs font-medium text-neutral-500">Staffing support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Narrative Section */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/10">
                <img src="/about.png" alt="Care recruitment" className="h-[28rem] w-full object-cover" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="eyebrow mb-5"><Activity className="h-3.5 w-3.5" />Our Story</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                  Connecting Exceptional Professionals
                </h2>
              </Reveal>
              <div className="mt-6 space-y-5">
                {h.paragraphs.map((p, idx) => (
                  <Reveal key={idx} delay={150 + idx * 50}>
                    <p className="text-base leading-relaxed text-neutral-600">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Strengthen Your Healthcare Workforce? */}
      <section className="section-py bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,76,143,0.15),transparent)] pointer-events-none" />
        <div className="container-px mx-auto max-w-5xl text-center relative z-10">
          <Reveal>
            <span className="eyebrow bg-primary-500/10 border-primary-500/20 text-primary-400 mb-5">Get Started</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-white">
              {home.cta.title}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-2xl text-neutral-300 text-sm sm:text-base leading-relaxed">
              {home.cta.description}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {home.cta.buttons.map((btn, i) => (
                <Link
                  key={btn.label}
                  to={btn.path}
                  className={
                    i === 0
                      ? "btn-primary w-full sm:w-auto"
                      : i === 1
                      ? "btn-secondary w-full sm:w-auto bg-neutral-800 text-white border-neutral-700 hover:bg-neutral-700"
                      : "btn-secondary w-full sm:w-auto bg-transparent border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800"
                  }
                >
                  {i === 2 && <Phone className="h-3.5 w-3.5" />}
                  {btn.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
