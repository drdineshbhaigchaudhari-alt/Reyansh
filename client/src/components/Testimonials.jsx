import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const go = (d) => setI((p) => (p + d + testimonials.length) % testimonials.length);
  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [i]);
  const t = testimonials[i];

  return (
    <section className="section bg-ivory-100">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <img src="/images/mother-kids.jpg" alt="A smiling Indian mother with her two young children" loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-soft md:aspect-square" />
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-white p-5 shadow-soft md:-right-6">
            <p className="font-display text-3xl font-bold text-navy-800">4.8★</p>
            <p className="text-xs text-slate-500">Patient rating*</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="#YourStories" title="Trusted by families across Ahmedabad" text="Real experiences from our patients and their families." />
          <div className="relative min-h-[240px]">
            <Quote className="h-10 w-10 text-crimson-500/30" />
            <AnimatePresence mode="wait">
              <motion.figure key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                <blockquote className="mt-4 text-xl font-medium leading-relaxed text-navy-800 md:text-2xl">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-slate-800">{t.name}</span> <span className="text-slate-500">· {t.meta}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <button onClick={() => go(-1)} className="rounded-full border border-navy-700/20 p-3 text-navy-800 hover:bg-white" aria-label="Previous story"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={() => go(1)} className="rounded-full border border-navy-700/20 p-3 text-navy-800 hover:bg-white" aria-label="Next story"><ChevronRight className="h-5 w-5" /></button>
            <div className="ml-3 flex gap-2">
              {testimonials.map((_, k) => (
                <button key={k} onClick={() => setI(k)} aria-label={`Story ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-crimson-500' : 'w-2 bg-navy-700/20'}`} />
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-400">*Illustrative placeholder rating and stories.</p>
        </div>
      </div>
    </section>
  );
}
