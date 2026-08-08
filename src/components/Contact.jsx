import React, { useState } from 'react';

export default function Contact() {
  // Criando os estados para armazenar os valores dos inputs
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // Função disparada ao enviar o formulário
  const manipularEnvio = (event) => {
    event.preventDefault();
    
    // Simulação de comportamento de API (ADS puro)
    console.log("Dados capturados via State do React:", { nome, whatsapp });
    alert(`Obrigado pelo contato, ${nome}! Entraremos em contato no número ${whatsapp}.`);
    
    // Limpando os campos após o envio
    setNome('');
    setWhatsapp('');
  };

  return (
    <section id="contato" className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Solicite um Pré-Agendamento</h2>
        <p className="text-slate-600">Preencha os dados e nossa equipe entrará em contato em menos de 15 minutos.</p>
        
        <form onSubmit={manipularEnvio} className="mt-8 space-y-4 text-left bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Nome Completo</label>
            <input 
              type="text" 
              required 
              value={nome}
              onChange={(e) => setNome(e.target.value)} // Atualiza o estado ao digitar
              className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">WhatsApp</label>
            <input 
              type="tel" 
              required 
              placeholder="(11) 99999-9999"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)} // Atualiza o estado ao digitar
              className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
            />
          </div>
          <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-lg font-bold hover:bg-emerald-700 transition-all shadow-md cursor-pointer">
            Enviar e Falar com Atendente
          </button>
        </form>
      </div>
    </section>
  );
}
