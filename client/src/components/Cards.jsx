import { Link } from 'react-router-dom';
import { ArrowUpRight, GraduationCap, CalendarClock, Languages } from 'lucide-react';
import Reveal from './Reveal';

export function ServiceCard({ service, index = 0, base = '/specialities' }) {
  const Icon = service.icon;
  return (
    <Reveal delay={(index % 4) * 0.06}>
      <Link
        to={service.link || `${base}/${service.slug}`}
        className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-700 group-hover:text-white">
          <Icon className="h-7 w-7" strokeWidth={1.6} />
        </span>
        <h3 className="mt-6 text-xl font-semibold leading-snug">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{service.short}</p>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-crimson-600">
          Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}

export function DoctorCard({ doctor, index = 0, detailed = false }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-900/5">
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-50">
        <img
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        {doctor.exp && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/80 to-transparent p-5 pt-16">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800">{doctor.exp} experience</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-crimson-600">{doctor.role}</p>
        <p className="mt-3 flex items-start gap-2 text-sm text-slate-600">
          <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" />{doctor.quals}
        </p>
        {detailed && (
          <>
            {doctor.focus?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {doctor.focus.map((f) => (
                  <span key={f} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700">{f}</span>
                ))}
              </div>
            )}
            {(doctor.opd || doctor.langs) && (
              <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
                {doctor.opd && <p className="flex items-center gap-2"><CalendarClock className="h-4 w-4 text-navy-500" />{doctor.opd}</p>}
                {doctor.langs && <p className="flex items-center gap-2"><Languages className="h-4 w-4 text-navy-500" />{doctor.langs}</p>}
              </div>
            )}
            {doctor.link && (
              <Link to={doctor.link} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-crimson-600">
                View department <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
            <div className="flex-1" />
            <Link to="/contact#appointment" className="btn-ghost mt-6 w-full">Book with {doctor.name.split(' ').slice(0, 2).join(' ')}</Link>
          </>
        )}
      </div>
    </Reveal>
  );
}
