import { Heart, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';

export function HealthcareAssistantPage() {
  const service = siteConfig.services.items.find(s => s.slug === 'healthcare-assistant')!;

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
                  Our Healthcare Assistants (HCAs) are trained in person-centred care. They operate in NHS hospitals, private wards, and residential care environments to ensure that patients receive dignity, nutrition, hygiene support, and continuous observation when needed.
                </p>
              </Reveal>
            </div>

            <div className="rounded-2xl border border-primary-100 bg-neutral-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary-500" /> Key Features
              </h3>
              <ul className="space-y-3">
                {[
                  'Nutrition & Hydration monitoring',
                  'Personal care & hygiene support',
                  'Mobility & transfers assistance',
                  'Vital signs tracking support',
                  'Compassionate patient companionship'
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
          <h2 className="font-display text-2xl font-bold mb-4">Need Healthcare Assistants?</h2>
          <p className="text-neutral-300 text-sm mb-6">
            Get in touch to request fully compliant Healthcare Assistants for your ward or residential facility.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Book Healthcare Assistants <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
