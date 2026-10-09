import About from "@/components/About";
import Contact from "@/components/Contact";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <About />
        <Industries />
        <Facilities />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
