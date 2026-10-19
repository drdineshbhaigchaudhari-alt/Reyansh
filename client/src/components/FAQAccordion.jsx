import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-navy-900/10 rounded-3xl bg-white px-6 shadow-card ring-1 ring-navy-900/5 md:px-8">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-medium text-navy-800">{f.q}</span>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen ? 'rotate-45 bg-crimson-500 text-white' : 'bg-navy-50 text-navy-700'}`}>
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="pb-6 pr-12 leading-relaxed text-slate-600">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
