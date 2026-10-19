import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { DoctorCard } from '../components/Cards';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { doctors } from '../data/site';
import usePageTitle from '../usePageTitle';

export default function Doctors() {
  usePageTitle('Our Doctors');
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Expert doctors team"
        text="Eminent consultants across orthopaedics, spine, women's health, medicine, pathology and HIV care, working together for every patient."
        image="/images/ot-surgeons.jpg"
        crumbs={[{ label: 'Doctors' }]}
      />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Consultants" title="Meet the doctors" text="Our consultants speak Gujarati, Hindi and English. Teleconsultations are available for follow-up visits." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d, i) => <DoctorCard key={d.name} doctor={d} index={i} detailed />)}
          </div>
          <p className="mt-10 text-center text-xs text-slate-400">Profiles other than Dr. Keyuriben are placeholders. Replace them with real staff details before launch.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Beyond doctors"
              title="A multidisciplinary team"
              text="Great care goes beyond the doctor. Our trained nurses, OT and ICU staff, physiotherapists, pharmacists and patient care executives support you from admission to discharge."
            />
            <ul className="grid grid-cols-2 gap-4 text-sm font-medium text-navy-800">
              {['Trained nursing staff', 'ICU & OT teams', 'Physiotherapists', 'Pathology team', 'Pharmacists', 'Patient care executives'].map((r) => (
                <li key={r} className="rounded-2xl bg-ivory px-4 py-3">{r}</li>
              ))}
            </ul>
          </div>
          <Reveal>
            <img src="/images/nurse.jpg" alt="An Indian nurse in a blue and white uniform" loading="lazy" className="aspect-[4/5] w-full rounded-[2.5rem] object-cover object-top shadow-soft" />
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
