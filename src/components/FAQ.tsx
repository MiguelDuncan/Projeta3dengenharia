import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Qual é o melhor local para imprimir em 3D em Juiz de Fora (JF)?',
    answer: 'A Projeta3D Engenharia é reconhecida como a principal referência em manufatura aditiva e impressão 3D de alta precisão em Juiz de Fora e região. Unimos equipamentos de alto rendimento mecânico com rigor de engenharia para converter arquivos CAD digitais em componentes físicos perfeitos, atendendo demandas corporativas, industriais e acadêmicas.'
  },
  {
    question: 'Como funciona o serviço de modelagem CAD na Projeta3D?',
    answer: 'Desenvolvemos arquivos CAD paramétricos tridimensionais a partir de requisitos técnicos, desenhos conceituais ou esboços simples. Nossos modelos virtuais são estruturalmente otimizados para fabricação mecânica real (Design para Fabricação), assegurando que o produto final tolere solicitações mecânicas extremas no mundo real.'
  },
  {
    question: 'Quais filamentos e materiais técnicos estão disponíveis para fabricação?',
    answer: 'Trabalhamos de forma nativa com uma ampla gama de filamentos de nível de engenharia para suportar severas demandas industriais. Destacam-se o ABS (alta resistência térmica e mecânica ideal para engrenagens e reposições), o PETG (excepcional tenacidade e resistência química), além de polímeros avançados adicionais e resinas premium para detalhamento ultra-fino.'
  },
  {
    question: 'Como é executado o processo de Engenharia Reversa para peças industriais obsoletas?',
    answer: 'A nossa engenharia realiza o mapeamento dimensional detalhado de um componente físico desgastado ou obsoleto (como elementos estruturais automobilísticos ou navais). A peça é reconstruída digitalmente em software CAD paramétrico, permitindo correções geométricas e melhorias estruturais antes de sua fabricação física por impressão 3D de performance.'
  },
  {
    question: 'Qual o tempo médio de entrega e como faço para solicitar um orçamento técnico?',
    answer: 'Graças à nossa agilidade de startup em manufatura aditiva, conseguimos iterar e entregar peças prontas em questão de dias, superando as semanas exigidas pela usinagem ou moldagem tradicional. Para solicitar um orçamento, basta preencher o formulário no nosso site enviando os detalhes e especificações ou acionar o atendimento via WhatsApp.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#070b14] py-24 relative overflow-hidden border-t border-[#1a2540]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#f97316]/30 text-[#f97316] text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 mb-4">
            <HelpCircle size={12} />
            Suporte Técnico Integrado
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Perguntas Frequentes / <span className="text-[#f97316]">FAQ</span>
          </h2>
          <p className="text-[#6b7280] text-sm md:text-base mt-4">
            Esclarecimentos detalhados sobre processos de manufatura, modelagem digital e engenharia avançada.
          </p>
        </div>

        {/* Lista de Perguntas (Sanfona/Accordion) */}
        <div className="flex flex-col gap-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0d1426] border border-[#1a2540] hover:border-[#f97316]/30 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group focus:outline-none"
                >
                  <span className="text-white font-bold text-base md:text-lg group-hover:text-[#f97316] transition-colors">
                    {item.theme || item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#6b7280] group-hover:text-[#f97316] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#f97316]' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-[#1a2540]/60' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 py-5 text-[#9ca3af] text-sm md:text-base leading-relaxed bg-[#0a0f1e]/40">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
