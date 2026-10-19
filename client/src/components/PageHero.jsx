import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

export default function PageHero({ eyebrow, title, text, image, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-800/30" />
      <div className="container-x relative py-20 md:py-28">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-navy-200">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-4 w-4" />
              {c.to && i < crumbs.length - 1 ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="eyebrow !text-crimson-100"><span className="h-px w-8 bg-current" />{eyebrow}</span>}
          <h1 className="mt-4 text-4xl font-bold leading-[1.15] !text-white md:text-[3.4rem]">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-50/90">{text}</p>}
        </Reveal>
      </div>
      <BrandDivider />
    </section>
  );
}

export function BrandDivider() {
  return <div className="relative h-1 w-full bg-gradient-to-r from-crimson-500 via-crimson-500 to-navy-500" />;
}
