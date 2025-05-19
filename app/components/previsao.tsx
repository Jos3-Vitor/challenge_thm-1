import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import Header from "~/components/header";
import HeroSection from "~/components/herosection";
import Footer from "~/components/footer";

// Conteúdo principal da página Previsão
function PrevisaoContent() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 text-left space-y-6">
      <h2 className="text-2xl font-semibold text-red-600">Previsão de Enchentes</h2>
      <p className="text-gray-700">
        Aqui você encontra informações atualizadas sobre as condições climáticas, níveis de rios e previsões de chuva na cidade de São Paulo.
        O sistema cruza dados meteorológicos com históricos de enchentes e oferece um painel atualizado em tempo real (protótipo).
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/80 rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2">Previsão para hoje</h3>
          <p>Chuva moderada durante a tarde. Risco de alagamento em regiões centrais e próximas a córregos.</p>
        </div>
        <div className="bg-white/80 rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2">Tendência para os próximos dias</h3>
          <p>Volume acumulado de chuva acima da média. Alertas preventivos podem ser emitidos nas próximas 48h.</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Dados baseados em fontes públicas e modelos meteorológicos. Este painel é um protótipo.
      </p>
    </section>
  );
}

// Página completa
export default function PrevisaoPage() {
  return (
    <>
      <Header />

      {/* Imagem topo da página */}
      <div className="w-full">
        <img
          src="/previsao01.jpg"
          alt="Mapa previsão enchentes"
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

      <HeroSection />
      <PrevisaoContent />
      <Footer />
    </>
  );
}

// SEO
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Previsão de Enchentes | SOS Enchentes SP" },
    { name: "description", content: "Acompanhe previsões atualizadas sobre enchentes em São Paulo e prepare-se melhor para os riscos climáticos." },
  ];
}
