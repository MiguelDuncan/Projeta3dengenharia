import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio'; // Ativa o arquivo de projetos
import FAQ from './components/FAQ';             // Ativa o arquivo de perguntas
import Portfolio from './components/Portfolio'; 
import FAQ from './components/FAQ';             
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14]">
    <div className="min-h-screen bg-[#070b14] border-0 border-transparent divide-y-0 selection:bg-[#f97316]/30">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio /> {/* Força os projetos e o vídeo a aparecerem na tela */}
      <Portfolio /> 
      <About />
      <FAQ />       {/* Força as perguntas frequentes a aparecerem na tela */}
      <FAQ />       
      <Contact />
      <Footer />
    </div>
