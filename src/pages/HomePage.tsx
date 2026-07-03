import { Link } from 'react-router-dom';
import { ArrowRight, Heart, ShieldCheck, Star, Play, CheckCircle2, Quote } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { StatsCounter } from '../components/StatsCounter';
import { CTASection } from '../components/CTASection';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HomePage() {
  const home = siteConfig.home;
  const h = home.hero;

  const { scrollY } = useScroll();
  const yHeroImage = useTransform(scrollY, [0, 800], [0, 150]);
  const yBlob1 = useTransform(scrollY, [0, 800], [0, 200]);
  const yBlob2 = useTransform(scrollY, [0, 800], [0, -150]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-pattern pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div style={{ y: yBlob1 }} className="absolute top-20 right-10">
            <div className="h-72 w-72 rounded-full bg-primary-100/50 blur-3xl animate-float-slow" />
          </motion.div>
          <motion.div style={{ y: yBlob2 }} className="absolute bottom-10 left-10">
            <div className="h-64 w-64 rounded-full bg-accent-100/40 blur-3xl animate-float" />
          </motion.div>
        </div>

        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex animate-fade-in-down">
                <span className="eyebrow">
                  <Heart className="h-3.5 w-3.5" />
                  {h.eyebrow}
                </span>
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-neutral-900 sm:text-5xl lg:text-6xl animate-fade-in-up">
                {h.title} <span className="text-gradient">{h.highlight}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
                {h.description}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <Link to={h.primaryCta.path} className="btn-primary group">
                  {h.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to={h.secondaryCta.path} className="btn-secondary group">
                  <Play className="h-3.5 w-3.5 fill-primary-500" />
                  {h.secondaryCta.label}
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary-500" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-neutral-600">Rated 5/5 by clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium text-neutral-600">Fully vetted staff</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <motion.div style={{ y: yHeroImage }} className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/20">
                <img src={h.image} alt="Compassionate care" className="h-[28rem] w-full object-cover sm:h-[34rem] transition-transform duration-700 hover:scale-105" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-primary-100 bg-white/95 p-5 shadow-xl backdrop-blur-sm animate-float sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                    <Heart className="h-6 w-6 text-primary-500" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-neutral-900">850+</div>
                    <div className="text-xs font-medium text-neutral-500">Happy clients</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 hidden rounded-2xl border border-primary-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm animate-float-slow sm:block">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-semibold text-neutral-700">Trusted Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#ffffff" className="opacity-80" />
          </svg>
        </div>
      </section>

      {/* About preview */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/10">
                <img src={home.aboutPreview.image} alt="Why Klimcare" className="h-[26rem] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-5 left-6 max-w-[14rem] rounded-2xl border border-primary-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm animate-float">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary-500" fill="currentColor" />
                  <span className="font-display text-sm font-bold leading-tight text-neutral-800">Health is the first step to prosperity</span>
                </div>
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="eyebrow mb-5"><Heart className="h-3.5 w-3.5" />{home.aboutPreview.eyebrow}</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">{home.aboutPreview.title}</h2>
              </Reveal>
              {home.aboutPreview.paragraphs.map((p, i) => (
                <Reveal key={i} delay={200 + i * 100}>
                  <p className="mt-5 text-base leading-relaxed text-neutral-600">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={500}>
                <ul className="mt-7 space-y-3">
                  {['Comprehensive skills & qualifications assessment', 'Rigorous background checks for every candidate', 'Continuous training & professional development'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" />
                      <span className="text-sm font-medium text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={600}>
                <Link to={home.aboutPreview.cta.path} className="btn-primary group mt-8">
                  {home.aboutPreview.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <StatsCounter stats={home.stats} />
        </div>
      </section>

      {/* Services preview */}
      <section className="section-py relative overflow-hidden bg-neutral-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent-100/40 blur-3xl animate-float" />
        </div>
        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow mb-5"><Heart className="h-3.5 w-3.5" />{home.servicesPreview.eyebrow}</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">{home.servicesPreview.title}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-base leading-relaxed text-neutral-600">{home.servicesPreview.description}</p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.items.slice(0, 3).map((item, i) => (
              <Reveal key={item.slug} delay={i * 100}>
                <Link to="/services" className="group block h-full overflow-hidden rounded-2xl bg-white shadow-lg shadow-neutral-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/15">
                  <div className="relative h-44 overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/10 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary-600">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">{item.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary-500 to-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="mt-10 text-center">
              <Link to={home.servicesPreview.cta.path} className="btn-primary group">
                {home.servicesPreview.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py relative overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-accent-300/20 blur-3xl animate-float" />
        </div>
        <div className="container-px relative z-10 mx-auto max-w-5xl">
          <div className="text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <Quote className="h-3.5 w-3.5" />{home.testimonials.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">{home.testimonials.title}</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {home.testimonials.items.map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="h-full rounded-3xl bg-white/95 p-7 shadow-2xl backdrop-blur-sm">
                  <Quote className="h-8 w-8 text-primary-300" fill="currentColor" />
                  <p className="mt-4 text-sm leading-relaxed text-neutral-700">"{item.quote}"</p>
                  <div className="mt-5 flex items-center gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 text-primary-500" fill="currentColor" />
                    ))}
                  </div>
                  <div className="mt-4 border-t border-neutral-100 pt-4">
                    <div className="font-display text-sm font-bold text-neutral-900">{item.author}</div>
                    <div className="text-xs text-primary-600">{item.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection title={home.cta.title} description={home.cta.description} button={home.cta.button} image={home.cta.image} />
    </>
  );
}
