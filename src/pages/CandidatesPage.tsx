import { useState } from 'react';
import { Heart, CheckCircle2, HelpCircle, ChevronDown, ChevronUp, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';

export function CandidatesPage() {
  const cand = siteConfig.candidates;
  const whyCand = siteConfig.whyChoose.candidate;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <PageHeader
        eyebrow={cand.eyebrow}
        title={cand.title}
        description="Join a team that values your skills, respects your ambitions, and supports your professional journey."
        image="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      {/* Benefits & Support */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow mb-5"><Heart className="h-3.5 w-3.5" />Benefits</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                  {whyCand.title}
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-base leading-relaxed text-neutral-600">
                  {whyCand.description}
                </p>
              </Reveal>
            </div>

            <div className="rounded-3xl border border-primary-100 bg-neutral-50/50 p-8 shadow-xl shadow-neutral-100/50">
              <Reveal>
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-6">
                  What we offer to our staff
                </h3>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyCand.benefits.map((benefit, i) => (
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

      {/* Frequently Asked Questions */}
      <section className="section-py bg-neutral-50">
        <div className="container-px mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <Reveal>
              <span className="eyebrow mb-5"><HelpCircle className="h-3.5 w-3.5" />Questions</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </Reveal>
          </div>

          <div className="space-y-4">
            {cand.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={faq.question} delay={i * 100}>
                  <div className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="flex w-full items-center justify-between gap-4 text-left font-display font-bold text-neutral-900"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-neutral-400 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isOpen ? 'mt-4 max-h-[20rem] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-neutral-600">{faq.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Seeking CTA */}
      <section className="relative overflow-hidden bg-primary-950 py-16 text-white">
        <div className="container-px mx-auto max-w-5xl text-center relative z-10">
          <Reveal>
            <span className="eyebrow bg-accent-500/10 border-accent-500/20 text-accent-400 mb-5">
              <Briefcase className="h-3.5 w-3.5" />
              Careers
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-white">
              Ready to Join the Klim Care Family?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300 text-sm sm:text-base">
              If you are a passionate, skilled healthcare professional looking for flexible shifts or permanent opportunities with top employers, get in touch today.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Register Your Interest
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
