import { Link, useLocation } from 'react-router-dom';
import { Siren, ArrowRight } from 'lucide-react';

// Shown only inside the HIV Care Centre section
export default function PEPBanner() {
  const { pathname } = useLocation();
  if (!pathname.startsWith('/hiv-care')) return null;
  return (
    <div className="bg-crimson-500 text-white">
      <div className="container-x flex flex-col items-center justify-center gap-1 py-2.5 text-center text-sm sm:flex-row sm:gap-3">
        <span className="flex items-center gap-2 font-medium">
          <Siren className="h-4 w-4 motion-safe:animate-pulse" /> Possible HIV exposure in the last 72 hours?
        </span>
        <Link to="/hiv-care/prep-pep" className="inline-flex items-center gap-1 font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white">
          Start PEP today <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
