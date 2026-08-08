import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-16 pb-20 md:pt-28 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
      
      {/* Bloco de Texto */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <span className="inline-block bg-emerald-50 text-emerald-700 font-semibold px-4 py-1.5 rounded-full text-sm">
          Cuidado Médico Especializado
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Sua saúde em primeiro lugar, com atendimento <span className="text-emerald-600">humanizado</span>.
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
          Agende sua consulta hoje mesmo com especialistas altamente qualificados e tecnologia médica de ponta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
          <a 
            href="#contato" 
            className="bg-emerald-600 text-white text-center px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
          >
            Agendar Consulta
          </a>
        </div>
      </div>

      {/* Bloco da Imagem com URL pública estável */}
      <div className="flex-1 w-full max-w-md md:max-w-none">
        <img 
          src="images/medico.jpg" 
          alt="Médica sorrindo no consultório" 
          className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3]"
        />
      </div>

    </section>
  );
}
