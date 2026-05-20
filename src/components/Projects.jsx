import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const misProyectos = [
  {
    id: 1,
    titulo: "Creador de CVs gratis",
    descripcion: "Plataforma para crear cvs gratis y sin registrarse.",
    tecnologias: ["Astro", "Tailwind", "JavaScript", "TypeScript"],
    repoUrl: "https://github.com/Nkiex/cv-ats-templates",
    demoUrl: "https://cvatsfacil.com",
    image: "/cv-ats-facil-imagen.png" 
  },
  {
    id: 2,
    titulo: "Generador de paleta de colores",
    descripcion: "Página para generar paleta de colores de forma aleatoria.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/Nkiex/GeneradorPaletasDeColores",
    demoUrl: "https://generadorpaletasdecolores.pages.dev",
    image: "/generador-paleta-colores-imagen.png"
  },
  {
    id: 3,
    titulo: "Generador de contraseñas seguras",
    descripcion: "Aplicación web para generar contraseñas seguras de forma sencilla.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/Nkiex/GeneradorContrase-as",
    demoUrl: "https://generadorcontrase-as.pages.dev/",
    image: "/generador-contraseñas-imagen.png"
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
            {/* Contenedor de la imagen. Añadimos overflow-hidden para que la imagen respete los bordes redondeados */}
            <div className="aspect-video w-full rounded-xl bg-[#111] mb-5 flex items-center justify-center border border-white/5 overflow-hidden">
              {/* Lógica condicional: Si hay imagen, la mostramos. Si no, mostramos el texto */}
              {proyecto.image ? (
                <img 
                  src={proyecto.image} 
                  alt={`Vista previa de ${proyecto.titulo}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <span className="text-gray-700 text-xs tracking-widest uppercase">Imagen / Preview</span>
              )}
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