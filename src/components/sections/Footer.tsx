export const Footer = () => (
  <footer className="border-t border-ink/10 bg-paper py-16">
    <div className="container flex flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
      <div className="flex flex-col gap-2">
        <div className="font-serif text-2xl tracking-[0.3em] text-ink">
          m<span className="italic font-light text-gold">E</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-ink/40">
          © {new Date().getFullYear()} Mulher Estratégica · Direitos reservados GOSTEIMUITO
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 md:items-end">
        <div className="flex items-center gap-2">
          {/* A bolinha agora indica "Disponibilidade Imediata" */}
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-ink/60 font-medium">
            Acesso imediato após a confirmação
          </span>
        </div>
        
        <a
          href="#comprar"
          className="inline-flex items-center justify-center rounded-full bg-ink px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-paper transition-all hover:bg-gold hover:text-ink shadow-lg active:scale-95"
        >
          Começar Minha Transformação
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;