import { ShieldCheck, CheckCircle2, ClipboardList, ArrowRight, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';

export function EmployersPage() {
  const emp = siteConfig.employers;
  const sectors = siteConfig.services.sectors;

  return (
    <>
      <PageHeader
        eyebrow={emp.eyebrow}
        title={emp.title}
        description="Providing temporary and long-term staffing solutions built on rigorous screening and complete compliance."
        image="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      {/* Sectors We Support */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5"><Activity className="h-3.5 w-3.5" />Sectors</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                {sectors.title}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                {sectors.description}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.list.map((sector, i) => (
              <Reveal key={sector} delay={i * 30}>
                <div className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-4 transition-all duration-300 hover:border-primary-300 hover:bg-white hover:shadow-lg hover:shadow-primary-500/5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-700">{sector}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Quality */}
      <section className="section-py bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,76,143,0.15),transparent)] pointer-events-none" />
        <div className="container-px mx-auto max-w-7xl relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow bg-primary-500/10 border-primary-500/20 text-primary-400 mb-5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Quality & Compliance
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl text-white">
                  {emp.compliance.title}
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-base leading-relaxed text-neutral-300">
                  {emp.compliance.description}
                </p>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {emp.compliance.list.map((item, i) => (
                <Reveal key={item} delay={i * 50}>
                  <div className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-800/40 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" />
                    <span className="text-sm font-medium text-neutral-200">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5"><ClipboardList className="h-3.5 w-3.5" />Process</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                {emp.process.title}
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {emp.process.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-neutral-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-sm font-bold text-primary-600">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-neutral-900">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">{step.description}</p>
                  {i < 3 && (
                    <div className="absolute top-1/2 -right-4 hidden lg:block translate-y-[-50%] z-20">
                      <ArrowRight className="h-5 w-5 text-neutral-300" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary-950 py-16 text-white">
        <div className="container-px mx-auto max-w-5xl text-center relative z-10">
          <Reveal>
            <span className="eyebrow bg-accent-500/10 border-accent-500/20 text-accent-400 mb-5">
              <Users className="h-3.5 w-3.5" />
              Partner With Us
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-white">
              Request Care & Nursing Staff Today
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300 text-sm sm:text-base">
              Need immediate workforce support? Tell us about your staffing challenges, and our team will match fully vetted, qualified professionals to your requirements.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Our Recruitment Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
