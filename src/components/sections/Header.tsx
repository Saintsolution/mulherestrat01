export const Header = () => (
  <header className="relative z-30 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
    <div className="container flex items-baseline justify-between py-6">
      <a href="#top" className="font-serif text-xl tracking-[0.3em] text-ink">
        M<span className="italic font-light text-gold">E</span>
      </a>
      <nav className="hidden gap-10 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60 md:flex">
        <a href="#metodo" className="transition-colors hover:text-gold">O Método</a>
        <a href="#combo" className="transition-colors hover:text-gold">Acervo</a>
        <a href="#prova" className="transition-colors hover:text-gold">Histórias</a>
        <a href="#faq" className="transition-colors hover:text-gold">Acesso</a>
      </nav>
      <a
        href="#combo"
        className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-ink transition-colors hover:text-gold md:inline"
      >
        Inscrições Abertas
      </a>
    </div>
  </header>
);

export default Header;
