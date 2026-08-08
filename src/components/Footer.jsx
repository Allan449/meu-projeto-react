import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
        
        {/* Logo */}
        <div className="font-bold text-2xl text-emerald-400 tracking-wide">
          Vitalle
        </div>
        
        {/* Links Rápidos */}
        <div className="flex gap-6 flex-wrap justify-center text-sm font-medium">
          <a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a>
          <a href="#servicos" className="hover:text-emerald-400 transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-emerald-400 transition-colors">Contato</a>
        </div>
        
        {/* Linha Divisória */}
        <hr className="w-full border-slate-900 my-2" />
        
        {/* Direitos Autorais */}
        <p className="text-xs text-slate-500 leading-relaxed">
          &copy; 2026 Clínica Vitalle. Todos os direitos reservados. <br />
          Desenvolvido com React + Tailwind por <strong className="text-slate-300 font-semibold">Allan Jr.</strong> — ADS.
        </p>
        
      </div>
    </footer>
  );
}
