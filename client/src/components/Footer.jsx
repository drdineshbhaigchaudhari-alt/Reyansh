import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Siren } from 'lucide-react';
import Logo from './Logo';
import { site, departments, nav, hivNav } from '../data/site';
import { BrandDivider } from './PageHero';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <BrandDivider />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo onDark className="h-10" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-200">
            Serving Ahmedabad since 2003. A 20-bed multispecialty hospital with ICU, ICCU and CCU, 24×7 emergency and
            ambulance, and a dedicated, confidential HIV Care Centre.
          </p>
          <a href={site.emergencyHref} className="mt-6 inline-flex items-center gap-2 rounded-full bg-crimson-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-crimson-600">
            <Siren className="h-4 w-4" /> 24×7 Emergency: {site.emergency}
          </a>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider !text-white">Quick links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[...nav.filter((n) => !n.children), ...hivNav.slice(1)].map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider !text-white">Specialities</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {departments.slice(0, 8).map((d) => (
              <li key={d.slug}><Link to={d.link || `/specialities/${d.slug}`} className="hover:text-white">{d.title}</Link></li>
            ))}
            <li><Link to="/hiv-care" className="font-semibold text-white hover:underline">HIV Care Centre</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider !text-white">Visit us</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />{site.address}</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /><a href={`mailto:${site.email}`} className="break-all text-[13px] hover:text-white">{site.email}</a></li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />OPD Mon–Sat 9 AM – 8 PM · Emergency 24×7</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-navy-300 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Reyansh Prime Multispecialty Hospital, Ahmedabad. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            Information on this website is for general awareness and is not a substitute for medical advice. People
            shown in photos are stock models (Pexels).
          </p>
        </div>
      </div>
    </footer>
  );
}
