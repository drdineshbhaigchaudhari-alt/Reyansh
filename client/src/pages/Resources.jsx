import { X, Check, Scale, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { hivFaqs, myths, articles, rights } from '../data/site';
import usePageTitle from '../usePageTitle';

export default function Resources() {
  usePageTitle('Patient Resources');
  return (
    <>
      <PageHero
        eyebrow="Patient resources"
        title="Knowledge that replaces fear"
        text="Clear, medically reviewed information about HIV, treatment, prevention and your rights in India."
        image="/images/elder-gujarat.jpg"
        crumbs={[{ label: 'HIV Care Centre', to: '/hiv-care' }, { label: 'Patient Resources' }]}
      />

      {/* U=U */}
      <section className="section">
        <div className="container-x">
          <Reveal className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-navy-800 p-8 text-navy-50 md:grid-cols-5 md:p-14">
            <div className="md:col-span-2">
              <p className="font-display text-7xl font-semibold text-white md:text-8xl">U=U</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold-400">Undetectable = Untransmittable</p>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-semibold !text-white">The most important thing to know about HIV today</h2>
              <p className="mt-4 text-lg leading-relaxed">
                A person living with HIV who takes treatment daily and keeps an undetectable viral load for at least six
                months <strong className="text-white">does not transmit HIV to sexual partners</strong>. This is a
                scientific consensus endorsed by WHO, and it is changing lives, relationships and families.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Myths vs facts */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Myths vs facts" title="Let's clear the air" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {myths.map((m, i) => (
              <Reveal key={m.myth} delay={(i % 3) * 0.06} className="overflow-hidden rounded-3xl ring-1 ring-navy-900/10">
                <div className="flex gap-3 bg-crimson-50 p-5">
                  <X className="h-5 w-5 shrink-0 text-crimson-500" />
                  <p className="text-sm font-medium text-crimson-700"><span className="font-semibold">Myth:</span> {m.myth}</p>
                </div>
                <div className="flex gap-3 p-5">
                  <Check className="h-5 w-5 shrink-0 text-navy-500" />
                  <p className="text-sm text-slate-700"><span className="font-semibold text-navy-800">Fact:</span> {m.fact}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Living well" title="Guides from our care team" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06} className="group overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-900/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-wider text-crimson-600">{a.tag}</span>
                    <span className="flex items-center gap-1 text-slate-400"><Clock className="h-3.5 w-3.5" />{a.read}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{a.excerpt}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + rights */}
      <section className="section bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
            <FAQAccordion items={hivFaqs} />
          </div>
          <div className="lg:col-span-5">
            <Reveal className="sticky top-28 rounded-[2rem] bg-ivory p-8 ring-1 ring-navy-900/10">
              <Scale className="h-10 w-10 text-crimson-500" strokeWidth={1.5} />
              <h2 className="mt-5 text-2xl font-semibold">Your rights under the HIV/AIDS Act, 2017</h2>
              <ul className="mt-6 space-y-4">
                {rights.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" />{r}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-slate-500">This is a summary for awareness only and is not legal advice.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <CTASection eyebrow="The first step is the bravest" title="Your health. Your privacy. Our promise." text="Talk to our HIV specialists today. No judgement, no queues and no one else needs to know." image="/images/couple-home.jpg" />
    </>
  );
}
