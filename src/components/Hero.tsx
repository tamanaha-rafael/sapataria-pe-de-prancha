import { Phone, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen items-center justify-center overflow-hidden bg-leather-950">
      <div className="absolute inset-0 bg-gradient-to-br from-leather-900 via-leather-950 to-leather-900" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(176,141,94,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(176,141,94,0.2) 0%, transparent 40%)',
      }} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-leather-400/40 bg-leather-400/10 px-4 py-1.5 text-sm font-medium text-leather-200 backdrop-blur-sm">
            Sapateiro em Sorocaba · Desde sempre
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-sand-50 sm:text-5xl lg:text-6xl">
            Conserto de calçados com<br />
            <span className="text-leather-300">tradição e cuidado</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100/80">
            Na Sapataria Pé de Prancha, damos nova vida aos seus sapatos, bolsas
            e acessórios. Serviços de reparo com qualidade artesanal em
            Sorocaba, SP.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#servicos"
              className="group flex items-center gap-2 rounded-full bg-leather-400 px-7 py-3.5 text-sm font-semibold text-leather-950 transition-all hover:bg-leather-300 hover:shadow-xl"
            >
              Nossos serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1ebe5d] hover:shadow-xl"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="tel:+11937218310"
              className="flex items-center gap-2 rounded-full border border-sand-100/30 px-7 py-3.5 text-sm font-semibold text-sand-50 transition-all hover:border-leather-300 hover:text-leather-300"
            >
              <Phone className="h-4 w-4" />
              Ligar agora
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <InfoBadge icon={<MapPin className="h-5 w-5" />} title="Endereço" text="Vila Haro, Sorocaba" />
            <InfoBadge icon={<Clock className="h-5 w-5" />} title="Funcionamento" text="Seg–Sex 08–18h · Sáb 08–14h" />
            <InfoBadge icon={<Phone className="h-5 w-5" />} title="Contato" text="(11) 93721-8310" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sand-50 to-transparent" />
    </section>
  );
}

function InfoBadge({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-sand-100/15 bg-leather-950/40 p-3 backdrop-blur-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leather-400/20 text-leather-300">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-sand-100/60">{title}</p>
        <p className="text-sm font-semibold text-sand-50">{text}</p>
      </div>
    </div>
  );
}
