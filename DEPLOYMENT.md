# Guía de Despliegue - CECIM Website

Esta guía te ayudará a desplegar el sitio web del CECIM en diferentes plataformas.

## 🚀 Despliegue en Vercel (Recomendado)

Vercel es la plataforma recomendada para proyectos Next.js.

### Pasos:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub

2. **Conectar repositorio**
   - Haz clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configurar variables de entorno** (si las hay)
   - En el dashboard de Vercel, ve a Settings > Environment Variables
   - Añade las variables necesarias

4. **Desplegar**
   - Haz clic en "Deploy"
   - El sitio estará disponible en unos minutos

### URL del sitio:
Tu sitio estará disponible en: `https://tu-proyecto.vercel.app`

## 🌐 Despliegue en Netlify

### Pasos:

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con tu cuenta de GitHub

2. **Conectar repositorio**
   - Haz clic en "New site from Git"
   - Selecciona GitHub y tu repositorio

3. **Configurar build**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Desplegar**
   - Haz clic en "Deploy site"

## 🐳 Despliegue con Docker

### Dockerfile:

\`\`\`dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
\`\`\`

### Comandos Docker:

\`\`\`bash
# Construir imagen
docker build -t cecim-website .

# Ejecutar contenedor
docker run -p 3000:3000 cecim-website
\`\`\`

## ☁️ Despliegue en Railway

### Pasos:

1. **Crear cuenta en Railway**
   - Ve a [railway.app](https://railway.app)
   - Regístrate con GitHub

2. **Crear nuevo proyecto**
   - Haz clic en "New Project"
   - Selecciona "Deploy from GitHub repo"
   - Selecciona tu repositorio

3. **Configurar**
   - Railway detectará automáticamente Next.js
   - El despliegue comenzará automáticamente

## 🔧 Variables de Entorno

Si tu proyecto necesita variables de entorno, créalas en cada plataforma:

### Ejemplo de variables:
\`\`\`env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
CONTACT_EMAIL=cecim.comite.de.etica@gmail.com
\`\`\`

## 📱 Dominio Personalizado

### En Vercel:
1. Ve a tu proyecto en Vercel
2. Settings > Domains
3. Añade tu dominio personalizado
4. Configura los DNS según las instrucciones

### En Netlify:
1. Ve a Site settings > Domain management
2. Añade tu dominio personalizado
3. Configura los DNS según las instrucciones

## 🔍 Monitoreo y Analytics

### Google Analytics (Opcional):
1. Crea una cuenta en Google Analytics
2. Obtén tu tracking ID
3. Añádelo como variable de entorno
4. Implementa el código de tracking

### Vercel Analytics:
- Disponible automáticamente en proyectos de Vercel
- Ve a tu dashboard para ver las métricas

## 🚨 Solución de Problemas

### Error de Build:
\`\`\`bash
# Limpiar caché
npm run build
rm -rf .next
npm run build
\`\`\`

### Error de Dependencias:
\`\`\`bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Error de TypeScript:
\`\`\`bash
# Verificar tipos
npm run type-check
\`\`\`

## 📞 Soporte

Si tienes problemas con el despliegue:
- Revisa los logs de la plataforma
- Verifica que todas las dependencias estén instaladas
- Contacta al equipo de desarrollo

---

**¡Tu sitio web del CECIM estará en línea en pocos minutos!**
