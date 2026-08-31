import {
  Box,
  Printer,
  Wrench,
  ScanLine,
  Settings,
  TrendingUp,
} from 'lucide-react';

import { Link } from 'react-router-dom';

const services = [
  {
    icon: Box,
    title: 'Modelagem 3D & CAD',
    description:
      'Desenvolvimento técnico de peças e componentes com precisão dimensional. Projetos funcionais preparados para fabricação, prototipagem e impressão 3D.',
    highlights: ['Projetos CAD', 'SolidWorks', 'Engenharia'],
    link: '/servicos/modelagem-3d-cad',
  },
  {
    icon: Printer,
    title: 'Impressão 3D',
    description:
      'Produção de peças funcionais, protótipos e componentes técnicos com impressão 3D e diferentes materiais para aplicações específicas.',
    highlights: ['Peças técnicas', 'Protótipos', 'Manufatura aditiva'],
    link: '/servicos/impressao-3d-personalizada',
  },
  {
    icon: Wrench,
    title: 'Prototipagem',
    description:
      'Desenvolvimento rápido de protótipos para validação, testes de engenharia e desenvolvimento de produtos.',
    highlights: ['Testes', 'Validação', 'Desenvolvimento'],
  },
  {
    icon: ScanLine,
    title: 'Engenharia Reversa',
    description:
      'Reconstrução digital de peças e componentes a partir da peça física original, criando modelos CAD para fabricação e reposição.',
    highlights: ['Reconstrução', 'Modelagem CAD', 'Precisão'],
    link: '/servicos/engenharia-reversa',
  },
  {
    icon: Settings,
    title: 'Projetos Mecânicos',
    description:
      'Soluções em engenharia mecânica e desenvolvimento técnico para peças, dispositivos, componentes e projetos personalizados.',
    highlights: ['Desenho técnico', 'Projetos', 'Soluções personalizadas'],
  },
  {
    icon: TrendingUp,
    title: 'Desenvolvimento',
    description:
      'Transformamos ideias em produtos funcionais utilizando modelagem 3D, prototipagem, fabricação e metodologia de engenharia.',
    highlights: ['Produto final', 'Iteração', 'Desenvolvimento'],
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-[#070b14] py-24 relative overflow-hidden clear-both block"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#4a90d9 1px, transparent 1px), linear-gradient(90deg, #4a90d9 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#f97316]" />

            <span className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase">
              Engenharia Mecânica • Modelagem CAD • Impressão 3D
            </span>

            <div className="w-8 h-0.5 bg-[#f97316]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Nossos Serviços de

            <span className="text-[#f97316] block">
              Engenharia e Prototipagem
            </span>
          </h2>

          <p className="text-[#b6b280] text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos soluções em engenharia mecânica,
            modelagem CAD, impressão 3D e prototipagem
            para empresas, indústrias e projetos técnicos
            em Juiz de Fora e todo o Brasil.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((s, i) => {
            const Icon = s.icon;

            const cardContent = (
              <div
                className="
                  group
                  relative
                  bg-[#0d1426]
                  border
                  border-[#1a2540]
                  hover:border-[#f97316]/50
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)]
                  h-full
                "
              >

                {/* Corner accent */}
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-8
                    h-8
                    border-t-2
                    border-r-2
                    border-[#f97316]/30
                    group-hover:border-[#f97316]
                    transition-colors
                    duration-300
                  "
                />

                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    bg-[#f97316]/10
                    border
                    border-[#f97316]/20
                    flex
                    items-center
                    justify-center
                    mb-5
                    group-hover:bg-[#f97316]/20
                    transition-colors
                    duration-300
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#f97316]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-[#6b7280] text-sm leading-relaxed mb-5">
                  {s.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">

                  {s.highlights.map((h) => (
                    <li
                      key={h}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[#9ca3af]
                        text-xs
                      "
                    >
                      <span
                        className="
                          w-1.5
                          h-1.5
                          bg-[#f97316]
                          rounded-full
                          flex-shrink-0
                        "
                      />

                      {h}
                    </li>
                  ))}

                </ul>

                {/* Internal link indicator */}
                {s.link && (
                  <div className="mt-6 text-[#f97316] text-xs font-bold uppercase tracking-wider">
                    Conhecer serviço →
                  </div>
                )}
              </div>
            );

            /*
             * SERVIÇOS COM PÁGINA PRÓPRIA
             *
             * Usamos Link do React Router para criar
             * links internos reais entre as páginas.
             */
            if (s.link) {
              return (
                <Link
                  key={i}
                  to={s.link}
                  className="block"
                  aria-label={`Conhecer o serviço de ${s.title}`}
                >
                  {cardContent}
                </Link>
              );
            }

            /*
             * SERVIÇOS SEM PÁGINA INDIVIDUAL
             */
            return (
              <div key={i}>
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-16
            border
            border-[#f97316]/20
            bg-[#f97316]/5
            px-8
            py-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <div>

            <p className="text-white font-bold text-lg">
              Precisão em Cada Detalhe.
            </p>

            <p className="text-[#9ca3af] text-sm mt-1 max-w-xl">
              Tem um projeto? Envie uma foto, desenho ou ideia.
              Analisamos a necessidade e desenvolvemos a solução adequada.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <Link
              to="/servicos/impressao-3d-personalizada"
              className="
                bg-[#f97316]
                hover:bg-[#ea6910]
                text-white
                font-bold
                px-5
                py-3
                text-sm
                transition-colors
                duration-200
              "
            >
              Impressão 3D
            </Link>

            <Link
              to="/servicos/modelagem-3d-cad"
              className="
                bg-[#1a2540]
                hover:bg-[#243252]
                text-white
                font-bold
                px-5
                py-3
                text-sm
                transition-colors
                duration-200
              "
            >
              Modelagem CAD
            </Link>

            <Link
              to="/servicos/engenharia-reversa"
              className="
                bg-[#1a2540]
                hover:bg-[#243252]
                text-white
                font-bold
                px-5
                py-3
                text-sm
                transition-colors
                duration-200
              "
            >
              Engenharia Reversa
            </Link>

          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">

          <button
            onClick={() =>
              document
                .querySelector('#contato')
                ?.scrollIntoView({
                  behavior: 'smooth',
                })
            }
            className="
              inline-flex
              items-center
              justify-center
              bg-[#f97316]
              hover:bg-[#ea6910]
              text-white
              font-bold
              px-8
              py-3
              text-sm
              transition-colors
              duration-200
            "
          >
            Solicitar Orçamento
          </button>

        </div>

      </div>
    </section>
  );
}
