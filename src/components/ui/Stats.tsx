import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    value: 79,
    suffix: '%',
    label: 'reduction in rodent track presence',
    sublabel: 'Location A — 5-month urban field study, Aug 2025 to Jan 2026',
    color: '#7aab7e',
  },
  {
    value: 88,
    suffix: '%',
    label: 'drop in track density',
    sublabel: 'Same location — tracks per plate declined even where rodents still present',
    color: '#7aab7e',
  },
  {
    value: 50,
    suffix: '%+',
    label: 'reduction at second monitored site',
    sublabel: 'Location B — independent deployment, 5-month monitoring window',
    color: '#7aab7e',
  },
  {
    value: 90,
    suffix: '%',
    label: 'fertility reduction potential',
    sublabel: 'When integrated into active pest management programs',
    color: '#c96a3a',
  },
];

function Counter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ color }} className="text-5xl font-bold tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(({ value, suffix, label, sublabel, color }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 280, damping: 28, delay: i * 0.08 }}
          className="bg-white border border-[#1c1814]/8 rounded-xl p-6 flex flex-col gap-3"
        >
          <Counter target={value} suffix={suffix} color={color} />
          <div>
            <p className="text-[#1c1814] font-medium text-lg leading-snug">{label}</p>
            <p className="text-[#1c1814]/60 text-sm leading-relaxed mt-1">{sublabel}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
