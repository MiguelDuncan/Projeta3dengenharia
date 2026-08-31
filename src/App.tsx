import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom';
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
    const seoData: Record<
      string,
      { title: string; description: string }
    > = {
      '/': {
        title:
          'Projeta3D Engenharia | Modelagem CAD e Impressão 3D em Juiz de Fora',
        description:
          'Projeta3D Engenharia: modelagem 3D e CAD, impressão 3D, prototipagem e engenharia reversa em Juiz de Fora - MG. Soluções técnicas para empresas e projetos mecânicos.',
      },

      '/servicos/modelagem-3d-cad': {
        title:
          'Modelagem 3D e CAD em Juiz de Fora | Projeta3D Engenharia',
        description:
          'Modelagem 3D e CAD técnico em Juiz de Fora - MG para peças, projetos mecânicos, protótipos e fabricação. Desenvolvimento de modelos precisos para engenharia.',
      },

      '/servicos/impressao-3d-personalizada': {
        title:
          'Impressão 3D em Juiz de Fora | Peças Técnicas e Protótipos',
        description:
          'Impressão 3D em Juiz de Fora - MG para peças técnicas, protótipos funcionais e componentes mecânicos. Diversos materiais para diferentes aplicações.',
      },

      '/servicos/engenharia-reversa': {
        title:
          'Engenharia Reversa em Juiz de Fora | Projeta3D Engenharia',
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

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-8 h-0.5 bg-[#f97316]" />
    <span className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase">
      {children}
    </span>
  </div>
);

const ServiceCard = ({
  title,
  description,
  to,
}: {
  title: string;
  description: string;
  to: string;
}) => (
  <Link
    to={to}
    className="group p-6 bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/50 transition-all duration-300"
  >
    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#f97316] transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    <span className="inline-block mt-5 text-[#f97316] text-xs font-bold uppercase tracking-wider">
      Conhecer serviço →
    </span>
  </Link>
);

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
    <div className="bg-[#070b14] text-white min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        <section className="max-w-4xl">
          <SectionLabel>Engenharia Digital</SectionLabel>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-7">
            Modelagem 3D e{' '}
            <span className="text-[#f97316]">CAD Técnico</span>
            <br />
            em Juiz de Fora
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            Desenvolvemos modelos tridimensionais e projetos CAD para transformar
            ideias, desenhos, peças físicas e especificações técnicas em soluções
            prontas para fabricação, prototipagem, simulação ou impressão 3D.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-3xl mt-5">
            A Projeta3D Engenharia trabalha com modelagem 3D para diferentes
            necessidades de engenharia e desenvolvimento de produtos. Cada modelo
            é construído considerando dimensões, encaixes, tolerâncias, geometria
            e finalidade de fabricação.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/#contato"
              className="px-6 py-3 bg-[#f97316] text-white font-bold text-sm hover:bg-[#ea580c] transition-colors"
            >
              Solicitar orçamento
            </a>

            <a
              href="/#projetos"
              className="px-6 py-3 border border-[#334155] text-white font-bold text-sm hover:border-[#f97316] transition-colors"
            >
              Ver projetos
            </a>
          </div>
        </section>

        <section className="mt-20">
          <SectionLabel>O que desenvolvemos</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-black mb-10">
            Modelagem pensada para a aplicação real
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Peças mecânicas',
                text: 'Modelagem de componentes, suportes, carcaças, dispositivos, peças de reposição e elementos utilizados em conjuntos mecânicos.',
              },
              {
                title: 'Projetos para fabricação',
                text: 'Modelos preparados considerando o processo de fabricação e as características necessárias para produzir a peça corretamente.',
              },
              {
                title: 'Protótipos e produtos',
                text: 'Desenvolvimento de modelos 3D para validar conceitos, testar dimensões, avaliar encaixes e preparar protótipos funcionais.',
              },
              {
                title: 'Modelagem a partir de desenho',
                text: 'Transformação de desenhos, medidas e especificações em modelos tridimensionais organizados para utilização em CAD.',
              },
              {
                title: 'Modelagem para impressão 3D',
                text: 'Criação e adaptação de geometrias para fabricação por manufatura aditiva, considerando orientação, encaixes e características da peça.',
              },
              {
                title: 'Projetos personalizados',
                text: 'Desenvolvimento de soluções sob medida para necessidades específicas de empresas, profissionais, estudantes e projetos de engenharia.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/40 transition-colors"
              >
                <div className="w-2 h-2 bg-[#f97316] mb-5" />
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel>Ferramentas</SectionLabel>

            <h2 className="text-3xl font-black mb-5">
              Modelagem com ferramentas de engenharia
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Utilizamos ambientes CAD voltados ao desenvolvimento de peças e
              projetos mecânicos, permitindo trabalhar desde geometrias simples
              até componentes com maior complexidade.
            </p>

            <div className="space-y-3">
              {[
                'Autodesk Fusion 360',
                'SolidWorks',
                'Arquivos STEP e IGES',
                'Arquivos STL para impressão 3D',
                'Modelos preparados para fabricação',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-[#0d1426] border border-[#1a2540]"
                >
                  <span className="text-[#f97316]">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Aplicações</SectionLabel>

            <h2 className="text-3xl font-black mb-5">
              Onde a modelagem 3D pode ser aplicada
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              O projeto CAD pode ser utilizado como base para diferentes etapas
              de desenvolvimento, desde a concepção inicial até a fabricação do
              componente.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Peças industriais',
                'Dispositivos mecânicos',
                'Suportes e componentes',
                'Prototipagem',
                'Impressão 3D',
                'Usinagem',
                'Desenvolvimento de produtos',
                'Engenharia reversa',
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-[#0d1426] text-gray-300 text-sm border border-[#1a2540]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Processo</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-black mb-10">
            Como funciona o desenvolvimento
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              ['01', 'Briefing', 'Entendemos a necessidade, aplicação e requisitos da peça ou projeto.'],
              ['02', 'Modelagem', 'Construímos a geometria 3D considerando as medidas e especificações fornecidas.'],
              ['03', 'Validação', 'Revisamos dimensões, encaixes e características importantes para a aplicação.'],
              ['04', 'Entrega', 'Entregamos os arquivos adequados ao objetivo definido para o projeto.'],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="p-6 border border-[#1a2540] bg-[#0a1020]"
              >
                <span className="text-[#f97316] text-sm font-black">
                  {number}
                </span>
                <h3 className="font-bold text-lg mt-4 mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Outros serviços</SectionLabel>

          <div className="grid md:grid-cols-2 gap-5">
            <ServiceCard
              title="Impressão 3D Personalizada"
              description="Transforme o modelo digital em uma peça física utilizando manufatura aditiva e materiais adequados à aplicação."
              to="/servicos/impressao-3d-personalizada"
            />

            <ServiceCard
              title="Engenharia Reversa"
              description="Reconstruímos peças físicas em modelos CAD para fabricação, reposição e desenvolvimento de novos componentes."
              to="/servicos/engenharia-reversa"
            />
          </div>
        </section>

        <section className="mt-20 p-8 md:p-12 bg-[#0d1426] border border-[#f97316]/30">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.2em]">
            Precisa de um projeto?
          </span>

          <h2 className="text-3xl font-black mt-4 mb-4">
            Transforme sua ideia em um modelo 3D
          </h2>

          <p className="text-gray-400 max-w-2xl leading-relaxed mb-7">
            Envie suas medidas, desenhos, imagens ou explique o que você precisa.
            Avaliamos a melhor forma de desenvolver o projeto e preparar o modelo
            para a aplicação desejada.
          </p>

          <a
            href="/#contato"
            className="inline-block px-7 py-3 bg-[#f97316] font-bold text-sm hover:bg-[#ea580c] transition-colors"
          >
            Falar com a Projeta3D
          </a>
        </section>
      </div>
    </div>
  );
};

// Página: Impressão 3D
const Impressao3DPage = () => {
  return (
    <div className="bg-[#070b14] text-white min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        <section className="max-w-4xl">
          <SectionLabel>Manufatura Aditiva</SectionLabel>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-7">
            Impressão 3D{' '}
            <span className="text-[#f97316]">em Juiz de Fora</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            Produzimos peças técnicas, protótipos e componentes personalizados
            por impressão 3D, utilizando diferentes materiais de acordo com a
            necessidade de cada projeto.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-3xl mt-5">
            A impressão 3D permite transformar modelos digitais em peças físicas
            de forma rápida e flexível. Na Projeta3D Engenharia, o processo pode
            começar a partir de um arquivo 3D pronto ou através do desenvolvimento
            do modelo CAD necessário para fabricar a peça.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/#contato"
              className="px-6 py-3 bg-[#f97316] text-white font-bold text-sm hover:bg-[#ea580c] transition-colors"
            >
              Solicitar orçamento
            </a>

            <Link
              to="/servicos/modelagem-3d-cad"
              className="px-6 py-3 border border-[#334155] text-white font-bold text-sm hover:border-[#f97316] transition-colors"
            >
              Precisa de modelagem?
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <SectionLabel>Materiais</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Materiais para diferentes aplicações
          </h2>

          <p className="text-gray-400 max-w-3xl leading-relaxed mb-10">
            A escolha do material influencia diretamente resistência, flexibilidade,
            temperatura de trabalho, acabamento e durabilidade. Por isso, o material
            deve ser escolhido de acordo com a função real da peça.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'ABS',
                text: 'Material utilizado em peças técnicas e componentes que precisam combinar resistência mecânica e resistência térmica.',
              },
              {
                title: 'ASA',
                text: 'Indicado para aplicações que exigem maior resistência à exposição ambiental e aos raios UV.',
              },
              {
                title: 'PETG',
                text: 'Alternativa versátil para peças que precisam de boa resistência mecânica, química e certa flexibilidade.',
              },
              {
                title: 'Nylon / PA-CF',
                text: 'Materiais de maior desempenho para componentes que exigem resistência mecânica e rigidez superiores.',
              },
              {
                title: 'TPU',
                text: 'Material flexível para componentes que precisam absorver impactos, deformar ou atuar como proteção.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/40 transition-colors"
              >
                <h3 className="text-xl font-bold text-[#f97316] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Aplicações</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-black mb-10">
            O que podemos produzir
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Protótipos funcionais',
              'Peças mecânicas',
              'Peças de reposição',
              'Suportes',
              'Carcaças',
              'Dispositivos',
              'Componentes personalizados',
              'Modelos para validação',
              'Gabaritos',
              'Ferramentas auxiliares',
              'Peças para projetos',
              'Componentes para testes',
            ].map((item) => (
              <div
                key={item}
                className="p-5 bg-[#0d1426] border border-[#1a2540] text-gray-300 text-sm"
              >
                <span className="text-[#f97316] mr-2">+</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel>Por que utilizar impressão 3D?</SectionLabel>

            <h2 className="text-3xl font-black mb-6">
              Mais agilidade no desenvolvimento
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              A manufatura aditiva permite fabricar geometrias personalizadas sem
              a necessidade de ferramentas específicas para cada peça. Isso torna
              a tecnologia especialmente interessante para prototipagem,
              desenvolvimento de produtos, pequenas séries e peças sob demanda.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Quando integrada à modelagem CAD, a impressão 3D também permite
              criar um ciclo rápido de desenvolvimento: projetar, fabricar,
              testar, corrigir e fabricar novamente.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ['01', 'Desenvolvimento rápido', 'Reduza o tempo entre a ideia e o primeiro protótipo físico.'],
              ['02', 'Personalização', 'Produza peças específicas sem depender de grandes lotes.'],
              ['03', 'Iteração', 'Faça alterações no modelo e produza novas versões rapidamente.'],
              ['04', 'Integração CAD', 'Conecte o desenvolvimento digital diretamente à fabricação.'],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="flex gap-5 p-5 bg-[#0d1426] border border-[#1a2540]"
              >
                <span className="text-[#f97316] font-black">{number}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Processo de produção</SectionLabel>

          <h2 className="text-3xl font-black mb-10">
            Da ideia à peça física
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              ['01', 'Análise', 'Entendemos a aplicação, dimensões e requisitos da peça.'],
              ['02', 'Modelo 3D', 'Validamos o arquivo fornecido ou desenvolvemos a modelagem necessária.'],
              ['03', 'Preparação', 'Definimos material e parâmetros adequados à fabricação.'],
              ['04', 'Impressão', 'Produzimos a peça e realizamos a inspeção final.'],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="p-6 border border-[#1a2540] bg-[#0a1020]"
              >
                <span className="text-[#f97316] text-sm font-black">
                  {number}
                </span>
                <h3 className="font-bold text-lg mt-4 mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Serviços relacionados</SectionLabel>

          <div className="grid md:grid-cols-2 gap-5">
            <ServiceCard
              title="Modelagem 3D & CAD"
              description="Não possui o arquivo 3D? Desenvolvemos o modelo CAD da peça antes da fabricação."
              to="/servicos/modelagem-3d-cad"
            />

            <ServiceCard
              title="Engenharia Reversa"
              description="Possui apenas a peça física? Podemos reconstruir sua geometria e transformá-la em um modelo digital."
              to="/servicos/engenharia-reversa"
            />
          </div>
        </section>

        <section className="mt-20 p-8 md:p-12 bg-[#0d1426] border border-[#f97316]/30">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.2em]">
            Impressão 3D sob demanda
          </span>

          <h2 className="text-3xl font-black mt-4 mb-4">
            Tem uma peça para fabricar?
          </h2>

          <p className="text-gray-400 max-w-2xl leading-relaxed mb-7">
            Envie o arquivo 3D, desenho, medidas ou imagens da peça. Avaliamos
            a fabricação e indicamos o material mais adequado para sua aplicação.
          </p>

          <a
            href="/#contato"
            className="inline-block px-7 py-3 bg-[#f97316] font-bold text-sm hover:bg-[#ea580c] transition-colors"
          >
            Solicitar orçamento
          </a>
        </section>
      </div>
    </div>
  );
};

// Página: Engenharia Reversa
const EngenhariaReversaPage = () => {
  return (
    <div className="bg-[#070b14] text-white min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        <section className="max-w-4xl">
          <SectionLabel>Soluções Industriais</SectionLabel>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-7">
            Engenharia <span className="text-[#f97316]">Reversa</span>
            <br />
            em Juiz de Fora
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            Transformamos peças físicas em modelos digitais para fabricação,
            reposição, adaptação e desenvolvimento de novos componentes.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-3xl mt-5">
            A engenharia reversa é uma solução para situações em que o modelo
            original, desenho técnico ou arquivo CAD não está disponível. A partir
            da análise e medição da peça existente, reconstruímos sua geometria
            em um ambiente de modelagem 3D.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/#contato"
              className="px-6 py-3 bg-[#f97316] text-white font-bold text-sm hover:bg-[#ea580c] transition-colors"
            >
              Solicitar avaliação
            </a>

            <Link
              to="/servicos/impressao-3d-personalizada"
              className="px-6 py-3 border border-[#334155] text-white font-bold text-sm hover:border-[#f97316] transition-colors"
            >
              Ver impressão 3D
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <SectionLabel>Quando utilizar</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-black mb-10">
            Uma solução para peças sem documentação
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Peças descontinuadas',
                text: 'Reconstrução de componentes que não são mais fabricados ou encontrados facilmente no mercado.',
              },
              {
                title: 'Componentes danificados',
                text: 'Utilização de uma peça existente como referência para reconstruir sua geometria e desenvolver uma substituta.',
              },
              {
                title: 'Peças sem desenho',
                text: 'Criação do modelo CAD quando não existe documentação técnica disponível para o componente.',
              },
              {
                title: 'Adaptação de componentes',
                text: 'Desenvolvimento de alterações geométricas para adaptar uma peça a uma nova aplicação ou conjunto.',
              },
              {
                title: 'Reposição',
                text: 'Reconstrução digital para viabilizar a fabricação de componentes de reposição sob demanda.',
              },
              {
                title: 'Digitalização de projetos antigos',
                text: 'Transformação de componentes físicos em documentação digital para facilitar futuras alterações e fabricação.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/40 transition-colors"
              >
                <div className="w-2 h-2 bg-[#f97316] mb-5" />
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Processo de engenharia reversa</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-black mb-10">
            Da peça física ao modelo CAD
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              ['01', 'Análise', 'Avaliamos a peça, sua aplicação e suas características.'],
              ['02', 'Medição', 'Coletamos as dimensões necessárias para reconstruir a geometria.'],
              ['03', 'Modelagem', 'Criamos o modelo tridimensional em ambiente CAD.'],
              ['04', 'Validação', 'Conferimos dimensões e características importantes da peça.'],
              ['05', 'Fabricação', 'O modelo pode ser utilizado para impressão 3D ou outro processo produtivo.'],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="p-5 border border-[#1a2540] bg-[#0a1020]"
              >
                <span className="text-[#f97316] text-sm font-black">
                  {number}
                </span>
                <h3 className="font-bold mt-4 mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel>O que pode ser entregue</SectionLabel>

            <h2 className="text-3xl font-black mb-5">
              Documentação digital para novas etapas
            </h2>

            <p className="text-gray-400 leading-relaxed mb-7">
              Depois da reconstrução, o modelo digital pode servir como base para
              diferentes processos de fabricação e desenvolvimento. Isso também
              facilita futuras alterações no projeto.
            </p>

            <div className="space-y-3">
              {[
                'Modelo 3D da peça',
                'Arquivo STL para impressão 3D',
                'Arquivo STEP para utilização em CAD',
                'Modelo para fabricação',
                'Base para novos projetos',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-[#0d1426] border border-[#1a2540]"
                >
                  <span className="text-[#f97316]">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Aplicações</SectionLabel>

            <h2 className="text-3xl font-black mb-5">
              Engenharia reversa para diferentes necessidades
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              O processo pode ser utilizado tanto em projetos industriais quanto
              no desenvolvimento de protótipos, peças personalizadas e componentes
              de reposição.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Máquinas',
                'Equipamentos',
                'Peças mecânicas',
                'Componentes industriais',
                'Protótipos',
                'Peças de reposição',
                'Dispositivos',
                'Projetos personalizados',
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-[#0d1426] text-gray-300 text-sm border border-[#1a2540]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Da engenharia à fabricação</SectionLabel>

          <h2 className="text-3xl font-black mb-8">
            Engenharia reversa + modelagem + impressão 3D
          </h2>

          <div className="p-8 bg-[#0d1426] border border-[#1a2540]">
            <p className="text-gray-400 leading-relaxed max-w-4xl">
              Uma das principais vantagens do processo é integrar diferentes
              etapas em um único fluxo de desenvolvimento. A peça física pode ser
              analisada, transformada em um modelo CAD e posteriormente fabricada
              por impressão 3D. Dessa forma, a engenharia reversa deixa de ser
              apenas uma reconstrução geométrica e passa a fazer parte de um
              processo completo de desenvolvimento e fabricação.
            </p>
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Serviços relacionados</SectionLabel>

          <div className="grid md:grid-cols-2 gap-5">
            <ServiceCard
              title="Modelagem 3D & CAD"
              description="Desenvolvimento e detalhamento de modelos tridimensionais para engenharia e fabricação."
              to="/servicos/modelagem-3d-cad"
            />

            <ServiceCard
              title="Impressão 3D Personalizada"
              description="Fabricação física de peças, protótipos e componentes a partir do modelo digital."
              to="/servicos/impressao-3d-personalizada"
            />
          </div>
        </section>

        <section className="mt-20 p-8 md:p-12 bg-[#0d1426] border border-[#f97316]/30">
          <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.2em]">
            Possui uma peça física?
          </span>

          <h2 className="text-3xl font-black mt-4 mb-4">
            Podemos transformar sua peça em um modelo 3D
          </h2>

          <p className="text-gray-400 max-w-2xl leading-relaxed mb-7">
            Entre em contato e explique o que você precisa. Fotos, medidas e
            informações sobre a aplicação da peça já podem ajudar na avaliação
            inicial do projeto.
          </p>

          <a
            href="/#contato"
            className="inline-block px-7 py-3 bg-[#f97316] font-bold text-sm hover:bg-[#ea580c] transition-colors"
          >
            Solicitar avaliação
          </a>
        </section>

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
