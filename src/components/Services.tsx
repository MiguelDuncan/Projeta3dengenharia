import { Box, Printer, Wrench, ScanLine, Settings, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: 'Modelagem 3D & CAD',
    description:
      'Projetos mecânicos e modelagem técnica para fabricação, prototipagem e engenharia.',
    highlights: ['Projetos CAD', 'SolidWorks', 'Engenharia'],
  },
  {
    icon: Printer,
    title: 'Impressão 3D',
    description:
      'Produção de peças funcionais, protótipos e componentes técnicos com impressão 3D.',
    highlights: ['Alta precisão', 'Peças técnicas', 'Protótipos'],
  },
  {
    icon: Wrench,
    title: 'Prototipagem',
    description:
      'Desenvolvimento rápido de protótipos para validação e testes de engenharia.',
    highlights: ['Testes', 'Validação', 'Projetos'],
  },
  {
    icon: ScanLine,
    title: 'Engenharia Reversa',
    description:
      'Reconstrução digital de peças e componentes a partir da peça original.',
    highlights: ['Reprodução', 'Digitalização', 'Precisão'],
  },
  {
    icon: Settings,
    title: 'Projetos Mecânicos',
    description:
      'Soluções completas em engenharia mecânica e desenvolvimento técnico.',
    highlights: ['Desenho técnico', 'Consultoria', 'Projetos'],
  },
  {
    icon: TrendingUp,
    title: 'Desenvolvimento',
    description:
      'Transformamos ideias em produtos funcionais com metodologia de engenharia.',
    highlights: ['Produto final', 'Iteração', 'Desenvolvimento'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[#070b14] py-24 relative overflow-hidden clear-both block">
      {/* Subtle grid */}
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
  </div>

  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
    Nossos Serviços de
    <span className="text-[#f97316] block">
      Engenharia e Prototipagem
    </span>
  </h2>

  <p className="text-[#b6b280] text-lg mt-6 max-w-3xl mx-auto">
    Desenvolvemos soluções em engenharia mecânica,
    modelagem CAD, impressão 3D e prototipagem
    para empresas, indústrias e projetos técnicos
    em Juiz de Fora e todo o Brasil.
  </p>
</div>
        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group relative bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)]"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f97316]/30 group-hover:border-[#f97316] transition-colors duration-300" />

                <div className="w-12 h-12 bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mb-5 group-hover:bg-[#f97316]/20 transition-colors duration-300">
                  <Icon size={22} className="text-[#f97316]" />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-5">{s.description}</p>

                <ul className="flex flex-col gap-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[#9ca3af] text-xs">
                      <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 border border-[#f97316]/20 bg-[#f97316]/5 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
                    {/* SEO Pages */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="/impressao-3d.html"
            className="bg-[#f97316] hover:bg-[#ea6910] text-white font-bold px-6 py-3 transition-colors duration-200"
          >
            Página de Impressão 3D
          </a>

          <a
            href="/modelagem-cad.html"
            className="bg-[#1a2540] hover:bg-[#24304f] text-white font-bold px-6 py-3 transition-colors duration-200"
          >
            Página de Modelagem CAD
          </a>

        </div>
            <p className="text-white font-bold text-lg">Precisão em Cada Detalhe.</p>
            <p className="text-[#9ca3af] text-sm">Tem um projeto? Envie uma foto ou ideia — analisamos e desenvolvemos.</p>
          </div>
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 bg-[#f97316] hover:bg-[#ea6910] text-white font-bold px-7 py-3 text-sm transition-colors duration-200 whitespace-nowrap"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}
