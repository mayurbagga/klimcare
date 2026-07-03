import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Users, CheckCircle2, type LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  heart: Heart,
  users: Users,
  'check-circle': CheckCircle2,
};

function useCountUp(target: number, start: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

function StatCard({ stat, index, start, dark }: { stat: StatItem; index: number; start: boolean; dark: boolean }) {
  const Icon = iconMap[stat.icon] ?? Award;
  const count = useCountUp(stat.value, start);
  return (
    <Reveal delay={index * 100}>
      <div
        className={`group rounded-2xl border p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          dark
            ? 'border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary-400/50 hover:shadow-primary-500/20'
            : 'border-primary-100 bg-white hover:border-primary-300 hover:shadow-primary-500/10'
        }`}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <div className={`mt-4 font-display text-4xl font-extrabold tabular-nums ${dark ? 'text-white' : 'text-neutral-900'}`}>
          {count.toLocaleString()}
          <span className="text-primary-500">{stat.suffix}</span>
        </div>
        <div className={`mt-1 text-sm font-medium ${dark ? 'text-neutral-300' : 'text-neutral-500'}`}>
          {stat.label}
        </div>
      </div>
    </Reveal>
  );
}

export function StatsCounter({ stats, dark = false }: { stats: StatItem[]; dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} index={i} start={start} dark={dark} />
      ))}
    </div>
  );
}
