import { Hammer, Phone, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-leather-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-sand-50">
            <Hammer className="h-5 w-5 text-leather-400" />
            <span className="font-display text-lg font-semibold">Sapataria Pé de Prancha</span>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-sand-100/50 md:flex-row md:gap-6">
            <a href="tel:+11937218310" className="flex items-center gap-1.5 transition-colors hover:text-leather-300">
              <Phone className="h-4 w-4" />
              (11) 93721-8310
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              R. Pedro José Senger, 1088 — Sorocaba, SP
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-leather-800 pt-6 text-center text-xs text-sand-100/40">
          © {new Date().getFullYear()} Sapataria Pé de Prancha. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
