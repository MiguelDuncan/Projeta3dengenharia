import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio'; // Avisa o site que a galeria nova existe
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14]">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio /> {/* Faz a sua nova galeria com fotos aparecer na tela! */}
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
