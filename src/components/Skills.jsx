import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiMongodb } from 'react-icons/si';

const tecnologias = [
  { nombre: "HTML5", icono: FaHtml5, hoverColor: "group-hover:text-[#E34F26]" },
  { nombre: "CSS3", icono: FaCss3Alt, hoverColor: "group-hover:text-[#1572B6]" },
  { nombre: "JavaScript", icono: FaJs, hoverColor: "group-hover:text-[#F7DF1E]" },
  { nombre: "Tailwind CSS", icono: SiTailwindcss, hoverColor: "group-hover:text-[#06B6D4]" },
  { nombre: "React", icono: FaReact, hoverColor: "group-hover:text-[#61DAFB]" },
  { nombre: "Node.js", icono: FaNodeJs, hoverColor: "group-hover:text-[#339933]" },
  { nombre: "Express", icono: SiExpress, hoverColor: "group-hover:text-white" },
  { nombre: "MySQL", icono: SiMysql, hoverColor: "group-hover:text-[#4479A1]" },
  { nombre: "MongoDB", icono: SiMongodb, hoverColor: "group-hover:text-[#47A248]" },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-16 px-6 max-w-6xl mx-auto">
      
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-8">
        Stack Tecnológico<span className="text-blue-500">.</span>
      </h2>

      <div className="flex flex-wrap gap-4">
        {tecnologias.map((tech, index) => {
          const Icono = tech.icono;
          return (
            <div 
              key={index}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 cursor-default"
            >
              <Icono className={`text-gray-500 text-xl transition-colors duration-300 ${tech.hoverColor}`} />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {tech.nombre}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}