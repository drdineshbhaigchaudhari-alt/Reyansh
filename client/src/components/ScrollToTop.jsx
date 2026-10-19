import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // wait a tick so the target section is rendered
      const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}
