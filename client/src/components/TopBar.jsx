import { Phone, Ambulance, Clock, MapPin } from 'lucide-react';
import { site } from '../data/site';

export default function TopBar() {
  return (
    <div className="bg-navy-900 text-navy-50">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-xs">
        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-1.5 md:flex"><MapPin className="h-3.5 w-3.5 text-gold-400" /> Gandhinagar Hwy, Ahmedabad</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-gold-400" /> OPD Mon–Sat 9 AM – 8 PM</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={site.ambulanceHref} className="hidden items-center gap-1.5 hover:text-white sm:flex">
            <Ambulance className="h-3.5 w-3.5 text-gold-400" /> Ambulance: {site.ambulance}
          </a>
          <a href={site.emergencyHref} className="flex items-center gap-1.5 font-semibold hover:text-white">
            <Phone className="h-3.5 w-3.5 text-crimson-400" /> 24×7 Emergency: {site.emergency}
          </a>
        </div>
      </div>
    </div>
  );
}
