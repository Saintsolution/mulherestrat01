import { useReveal } from "@/hooks/useReveal";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import Method from "@/components/sections/Method";
import Lifestyle from "@/components/sections/Lifestyle";
import Combo from "@/components/sections/Combo";
import Testimonials from "@/components/sections/Testimonials";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

// 🎬 Wistia: cole aqui os IDs dos seus vídeos quando estiverem prontos.
// Exemplo: const VSL_WISTIA_ID = "abcd1234";
const VSL_WISTIA_ID = ""; // Vídeo de Vendas (4:3)
const LIFESTYLE_WISTIA_ID = ""; // Vídeo Lifestyle vertical (9:16)

const Index = () => {
  useReveal();

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />
      <Hero vslWistiaId={VSL_WISTIA_ID} />
      <Pain />
      <Method />
      <Lifestyle lifestyleWistiaId={LIFESTYLE_WISTIA_ID} />
      <Combo />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
