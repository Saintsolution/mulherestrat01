import WistiaPlayer from "@/components/WistiaPlayer";

interface LifestyleProps {
  lifestyleWistiaId?: string;
}

export const Lifestyle = ({ lifestyleWistiaId }: LifestyleProps) => (
  <section className="relative overflow-hidden bg-gradient-to-b from-paper to-paper-warm py-24 sm:py-32">
    <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
      <div className="order-2 lg:order-1 lg:col-span-7 reveal">
        <span className="label-eyebrow">Lifestyle Estratégico</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.5rem]">
          Não é sobre
          <span className="italic text-gold"> conquistar</span>.
          <br />
          É sobre <span className="italic">ser inevitável</span>.
        </h2>
        <div className="mt-8 h-px w-12 bg-ink/30" />
        <p className="mt-8 max-w-lg text-base leading-[1.9] text-ink-soft">
          A Mulher Estratégica não persegue cenários — ela os constrói. Cada gesto, cada
          escolha, cada silêncio é parte de uma narrativa que comunica quem ela é antes
          mesmo de ela falar.
        </p>
        <p className="mt-6 max-w-lg text-base leading-[1.9] text-ink-soft">
          Veja como esse posicionamento se traduz no dia-a-dia — e como ele transforma
          o tipo de homem que cruza o seu caminho.
        </p>

        <div className="mt-12 flex items-center gap-8">
          <span className="font-serif text-5xl italic text-gold">21</span>
          <p className="max-w-[18ch] text-xs uppercase tracking-[0.2em] text-ink/60">
            dias para reescrever a sua presença
          </p>
        </div>
      </div>

      <div className="order-1 mx-auto w-full max-w-xs lg:order-2 lg:col-span-5 lg:max-w-sm reveal">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-md bg-gold/10 blur-2xl" />
          <WistiaPlayer mediaId={lifestyleWistiaId} aspect="9:16" caption="Vídeo Lifestyle — 60s" />
        </div>
      </div>
    </div>
  </section>
);

export default Lifestyle;
