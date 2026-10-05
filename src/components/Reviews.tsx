import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Regina Paula',
    rating: 5,
    text: 'Ótimo profissional, deixou meus sapatos perfeitos!!!',
  },
  {
    name: 'Fernanda Fabbri',
    rating: 5,
    text: 'Muito boa. Serviço bom 💪',
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-leather-500">
            Avaliações
          </span>
          <h2 className="mt-3 text-3xl font-bold text-leather-900 sm:text-4xl lg:text-5xl">
            O que dizem nossos clientes
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3].map((i) => (
                <Star key={i} className="h-5 w-5 fill-leather-400 text-leather-400" />
              ))}
              {[4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 text-leather-200" />
              ))}
            </div>
            <span className="text-sm font-semibold text-leather-600">3,7 · Google</span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl border border-leather-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-leather-100" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < r.rating ? 'fill-leather-400 text-leather-400' : 'text-leather-200'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-leather-700">
                "{r.text}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-leather-200 font-display text-lg font-semibold text-leather-700">
                  {r.name.charAt(0)}
                </div>
                <p className="font-semibold text-leather-900">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
