#Portafolio Personal - Ignacio Aguirre

Un portafolio web minimalista y profesional diseñado para destacar proyectos, habilidades técnicas y experiencia en el desarrollo web. Construido con un enfoque en el rendimiento, la accesibilidad y un diseño UI moderno (estilo oscuro con toques de glassmorphism).

🔗 **https://portafolio-web-2026.pages.dev/*

---

##Características

- **Diseño Minimalista & Dark Mode:** UI limpia enfocada en el contenido, evitando el ruido visual.
- **Totalmente Responsivo:** Adaptable a cualquier tamaño de pantalla (Mobile First).
- **Navegación Sticky con Glassmorphism:** Barra superior con efecto de cristal esmerilado.
- **Sección de Proyectos Dinámica:** Sistema de tarjetas (cards) optimizadas con efectos hover y renderizado condicional de imágenes.
- **Optimización de Rendimiento:** Construido con Vite para tiempos de carga ultrarrápidos y recarga en caliente.

---

##Stack Tecnológico

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- **Frontend:** [React](https://reactjs.org/)
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconos:** [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome & Simple Icons)

---

##Instalación y Uso Local

Si deseas clonar este repositorio y correrlo en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/Nkiex/tu-repo-portafolio.git](https://github.com/Nkiex/tu-repo-portafolio.git)
   cd tu-repo-portafolio
   npm install
   **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
```
├── public/                 # Archivos estáticos (CV, Imágenes)
├── src/
│   ├── components/         # Componentes modulares de React
│   │   ├── Navbar.jsx      # Navegación superior
│   │   ├── Hero.jsx        # Sección de inicio y presentación
│   │   ├── Projects.jsx    # Cuadrícula de proyectos destacados
│   │   ├── Skills.jsx      # Stack tecnológico
│   │   └── Contact.jsx     # Pie de página y contacto
│   ├── App.jsx             # Ensamblaje principal de la SPA
│   ├── main.jsx            # Punto de entrada de React
│   └── index.css           # Configuración base de Tailwind v4
└── package.json            # Dependencias y scripts```
