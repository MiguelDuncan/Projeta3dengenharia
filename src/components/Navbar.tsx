import { useState } from 'react';
import { Menu, X, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-white font-black text-xl tracking-wider">
              <Box className="text-[#f97316]" size={24} />
              PROJETA<span className="text-[#f97316]">3D</span>JF
            </Link>
          </div>

          {/* Menu Computador */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#f97316] transition-colors font-medium text-sm">Início</Link>
            <Link to="/servicos/modelagem-3d-cad" className="text-gray-300 hover:text-[#f97316] transition-colors font-medium text-sm">Modelagem CAD</Link>
            <Link to="/servicos/impressao-3d-personalizada" className="text-gray-300 hover:text-[#f97316] transition-colors font-medium text-sm">Impressão 3D</Link>
            <Link to="/servicos/engenharia-reversa" className="text-gray-300 hover:text-[#f97316] transition-colors font-medium text-sm">Engenharia Reversa</Link>
            
            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#f97316] hover:bg-[#ea6910] text-white font-bold px-5 py-2.5 text-xs tracking-wider uppercase transition-colors"
            >
              Orçamento
            </button>
          </div>

          {/* Botão Celular */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Aberto Celular */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-gray-900 border-b border-gray-800">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-[#f97316] transition-colors font-medium">Início</Link>
          <Link to="/servicos/modelagem-3d-cad" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-[#f97316] transition-colors font-medium">Modelagem CAD</Link>
          <Link to="/servicos/impressao-3d-personalizada" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-[#f97316] transition-colors font-medium">Impressão 3D</Link>
          <Link to="/servicos/engenharia-reversa" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-[#f97316] transition-colors font-medium">Engenharia Reversa</Link>
          
          <button
            onClick={() => {
              setIsOpen(false);
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-[#f97316] hover:bg-[#ea6910] text-white font-bold py-3 text-sm transition-colors mt-2"
          >
            Solicitar Orçamento
          </button>
        </div>
      )}
    </nav>
  );
}
