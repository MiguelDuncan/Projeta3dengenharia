import { MapPin, Shield, Zap, Award } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Tecnologia de Ponta',
    text: 'Equipamentos de alta precisão e materiais técnicos para resultados superiores em cada projeto.',
  },
  {
    icon: Shield,
    title: 'Engenharia Real',
    text: 'Cada projeto passa por análise técnica rigorosa garantindo peças funcionais e duráveis.',
  },
  {
    icon: Award,
    title: 'Qualidade Certificada',
    text: 'Processos controlados e controle dimensional em cada peça entregue ao cliente.',
  },
  {
    icon: MapPin,
    title: 'Juiz de Fora — MG',
    text: 'Atendemos clientes em toda a região com entregas rápidas e suporte técnico presencial.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#0a0f1e] py-24 relative overflow-hidden">
      {/* Orange side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#f97316]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase">Quem somos</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Engenharia que{' '}
              <span className="text-[#f97316]">Transforma</span>{' '}
              Ideias em Realidade
            </h2>

            <p className="text-[#9ca3af] text-lg leading-relaxed mb-6">
              A <span className="text-white font-semibold">Projeta3D Engenharia</span> é especializada em
              modelagem 3D, impressão 3D e projetos mecânicos sob medida em Juiz de Fora. Unimos tecnologia
              de fabricação aditiva com expertise em engenharia para entregar soluções reais — do conceito
              à peça funcional.
            </p>

            <p className="text-[#6b7280] text-base leading-relaxed mb-10">
              Seja para recriar uma peça quebrada que não existe mais no mercado, desenvolver um protótipo
              funcional ou executar um projeto mecânico completo — trabalhamos com precisão inigualável em cada detalhe
              e comprometimento total com o resultado.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Modelagem 3D', 'Impressão 3D', 'Engenharia Reversa', 'Projetos Mecânicos', 'Prototipagem'].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#1a2540] text-[#9ca3af] text-xs font-medium px-3 py-1.5 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-[#0d1426] border border-[#1a2540] p-6 hover:border-[#f97316]/40 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-[#f97316]/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#f97316]" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">{p.title}</h4>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process strip */}
        <div className="mt-20 border-t border-[#1a2540] pt-16">
          <p className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase mb-8 text-center">
            Do Conceito à Realidade
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Briefing', 'Modelagem 3D', 'Simulação', 'Impressão', 'Entrega'].map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 border-2 border-[#f97316]/40 flex items-center justify-center text-[#f97316] font-black text-sm">
                  {i + 1}
                </div>
                <span className="text-[#9ca3af] text-xs font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
