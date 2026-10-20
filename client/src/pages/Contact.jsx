import { MapPin, Phone, Mail, Clock, Siren, MessageCircle, Navigation } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { AppointmentForm, ContactForm } from '../components/Forms';
import { site } from '../data/site';
import usePageTitle from '../usePageTitle';

export default function Contact() {
  usePageTitle('Contact & Appointments');
  const cards = [
    { icon: Siren, title: '24×7 Emergency', lines: [site.emergency, 'Any time, every day'], href: site.emergencyHref, accent: true },
    { icon: Phone, title: 'Appointments', lines: [site.phone, 'Mon–Sat, 9 AM – 8 PM'], href: site.phoneHref },
    { icon: MessageCircle, title: 'WhatsApp', lines: ['Chat with our team', 'Quick replies'], href: `https://wa.me/${site.whatsapp}` },
    { icon: Mail, title: 'Email', lines: [site.email], href: `mailto:${site.email}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Book an appointment or get in touch"
        text="Our patient care executives will help you with appointments, admissions, insurance and anything else you need."
        image="/images/reception.jpg"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="container-x relative z-10 -mt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <a
                href={c.href}
                className={`flex h-full flex-col rounded-3xl p-6 shadow-soft transition hover:-translate-y-1 ${c.accent ? 'bg-crimson-500 text-white' : 'bg-white'}`}
              >
                <c.icon className={`h-7 w-7 ${c.accent ? 'text-white' : 'text-crimson-500'}`} />
                <h3 className={`mt-4 text-base font-semibold ${c.accent ? '!text-white' : ''}`}>{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className={`mt-1 break-all text-sm ${c.accent ? 'text-crimson-50' : 'text-slate-600'}`}>{l}</p>
                ))}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="appointment" className="section scroll-mt-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="card p-8 md:p-10 lg:col-span-7">
            <span className="eyebrow">Appointments</span>
            <h2 className="mt-3 text-3xl font-bold">Make an appointment</h2>
            <p className="mb-8 mt-2 text-slate-600">Choose your speciality and preferred date. We will call you to confirm your slot.</p>
            <AppointmentForm />
          </Reveal>

          <div className="space-y-6 lg:col-span-5">
            <Reveal className="rounded-3xl bg-navy-700 p-8 text-navy-50">
              <h3 className="flex items-center gap-2 text-xl font-semibold !text-white"><Clock className="h-5 w-5 text-gold-400" /> Hospital timings</h3>
              <dl className="mt-5 divide-y divide-white/10">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 py-3 text-sm">
                    <dt>{h.day}</dt>
                    <dd className="text-right font-medium text-white">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal className="rounded-3xl bg-white p-8 ring-1 ring-navy-900/5">
              <h3 className="flex items-center gap-2 text-xl font-semibold"><MapPin className="h-5 w-5 text-crimson-500" /> Address</h3>
              <p className="mt-3 text-slate-600">{site.address}</p>
              <p className="mt-3 text-sm text-slate-500">Parking available for patients and visitors. Ambulance entrance is open 24×7.</p>
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-5"><Navigation className="h-4 w-4" /> Get directions</a>
            </Reveal>
            <Reveal className="rounded-3xl bg-white p-8 ring-1 ring-navy-900/5">
              <h3 className="flex items-center gap-2 text-xl font-semibold"><Mail className="h-5 w-5 text-crimson-500" /> Email us</h3>
              <ul className="mt-4 divide-y divide-slate-100">
                {site.emails.map((e) => (
                  <li key={e.address} className="py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{e.label}</p>
                    <a href={`mailto:${e.address}`} className="break-all text-sm font-medium text-navy-700 hover:text-crimson-500">{e.address}</a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-card ring-1 ring-navy-900/5">
            <iframe
              title="Map showing Reyansh Prime Multispecialty Hospital, Ahmedabad"
              src={site.mapEmbed}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <Reveal className="card p-8 md:p-10">
            <span className="eyebrow">General enquiries</span>
            <h2 className="mt-3 text-3xl font-bold">Send us a message</h2>
            <p className="mb-8 mt-2 text-slate-600">For general questions, insurance, feedback or partnerships.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
