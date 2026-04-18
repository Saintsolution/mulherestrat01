import { Quote } from "lucide-react";

const items = [
  {
    name: "Marina A.",
    role: "Advogada · 32 anos",
    text: "Em 3 semanas mudei a maneira como me apresento. Parei de aceitar conversas mornas e atraí um homem que me trata como prioridade — não como entretenimento.",
  },
  {
    name: "Beatriz L.",
    role: "Médica · 29 anos",
    text: "O capítulo do Filtro da Verdade me poupou meses. Aprendi a ler sinais que antes eu romantizava. Hoje escolho com lucidez.",
  },
  {
    name: "Camila R.",
    role: "Empresária · 35 anos",
    text: "Não é um livro sobre homens — é um livro sobre você. Reconstruí minha autoestima e, com ela, todo o resto se reorganizou.",
  },
];

export const Testimonials = () => (
  <section id="prova" className="bg-paper py-24 sm:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center reveal">
        <span className="label-eyebrow">Histórias de Transformação</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Mulheres que <span className="italic text-gold">reescreveram</span> a própria narrativa.
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((t, i) => (
          <figure
            key={t.name}
            className="relative flex flex-col bg-paper-warm p-10 shadow-soft reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <Quote className="h-8 w-8 text-gold/60" strokeWidth={1.25} />
            <blockquote className="mt-6 flex-1 font-serif text-lg leading-[1.65] text-ink/90">
              "{t.text}"
            </blockquote>
            <div className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-serif text-base text-paper">
                {t.name.charAt(0)}
              </div>
              <figcaption>
                <div className="font-serif text-base text-ink">{t.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink/55">{t.role}</div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
