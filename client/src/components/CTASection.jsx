import { Link } from 'react-router-dom';
import { CalendarCheck, Phone } from 'lucide-react';
import Reveal from './Reveal';
import { site } from '../data/site';

export default function CTASection({
  eyebrow = 'We are here for you',
  title = 'Expert care for your whole family, 24×7',
  text = 'Book an appointment with our specialists today, or call us any time for emergencies.',
  image = '/images/ahmedabad-riverfront.jpg',
}) {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-navy-800 px-6 py-16 text-center md:px-16 md:py-20">
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-900/85" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow !text-crimson-100"><span className="h-px w-8 bg-current" />{eyebrow}<span className="h-px w-8 bg-current" /></span>
            <h2 className="mt-4 text-3xl font-bold !text-white md:text-5xl">{title}</h2>
            <p className="mt-5 text-lg text-navy-100">{text}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact#appointment" className="btn-crimson"><CalendarCheck className="h-4 w-4" /> Book an appointment</Link>
              <a href={site.emergencyHref} className="btn border border-white/30 text-white hover:bg-white/10"><Phone className="h-4 w-4" /> Emergency: {site.emergency}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
