import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#070b14]/95 backdrop-blur-sm shadow-[0_2px_24px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#inicio')}
          className="flex items-center gap-3 group"
        >
          <img
            src="/IMG_20260505_233015_021.webp"
            alt="Projeta3D Logo"
            className="w-10 h-10 object-contain hover:opacity-80 transition-opacity"
          />
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-lg tracking-wider">PROJETA<span className="text-[#f97316]">3D</span></span>
            <span className="text-[#6b7280] text-[10px] tracking-[0.2em] uppercase">Engenharia</span>
          </div>
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="text-[#d1d5db] hover:text-[#f97316] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f97316] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => handleNav('#contato')}
            className="bg-[#f97316] hover:bg-[#ea6910] text-white text-sm font-bold px-5 py-2 transition-colors duration-200"
          >
            Fazer Orçamento
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white hover:text-[#f97316] transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#070b14]/98 ${
          open ? 'max-h-80 border-t border-[#1a2540]' : 'max-h-0'
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="text-[#d1d5db] hover:text-[#f97316] text-sm font-medium tracking-wide text-left transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contato')}
            className="bg-[#f97316] hover:bg-[#ea6910] text-white text-sm font-bold px-5 py-2 mt-2 transition-colors"
          >
            Fazer Orçamento
          </button>
        </nav>
      </div>
    </header>
  );
}
