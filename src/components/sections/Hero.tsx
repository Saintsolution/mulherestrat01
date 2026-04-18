import { ArrowRight } from "lucide-react";
import WistiaPlayer from "@/components/WistiaPlayer";

interface HeroProps {
  vslWistiaId?: string;
}

export const Hero = ({ vslWistiaId }: HeroProps) => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-paper">
      {/* decorative side rules */}
      <div className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-gold/15 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-px bg-gold/15 md:block" />

      <div className="container grid grid-cols-1 items-center gap-14 py-16 md:py-24 lg:grid-cols-12 lg:gap-12 lg:py-32">
        {/* Left: Editorial Copy */}
        <div className="lg:col-span-5 reveal">
          <div className="flex items-center gap-4">
            <span className="editorial-rule w-10" />
            <span className="label-eyebrow">Vol. I — A Masterclass</span>
          </div>

          <h1 className="mt-10 font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]">
            Mulher
            <br />
            <span className="italic font-light text-ink/85">Estratégica</span>
          </h1>

          <p className="mt-8 max-w-md font-serif text-xl italic text-ink/70 sm:text-2xl">
            A arte de ser escolhida por quem você escolheu.
          </p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
            Saia do ciclo de relacionamentos vazios. Aprenda o método de autovalor para atrair
            um parceiro de vida real através da inteligência social e da independência emocional.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#combo"
              className="group inline-flex items-center gap-5 bg-ink px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-paper shadow-editorial transition-all duration-500 hover:bg-gold hover:text-ink sm:px-9 sm:py-5 sm:text-[11px]"
            >
              <span>Quero me tornar Estratégica</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ink/50">
              Acesso imediato · Hotmart
            </span>
          </div>
        </div>

        {/* Right: VSL */}
        <div className="lg:col-span-7 reveal">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-gold/40" />
            <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-gold/40" />
            <WistiaPlayer mediaId={vslWistiaId} aspect="4:3" />
            <div className="mt-5 flex items-center justify-between">
              <span className="label-meta">Vídeo de Vendas — Capítulo 01</span>
              <span className="label-meta">Duração 18 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
