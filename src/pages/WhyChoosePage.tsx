import { Award, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

export function WhyChoosePage() {
  const wc = siteConfig.whyChoose;

  return (
    <>
      <PageHeader
        eyebrow={wc.eyebrow}
        title={wc.title}
        description="Discover the Klim Care difference — built on compliance, dedicated recruitment support, and a commitment to quality staffing."
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      {/* For Employers */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow mb-5"><Award className="h-3.5 w-3.5" />For Employers</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                  {wc.employer.title}
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-base leading-relaxed text-neutral-600">
                  {wc.employer.description}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8">
                  <Link to="/employers" className="btn-primary group">
                    Explore Employer Solutions
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="rounded-3xl border border-primary-100 bg-neutral-50/50 p-8 shadow-xl shadow-neutral-100/50">
              <Reveal>
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-6">
                  Employer Partnerships Benefits
                </h3>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {wc.employer.benefits.map((benefit, i) => (
                  <Reveal key={benefit} delay={i * 50}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-500" />
                      <span className="text-sm font-semibold text-neutral-700">{benefit}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Candidates */}
      <section className="section-py bg-neutral-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1 rounded-3xl border border-primary-100 bg-white p-8 shadow-xl shadow-neutral-100/50">
              <Reveal>
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-6">
                  Candidate Benefits & Support
                </h3>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {wc.candidate.benefits.map((benefit, i) => (
                  <Reveal key={benefit} delay={i * 50}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" />
                      <span className="text-sm font-semibold text-neutral-700">{benefit}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="eyebrow mb-5"><Heart className="h-3.5 w-3.5 text-accent-500" />For Candidates</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                  {wc.candidate.title}
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-base leading-relaxed text-neutral-600">
                  {wc.candidate.description}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8">
                  <Link to="/candidates" className="btn-secondary group">
                    View Candidate Support
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to partner with us?"
        description="Whether you need emergency shift cover or are looking for your next healthcare role, Klim Care is here to support you."
        button={{ label: 'Contact Us Now', path: '/contact' }}
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </>
  );
}
