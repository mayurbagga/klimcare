import { Heart, Target, Eye, ShieldCheck, Award, Users } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

const iconMap: Record<string, any> = {
  heart: Heart,
  'shield-check': ShieldCheck,
  award: Award,
  target: Users, // using Users for accountability/target
  users: Users
};

export function AboutPage() {
  const a = siteConfig.about;

  return (
    <>
      <PageHeader
        eyebrow={a.eyebrow}
        title="Beacon of Excellence in Healthcare Recruitment"
        description={a.paragraphs[0]}
        image={a.image}
      />

      {/* Profile */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/10">
                <img src={a.image} alt="About Klim Care" className="h-[28rem] w-full object-cover" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="eyebrow mb-5"><Heart className="h-3.5 w-3.5" />Company Profile</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                  {a.title}
                </h2>
              </Reveal>
              <div className="mt-6 space-y-5">
                {a.paragraphs.map((p, idx) => (
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

      {/* Mission & Vision */}
      <section className="section-py bg-neutral-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl border border-primary-100 bg-white p-8 shadow-xl shadow-neutral-100/50">
              <Reveal>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">{a.mission.title}</h3>
              </Reveal>
              <div className="space-y-4">
                {a.mission.paragraphs.map((p, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <p className="text-base leading-relaxed text-neutral-600">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-primary-100 bg-white p-8 shadow-xl shadow-neutral-100/50">
              <Reveal>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-500 mb-6">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">{a.vision.title}</h3>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-base leading-relaxed text-neutral-600">
                  {a.vision.description}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5"><Award className="h-3.5 w-3.5" />Values</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                {a.values.title}
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {a.values.items.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Heart;
              return (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Why Choose Klim Care?"
        description="Learn about our commitment to candidates and employers, compliance checklist, and career opportunities."
        button={{ label: 'Explore the Klim Care Difference', path: '/why-choose' }}
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </>
  );
}
