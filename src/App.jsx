import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 1. Importe o Footer aqui

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col justify-between">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer /> {/* 2. Renderize o Footer aqui no final */}
    </div>
  );
}

export default App;
