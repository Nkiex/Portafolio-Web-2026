export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-[#0a0a0a]/70 backdrop-blur-md px-8 py-5 flex justify-between items-center z-50 border-b border-white/5">
      <div className="text-lg font-semibold tracking-widest text-gray-200">
      </div>
      <ul className="flex gap-8 m-0 p-0 list-none text-sm font-medium text-gray-400">
        <li>
          <a href="#inicio" className="hover:text-white transition-colors duration-300">
            Inicio
          </a>
        </li>
        <li>
          <a href="#proyectos" className="hover:text-white transition-colors duration-300">
            Proyectos
          </a>
        </li>
      </ul>
    </nav>
  );
}