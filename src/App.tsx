import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio'; // Ativa o arquivo de projetos
import FAQ from './components/FAQ';             // Ativa o arquivo de perguntas
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14]">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio /> {/* Força os projetos e o vídeo a aparecerem na tela */}
      <About />
      <FAQ />       {/* Força as perguntas frequentes a aparecerem na tela */}
      <Contact />
      <Footer />
    </div>
  );
}
