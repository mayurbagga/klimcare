import { Heart } from 'lucide-react';
import { Reveal } from './Reveal';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}

export function PageHeader({ eyebrow, title, description, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-primary-900/70" />
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-accent-400/15 blur-3xl animate-float" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-200 backdrop-blur-sm border border-white/10">
            <Heart className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#ffffff" className="opacity-90" />
        </svg>
      </div>
    </section>
  );
}
