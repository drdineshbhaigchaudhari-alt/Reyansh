import { Eye, Target, HeartHandshake } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import StatsBand from '../components/StatsBand';
import CTASection from '../components/CTASection';
import { about, values, facilities } from '../data/site';
import usePageTitle from '../usePageTitle';

export default function About() {
  usePageTitle('About Us');
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Reyansh Prime Multispecialty Hospital"
        text="A landmark of healthcare in Ahmedabad since 2003, combining expert doctors, excellent nursing care and a warm, welcoming environment."
        image="/images/brand/hero-facade.jpg"
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="section">
        <div className="container-x grid items-start gap-16 lg:grid-cols-2">
          <Reveal className="relative lg:sticky lg:top-28">
            <img src="/images/brand/hero-facade.jpg" alt="Reyansh Prime Multispecialty Hospital building" className="aspect-[4/3] w-full rounded-[2.5rem] object-cover object-[60%_center] shadow-soft" />
            <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-3xl bg-crimson-500 p-6 text-white shadow-soft md:block">
              <p className="font-display text-4xl font-bold">Since 2003</p>
              <p className="mt-1 text-sm text-crimson-50">Over two decades of trusted care</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Who we are" title="A state-of-the-art hospital in the heart of Ahmedabad" />
            <div className="prose-care text-slate-600">
              {about.intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-[2rem] bg-navy-700 p-10 text-navy-50">
            <Eye className="h-10 w-10 text-gold-400" />
            <h2 className="mt-6 text-2xl font-bold !text-white">Our Vision</h2>
            <p className="mt-4 leading-relaxed">{about.vision}</p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[2rem] bg-crimson-500 p-10 text-white">
            <Target className="h-10 w-10 text-white" />
            <h2 className="mt-6 text-2xl font-bold !text-white">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-crimson-50">{about.mission}</p>
          </Reveal>
          <Reveal delay={0.16} className="rounded-[2rem] bg-ivory p-10 ring-1 ring-navy-900/5">
            <HeartHandshake className="h-10 w-10 text-crimson-500" />
            <h2 className="mt-6 text-2xl font-bold">Our Values</h2>
            <p className="mt-4 leading-relaxed text-slate-700">{about.values}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading center eyebrow="The values that drive us forward" title="What we stand for" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="card text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700"><v.icon className="h-7 w-7" strokeWidth={1.6} /></span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Facilities" title="Everything you need, under one roof" text="From the emergency room to recovery, our facilities are designed for safety, comfort and quick care." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.05} className="rounded-3xl bg-white p-6 ring-1 ring-navy-900/5">
                <f.icon className="h-8 w-8 text-crimson-500" strokeWidth={1.6} />
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{f.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {['ot-team-2', 'icu-monitor', 'lab-analyzer'].map((img, i) => (
              <Reveal key={img} delay={i * 0.08}>
                <img src={`/images/${img}.jpg`} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
