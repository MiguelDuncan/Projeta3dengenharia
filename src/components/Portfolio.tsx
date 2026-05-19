import { useState } from 'react';
import { Box } from 'lucide-react';

interface ProjectStage {
  label: string;
  image: string;
}

interface TechnicalProject {
  title: string;
  category: string;
  badge: string;
  description: string;
  material: string;
  specs: string[];
  stages: ProjectStage[];
}

const customProjects: TechnicalProject[] = [
  {
    title: 'Rotor de Turbina Industrial',
    category: 'Engenharia Reversa & Manufatura',
    badge: 'Alta Complexidade',
    description: 'Reconstrução geométrica completa de um rotor de turbina danificado. O componente foi mapeado, modelado em software CAD paramétrico com precisão milimétrica e fabricado em filamento técnico de alta resistência.',
    material: 'ABS Técnico de Alta Performance',
    specs: ['Reconstrução Paramétrica', 'Resistência Térmica', 'Balanceamento Dinâmico'],
    stages: [
      { label: 'Peça Original', image: '/turbina-original.jpg' },
      { label: 'Modelo CAD 3D', image: '/turbina-cad.jpg' },
      { label: 'Impressão 3D', image: '/turbina-impressa.jpg' }
    ]
  },
  {
    title: 'Componente de Encaixe Técnico',
    category: 'Desenvolvimento de Produto',
    badge: 'Precisão Dimensional',
    description: 'Modelagem e fabricação de elemento de acoplamento mecânico. Foco total nas tolerâncias de encaixe e na resistência do material para suportar cliques e pressões repetidas de montagem.',
    material: 'PETG Premium (Alta Tenacidade)',
    specs: ['Tolerância Zero', 'Resistência a Impactos', 'Validação de Encaixe'],
    stages: [
      { label: 'Peça Original', image: '/encaixe-original.jpg' },
      { label: 'Modelo CAD 3D', image: '/encaixe-cad.jpg' },
      { label: 'Impressão 3D', image: '/encaixe-impresso.jpg' }
    ]
  },
  {
    title: 'Botão de Painel de Aeronave',
    category: 'Prototipagem de Alta Resolução',
    badge: 'Setor Aeronáutico',
    description: 'Manufatura aditiva focada na fidelidade estética e textura para componentes de cockpit. Superfície com acabamento impecável para testes ergonômicos e validação visual de comandos.',
    material: 'ABS premium, resistente a altas temperaturas, pressão e intempéries',
    specs: ['Acabamento Estético', 'Fidelidade Ergonômica', 'Resolução impecavél'],
    stages: [
      { label: 'Produto Final Impresso', image: '/botao-impresso.jpg' }
    ]
  }
  video: '/encaixe-video.mp4'
];

export default function Portfolio() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageKey: string) => {
    setImageErrors((prev) => ({ ...prev, [imageKey]: true }));
  };

  return (
    <section id="projetos" className="bg-[#0a0f1e] py-24 relative overflow-hidden border-t border-[#1a2540]">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#f97316]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#f97316]" />
            <span className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase">Nosso Portfólio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Engenharia Tangível e <span className="text-[#f97316]">Casos de Sucesso</span>
          </h2>
          <p className="text-[#6b7280] text-lg mt-4 max-w-xl">
            Veja o fluxo completo de transformação: do componente físico original ao arquivo digital e peça final.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {customProjects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/30 transition-all duration-300 p-6 md:p-8 flex flex-col lg:flex-row gap-8 relative group"
            >
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#f97316]/20 group-hover:border-[#f97316] transition-colors duration-300" />

              <div className="lg:w-1/3 flex flex-col justify-between">
                <div>
                  <span className="text-[#f97316] text-xs font-semibold tracking-wider block mb-2 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-white font-black text-2xl mb-4 group-hover:text-[#f97316] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-[#1a2540] pt-4">
                  <div className="text-[11px] font-mono text-[#4b5563] uppercase tracking-wider mb-2.5">
                    Material Utilizado: <span className="text-[#9ca3af]">{project.material}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.specs.map((spec) => (
                      <span
                        key={spec}
                        className="bg-[#070b14] border border-[#1a2540] text-[#9ca3af] text-[10px] px-2.5 py-1 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 flex flex-col justify-center gap-4">
                <div className={`grid gap-4 ${project.stages.length === 1 ? 'grid-cols-1 max-w-md mx-auto w-full' : 'grid-cols-1 sm:grid-cols-3'}`}>
                  {project.stages.map((stage) => {
                    const imageKey = `${project.title}-${stage.label}`;
                    const hasError = imageErrors[imageKey];

                    return (
                      <div key={stage.label} className="flex flex-col bg-[#070b14] border border-[#1a2540] p-2 group/stage">
                        <div className="relative aspect-square w-full overflow-hidden bg-[#0a0f1e] flex items-center justify-center border border-[#1a2540]/60">
                          {hasError ? (
                            <div className="flex flex-col items-center justify-center text-center p-4 text-[#374151]">
                              <Box size={32} className="mb-1 stroke-1" />
                              <span className="text-[9px] font-mono tracking-wider">FOTO_PENDENTE</span>
                            </div>
                          ) : (
                            <img
                              src={stage.image}
                              alt={`${project.title} - ${stage.label}`}
                              onError={() => handleImageError(imageKey)}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/stage:scale-105"
                            />
                          )}
                        </div>
                        <div className="text-center mt-2 py-1 bg-[#0d1426] border border-[#1a2540]">
                          <span className="text-white font-mono text-xs font-bold">{stage.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Reprodutor de Vídeo dinâmico para a Peça de Encaixe */}
                {'video' in project && project.video && (
                  <div className="flex flex-col bg-[#070b14] border border-[#1a2540] p-2 w-full mt-2">
                    <div className="relative aspect-video w-full overflow-hidden bg-[#0a0f1e] border border-[#1a2540]/60">
                      <video 
                        src={project.video} 
                        controls 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center mt-2 py-1 bg-[#0d1426] border border-[#1a2540]">
                      <span className="text-white font-mono text-xs font-bold">Demonstração em Vídeo (Encaixe / Funcionamento)</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
