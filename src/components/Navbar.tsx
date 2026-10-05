import { useEffect, useState } from 'react';
import { Menu, X, Phone, Hammer, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-leather-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#inicio" className="flex items-center gap-2 text-sand-50">
            <Hammer className="h-6 w-6 text-leather-300" />
            <span className="font-display text-lg font-semibold tracking-wide md:text-xl">
              Pé de Prancha
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-sand-100/80 transition-colors hover:text-leather-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1ebe5d] hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="tel:+11937218310"
              className="flex items-center gap-2 rounded-full bg-leather-400 px-5 py-2.5 text-sm font-semibold text-leather-950 transition-all hover:bg-leather-300 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              (11) 93721-8310
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-sand-50 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-leather-700/50 bg-leather-900/95 backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-sand-100/80 transition-colors hover:bg-leather-800 hover:text-leather-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:+11937218310"
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-leather-400 px-5 py-3 text-sm font-semibold text-leather-950"
                >
                  <Phone className="h-4 w-4" />
                  (11) 93721-8310
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
