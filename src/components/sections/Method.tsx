import { Crown, Compass, ShieldCheck } from "lucide-react";

const pillars = [
  {
    n: "I",
    icon: Crown,
    title: "Autoestima Blindada",
    desc: "O resgate do seu valor próprio. Você se torna o prêmio — não quem persegue. A presença que pede silêncio antes mesmo da palavra.",
  },
  {
    n: "II",
    icon: Compass,
    title: "Geografia do Encontro",
    desc: "Identifique onde estão os homens de alto valor e como ser notada por eles. O mapa exato dos lugares, códigos e sinais que importam.",
  },
  {
    n: "III",
    icon: ShieldCheck,
    title: "O Filtro da Verdade",
    desc: "Identifique red flags em minutos e economize meses de energia emocional. O método de seleção que separa potencial de pretendente.",
  },
];

export const Method = () => (
  <section id="metodo" className="bg-paper py-24 sm:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center reveal">
        <span className="label-eyebrow">O Método — 03 Pilares</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
          A arquitetura invisível
          <br />
          do <span className="italic text-gold">alto valor</span>.
        </h2>
        <div className="mx-auto mt-8 h-px w-12 bg-ink/30" />
      </div>

      <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-ink/10 shadow-soft md:grid-cols-3">
        {pillars.map((p, i) => (
          <article
            key={p.n}
            className="group relative bg-paper p-10 transition-colors duration-700 hover:bg-paper-warm reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-5xl italic text-gold/70">{p.n}</span>
              <p.icon className="h-6 w-6 text-ink/50 transition-colors group-hover:text-gold" strokeWidth={1.25} />
            </div>
            <div className="mt-12 h-px w-10 bg-gold/50" />
            <h3 className="mt-6 font-serif text-2xl text-ink sm:text-3xl">{p.title}</h3>
            <p className="mt-5 text-sm leading-[1.85] text-ink-soft">{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Method;
