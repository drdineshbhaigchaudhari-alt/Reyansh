import { Link } from 'react-router-dom';
import { ShieldCheck, Siren, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { site } from '../data/site';
import usePageTitle from '../usePageTitle';

const pepTimeline = [
  { t: '0–2 hrs', title: 'Ideal window', text: 'PEP is most effective when started within 2 hours of exposure.', tone: 'bg-navy-500' },
  { t: 'Up to 72 hrs', title: 'Still effective', text: 'PEP must start within 72 hours. After that, it is not recommended.', tone: 'bg-gold-400' },
  { t: '28 days', title: 'Complete the course', text: 'Take one or two tablets daily for 28 days without missing doses.', tone: 'bg-navy-700' },
  { t: '6 wks & 3 mths', title: 'Follow-up tests', text: 'Repeat HIV tests confirm that PEP has worked.', tone: 'bg-crimson-500' },
];

export default function PrepPep() {
  usePageTitle('PrEP & PEP');
  return (
    <>
      <PageHero
        eyebrow="HIV prevention"
        title="PrEP & PEP: powerful tools to stay HIV-negative"
        text="Medicines that prevent HIV before or after a possible exposure. They are safe, highly effective and provided in complete confidence."
        image="/images/couple-home.jpg"
        crumbs={[{ label: 'HIV Care Centre', to: '/hiv-care' }, { label: 'PrEP & PEP' }]}
      />

      {/* PEP emergency card */}
      <section className="container-x -mt-10 relative z-10">
        <Reveal className="flex flex-col items-start gap-6 rounded-[2rem] bg-crimson-500 p-8 text-white shadow-soft md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex gap-5">
            <Siren className="h-12 w-12 shrink-0 motion-safe:animate-pulse" />
            <div>
              <h2 className="text-2xl font-semibold !text-white md:text-3xl">Exposed in the last 72 hours?</h2>
              <p className="mt-2 text-crimson-50">Don't wait for a test. Call now and come in. Our PEP desk is open 24×7.</p>
            </div>
          </div>
          <a href={site.pepHref} className="btn-light shrink-0 px-7 py-4 text-base"><Phone className="h-5 w-5" /> {site.pepHelpline}</a>
        </Reveal>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal className="card p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700"><ShieldCheck className="h-7 w-7" /></span>
            <h2 className="mt-6 text-3xl font-semibold">PrEP</h2>
            <p className="text-sm font-semibold uppercase tracking-wider text-crimson-600">Pre-Exposure Prophylaxis</p>
            <p className="mt-5 leading-relaxed text-slate-600">
              A pill taken <strong>before</strong> possible exposure that reduces the risk of getting HIV from sex by
              about 99% when taken as prescribed. Ideal for people with ongoing risk.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {['Daily or 2-1-1 event-based dosing', 'HIV, kidney & hepatitis B tests before starting', '3-monthly check-ups and STI screening', 'Discreet prescriptions and refills'].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-navy-500" />{x}</li>
              ))}
            </ul>
            <Link to="/hiv-care/prep" className="btn-primary mt-8">Start PrEP <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <Reveal delay={0.08} className="card p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson-50 text-crimson-600"><Siren className="h-7 w-7" /></span>
            <h2 className="mt-6 text-3xl font-semibold">PEP</h2>
            <p className="text-sm font-semibold uppercase tracking-wider text-crimson-600">Post-Exposure Prophylaxis</p>
            <p className="mt-5 leading-relaxed text-slate-600">
              An emergency 28-day course of HIV medicines taken <strong>after</strong> a possible exposure, such as condom
              failure, sexual assault or a needle-stick injury. It must start within 72 hours.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {['First dose given at the hospital', '24×7 walk-in and helpline', 'Trauma-informed care for assault survivors', 'Side-effect support throughout'].map((x) => (
                <li key={x} className="flex gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-crimson-500" />{x}</li>
              ))}
            </ul>
            <Link to="/hiv-care/pep" className="btn-crimson mt-8">About PEP <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="The PEP timeline" title="Every hour counts" />
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-[1.15rem] hidden h-1 rounded-full bg-gradient-to-r from-navy-500 via-gold-400 to-crimson-500 md:block" />
            {pepTimeline.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1} className="relative">
                <span className={`relative block h-10 w-10 rounded-full ${s.tone} ring-8 ring-white`} />
                <p className="mt-5 font-display text-2xl font-semibold text-navy-800">{s.t}</p>
                <h3 className="mt-1 font-sans text-base font-semibold text-slate-800">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img src="/images/couple-portrait.jpg" alt="A smiling young Indian couple" loading="lazy" className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-soft" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Inclusive by design" title="Prevention for everyone, without judgement" text="We provide PrEP and PEP to everyone who needs them, including serodiscordant couples, gay, bisexual and transgender people, sex workers and people who inject drugs, following the NACO National Technical Guidelines on PrEP." />
            <p className="text-slate-600">
              Not sure which one you need? That's okay. Book a private chat with our sexual-health team and we will help
              you decide.
            </p>
            <Link to="/contact#appointment" className="btn-primary mt-8">Talk to a specialist</Link>
          </div>
        </div>
      </section>
      <CTASection eyebrow="The first step is the bravest" title="Your health. Your privacy. Our promise." text="Talk to our HIV specialists today. No judgement, no queues and no one else needs to know." image="/images/couple-home.jpg" />
    </>
  );
}
