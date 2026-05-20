// src/components/Hero.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center p-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-white">
        Hola, soy{" "}
        <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          Ignacio
        </span>
      </h1>

      <p className="text-2x1 text-gray-400 font-light tracking-[0.25em] mb-8 uppercase">
        Desarrollador Web
      </p>

      {/* Contenedor de botones ( gap-3 ) */}
      <div className="flex flex-wrap justify-center items-center gap-3">
        <a
          href="https://github.com/Nkiex"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir a mi GitHub"
          className="p-2 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <FaGithub size={30} />
        </a>

        <a
          href="https://www.linkedin.com/in/ignacio-aguirre-camus"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir a mi LinkedIn"
          className="p-2 rounded-full border border-white/10 text-gray-300 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 hover:text-[#0A66C2] transition-all duration-300 flex items-center justify-center"
        >
          <FaLinkedin size={30} />
        </a>

        <a
          href="/CV_Ignacio_Aguirre.pdf"
          download="CV_Ignacio_Aguirre"
          className="px-4 py-2 ml-1 rounded-full text-[15px] font-semibold bg-gray-100 text-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.03)] flex items-center gap-1.5"
        >
          <FiDownload size={13} />
          Descargar CV
        </a>
      </div>
    </section>
  );
}
