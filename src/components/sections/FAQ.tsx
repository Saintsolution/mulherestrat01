import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como recebo o acesso depois da compra?",
    a: "Imediatamente após a confirmação do pagamento na Hotmart, você recebe um e-mail com o login e a senha da área de membros. O acesso é vitalício e disponível em qualquer dispositivo.",
  },
  {
    q: "É um curso em vídeo ou ebook?",
    a: "O material principal é o ebook 'Mulher Estratégica' acompanhado dos dois bônus em PDF: o plano de 21 dias de autoestima e o guia das 50 perguntas para o primeiro date.",
  },
  {
    q: "Funciona para quem já está em um relacionamento?",
    a: "Sim. O método é sobre posicionamento e autovalor — princípios que reconfiguram qualquer dinâmica relacional, inclusive a que você já vive hoje.",
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "Mulheres que aplicam o protocolo de 21 dias relatam mudanças concretas de postura e atração já no primeiro mês. A transformação profunda é proporcional à execução.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos o valor integral, sem questionamentos.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Sim. Toda a transação é processada pela Hotmart, líder global em produtos digitais, com criptografia de ponta e múltiplas formas de pagamento.",
  },
];

export const FAQ = () => (
  <section id="faq" className="bg-paper py-24 sm:py-32">
    <div className="container max-w-3xl">
      <div className="text-center reveal">
        <span className="label-eyebrow">Perguntas Frequentes</span>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Antes de você <span className="italic text-gold">decidir</span>.
        </h2>
        <div className="mx-auto mt-8 h-px w-12 bg-ink/30" />
      </div>

      <Accordion type="single" collapsible className="mt-14 reveal">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-ink/15">
            <AccordionTrigger className="py-6 text-left font-serif text-lg text-ink hover:text-gold hover:no-underline sm:text-xl">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-[1.85] text-ink-soft sm:text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
