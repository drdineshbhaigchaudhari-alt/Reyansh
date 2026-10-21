import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Lock, ShieldCheck, Navigation } from 'lucide-react';
import { site, departments, whyUs, doctors, faqs, quickActions, healthPackages } from '../data/site';
import HeroSlider from '../components/HeroSlider';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { ServiceCard, DoctorCard } from '../components/Cards';
import StatsBand from '../components/StatsBand';
import Testimonials from '../components/Testimonials';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import FeaturedDoctor from '../components/FeaturedDoctor';
import { AppointmentForm } from '../components/Forms';
import usePageTitle from '../usePageTitle';

function ActionCard({ a }) {
  const cls = `group flex h-full items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 ${a.accent ? 'bg-crimson-500 text-white' : 'bg-white shadow-card ring-1 ring-navy-900/5'}`;
  const body = (
    <>
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${a.accent ? 'bg-white/15' : 'bg-navy-50 text-navy-700'}`}>
        <a.icon className="h-6 w-6" />
      </span>
      <span>
        <span className={`block font-display font-semibold ${a.accent ? 'text-white' : 'text-navy-800'}`}>{a.title}</span>
        <span className={`block text-xs ${a.accent ? 'text-crimson-50' : 'text-slate-500'}`}>{a.text}</span>
        <span className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${a.accent ? 'text-white' : 'text-crimson-600'}`}>{a.cta} <ArrowRight className="h-3 w-3" /></span>
      </span>
    </>
  );
  return a.to ? <Link to={a.to} className={cls}>{body}</Link> : <a href={a.href} className={cls}>{body}</a>;
}

export default function Home() {
  usePageTitle();
  return (
    <>
      <HeroSlider />

      {/* Appointment bar (sits just below the slider so the facade image stays fully visible) */}
      <section className="relative z-10 pt-8">
        <div className="container-x">
          <Reveal className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy-900/5 md:p-7">
            <div className="mb-4 flex flex-col justify-between gap-1 md:flex-row md:items-end">
              <h2 className="text-xl font-bold md:text-2xl">Make an Appointment</h2>
              <p className="text-sm text-slate-500">Our patient care executive will call you back to confirm.</p>
            </div>
            <AppointmentForm variant="bar" />
          </Reveal>
        </div>
      </section>

      {/* Quick actions */}
      <section className="pt-10">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}><ActionCard a={a} /></Reveal>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <img src="/images/ot-team.jpg" alt="An Indian surgical team performing an operation" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-navy-700 px-6 py-5 text-white shadow-soft">
              <p className="font-display text-4xl font-bold">2003</p>
              <p className="text-xs text-navy-100">Caring for Ahmedabad since</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Welcome to Reyansh Prime"
              title="A trusted multispecialty hospital in the heart of Ahmedabad"
              text="For over two decades, families across Ahmedabad and Gandhinagar have relied on us for excellent nursing care, well-equipped operation theatres and a dedicated team of doctors."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {['20-bed hospital with ICU, ICCU & CCU', 'Knee, hip & spine surgery specialists', '24×7 emergency & ambulance', 'In-house pharmacy & pathology', 'General wards to deluxe rooms', 'Daily health check-ups'].map((x) => (
                <li key={x} className="flex items-start gap-2.5 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-500" />{x}</li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary mt-8">Know more about us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <FeaturedDoctor className="pb-20" />

      {/* Specialities */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our specialities" title="Comprehensive care across 14+ specialities" />
            <Reveal className="mb-12 shrink-0"><Link to="/specialities" className="btn-ghost">View all specialities <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.slice(0, 8).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* HIV Care Centre feature */}
      <section className="section">
        <div className="container-x">
          <Reveal className="grid overflow-hidden rounded-[2.5rem] bg-navy-800 lg:grid-cols-2">
            <div className="p-8 md:p-14">
              <span className="eyebrow !text-crimson-100"><span className="h-px w-8 bg-current" />Centre of excellence</span>
              <h2 className="mt-4 text-3xl font-bold !text-white md:text-4xl">HIV Care Centre</h2>
              <p className="mt-5 leading-relaxed text-navy-100">
                Our dedicated, centralised HIV Care Centre offers confidential testing, modern antiretroviral therapy,
                PrEP, 24×7 PEP and pregnancy care. It is backed by every department of the hospital and delivered with
                complete privacy and dignity.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-navy-50 sm:grid-cols-2">
                {['Confidential testing & counselling', 'ART & viral load monitoring', 'PrEP & 24×7 PEP', 'HIV in pregnancy (PPTCT)'].map((x) => (
                  <li key={x} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-gold-400" />{x}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/hiv-care" className="btn-crimson">Visit HIV Care Centre <ArrowRight className="h-4 w-4" /></Link>
                <span className="inline-flex items-center gap-1.5 text-xs text-navy-200"><Lock className="h-3.5 w-3.5" /> 100% confidential</span>
              </div>
            </div>
            <img src="/images/hero-consultation.jpg" alt="An Indian woman doctor consulting an elderly patient" loading="lazy" className="h-72 w-full object-cover lg:h-full" />
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Why choose us" title="Why families choose Reyansh Prime" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06} className="flex gap-4 rounded-3xl bg-ivory p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-crimson-50 text-crimson-600"><w.icon className="h-6 w-6" strokeWidth={1.8} /></span>
                <div>
                  <h3 className="text-base font-semibold">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Health packages */}
      <section id="packages" className="section scroll-mt-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Preventive health" title="Health check-up packages" text="Available every day of the week. Early detection is the best prevention." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {healthPackages.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06} className={`relative flex flex-col rounded-3xl p-7 ${p.featured ? 'bg-navy-700 text-white shadow-soft' : 'bg-white shadow-card ring-1 ring-navy-900/5'}`}>
                {p.featured && <span className="absolute -top-3 left-7 rounded-full bg-crimson-500 px-3 py-1 text-xs font-semibold text-white">Most popular</span>}
                <h3 className={`text-lg font-semibold ${p.featured ? '!text-white' : ''}`}>{p.name}</h3>
                <p className={`mt-2 font-display text-3xl font-bold ${p.featured ? 'text-white' : 'text-crimson-500'}`}>{p.price}<span className="text-sm font-medium opacity-70">*</span></p>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                  {p.tests.map((t) => (
                    <li key={t} className="flex gap-2"><CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? 'text-gold-400' : 'text-navy-500'}`} />{t}</li>
                  ))}
                </ul>
                <Link to="/contact#appointment" className={`mt-7 w-full ${p.featured ? 'btn-light' : 'btn-ghost'}`}>Book package</Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">*Indicative placeholder prices. Please confirm at the hospital.</p>
        </div>
      </section>

      {/* Doctors preview */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Expert doctors team" title="Meet our specialists" />
            <Reveal className="mb-12 shrink-0"><Link to="/doctors" className="btn-ghost">All doctors <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.slice(0, 3).map((d, i) => <DoctorCard key={d.name} doctor={d} index={i} />)}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ + quick booking */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
            <FAQAccordion items={faqs} />
          </div>
          <Reveal className="lg:col-span-5">
            <div className="card sticky top-28 p-8">
              <span className="eyebrow">Quick booking</span>
              <h3 className="mt-3 text-2xl font-semibold">Book an appointment</h3>
              <p className="mb-6 mt-2 text-sm text-slate-600">Choose a speciality and date, and we will confirm by phone.</p>
              <AppointmentForm variant="compact" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="section pt-0">
        <div className="container-x">
          <Reveal className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-card ring-1 ring-navy-900/5 md:grid-cols-2">
            <img src="/images/ahmedabad-bridge.jpg" alt="The Sabarmati Riverfront in Ahmedabad" loading="lazy" className="h-72 w-full object-cover md:h-full" />
            <div className="p-8 md:p-14">
              <span className="eyebrow"><MapPin className="h-4 w-4" /> Find us</span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Conveniently located on the Gandhinagar Highway</h2>
              <p className="mt-5 leading-relaxed text-slate-600">{site.address}</p>
              <p className="mt-3 text-sm text-slate-500">Easy to reach from across Ahmedabad and Gandhinagar, with parking for patients and visitors.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="btn-primary"><Navigation className="h-4 w-4" /> Get directions</a>
                <Link to="/contact" className="btn-ghost">Contact us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
