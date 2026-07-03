import { Heart, Award, Sparkles, ShieldCheck, Users, Target, type LucideIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  award: Award,
  sparkles: Sparkles,
  'shield-check': ShieldCheck,
  users: Users,
  target: Target,
};

export function ValuesPage() {
  const v = siteConfig.values;

  return (
    <>
      <PageHeader eyebrow={v.eyebrow} title={v.title} description={v.description} image={v.image} />

      {/* Values grid */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {v.items.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Heart;
              return (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-primary-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-neutral-900">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                    </div>
                    <span className="absolute right-4 top-4 font-display text-5xl font-extrabold text-primary-50 transition-colors duration-500 group-hover:text-primary-100">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image banner */}
      <section className="relative overflow-hidden bg-neutral-900 py-20 lg:py-28">
        <div className="absolute inset-0">
          <img src={v.image} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-primary-900/70" />
        </div>
        <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <Heart className="mx-auto h-12 w-12 text-primary-400 animate-pulse-soft" fill="currentColor" />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 font-display text-2xl font-bold leading-relaxed text-white sm:text-3xl">
              "Our values serve as the bedrock of our organization, guiding our actions, decisions, and relationships. Through our unwavering commitment to compassion, professionalism, innovation, integrity, and diversity, we strive to make a positive impact on the lives of those we serve."
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to experience our care?"
        description="Get in touch with our team and discover how our values translate into exceptional service."
        button={{ label: 'Contact Us Today', path: '/contact' }}
        image={v.image}
      />
    </>
  );
}
