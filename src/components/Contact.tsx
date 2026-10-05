import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const hours = [
  { day: 'Segunda-feira', time: '08:00 — 18:00' },
  { day: 'Terça-feira', time: '08:00 — 18:00' },
  { day: 'Quarta-feira', time: '08:00 — 18:00' },
  { day: 'Quinta-feira', time: '08:00 — 18:00' },
  { day: 'Sexta-feira', time: '08:00 — 18:00' },
  { day: 'Sábado', time: '08:00 — 14:00' },
  { day: 'Domingo', time: 'Fechado' },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-leather-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-leather-300">
              Visite-nos
            </span>
            <h2 className="mt-3 text-3xl font-bold text-sand-50 sm:text-4xl lg:text-5xl">
              Entre em contato
            </h2>
            <p className="mt-4 text-lg text-sand-100/70">
              Estamos prontos para atender você. Traga seus calçados e bolsas
              para uma avaliação — será um prazer ajudar.
            </p>

            <div className="mt-8 space-y-5">
              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                title="Endereço"
                lines={['R. Pedro José Senger, 1088', 'Vila Haro, Sorocaba - SP', 'CEP: 18015-000']}
              />
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                title="Telefone"
                lines={['(11) 93721-8310']}
                href="tel:+11937218310"
              />
            </div>

            <div className="mt-6 rounded-xl border border-leather-700/50 bg-leather-800/40 p-5">
              <div className="flex items-center gap-2 text-leather-300">
                <Clock className="h-5 w-5" />
                <p className="text-xs font-semibold uppercase tracking-wide">Horário de funcionamento</p>
              </div>
              <ul className="mt-4 space-y-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between border-b border-leather-700/30 pb-2 text-sm last:border-0">
                    <span className="text-sand-100/70">{h.day}</span>
                    <span className={`font-medium ${h.time === 'Fechado' ? 'text-red-400/80' : 'text-sand-50'}`}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=R.+Pedro+José+Senger,+1088,+Vila+Haro,+Sorocaba+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-leather-400 px-7 py-3.5 text-sm font-semibold text-leather-950 transition-all hover:bg-leather-300 hover:shadow-xl"
              >
                <Navigation className="h-4 w-4" />
                Como chegar
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1ebe5d] hover:shadow-xl"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-leather-700">
            <iframe
              title="Localização da Sapataria Pé de Prancha"
              src="https://www.google.com/maps?q=R.+Pedro+José+Senger,+1088,+Vila+Haro,+Sorocaba+-+SP,+18015-000&output=embed"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  lines,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-leather-400/15 text-leather-300">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-sand-100/50">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className={`text-sand-50 ${i === 0 ? 'mt-0.5 font-semibold' : 'text-sand-100/70'}`}>
            {l}
          </p>
        ))}
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block transition-opacity hover:opacity-80">{content}</a>;
  }
  return content;
}
