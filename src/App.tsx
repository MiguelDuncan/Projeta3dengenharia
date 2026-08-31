```tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const seoData: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Projeta3D Engenharia | Modelagem CAD e Impressão 3D em Juiz de Fora',
        description:
          'Projeta3D Engenharia: modelagem 3D e CAD, impressão 3D, prototipagem e engenharia reversa em Juiz de Fora - MG. Soluções técnicas para empresas e projetos mecânicos.',
      },

      '/servicos/modelagem-3d-cad': {
        title: 'Modelagem 3D e CAD em Juiz de Fora | Projeta3D Engenharia',
        description:
          'Modelagem 3D e CAD técnico em Juiz de Fora - MG para peças, projetos mecânicos, protótipos e fabricação. Trabalhamos com Fusion 360 e SolidWorks.',
      },

      '/servicos/impressao-3d-personalizada': {
        title: 'Impressão 3D em Juiz de Fora | Peças Técnicas e Protótipos',
        description:
          'Impressão 3D em Juiz de Fora - MG para peças técnicas, protótipos funcionais e componentes mecânicos. Trabalhamos com ABS, ASA, PETG, Nylon, PA-CF e TPU.',
      },

      '/servicos/engenharia-reversa': {
        title: 'Engenharia Reversa em Juiz de Fora | Projeta3D Engenharia',
        description:
          'Engenharia reversa de peças e componentes em Juiz de Fora - MG. Reconstrução de peças físicas em modelos CAD para fabricação, reposição e desenvolvimento.',
      },
    };

    const currentSEO = seoData[location.pathname] || seoData['/'];

    document.title = currentSEO.title;

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = currentSEO.description;

    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.href = `https://www.projeta3djf.com${location.pathname}`;
  }, [location.pathname]);

  return null;
};

// Página Principal
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
    </>
  );
};

// Página: Modelagem 3D & CAD
const ModelagemCADPage = () => {
  return (
    <div className="bg-[#070b14] pt-32 pb-24 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#f97316]" />
          <span className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase">
            Engenharia Digital
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          Modelagem 3D & <span className="text-[#f97316]">CAD Técnico</span>
        </h1>

        <p className="text-[#9ca3af] text-lg leading-relaxed mb-6">
          Desenvolvemos projetos mecânicos e modelagem digital de alta precisão
          técnica utilizando softwares líderes de engenharia como Autodesk
          Fusion 360 e SolidWorks. Transformamos esboços, ideias ou
          especificações técnicas em modelos tridimensionais prontos para
          fabricação ou simulação estrutural.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
          Softwares e Aplicações
        </h2>

        <p className="text-gray-400 mb-6">
          Trabalhamos de acordo com normas técnicas para garantir que os
          arquivos gerados (STEP, IGES, STL) funcionem perfeitamente em linhas
          de produção industriais, montagens complexas ou diretamente na
          impressão 3D.
        </p>
      </div>
    </div>
  );
};

// Página: Impressão 3D
const Impressao3DPage = () => {
  return (
    <div className="bg-[#070b14] pt-32 pb-24 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#f97316]" />
          <span className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase">
            Manufatura Aditiva
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          Impressão 3D <span className="text-[#f97316]">Personalizada</span>
        </h1>

        <p className="text-[#9ca3af] text-lg leading-relaxed mb-6">
          Somos especialistas em manufatura aditiva de alta performance na
          região de Juiz de Fora - MG. Trabalhamos com equipamentos industriais
          fechados de altíssima velocidade e precisão para garantir propriedades
          mecânicas excelentes em cada lote produzido.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
          Materiais Técnicos Disponíveis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
          <div className="p-4 bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/40">
            <strong className="text-[#f97316] block mb-1">ABS / ASA</strong>
            Peças mecânicas com alta resistência térmica e exposição ao sol
            (Raios UV).
          </div>

          <div className="p-4 bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/40">
            <strong className="text-[#f97316] block mb-1">PETG</strong>
            Excelente resistência química, flexibilidade ideal para encaixes
            sob pressão.
          </div>

          <div className="p-4 bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/40">
            <strong className="text-[#f97316] block mb-1">Nylon / PA-CF</strong>
            Polímeros com fibra de carbono para substituição definitiva de
            peças de metal.
          </div>

          <div className="p-4 bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/40">
            <strong className="text-[#f97316] block mb-1">TPU</strong>
            Componentes emborrachados, vedações, amortecedores e proteções
            flexíveis.
          </div>
        </div>
      </div>
    </div>
  );
};

// Página: Engenharia Reversa
const EngenhariaReversaPage = () => {
  return (
    <div className="bg-[#070b14] pt-32 pb-24 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#f97316]" />
          <span className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase">
            Soluções Industriais
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          Engenharia <span className="text-[#f97316]">Reversa</span>
        </h1>

        <p className="text-[#9ca3af] text-lg leading-relaxed mb-6">
          Sua empresa possui equipamentos ou maquinários parados por falta de
          componentes descontinuados ou importados? Nós resolvemos. Através de
          medições físicas rigorosas, reconstruímos geometricamente a peça
          original no ambiente virtual CAD, corrigindo falhas e desgastes do
          item quebrado.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
          Como Funciona o Processo
        </h2>

        <p className="text-[#6b7280] leading-relaxed">
          Analisamos a peça danificada, recriamos o modelo digital 3D milímetro
          por milímetro e fabricamos um novo componente com materiais adequados
          para o esforço real de trabalho, devolvendo a operação do seu
          maquinário com rapidez local.
        </p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <SEO />

      <div className="min-h-screen bg-[#070b14]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/servicos/modelagem-3d-cad"
            element={<ModelagemCADPage />}
          />

          <Route
            path="/servicos/impressao-3d-personalizada"
            element={<Impressao3DPage />}
          />

          <Route
            path="/servicos/engenharia-reversa"
            element={<EngenhariaReversaPage />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
```

