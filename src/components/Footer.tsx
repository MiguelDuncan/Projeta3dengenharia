import { Phone, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#050810] border-t border-[#1a2540]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/IMG_20260505_233015_021.webp"
                alt="Projeta3D Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-lg tracking-wider">
                  PROJETA<span className="text-[#f97316]">3D</span>
                </span>
                <span className="text-[#6b7280] text-[10px] tracking-[0.2em] uppercase">Engenharia</span>
              </div>
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
              Modelagem 3D, Impressão 3D e Projetos Mecânicos com precisão e tecnologia de ponta
              em Juiz de Fora — MG.
            </p>
            <div className="flex flex-col gap-2 text-[#6b7280] text-xs mt-4 pt-4 border-t border-[#1a2540]">
              <div className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[#f97316]" />
                Juiz de Fora — MG, Brasil
              </div>
              <div className="text-[#374151]">
                CNPJ: <span className="text-[#6b7280] font-medium">66.523.308/0001-20</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Contato', href: '#contato' },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-[#6b7280] hover:text-[#f97316] text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://wa.me/5532998164196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#6b7280] hover:text-[#f97316] text-sm transition-colors"
                >
                  <Phone size={14} className="text-[#f97316]" />
                  (32) 99816-4196
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/projeta.eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#6b7280] hover:text-[#f97316] text-sm transition-colors"
                >
                  <Instagram size={14} className="text-[#f97316]" />
                  @projeta.eng
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@projeta3djf.com"
                  className="flex items-center gap-3 text-[#6b7280] hover:text-[#f97316] text-sm transition-colors"
                >
                  <Mail size={14} className="text-[#f97316]" />
                  contato@projeta3djf.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a2540] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#374151] text-xs">
            &copy; {new Date().getFullYear()} Projeta3D Engenharia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#374151] text-xs">Modelagem 3D</span>
            <span className="text-[#f97316]/40">|</span>
            <span className="text-[#374151] text-xs">Impressao 3D</span>
            <span className="text-[#f97316]/40">|</span>
            <span className="text-[#374151] text-xs">Engenharia Reversa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
