import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CalendarCheck, ArrowRight } from 'lucide-react';

// Slide 1 is the hospital facade: it already carries the signage, so it is shown whole with no text overlay.
const slides = [
  { image: '/images/brand/hero-facade.jpg', alt: 'Reyansh Prime Multispecialty Hospital building on Gandhinagar Highway, Ahmedabad', full: true },
  {
    image: '/images/hero-consultation.jpg',
    alt: 'An Indian woman doctor examining an elderly patient with a stethoscope',
    eyebrow: 'Multispecialty care since 2003',
    title: 'Expert doctors. Compassionate care.',
    text: '14+ specialities, ICU/ICCU/CCU and 24×7 emergency, all under one roof in Ahmedabad.',
    cta: { to: '/specialities', label: 'Explore specialities' },
    position: 'object-[50%_30%]',
  },
  {
    image: '/images/pregnant-saree.jpg',
    alt: 'A smiling pregnant Indian woman in a pink saree',
    eyebrow: 'Obstetrics, Gynaecology & IVF',
    title: 'Safe motherhood, from hope to happiness',
    text: 'Antenatal care, safe deliveries and advanced fertility treatment for your growing family.',
    cta: { to: '/specialities/obstetrics-gynaecology', label: 'Women\'s health' },
    position: 'object-[70%_30%]',
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const go = useCallback((d) => setI((p) => (p + d + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [paused, reduce, go, i]);

  const s = slides[i];

  return (
    <section
      className="relative overflow-hidden bg-navy-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      <div className="relative aspect-[4/3] w-full sm:aspect-[2/1] lg:aspect-[2.5/1]">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            <img
              src={s.image}
              alt={s.alt}
              className={`h-full w-full object-cover ${s.full ? 'object-[58%_center] lg:object-center' : s.position}`}
              fetchpriority={i === 0 ? 'high' : 'auto'}
            />
            {!s.full && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent" />
                <div className="container-x absolute inset-0 flex items-center">
                  <motion.div
                    className="max-w-xl"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <span className="eyebrow !text-crimson-100"><span className="h-px w-8 bg-current" />{s.eyebrow}</span>
                    <h2 className="mt-3 text-3xl font-bold leading-tight !text-white sm:text-5xl lg:text-6xl">{s.title}</h2>
                    <p className="mt-4 hidden max-w-lg text-lg text-navy-50/90 sm:block">{s.text}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to="/contact#appointment" className="btn-crimson"><CalendarCheck className="h-4 w-4" /> Book appointment</Link>
                      <Link to={s.cta.to} className="btn hidden border border-white/40 text-white hover:bg-white/10 sm:inline-flex">{s.cta.label} <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <button onClick={() => go(-1)} className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 text-navy-800 shadow-card backdrop-blur hover:bg-white md:block" aria-label="Previous slide">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => go(1)} className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 text-navy-800 shadow-card backdrop-blur hover:bg-white md:block" aria-label="Next slide">
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:bottom-6">
          {slides.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Go to slide ${k + 1}`} aria-current={k === i} className={`h-2.5 rounded-full shadow transition-all ${k === i ? 'w-8 bg-crimson-500' : 'w-2.5 bg-white/80'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
