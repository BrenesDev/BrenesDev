# 🎨 Guía de Personalización - Portfolio BrenesDev

## ✅ ¡Tu portfolio está listo!

El esqueleto de tu portfolio está completamente funcional. Aquí tienes todo lo que necesitas saber para personalizarlo.

## 📝 Paso 1: Personalizar tus datos

### 1.1 Información Personal (`src/data/personal.json`)
```json
{
  "personal": {
    "name": "Tu Nombre Completo",
    "title": "Tu Título Profesional",
    "subtitle": "Tu Especialidad",
    "email": "tu.email@gmail.com",
    "phone": "+XX XXX XXX XXXX",
    "location": "Tu Ciudad, País",
    "bio": "Tu descripción corta para el hero...",
    "aboutExtended": "Tu descripción extendida para la sección About..."
  },
  "social": {
    "github": "https://github.com/tu-usuario",
    "linkedin": "https://linkedin.com/in/tu-usuario",
    "twitter": "https://twitter.com/tu-usuario",
    "instagram": "https://instagram.com/tu-usuario",
    "email": "mailto:tu.email@gmail.com"
  }
}
```

### 1.2 Tus Proyectos (`src/data/projects.json`)
- Edita los proyectos existentes o agrega nuevos
- Marca algunos como `"featured": true` para el carrusel principal
- Asegúrate de que las URLs de GitHub y demo estén correctas

### 1.3 Tus Habilidades (`src/data/skills.json`)
- Actualiza los niveles de habilidad (0-100)
- Modifica las materias de tutoría
- Ajusta los precios según tu región

## 🖼️ Paso 2: Agregar tus imágenes

Coloca tus imágenes en `public/images/`:

### Imagen de perfil:
- `profile.jpg` (400x400px, formato cuadrado)

### Imágenes de proyectos:
- `project-1.jpg` a `project-6.jpg` (600x300px)
- Si no tienes imágenes, se mostrarán placeholders automáticamente

## 🎨 Paso 3: Personalizar colores (opcional)

En `tailwind.config.js`, puedes cambiar la paleta de colores:

```javascript
colors: {
  primary: '#tu-color-fondo',      // Color de fondo principal
  secondary: '#tu-color-secondary', // Color de fondo secundario
  accent: '#tu-color-acento',       // Color de acento (verde por defecto)
  textPrimary: '#tu-color-texto',   // Color de texto principal
  textSecondary: '#tu-color-texto-secundario', // Color de texto secundario
}
```

## 🌐 Paso 4: SEO y Meta Tags

Actualiza `index.html`:
- Cambia el título y descripción
- Actualiza las URLs de Open Graph
- Modifica las meta tags según tu información

## 📱 Paso 5: Configurar formulario de contacto

El formulario está preparado pero necesitarás:

1. **Opción 1 - Formspree**: Conecta con Formspree.io
2. **Opción 2 - Netlify Forms**: Si despliegas en Netlify
3. **Opción 3 - EmailJS**: Para envío desde el frontend
4. **Opción 4 - Backend personalizado**: API propia

## 🚀 Paso 6: Deploy en Railway

### Preparación:
1. Sube tu código a GitHub
2. Conecta el repositorio a Railway
3. Railway detectará automáticamente el proyecto Vite

### Configuración automática:
- El archivo `railway.json` ya está configurado
- Las variables de entorno se pueden agregar en el dashboard
- El deploy será automático en cada push

### URL final:
Tu portfolio estará disponible en: `https://tu-proyecto.railway.app`

## 🔧 Comandos útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Instalar nuevas dependencias
npm install nueva-dependencia
```

## 🎯 Características incluidas

✅ **Diseño responsivo** - Funciona en móvil, tablet y desktop
✅ **Animaciones suaves** - Framer Motion para interacciones elegantes
✅ **SEO optimizado** - Meta tags y estructura semántica
✅ **Navegación fluida** - Smooth scroll entre secciones
✅ **Formulario contacto** - Listo para conectar con tu servicio preferido
✅ **Carrusel proyectos** - Destaca tus mejores trabajos
✅ **Barras de progreso** - Visualiza tu nivel en cada tecnología
✅ **Sección tutorías** - Promociona tus servicios educativos
✅ **Tema oscuro** - Diseño moderno y profesional

## 🎨 Secciones del Portfolio

1. **Hero/Landing**: Presentación con foto y CTAs
2. **Sobre mí**: Bio extendida + habilidades técnicas con barras
3. **Proyectos**: Carrusel destacado + grid de todos los proyectos
4. **Tutorías**: Servicios, materias, precios y testimonios
5. **Contacto**: Formulario + información de contacto + redes

## 📞 Soporte

Si necesitas ayuda:
1. Revisa el README.md principal
2. Consulta la documentación de cada tecnología
3. Busca en Stack Overflow para problemas específicos

## 🎉 ¡Siguiente paso!

1. Personaliza tus datos en los JSON
2. Agrega tus imágenes
3. Prueba localmente con `npm run dev`
4. Sube a GitHub y despliega en Railway
5. ¡Comparte tu portfolio con el mundo!

---

**¡Tu portfolio profesional está listo para impresionar! 🚀**
