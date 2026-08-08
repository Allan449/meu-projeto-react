import React from 'react';

export default function Services() {
  // Dados dos cards estruturados em um array de objetos
  const listaServicos = [
    { id: 1, icone: "🩺", titulo: "Clínica Geral", desc: "Atendimento preventivo, check-ups completos e acompanhamento contínuo da sua saúde." },
    { id: 2, icone: "❤️", titulo: "Cardiologia", desc: "Avaliação da saúde do coração, exames preventivos e cuidados avançados." },
    { id: 3, icone: "👶", titulo: "Pediatria", desc: "Acompanhamento especializado do crescimento e desenvolvimento infantil." }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="bg-emerald-50 text-emerald-700 font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-4">
          Nossas Especialidades
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Serviços Médicos Disponíveis</h2>
        
        {/* Grid Responsivo nativo do Tailwind */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listaServicos.map((servico) => (
            <div 
              key={servico.id} 
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-left transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:border-emerald-500 hover:shadow-xl group cursor-pointer"
            >
              <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold mb-6 transition-all group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                {servico.icone}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{servico.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{servico.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
