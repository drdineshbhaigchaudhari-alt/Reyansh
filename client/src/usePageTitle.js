import { useEffect } from 'react';

const BASE = 'Reyansh Prime Multispecialty Hospital, Ahmedabad';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | 24×7 Emergency & Specialist Care`;
  }, [title]);
}
