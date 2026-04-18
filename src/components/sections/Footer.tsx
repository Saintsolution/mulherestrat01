export const Footer = () => (
  <footer className="border-t border-ink/10 bg-paper py-12">
    <div className="container flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
      <div className="font-serif text-xl tracking-[0.3em] text-ink">
        M<span className="italic font-light text-gold">E</span>
      </div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-ink/50">
        © {new Date().getFullYear()} Mulher Estratégica · Todos os direitos reservados
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 animate-shimmer-gold rounded-full bg-gold" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-ink/50">
          Inscrições Abertas
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
