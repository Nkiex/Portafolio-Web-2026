import { FiMail } from 'react-icons/fi';

export default function Contact() {
  const anioActual = new Date().getFullYear();

  return (
    <footer id="contacto" className="w-full border-t border-white/5 bg-[#0a0a0a] pt-20 pb-8 mt-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          ¿Trabajamos juntos?
        </h2>
        
        <p className="text-gray-400 text-sm md:text-base font-light mb-10 max-w-xl mx-auto">
          Actualmente estoy abierto a nuevas oportunidades.  
        </p>
        
        <a 
          href="mailto:aguirrecamus@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 mb-20"
        >
          <FiMail size={20} />
        </a>

        <div className="text-[10px] text-gray-600 tracking-widest uppercase">
          <p>© {anioActual} Ignacio Aguirre. </p>
        </div>
        
      </div>
    </footer>
  );
}