# NAE - New AGE Energy

Sitio web B2B completo e independiente para New AGE Energy (NAE), empresa de bombas de calor (heat pumps) con operacion en Latinoamerica.

## Descripcion del Proyecto

Este es un sitio web standalone (independiente) construido con Next.js 14, TypeScript, Tailwind CSS y shadcn/ui. No requiere conexion con ninguna aplicacion externa para funcionar. Incluye:

- **Paginas publicas**: Home, Productos, Detalle de Producto, Sobre NAE, Contacto, OEM, Calculadora de Ahorro
- **Autenticacion**: Login, Registro, Dashboard de usuario
- **Precios mayoristas**: Pagina protegida /pricing con control de acceso por roles
- **Internacionalizacion**: Espanol (default), Ingles, Portugues
- **Base de datos**: Supabase (PostgreSQL + Auth + RLS)

## Eslogan

> "No vendemos maquinas. Vendemos certeza."

## Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Base de datos**: Supabase (PostgreSQL + Auth + Row Level Security)
- **Internacionalizacion**: next-intl
- **Iconos**: Lucide React
- **Graficos**: Recharts
- **Animaciones**: Framer Motion
- **Validacion**: Zod

## Requisitos Previos

- Node.js 20+
- Cuenta GitHub
- Cuenta Cloudflare (para hosting)
- Cuenta Supabase (para base de datos y auth)

## Instalacion Local

```bash
# 1. Clonar el repositorio
git clone <tu-repo-github>
cd nae-heatpumps

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales de Supabase

# 4. Ejecutar en modo desarrollo
npm run dev
```

La aplicacion estara disponible en `http://localhost:3000`

## Configuracion de Supabase

1. Crear un nuevo proyecto en [Supabase](https://supabase.com)
2. Ejecutar el SQL en `supabase/migrations/001_initial_schema.sql` en el SQL Editor
3. Obtener las credenciales (URL y Anon Key) del proyecto
4. Configurar Auth > Email provider (habilitar Email/Password)
5. Opcional: deshabilitar "Confirm email" para acceso inmediato
6. Copiar las credenciales a `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Aprobacion de Usuarios

Para aprobar un usuario manualmente (cambiar rol de `pending` a `installer`):

```sql
UPDATE profiles SET role = 'installer', approved_at = NOW() WHERE id = 'UUID_DEL_USUARIO';
```

Para crear un administrador:

```sql
UPDATE profiles SET role = 'admin' WHERE id = 'UUID_DEL_ADMIN';
```

## Deploy en Cloudflare Pages

1. Conectar el repositorio GitHub a Cloudflare Pages
2. Configurar variables de entorno en el dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (URL del dominio en Cloudflare)
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy automatico en cada push a main

## Nota de Independencia

Este sitio es completamente autonomo. La autenticacion funciona con Supabase Auth propio del proyecto. La base de datos (productos, precios mayoristas, leads, perfiles) vive en Supabase. No requiere conexion con ninguna aplicacion externa para funcionar.

**Futuro**: Cuando se desarrolle una app de presupuestos, se podra compartir la misma instancia de Supabase (mismas tablas `products`, `pricing`, `profiles`) para unificar datos.

## Estructura del Proyecto

```
nae-heatpumps/
├── messages/              # Traducciones (es, en, pt)
├── public/                # Imagenes y assets estaticos
├── src/
│   ├── app/
│   │   ├── [locale]/      # Paginas con soporte i18n
│   │   │   ├── sections/  # Secciones del home page
│   │   │   ├── products/
│   │   │   │   └── [slug]/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── oem/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── dashboard/
│   │   │   ├── pricing/
│   │   │   └── savings-calculator/
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Estilos globales
│   ├── components/        # Componentes compartidos
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utilidades
│   │   ├── supabase.ts   # Cliente Supabase
│   │   ├── data.ts       # Datos mock
│   │   └── utils.ts
│   ├── i18n.ts           # Configuracion next-intl
│   └── middleware.ts     # Middleware de locale
├── supabase/
│   └── migrations/       # SQL de la base de datos
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

## Documentacion Adicional

- `IMAGE_GUIDE.md` - Guia de imagenes y assets
- `SUPABASE_SETUP.md` - Configuracion detallada de Supabase
- `DEPLOY.md` - Instrucciones de deploy en Cloudflare Pages

## Licencia

Copyright 2026 New AGE Energy. Todos los derechos reservados.
