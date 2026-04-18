import { BookOpen, Heart, MessageCircle, Check } from 'lucide-react';

const products = [
  {
    tag: 'Ebook Principal',
    icon: BookOpen,
    title: 'Mulher Estratégica',
    subtitle: 'O Mapa da Mentalidade',
    description: 'O guia completo de autovalor, posicionamento e inteligência emocional para mudar o jogo.',
    features: [
      'Método de autovalor passo a passo',
      'Scripts de comunicação estratégica',
      'Como identificar o parceiro certo',
    ],
    highlight: true,
    price: '79,90',
    link: 'https://hotmart.com/checkout/mulher-estrategica',
  },
  {
    tag: 'Guia Prático',
    icon: Heart,
    title: '21 Dias de Autoestima',
    subtitle: 'Exercícios de Transformação',
    description: 'Um exercício prático por dia para fortalecer sua autoestima e mudar sua relação consigo mesma.',
    features: [
      '21 desafios diários práticos',
      'Diário de auto-observação',
      'Trilha de evolução semanal',
    ],
    highlight: false,
    price: '29,90',
    link: 'https://hotmart.com/checkout/21-dias',
  },
  {
    tag: 'Guia de Seleção',
    icon: MessageCircle,
    title: '50 Perguntas para o Date',
    subtitle: 'O Filtro do Caráter',
    description: 'Saiba o que perguntar para revelar o caráter de um homem logo no primeiro encontro.',
    features: [
      '50 perguntas selecionadas',
      'Como ler as respostas reais',
      'Identificação de sinais de alerta',
    ],
    highlight: false,
    price: '19,90',
    link: 'https://hotmart.com/checkout/50-perguntas',
  },
];

export function Combo() {
  return (
    <section id="comprar" className="py-24 md:py-36 px-6 bg-[#FDF5E6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="font-sans text-xs tracking-[0.3em] uppercase mb-5 text-[#B8860B]">
            Escolha seu Caminho
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-600 leading-tight mb-6 text-[#0F172A]">
            Invista na sua 
            <br />
            <span className="italic text-[#B8860B]">nova versão.</span>
          </h2>
          <div className="w-12 h-px bg-[#B8860B]/30 mx-auto mb-8" />
        </div>

        {/* Grid de Produtos Individuais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div key={i} className={`flex flex-col h-full rounded-2xl p-8 reveal transition-all duration-500 ${
                  product.highlight 
                  ? 'bg-[#0F172A] text-white ring-2 ring-[#B8860B] shadow-2xl' 
                  : 'bg-white text-[#0F172A] border border-[#B8860B]/10 shadow-sm'
                }`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg ${product.highlight ? 'bg-[#B8860B]/20' : 'bg-[#FDF5E6]'}`}>
                      <Icon className="w-5 h-5 text-[#B8860B]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#B8860B] font-bold">
                      {product.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl mb-1">{product.title}</h3>
                  <p className="text-xs text-[#B8860B] mb-6 uppercase tracking-wider">{product.subtitle}</p>
                  
                  <p className="text-sm leading-relaxed mb-8 opacity-80 min-h-[60px]">
                    {product.description}
                  </p>

                  <ul className="space-y-3 mb-10 flex-grow">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-[11px]">
                        <Check className="w-3 h-3 text-[#B8860B] mt-1 shrink-0" />
                        <span className="opacity-70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-[#B8860B]/10">
                    <p className="text-2xl font-serif mb-4 text-[#B8860B]">R$ {product.price}</p>
                    <a 
                      href={product.link}
                      className={`block text-center py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                        product.highlight 
                        ? 'bg-[#B8860B] text-white hover:bg-white hover:text-[#0F172A]' 
                        : 'bg-[#0F172A] text-white hover:bg-[#B8860B]'
                      }`}
                    >
                      Comprar apenas este
                    </a>
                  </div>
              </div>
            );
          })}
        </div>

        {/* Bloco do Combo Completo */}
        <div className="max-w-3xl mx-auto text-center bg-[#0F172A] rounded-3xl p-10 md:p-16 relative overflow-hidden ring-4 ring-[#B8860B]/30 reveal">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-[#B8860B] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-tighter">
              Oferta Recomendada
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Combo Mulher Estratégica</h2>
          <p className="text-[#B8860B] text-sm mb-8 tracking-widest uppercase">Os 3 produtos pelo preço de um</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            <span className="text-white/40 line-through text-xl">R$ 129,70</span>
            <span className="text-white text-5xl md:text-6xl font-serif">
              R$ <span className="text-[#B8860B]">97,90</span>
            </span>
          </div>

          <a 
            href="https://hotmart.com/checkout/combo"
            className="inline-block bg-[#B8860B] text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-all w-full md:w-auto"
          >
            QUERO O COMBO COMPLETO — R$ 97,90
          </a>
          
          <p className="text-white/40 text-[10px] mt-6 uppercase tracking-widest">
            Acesso vitalício aos 3 ebooks &bull; Pagamento Seguro Hotmart
          </p>
        </div>
      </div>
    </section>
  );
}

export default Combo;