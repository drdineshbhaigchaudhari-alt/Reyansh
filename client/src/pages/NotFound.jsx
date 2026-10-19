import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';
import { site } from '../data/site';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="section">
      <div className="container-x flex flex-col items-center text-center">
        <img src="/images/brand/mark.png" alt="" className="h-20 w-20" />
        <p className="mt-8 font-display text-7xl font-bold text-navy-700">404</p>
        <h1 className="mt-4 text-3xl font-bold">We couldn't find that page</h1>
        <p className="mt-3 max-w-md text-slate-600">
          The page may have moved. For emergencies, please call <a href={site.emergencyHref} className="font-semibold text-crimson-600">{site.emergency}</a>.
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/" className="btn-primary">Go home</Link>
          <Link to="/contact" className="btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
