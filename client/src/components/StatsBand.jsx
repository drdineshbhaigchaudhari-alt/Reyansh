import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import { stats } from '../data/site';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      <img src="/images/ahmedabad-riverfront.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="container-x relative grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 text-center md:border-l md:border-white/10 md:first:border-l-0">
            <div className="font-display text-4xl font-semibold text-white md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-navy-100">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
