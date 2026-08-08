import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-emerald-600">
          <span>Vitalle</span>
        </div>
        
        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#inicio" className="text-slate-600 hover:text-emerald-600 transition-colors">Início</a>
          <a href="#servicos" className="text-slate-600 hover:text-emerald-600 transition-colors">Serviços</a>
          <a href="#contato" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100">
            Agendar Consulta
          </a>
        </nav>
        
      </div>
    </header>
  );
}
