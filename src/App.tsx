import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ'; // Aqui avisamos o site que o FAQ existe
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <FAQ /> {/* Aqui mandamos o FAQ aparecer logo após a seção "Sobre" */}
      <Contact />
      <Footer />
    </div>
  );
}
