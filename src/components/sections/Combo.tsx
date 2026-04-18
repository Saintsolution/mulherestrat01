import { BookOpenText, CalendarHeart, MessagesSquare, ArrowRight } from "lucide-react";

const items = [
  {
    tag: "Produto Principal",
    title: "Mulher Estratégica",
    sub: "O Mapa da Mentalidade",
    desc: "O ebook completo com a doutrina, o método e os roteiros que estruturam cada pilar do alto valor feminino.",
    icon: BookOpenText,
    span: "lg:col-span-2 lg:row-span-2",
    big: true,
  },
  {
    tag: "Bônus 01",
    title: "21 Exercícios de Autoestima",
    sub: "Plano Prático de 21 dias",
    desc: "Um protocolo diário para reconstruir, do zero, a sua relação com o próprio valor.",
    icon: CalendarHeart,
    span: "",
    big: false,
  },
  {
    tag: "Bônus 02",
    title: "50 Perguntas para o Primeiro Date",
    sub: "O Guia de Seleção",
    desc: "As perguntas certas para revelar caráter, intenção e compatibilidade — sem desperdiçar tempo.",
    icon: MessagesSquare,
    span: "",
    big: false,
  },
];

export const Combo = () => (
  <section id="combo" className="bg-ink py-24 text-paper sm:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center reveal">
        <span className="label-eyebrow text-gold">O Acervo Completo</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Tudo o que você recebe
          <br />
          ao se <span className="italic text-gold">tornar</span> Estratégica.
        </h2>
      </div>

      <div className="mt-16 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 lg:grid-cols-3">
        {items.map((it, i) => (
          <article
            key={it.title}
            className={`group relative overflow-hidden border border-paper/10 bg-ink/40 p-8 transition-all duration-700 hover:border-gold/40 hover:bg-paper/[0.04] sm:p-10 reveal ${it.span}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold">{it.tag}</span>
              <it.icon className={`text-gold/70 transition-transform duration-700 group-hover:rotate-[-6deg] group-hover:scale-110 ${it.big ? "h-10 w-10" : "h-7 w-7"}`} strokeWidth={1.25} />
            </div>

            <div className={`mt-${it.big ? "16" : "10"}`}>
              <h3 className={`font-serif text-paper ${it.big ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>
                {it.title}
              </h3>
              <p className={`mt-3 font-serif italic text-gold ${it.big ? "text-xl" : "text-base"}`}>
                {it.sub}
              </p>
              <p className={`mt-5 max-w-md leading-[1.85] text-paper/70 ${it.big ? "text-base" : "text-sm"}`}>
                {it.desc}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
          </article>
        ))}
      </div>

      {/* Pricing CTA */}
      <div className="mx-auto mt-20 max-w-3xl text-center reveal">
        <div className="border border-gold/30 bg-paper/[0.03] px-8 py-12 sm:px-12 sm:py-16">
          <span className="label-eyebrow text-gold">Investimento único</span>
          <div className="mt-6 flex items-baseline justify-center gap-3">
            <span className="font-serif text-2xl text-paper/50 line-through">R$ 297</span>
            <span className="font-serif text-6xl text-paper sm:text-7xl">R$ 97</span>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-paper/60">
            ou 12x de R$ 9,68 · acesso vitalício
          </p>

          <a
            href="#"
            className="group mt-10 inline-flex items-center gap-5 bg-gold px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink shadow-gold transition-all duration-500 hover:bg-paper hover:text-ink sm:px-14 sm:py-6"
          >
            <span>Quero me tornar uma Mulher Estratégica</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} />
          </a>

          <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-paper/45">
            Pagamento seguro via Hotmart
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Combo;
