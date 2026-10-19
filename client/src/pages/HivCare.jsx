import { Link } from 'react-router-dom';
import { ArrowRight, Siren, Phone, ShieldCheck, TestTube2, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { ServiceCard } from '../components/Cards';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { hivServices, hivPromise, hivFaqs, site } from '../data/site';
import usePageTitle from '../usePageTitle';

const hubLinks = [
  { to: '/hiv-care/prep-pep', icon: ShieldCheck, title: 'PrEP & PEP', text: 'Prevent HIV before or after a possible exposure.' },
  { to: '/hiv-care/testing', icon: TestTube2, title: 'HIV Testing', text: 'Fast, accurate and confidential tests.' },
  { to: '/hiv-care/resources', icon: BookOpen, title: 'Patient Resources', text: 'U=U, myths vs facts, your legal rights.' },
];

export default function HivCare() {
  usePageTitle('HIV Care Centre');
  return (
    <>
      <PageHero
        eyebrow="Centre of excellence"
        title="HIV Care Centre"
        text="Confidential, stigma-free HIV testing, treatment and prevention, backed by every specialist department of Reyansh Prime Multispecialty Hospital."
        image="/images/hero-consultation.jpg"
        crumbs={[{ label: 'HIV Care Centre' }]}
      />

      {/* PEP emergency */}
      <section className="container-x relative z-10 -mt-10">
        <Reveal className="flex flex-col items-start gap-6 rounded-[2rem] bg-crimson-500 p-8 text-white shadow-soft md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex gap-5">
            <Siren className="h-12 w-12 shrink-0 motion-safe:animate-pulse" />
            <div>
              <h2 className="text-2xl font-bold !text-white md:text-3xl">Possible exposure in the last 72 hours?</h2>
              <p className="mt-2 text-crimson-50">PEP can prevent HIV, but only if you start it quickly. Our emergency department provides it 24×7.</p>
            </div>
          </div>
          <a href={site.pepHref} className="btn-light shrink-0 px-7 py-4 text-base"><Phone className="h-5 w-5" /> {site.pepHelpline}</a>
        </Reveal>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why a centralised HIV centre?"
              title="Specialist HIV care, with a whole hospital behind it"
              text="HIV care works best when everything is in one place. Our centralised HIV Care Centre brings testing, counselling and treatment together, and it can call on our obstetrics, paediatrics, critical care, psychiatry and laboratory teams whenever you need them."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {hivPromise.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05} className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><p.icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="rounded-[2.5rem] bg-navy-800 p-10 text-navy-50">
            <p className="font-display text-7xl font-bold text-white">U=U</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold-400">Undetectable = Untransmittable</p>
            <p className="mt-6 text-lg leading-relaxed">
              A person living with HIV who takes treatment daily and keeps an undetectable viral load for at least six
              months <strong className="text-white">does not transmit HIV to sexual partners</strong>. With modern
              treatment, HIV is a manageable condition and people can expect a near-normal lifespan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Our HIV services" title="Complete care, from first test to lifelong wellness" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hivServices.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} base="/hiv-care" />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {hubLinks.map((h, i) => (
            <Reveal key={h.to} delay={i * 0.06}>
              <Link to={h.to} className="group flex h-full items-start gap-4 rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-soft">
                <h.icon className="h-8 w-8 shrink-0 text-crimson-500" strokeWidth={1.6} />
                <div>
                  <h3 className="text-lg font-semibold">{h.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{h.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-crimson-600">Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x max-w-4xl">
          <SectionHeading center eyebrow="HIV FAQs" title="Honest answers, no stigma" />
          <FAQAccordion items={hivFaqs.slice(0, 6)} />
        </div>
      </section>

      <CTASection
        eyebrow="The first step is the bravest"
        title="Your health. Your privacy. Our promise."
        text="Talk to our HIV specialists today. No judgement, no queues and no one else needs to know."
        image="/images/couple-home.jpg"
      />
    </>
  );
}
