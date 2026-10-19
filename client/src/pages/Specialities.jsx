import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { ServiceCard } from '../components/Cards';
import CTASection from '../components/CTASection';
import { departments } from '../data/site';
import usePageTitle from '../usePageTitle';

export default function Specialities() {
  usePageTitle('Specialities');
  return (
    <>
      <PageHero
        eyebrow="Specialities"
        title="Expert multispecialty care for every stage of life"
        text="From safe motherhood and children's health to joint replacement, spine surgery and critical care, our specialists work together to give you complete treatment under one roof."
        image="/images/ot-team-2.jpg"
        crumbs={[{ label: 'Specialities' }]}
      />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Our departments" title="Choose the care you need" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
