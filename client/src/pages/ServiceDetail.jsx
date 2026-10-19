import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Users, ClipboardList, Lock } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { ServiceCard } from '../components/Cards';
import { AppointmentForm } from '../components/Forms';
import CTASection from '../components/CTASection';
import NotFound from './NotFound';
import { departments, hivServices, site } from '../data/site';
import usePageTitle from '../usePageTitle';

const sources = {
  departments: { items: departments.filter((d) => !d.link), base: '/specialities', label: 'Specialities', whoTitle: 'Conditions we treat', expectTitle: 'Treatments & services' },
  hiv: { items: hivServices, base: '/hiv-care', label: 'HIV Care Centre', whoTitle: 'Who is it for?', expectTitle: 'What to expect' },
};

export default function ServiceDetail({ source = 'departments' }) {
  const { slug } = useParams();
  const cfg = sources[source];
  const service = cfg.items.find((s) => s.slug === slug);
  usePageTitle(service?.title);
  if (!service) return <NotFound />;

  const isHiv = source === 'hiv';
  const others = cfg.items.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={cfg.label}
        title={service.title}
        text={service.short}
        image={service.image}
        crumbs={[{ label: cfg.label, to: cfg.base }, { label: service.title }]}
      />

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <img src={service.image} alt="" className="aspect-[16/9] w-full rounded-[2rem] object-cover shadow-soft" />
              <p className="mt-10 text-xl leading-relaxed text-slate-700">{service.overview}</p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Reveal className="card">
                <Users className="h-8 w-8 text-crimson-500" strokeWidth={1.6} />
                <h2 className="mt-4 text-xl font-semibold">{cfg.whoTitle}</h2>
                <ul className="mt-5 space-y-3">
                  {service.whoFor.map((w) => (
                    <li key={w} className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" />{w}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08} className="card">
                <ClipboardList className="h-8 w-8 text-crimson-500" strokeWidth={1.6} />
                <h2 className="mt-4 text-xl font-semibold">{cfg.expectTitle}</h2>
                <ul className="mt-5 space-y-3">
                  {service.expect.map((w) => (
                    <li key={w} className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" />{w}</li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {isHiv ? (
              <Reveal className="mt-10 flex gap-3 rounded-3xl bg-navy-50 p-6 text-sm leading-relaxed text-navy-900">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-navy-600" />
                <p><strong>Your privacy:</strong> All consultations follow the HIV and AIDS (Prevention and Control) Act, 2017. Your information is never shared without your written consent.</p>
              </Reveal>
            ) : (
              <Reveal className="mt-10 rounded-3xl bg-navy-50 p-6 text-sm leading-relaxed text-navy-900">
                <strong>Insurance:</strong> Cashless treatment is available with most health insurance plans and TPAs. Our billing desk will help with pre-authorisation.
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="card sticky top-28 p-8">
              <h3 className="text-2xl font-semibold">Book an appointment</h3>
              <p className="mb-6 mt-2 text-sm text-slate-600">
                Or call <a href={site.phoneHref} className="font-semibold text-navy-700">{site.phone}</a>
              </p>
              <AppointmentForm variant="compact" />
              {isHiv ? (
                <a href={site.pepHref} className="btn-primary mt-4 w-full"><Phone className="h-4 w-4" /> 24×7 PEP: {site.pepHelpline}</a>
              ) : (
                <a href={site.emergencyHref} className="btn-primary mt-4 w-full"><Phone className="h-4 w-4" /> 24×7 Emergency: {site.emergency}</a>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold">{isHiv ? 'More HIV care services' : 'Other specialities'}</h2>
            <Link to={cfg.base} className="hidden items-center gap-1 text-sm font-semibold text-crimson-600 sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} base={cfg.base} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
