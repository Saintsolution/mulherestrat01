import { ShieldCheck } from "lucide-react";

export const Guarantee = () => (
  <section className="bg-paper py-20 sm:py-24">
    <div className="container">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 border border-gold/30 bg-paper-warm p-10 sm:p-14 md:grid-cols-[auto_1fr] reveal">
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-gold bg-paper text-ink shadow-gold">
          <ShieldCheck className="h-8 w-8 text-gold" strokeWidth={1.5} />
          <div className="mt-1 font-serif text-3xl leading-none">7</div>
          <div className="text-[9px] uppercase tracking-[0.22em] text-ink/60">dias</div>
        </div>
        <div>
          <span className="label-eyebrow">Garantia Incondicional</span>
          <h3 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Sete dias para sentir a <span className="italic text-gold">transformação</span>.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-[1.85] text-ink-soft sm:text-base">
            Acesse o material completo. Se nesses 7 dias você sentir que não é para você,
            devolvemos cada centavo — sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Guarantee;
