import { CheckCircle2, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { StatsCounter } from '../components/StatsCounter';
import { CTASection } from '../components/CTASection';

export function AboutPage() {
  const a = siteConfig.about;

  return (
    <>
      <PageHeader eyebrow={a.eyebrow} title={a.title} description={a.paragraphs[0]} image={a.image} />

      {/* Main content */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/10">
                <img src={a.image} alt="About Klimcare" className="h-[28rem] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-primary-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm animate-float sm:block">
                <div className="font-display text-3xl font-extrabold text-primary-600">2023</div>
                <div className="text-xs font-medium text-neutral-500">Founded</div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="eyebrow mb-5"><Heart className="h-3.5 w-3.5" />{a.eyebrow}</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">{a.title}</h2>
              </Reveal>
              {a.paragraphs.map((p, i) => (
                <Reveal key={i} delay={200 + i * 100}>
                  <p className="mt-5 text-base leading-relaxed text-neutral-600">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={500}>
                <ul className="mt-7 space-y-3">
                  {['Flexible and cost-effective nursing care solutions', 'Bridging the gap between professionals and demand', 'Matching the right candidate to the right job'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" />
                      <span className="text-sm font-medium text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <StatsCounter stats={a.stats} />
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-py bg-neutral-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Reveal>
                <span className="eyebrow mb-5"><Heart className="h-3.5 w-3.5" />Our Philosophy</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">{a.philosophy.title}</h2>
              </Reveal>
              {a.philosophy.paragraphs.map((p, i) => (
                <Reveal key={i} delay={200 + i * 100}>
                  <p className="mt-5 text-base leading-relaxed text-neutral-600">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={500}>
                <Link to="/mission" className="btn-primary group mt-8">
                  Read Our Mission
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={200} className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-500/10">
                <img src={a.philosophy.image} alt="Our Philosophy" className="h-[28rem] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to learn more about our values?"
        description="Discover the core principles that guide every decision we make and every placement we deliver."
        button={{ label: 'View Our Values', path: '/values' }}
        image={a.image}
      />
    </>
  );
}
