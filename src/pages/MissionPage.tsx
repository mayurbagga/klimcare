import { Heart, Target, Sparkles, Award, Users } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { motion, useScroll, useTransform } from 'framer-motion';

const pillarIcons: Record<string, any> = {
  heart: Heart,
  sparkles: Sparkles,
  award: Award,
  users: Users,
};

export function MissionPage() {
  const m = siteConfig.mission;
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <>
      <PageHeader eyebrow={m.eyebrow} title={m.title} description={m.intro} image={m.image} />

      {/* Main content */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <motion.div style={{ y: yImage }} className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/10">
                <img src={m.image} alt="Our Mission" className="h-[30rem] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-2xl border border-primary-100 bg-white/95 p-5 shadow-xl backdrop-blur-sm animate-float sm:block">
                <Target className="h-8 w-8 text-primary-500" />
                <p className="mt-2 font-display text-sm font-semibold leading-snug text-neutral-800">
                  "Fostering a community where dignity, compassion, and excellence are paramount."
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="eyebrow mb-5"><Target className="h-3.5 w-3.5" />{m.eyebrow}</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">{m.title}</h2>
              </Reveal>
              {m.paragraphs.map((p, i) => (
                <Reveal key={i} delay={200 + i * 100}>
                  <p className="mt-5 text-base leading-relaxed text-neutral-600">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-py bg-neutral-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow mb-5"><Sparkles className="h-3.5 w-3.5" />Our Pillars</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">The four pillars of our mission</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-base leading-relaxed text-neutral-600">These principles guide every placement, every interaction, and every decision we make.</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {m.pillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.icon] ?? Heart;
              return (
                <Reveal key={pillar.title} delay={i * 100}>
                  <div className="group h-full rounded-2xl border border-primary-100 bg-white p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-neutral-900">{pillar.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">{pillar.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="See our values in action"
        description="Explore the core values that underpin everything we do at Klimcare Limited."
        button={{ label: 'View Our Values', path: '/values' }}
        image={m.image}
      />
    </>
  );
}
