import { Link } from 'react-router-dom';

export default function Logo({ onDark = false, className = 'h-11 sm:h-12' }) {
  const img = <img src="/images/brand/logo.png" alt="Reyansh Prime Multispecialty Hospital" className={`w-auto ${className}`} width="760" height="148" />;
  return (
    <Link to="/" className="inline-flex shrink-0 items-center" aria-label="Reyansh Prime Multispecialty Hospital, home">
      {onDark ? <span className="rounded-2xl bg-white px-4 py-3 shadow-card">{img}</span> : img}
    </Link>
  );
}
