import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, GraduationCap, Star, Award } from 'lucide-react';
import { featuredDoctor as d } from '../data/site';
import Reveal from './Reveal';

export default function FeaturedDoctor({ className = 'section' }) {
  return (
    <section className={className}>
      <div className="container-x">
        <Reveal className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-card ring-1 ring-navy-900/5 lg:grid-cols-5">
          <div className="relative lg:col-span-2">
            <img src={d.image} alt={d.name} loading="lazy" className="h-96 w-full object-cover object-top lg:h-full" />
            <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-navy-800 shadow-soft">{d.exp}</span>
          </div>
          <div className="p-8 md:p-12 lg:col-span-3">
            <span className="eyebrow"><span className="h-px w-8 bg-current" />Featured specialist</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">{d.name}</h2>
            <p className="mt-2 font-semibold text-crimson-600">{d.role}</p>
            <p className="mt-3 flex items-start gap-2 text-sm text-slate-600"><GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" />{d.quals}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3.5 py-1.5 text-xs font-semibold text-navy-700"><Award className="h-3.5 w-3.5" />{d.specialistExp}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-3.5 py-1.5 text-xs font-semibold text-navy-800"><Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />{d.rating}</span>
            </div>

            <div className="mt-6 space-y-3 leading-relaxed text-slate-600">
              {d.bio.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {d.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-crimson-500" />{h}</li>
              ))}
            </ul>

            <Link to="/contact#appointment" className="btn-primary mt-8">Book with {d.name} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
