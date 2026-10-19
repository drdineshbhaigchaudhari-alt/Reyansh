import { Clock, Hourglass, Droplet, UserCheck, FileLock, MessageSquareHeart } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { testingOptions } from '../data/site';
import usePageTitle from '../usePageTitle';

const steps = [
  { icon: UserCheck, title: 'Register privately', text: 'Use any name for screening. No questions about your personal life unless you want to talk.' },
  { icon: MessageSquareHeart, title: 'Pre-test counselling', text: 'A short, friendly conversation about the test, the window period and what results mean.' },
  { icon: Droplet, title: 'Quick sample', text: 'A finger-prick or a small blood draw. No fasting or preparation needed.' },
  { icon: FileLock, title: 'Results in private', text: 'Shared face-to-face or by a secure call, never by SMS. Support for your next step is ready.' },
];

export default function Testing() {
  usePageTitle('HIV Testing');
  return (
    <>
      <PageHero
        eyebrow="Testing & diagnostics"
        title="Know your status, quickly and confidentially"
        text="Accurate tests, our pathology laboratory and a counsellor at your side. Most results are ready the same day."
        image="/images/lab-analyzer.jpg"
        crumbs={[{ label: 'HIV Care Centre', to: '/hiv-care' }, { label: 'HIV Testing' }]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading center eyebrow="How testing works" title="Simple, private, done in under an hour" />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="card">
                <span className="font-display text-sm text-crimson-500">0{i + 1}</span>
                <s.icon className="mt-3 h-8 w-8 text-navy-600" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Tests we offer" title="The right test at the right time" text="The window period is the time after exposure before a test can reliably detect HIV. Our counsellor will help you choose the right test." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testingOptions.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.06} className="flex flex-col rounded-3xl border border-navy-900/10 bg-ivory/60 p-7">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{t.note}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1.5 text-navy-700"><Clock className="h-3.5 w-3.5" /> Report: {t.time}</span>
                  {t.window !== 'n/a' && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson-50 px-3 py-1.5 text-crimson-700"><Hourglass className="h-3.5 w-3.5" /> Window: {t.window}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Pathology laboratory" title="Precision you can rely on" text="Our laboratory follows strict internal and external quality control, with automated analysers for viral load and CD4 testing. Results are reviewed by a pathologist before they reach you." />
            <ul className="space-y-3 text-slate-600">
              <li>• Home sample collection across Ahmedabad and Gandhinagar*</li>
              <li>• Secure online report access with a personal PIN</li>
              <li>• Packages for couples, pre-marital and pre-pregnancy screening</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">*Placeholder service. Confirm availability.</p>
          </div>
          <Reveal className="grid grid-cols-2 gap-4">
            <img src="/images/lab-research.jpg" alt="An Indian laboratory scientist working with test samples" loading="lazy" className="aspect-[3/4] w-full rounded-[2rem] object-cover" />
            <img src="/images/lab-sikh-doctor.jpg" alt="A Sikh lab doctor holding a sample rack" loading="lazy" className="mt-10 aspect-[3/4] w-full rounded-[2rem] object-cover" />
          </Reveal>
        </div>
      </section>
      <CTASection eyebrow="The first step is the bravest" title="Your health. Your privacy. Our promise." text="Talk to our HIV specialists today. No judgement, no queues and no one else needs to know." image="/images/couple-home.jpg" />
    </>
  );
}
