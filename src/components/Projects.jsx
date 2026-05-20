import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const misProyectos = [
  {
    id: 1,
    titulo: "E-Commerce Deportivo",
    descripcion: "Plataforma de ventas con carrito de compras y pasarela de pagos.",
    tecnologias: ["React", "Tailwind", "Node.js"],
    repoUrl: "https://github.com/Nkiex",
    demoUrl: "#"
  },
  {
    id: 2,
    titulo: "Dashboard Financiero",
    descripcion: "Panel de control para visualización de gastos e ingresos en tiempo real.",
    tecnologias: ["JavaScript", "CSS", "Chart.js"],
    repoUrl: "https://github.com/Nkiex",
    demoUrl: "#"
  },
  {
    id: 3,
    titulo: "App de Gestión de Tareas",
    descripcion: "Aplicación web para organizar proyectos con sistema de arrastrar y soltar.",
    tecnologias: ["React", "Firebase", "Tailwind"],
    repoUrl: "https://github.com/Nkiex",
    demoUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 max-w-6xl mx-auto">
      
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-12">
        Proyectos Destacados<span className="text-blue-500">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {misProyectos.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
          >
            {/* Espacio reservado para la imagen */}
            <div className="aspect-video w-full rounded-xl bg-[#111] mb-5 flex items-center justify-center border border-white/5">
              <span className="text-gray-700 text-xs tracking-widest uppercase">Imagen / Preview</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              {proyecto.titulo}
            </h3>
            
            <p className="text-sm text-gray-400 font-light mb-6 line-clamp-2">
              {proyecto.descripcion}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-6">
              {proyecto.tecnologias.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2.5 py-1 text-[10px] font-medium text-gray-400 bg-white/5 rounded-md border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Enlaces inferiores */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a 
                href={proyecto.repoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={14} />
                Código
              </a>
              <a 
                href={proyecto.demoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <FiExternalLink size={14} />
                Visitar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}