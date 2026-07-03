import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

interface CTASectionProps {
  title: string;
  description: string;
  button: { label: string; path: string };
  image: string;
}

export function CTASection({ title, description, button, image }: CTASectionProps) {
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 px-6 py-14 text-center sm:px-12 lg:py-20">
            {/* Background image */}
            <div className="absolute inset-0">
              <img src={image} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
            </div>
            {/* Decorative */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float-slow" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent-300/20 blur-3xl animate-float" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm animate-pulse-soft">
                <Heart className="h-7 w-7 text-white" fill="currentColor" />
              </div>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-50">
                {description}
              </p>
              <Link to={button.path} className="btn-primary group mt-8 bg-white text-primary-600 hover:bg-primary-50 hover:shadow-xl">
                {button.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
