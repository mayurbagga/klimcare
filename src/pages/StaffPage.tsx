import { Stethoscope, Heart, Users, ClipboardList, type LucideIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { StatsCounter } from '../components/StatsCounter';
import { CTASection } from '../components/CTASection';

const roleIcons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  heart: Heart,
  users: Users,
  clipboard: ClipboardList,
};

export function StaffPage() {
  const s = siteConfig.staff;

  return (
    <>
      <PageHeader eyebrow={s.eyebrow} title={s.title} description={s.paragraphs[0]} image={s.image} />

      {/* Main content */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/10">
                <img src={s.image} alt="Our Staff" className="h-[30rem] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-5 -right-5 hidden rounded-2xl border border-primary-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm animate-float-slow sm:block">
                <Users className="h-8 w-8 text-primary-500" />
                <div className="mt-1 text-xs font-semibold text-neutral-700">Dedicated team</div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="eyebrow mb-5"><Users className="h-3.5 w-3.5" />{s.eyebrow}</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">{s.title}</h2>
              </Reveal>
              {s.paragraphs.map((p, i) => (
                <Reveal key={i} delay={200 + i * 100}>
                  <p className="mt-5 text-base leading-relaxed text-neutral-600">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <StatsCounter stats={s.stats} />
        </div>
      </section>

      {/* Roles */}
      <section className="section-py bg-neutral-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow mb-5"><Users className="h-3.5 w-3.5" />Our Team</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">Roles within our organization</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-base leading-relaxed text-neutral-600">Our team comprises highly trained professionals, each bringing a wealth of experience and genuine care to their role.</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.roles.map((role, i) => {
              const Icon = roleIcons[role.icon] ?? Users;
              return (
                <Reveal key={role.title} delay={i * 100}>
                  <div className="group h-full rounded-2xl border border-primary-100 bg-white p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-neutral-900">{role.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">{role.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Join our team of dedicated professionals"
        description="Are you a compassionate, skilled healthcare professional? We'd love to hear from you."
        button={{ label: 'Get in Touch', path: '/contact' }}
        image={s.image}
      />
    </>
  );
}
