import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
