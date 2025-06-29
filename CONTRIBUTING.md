# Guía de Contribución - CECIM Website

¡Gracias por tu interés en contribuir al sitio web del CECIM! Esta guía te ayudará a empezar.

## 🤝 Cómo Contribuir

### 1. Fork del Repositorio
\`\`\`bash
# Haz fork del repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/tu-usuario/cecim-website.git
cd cecim-website
\`\`\`

### 2. Configurar el Entorno
\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
\`\`\`

### 3. Crear una Rama
\`\`\`bash
# Crear rama para tu feature
git checkout -b feature/nueva-funcionalidad

# O para un bugfix
git checkout -b fix/corregir-error
\`\`\`

### 4. Hacer Cambios
- Realiza tus cambios
- Asegúrate de seguir las convenciones de código
- Añade tests si es necesario

### 5. Commit y Push
\`\`\`bash
# Añadir cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: añadir nueva funcionalidad"

# Push a tu fork
git push origin feature/nueva-funcionalidad
\`\`\`

### 6. Pull Request
- Ve a GitHub y crea un Pull Request
- Describe claramente los cambios realizados
- Espera la revisión del código

## 📝 Convenciones de Código

### Commits
Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `docs:` cambios en documentación
- `style:` cambios de formato
- `refactor:` refactorización de código
- `test:` añadir o modificar tests

### TypeScript
- Usar tipos explícitos cuando sea necesario
- Evitar `any`
- Usar interfaces para objetos complejos

### React/Next.js
- Usar componentes funcionales
- Usar hooks apropiadamente
- Seguir las mejores prácticas de Next.js

### CSS/Tailwind
- Usar clases de Tailwind cuando sea posible
- Mantener consistencia en el diseño
- Usar variables CSS para colores personalizados

## 🧪 Testing

\`\`\`bash
# Ejecutar linter
npm run lint

# Verificar tipos de TypeScript
npm run type-check

# Build para verificar que compila
npm run build
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
cecim-website/
├── app/                 # Páginas (App Router)
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI base
│   └── ...             # Componentes específicos
├── lib/                # Utilidades y helpers
├── public/             # Archivos estáticos
└── ...
\`\`\`

## 🎨 Guía de Diseño

### Colores
- Azul principal: `#1e7db8` (del logo CECIM)
- Grises para texto secundario
- Blanco para fondos principales

### Tipografía
- Fuente principal: Inter
- Jerarquía clara de tamaños
- Buen contraste para accesibilidad

### Componentes
- Usar componentes de shadcn/ui cuando sea posible
- Mantener consistencia visual
- Responsive design obligatorio

## 🐛 Reportar Bugs

### Antes de reportar:
1. Verifica que el bug no haya sido reportado
2. Reproduce el error en la última versión
3. Prepara información detallada

### Información a incluir:
- Descripción clara del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots si es relevante
- Información del navegador/dispositivo

## 💡 Sugerir Funcionalidades

### Antes de sugerir:
1. Verifica que no exista una sugerencia similar
2. Considera si la funcionalidad es relevante para el CECIM
3. Piensa en la implementación

### Información a incluir:
- Descripción clara de la funcionalidad
- Justificación de por qué es necesaria
- Posible implementación
- Mockups o ejemplos si es relevante

## 📋 Checklist para Pull Requests

- [ ] El código compila sin errores
- [ ] Se siguen las convenciones de código
- [ ] Se añadió documentación si es necesario
- [ ] Se probó en diferentes dispositivos
- [ ] El commit message sigue las convenciones
- [ ] Se actualizó el README si es necesario

## 🔍 Revisión de Código

### Criterios de revisión:
- Funcionalidad correcta
- Código limpio y legible
- Rendimiento adecuado
- Accesibilidad
- Responsive design
- Consistencia con el diseño existente

## 📞 Contacto

Si tienes preguntas sobre la contribución:
- Abre un issue en GitHub
- Contacta al equipo de desarrollo
- Email: cecim.comite.de.etica@gmail.com

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la misma licencia del proyecto.

---

¡Gracias por contribuir al sitio web del CECIM! 🙏
