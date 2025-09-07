# BrenesDev Portfolio

Portafolio personal desarrollado con React, Tailwind CSS y Framer Motion, inspirado en brittanychiang.com.

## 🚀 Tecnologías utilizadas

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Deployment**: Railway

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 🛠️ Scripts disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── Tutoring.jsx
│       └── Contact.jsx
├── data/
│   ├── personal.json
│   ├── projects.json
│   └── skills.json
└── hooks/
```

## ✨ Características

- **Diseño responsivo** - Se adapta a todos los tamaños de pantalla
- **Animaciones suaves** - Utilizando Framer Motion
- **Modo oscuro** - Diseño elegante con tema oscuro
- **SEO optimizado** - Meta tags y estructura semántica
- **Performance** - Optimizado para carga rápida
- **Accesible** - Siguiendo las mejores prácticas de accesibilidad

## 🎨 Personalización

### Datos personales
Edita los archivos en `src/data/` para personalizar el contenido:

- `personal.json` - Información personal y redes sociales
- `projects.json` - Lista de proyectos
- `skills.json` - Habilidades técnicas y tutorías

### Imágenes
Coloca tus imágenes en `public/images/`:

- `profile.jpg` - Tu foto profesional
- `project-1.jpg` hasta `project-6.jpg` - Imágenes de proyectos

### Colores y estilos
Modifica `tailwind.config.js` para cambiar la paleta de colores y otros estilos.

## 🚀 Deployment en Railway

1. Conecta tu repositorio a Railway
2. Railway detectará automáticamente que es un proyecto Vite
3. El archivo `railway.json` ya está configurado
4. Tu portfolio estará disponible en una URL de Railway

### Variables de entorno (opcionales)
Si necesitas variables de entorno, créalas en el dashboard de Railway.

## 📱 Secciones incluidas

1. **Hero/Landing** - Presentación personal con foto y llamadas a la acción
2. **Sobre mí** - Información detallada, habilidades técnicas con barras de progreso
3. **Proyectos** - Galería de proyectos con carrusel destacado
4. **Tutorías** - Servicios de tutoría, materias y testimonios
5. **Contacto** - Formulario de contacto e información

## 🎯 Próximas mejoras

- [ ] Blog integrado
- [ ] Sistema de comentarios
- [ ] Analytics integrados
- [ ] Modo claro/oscuro toggle
- [ ] Internacionalización (i18n)
- [ ] PWA support

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, abre primero un issue para discutir lo que te gustaría cambiar.

## 📞 Contacto

- **Email**: tu.email@gmail.com
- **LinkedIn**: [Tu LinkedIn](https://linkedin.com/in/tuusuario)
- **GitHub**: [Tu GitHub](https://github.com/tuusuario)

---

⭐ No olvides dar una estrella al proyecto si te fue útil!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
