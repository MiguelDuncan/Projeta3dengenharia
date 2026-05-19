import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070b14]"
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#4a90d9 1px, transparent 1px), linear-gradient(90deg, #4a90d9 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow - orange */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Tech circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="30%" x2="30%" y2="30%" stroke="#f97316" strokeWidth="1" />
        <circle cx="30%" cy="30%" r="4" fill="#f97316" />
        <line x1="30%" y1="30%" x2="30%" y2="70%" stroke="#f97316" strokeWidth="1" />
        <circle cx="30%" cy="70%" r="4" fill="#f97316" />
        <line x1="70%" y1="20%" x2="100%" y2="20%" stroke="#f97316" strokeWidth="1" />
        <circle cx="70%" cy="20%" r="4" fill="#f97316" />
        <line x1="70%" y1="20%" x2="70%" y2="80%" stroke="#f97316" strokeWidth="1" />
        <circle cx="70%" cy="80%" r="4" fill="#f97316" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 border border-[#f97316]/40 text-[#f97316] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
          Juiz de Fora — MG
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Seu Projeto,{' '}
          <span className="text-[#f97316] block md:inline">Saindo do Papel</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 font-bold text-[#d1d5db]">
            com Impressão 3D de Alta Precisão
          </span>
        </h1>

        <p className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Da modelagem ao produto final — desenvolvemos peças mecânicas, protótipos funcionais
          e projetos de engenharia sob medida para sua necessidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#contato')}
            className="group flex items-center gap-3 bg-[#f97316] hover:bg-[#ea6910] text-white font-bold text-base px-8 py-4 transition-all duration-200 hover:shadow-[0_0_32px_rgba(249,115,22,0.5)]"
          >
            Fazer Orçamento
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollTo('#servicos')}
            className="flex items-center gap-3 border border-[#374151] hover:border-[#f97316] text-[#d1d5db] hover:text-[#f97316] font-medium text-base px-8 py-4 transition-all duration-200"
          >
            Ver Serviços
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px border border-[#1a2540] bg-[#1a2540] max-w-3xl mx-auto w-full overflow-hidden">
          {[
            { value: '200+', label: 'Projetos Entregues' },
            { value: '100%', label: 'Precisão Técnica' },
            { value: '7', label: 'Materiais Técnicos' },
          ].map((s) => (
            <div key={s.label} className="bg-[#0d1426] px-6 py-5 flex flex-col justify-center items-center min-w-0">
              <div className="text-[#f97316] font-black text-2xl md:text-3xl">{s.value}</div>
              <div className="text-[#6b7280] text-xs tracking-wide mt-1 whitespace-nowrap text-center">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#374151] hover:text-[#f97316] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
