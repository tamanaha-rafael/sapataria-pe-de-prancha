import { Hammer, Footprints, ShoppingBag, Sparkles, Wrench, Package, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const services = [
  {
    icon: <Footprints className="h-7 w-7" />,
    title: 'Conserto de Saltos',
    description: 'Troca e reparo de saltos de todos os tipos, devolvendo estabilidade e conforto ao seu calçado.',
  },
  {
    icon: <Package className="h-7 w-7" />,
    title: 'Problemas com Palmilhas',
    description: 'Substituição e ajuste de palmilhas para garantir o conforto ideal a cada passo.',
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: 'Fivela e Acessórios',
    description: 'Substituição de fivelas, ziperes e outros acessórios com peças de qualidade.',
  },
  {
    icon: <ShoppingBag className="h-7 w-7" />,
    title: 'Conserto de Bolsas',
    description: 'Reparo de bolsas de couro e outros materiais, recuperando alças, costuras e fechos.',
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: 'Serviço de Reparo',
    description: 'Reparos gerais em calçados de todos os tipos, do social ao esportivo.',
  },
  {
    icon: <Hammer className="h-7 w-7" />,
    title: 'Troca de Sola',
    description: 'Troca completa de sola com materiais resistentes para prolongar a vida do seu sapato.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-leather-500">
            O que fazemos
          </span>
          <h2 className="mt-3 text-3xl font-bold text-leather-900 sm:text-4xl lg:text-5xl">
            Serviços especializados
          </h2>
          <p className="mt-4 text-lg text-leather-600">
            Cada par de calçados recebe atenção individual, com técnicas
            artesanais e materiais de primeira linha.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-leather-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-leather-300 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-leather-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-leather-100 text-leather-600 transition-colors group-hover:bg-leather-400 group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-leather-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-leather-600">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1ebe5d] hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            Solicite seu orçamento no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
