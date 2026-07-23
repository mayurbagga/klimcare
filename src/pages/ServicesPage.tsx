import { Heart, Stethoscope, Home, ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

const iconMap: Record<string, any> = {
  heart: Heart,
  stethoscope: Stethoscope,
  home: Home
};

export function ServicesPage() {
  const s = siteConfig.services;

  return (
    <>
      <PageHeader
        eyebrow={s.eyebrow}
        title={s.title}
        description={s.description}
        image={s.items[0].image}
      />

      {/* Services Grid */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {s.items.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Heart;
              return (
                <Reveal key={item.slug} delay={i * 100}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="group relative block h-full overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-200"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-500 group-hover:bg-primary-500 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-neutral-900 transition-colors group-hover:text-primary-600">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {item.short}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600">
                        View Role Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors list preview */}
      <section className="section-py bg-neutral-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Reveal>
              <span className="eyebrow mb-5"><Activity className="h-3.5 w-3.5" />Sectors We Support</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                Providing Staff Across Many Settings
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.sectors.list.slice(0, 8).map((sector, i) => (
              <Reveal key={sector} delay={i * 50}>
                <div className="flex items-center gap-2.5 rounded-xl border border-neutral-100 bg-white p-4">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-neutral-700">{sector}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Reveal>
              <Link to="/employers" className="btn-secondary">
                View All Sectors Supported
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Strengthen Your Workforce?"
        description="Whether you need emergency staff or long term placement, our recruitment consultants are ready to assist you."
        button={{ label: 'Contact Us Now', path: '/contact' }}
        image={s.items[0].image}
      />
    </>
  );
}
