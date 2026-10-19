import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarCheck, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import { nav } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkCls = ({ isActive }) =>
    `relative inline-flex items-center gap-1 py-2 text-sm font-medium transition hover:text-navy-700 ${
      isActive
        ? 'text-navy-800 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-crimson-500'
        : 'text-slate-600'
    }`;

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow ${scrolled ? 'shadow-card' : ''}`}>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          {nav.slice(1).map((n) =>
            n.children ? (
              <div key={n.to} className="group relative">
                <NavLink to={n.to} className={linkCls}>
                  {n.label} <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl bg-white p-2 shadow-soft ring-1 ring-navy-900/5">
                    {n.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        end
                        className={({ isActive }) => `block rounded-xl px-4 py-2.5 text-sm ${isActive ? 'bg-navy-50 font-semibold text-navy-800' : 'text-slate-600 hover:bg-ivory hover:text-navy-800'}`}
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={n.to} to={n.to} className={linkCls}>{n.label}</NavLink>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact#appointment" className="btn-crimson hidden sm:inline-flex">
            <CalendarCheck className="h-4 w-4" /> Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2.5 text-navy-800 hover:bg-navy-50 xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-navy-900/5 bg-white xl:hidden"
            aria-label="Mobile"
          >
            <div className="container-x flex max-h-[75vh] flex-col overflow-y-auto py-4">
              {nav.map((n) => (
                <div key={n.to}>
                  <NavLink
                    to={n.to}
                    end
                    className={({ isActive }) => `block rounded-xl px-3 py-3 text-base font-medium ${isActive ? 'bg-navy-50 text-navy-800' : 'text-slate-700'}`}
                  >
                    {n.label}
                  </NavLink>
                  {n.children && (
                    <div className="mb-1 ml-3 border-l border-navy-100 pl-3">
                      {n.children.slice(1).map((c) => (
                        <NavLink key={c.to} to={c.to} className={({ isActive }) => `block rounded-lg px-3 py-2 text-sm ${isActive ? 'text-navy-800 font-semibold' : 'text-slate-600'}`}>
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact#appointment" className="btn-crimson mt-3">Book Appointment</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
