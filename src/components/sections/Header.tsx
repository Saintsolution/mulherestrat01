export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
    <div className="container flex items-center justify-between py-5">
      <a href="#top" className="font-serif text-xl tracking-[0.3em] text-ink">
        m<span className="italic font-light text-gold">E</span>
      </a>
      
      <nav className="hidden gap-10 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60 md:flex">
        <a href="#metodo" className="transition-colors hover:text-gold">O Método</a>
        <a href="#combo" className="transition-colors hover:text-gold">Acervo</a>
        <a href="#prova" className="transition-colors hover:text-gold">Histórias</a>
        <a href="#faq" className="transition-colors hover:text-gold">Acesso</a>
      </nav>

      <a
        href="#comprar"
        className="inline-block rounded-full bg-ink px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-paper transition-all hover:bg-gold hover:text-ink shadow-sm active:scale-95"
      >
        Quero Me Posicionar
      </a>
    </div>
  </header>
);

export default Header;