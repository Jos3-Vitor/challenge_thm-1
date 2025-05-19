import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import Header from "~/components/header";
import HeroSection from "~/components/herosection";
import MainContent from "~/components/maincontent";
import AlertaSection from "~/components/alertasection";
import NoticiasRecentes from "~/components/noticiasrecentes";
import Footer from "~/components/footer";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MainContent />
      <AlertaSection />
      <NoticiasRecentes />
      <Footer />

    </>
  );
}
