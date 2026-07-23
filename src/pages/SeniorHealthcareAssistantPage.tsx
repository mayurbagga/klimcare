import { Stethoscope, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';

export function SeniorHealthcareAssistantPage() {
  const service = siteConfig.services.items.find(s => s.slug === 'senior-healthcare-assistant')!;

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={service.title}
        description={service.short}
        image={service.image}
      />

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">About the Role</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-base leading-relaxed text-neutral-600 mb-6">
                  {service.description}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base leading-relaxed text-neutral-600 mb-6">
                  Our Senior Healthcare Assistants bring leadership and high competency to clinical settings. They take ownership of shifts, monitor care plans, coordinate with Registered Nurses, and ensure safety standards are strictly maintained.
                </p>
              </Reveal>
            </div>

            <div className="rounded-2xl border border-primary-100 bg-neutral-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-primary-500" /> Key Features
              </h3>
              <ul className="space-y-3">
                {[
                  'Shift lead and coordination support',
                  'Care plans updates and audits',
                  'Supervision of junior staff members',
                  'Complex care assistance and medication admin support',
                  'Liaising with multidisciplinary teams'
                ].map((item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <li className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                      <span>{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden bg-primary-950 py-16 text-white text-center">
        <div className="container-px mx-auto max-w-xl">
          <h2 className="font-display text-2xl font-bold mb-4">Need Senior Healthcare Assistants?</h2>
          <p className="text-neutral-300 text-sm mb-6">
            Contact us for prompt staffing of highly qualified, vetted Senior Healthcare Assistants.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Book Senior HCAs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
