import { MessageCircle } from 'lucide-react';
import { site } from '../data/site';

export default function WhatsAppFab() {
  const text = encodeURIComponent('Hello, I would like to book a confidential consultation.');
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      aria-label="Chat with us confidentially on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
