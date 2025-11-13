import React from "react";

const Highlight: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>


      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

        <img
          className="w-64 md:w-80 rounded-2xl shadow-lg object-cover"
          src="./assets/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
          alt="Capa do filme Como treinar o seu dragão"
        />

        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Como treinar o seu dragão
          </h2>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
            <span className="px-2 py-1 bg-white/10 rounded-md">Fantasia</span>
            <span className="px-2 py-1 bg-white/10 rounded-md">Família</span>
            <span className="px-2 py-1 bg-white/10 rounded-md">
              Ação &amp; Aventura
            </span>
            <span className="ml-2 text-gray-400">2h 5m</span>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">Sinopse</h4>
            <p className="text-gray-300 leading-relaxed">
              Em um mundo onde dragões e humanos coexistem, um jovem viking
              chamado Soluço se torna amigo de um dragão ferido chamado
              Banguela. Juntos, eles desafiam as tradições de suas tribos e
              descobrem que dragões não são os monstros que todos acreditavam
              ser.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <button className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium">
              Assistir
            </button>
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition font-medium">
              Detalhes
            </button>
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition font-medium">
              + Adicionar à lista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
