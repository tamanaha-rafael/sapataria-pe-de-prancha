import { CheckCircle2, MessageCircle, Hammer, Award, HandHeart, Clock } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const highlights = [
  'Atendimento personalizado',
  'Materiais de primeira linha',
  'Tradição em conserto de calçados',
  'Serviços para bolsas e acessórios',
];

const stats = [
  { icon: <Hammer className="h-7 w-7" />, value: '100%', label: 'Dedicação em cada reparo' },
  { icon: <Award className="h-7 w-7" />, value: 'Qualidade', label: 'Materiais de primeira linha' },
  { icon: <HandHeart className="h-7 w-7" />, value: 'Tradição', label: 'Artesanato em cada detalhe' },
  { icon: <Clock className="h-7 w-7" />, value: 'Agilidade', label: 'Entrega no prazo combinado' },
];

export default function About() {
  return (
    <section id="sobre" className="overflow-hidden bg-leather-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-leather-700/50 bg-leather-800/40 p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-leather-400/15 text-leather-300">
                  {s.icon}
                </div>
                <p className="mt-4 font-display text-2xl font-bold text-leather-300">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-sand-100/60">{s.label}</p>
              </div>
            ))}
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-leather-300">
              Sobre nós
            </span>
            <h2 className="mt-3 text-3xl font-bold text-sand-50 sm:text-4xl lg:text-5xl">
              Artesanato que preserva<br />seus calçados favoritos
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sand-100/70">
              A Sapataria Pé de Prancha é um ponto de referência em Sorocaba para
              quem valoriza seus calçados. Com anos de experiência, combinamos
              técnicas tradicionais de sapataria com materiais de qualidade para
              entregar reparos duradouros.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sand-100/60">
              Seja um sapato social, uma sandália, uma bolsa de couro ou aquele
              par favorito com sola desgastada — aqui cada peça recebe o cuidado
              que merece.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sand-100/80">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-leather-300" />
                  <span className="text-sm font-medium">{h}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1ebe5d] hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
