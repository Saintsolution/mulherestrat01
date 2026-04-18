import WistiaPlayer from "@/components/WistiaPlayer";
import { Sparkles } from "lucide-react";

// O ID extraído do seu link: mcv7ol151y
const LIFESTYLE_VIDEO_ID = "mcv7ol151y";

const highlights = [
  'Inteligência emocional no dia a dia',
  'Linguagem corporal e presença magnética',
  'Como cultivar independência que atrai',
  'Rotinas e hábitos de uma mulher de alto valor',
];

export const Lifestyle = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-paper to-paper-warm py-24 sm:py-32">
    <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
      <div className="order-2 lg:order-1 lg:col-span-7 reveal">
        <span className="label-eyebrow">A Transformação em Prática</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.5rem]">
          Mais do que um método —
          <br />
          <span className="italic text-gold">um novo estilo de vida.</span>
        </h2>
        
        <div className="mt-8 h-px w-12 bg-ink/30" />
        
        <p className="mt-8 max-w-lg text-base leading-[1.9] text-ink-soft">
          Ser uma Mulher Estratégica não é sobre manipulação — é sobre
          autoconhecimento e posicionamento. Quando você se conhece profundamente,
          suas escolhas mudam, e com elas, os resultados.
        </p>

        <div className="mt-10 space-y-4">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 flex-shrink-0 text-gold" />
              <p className="font-sans text-sm tracking-wide text-ink/80">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
           <a 
            href="#comprar" 
            className="inline-block rounded-none bg-ink px-8 py-4 text-sm font-medium uppercase tracking-widest text-paper transition-all hover:bg-gold hover:text-ink"
          >
            Quero começar agora
          </a>
        </div>
      </div>

      {/* Seção do Vídeo - Removi o arredondado (rounded-md) para alinhar com o novo estilo */}
      <div className="order-1 mx-auto w-full max-w-xs lg:order-2 lg:col-span-5 lg:max-w-sm reveal">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 bg-gold/10 blur-2xl rounded-none" />
          <WistiaPlayer 
            mediaId={LIFESTYLE_VIDEO_ID} 
            aspect="9:16" 
            caption="Lifestyle Estratégico" 
            className="rounded-none shadow-none" // Forçando quinas retas
          />
        </div>
      </div>
    </div>
  </section>
);

export default Lifestyle;