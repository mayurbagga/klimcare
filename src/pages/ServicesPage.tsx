import {
  UserCog,
  Stethoscope,
  GraduationCap,
  Home,
  MessageCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

const iconMap: Record<string, LucideIcon> = {
  'user-cog': UserCog,
  stethoscope: Stethoscope,
  'graduation-cap': GraduationCap,
  home: Home,
  'message-circle': MessageCircle,
  clock: Clock,
};

export function ServicesPage() {
  const s = siteConfig.services;

  return (
    <>
      <PageHeader eyebrow={s.eyebrow} title={s.title} description={s.description} image={s.items[0].image} />

      {/* Services grid */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {s.items.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Stethoscope;
              return (
                <Reveal key={item.slug} delay={(i % 2) * 100}>
                  <article className="group h-full overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-lg shadow-neutral-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/15">
                    <div className="relative h-56 overflow-hidden">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/10 to-transparent" />
                      <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="p-7 pt-10">
                      <h3 className="font-display text-xl font-bold text-neutral-900 transition-colors group-hover:text-primary-600">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                      <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all hover:gap-2.5">
                        Enquire about this service <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary-500 to-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key pillars */}
      <section className="section-py bg-neutral-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow mb-5"><Stethoscope className="h-3.5 w-3.5" />Key Pillars</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">Our commitment to excellence</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-base leading-relaxed text-neutral-600">We uphold our commitment through a set of key pillars, each meticulously designed to elevate the standard of care and service we provide.</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Available 24/7',
              'Highly Qualified Staff',
              'Swift Response Times',
              'Comprehensive Training',
              'Tailored Staffing Solutions',
              'Competitive Rates',
              'Efficient Enrolment Process',
              'Client Feedback Driven',
              'Flexible Scheduling',
            ].map((pillar, i) => (
              <Reveal key={pillar} delay={i * 50}>
                <div className="group flex items-center gap-3 rounded-2xl border border-primary-100 bg-white p-5 transition-all duration-300 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">{pillar}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a tailored staffing solution?"
        description="Reach out to our team and we'll match the right professionals to your specific care setting."
        button={{ label: 'Get in Touch', path: '/contact' }}
        image={s.items[0].image}
      />
    </>
  );
}
