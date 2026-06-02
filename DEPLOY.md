# Guia de Deploy - Cloudflare Pages

Este documento describe como desplegar el sitio web NAE en Cloudflare Pages.

## Opcion 1: Deploy Automatico desde GitHub (Recomendado)

### Paso 1: Crear Repositorio en GitHub

```bash
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/nae-heatpumps.git
git push -u origin main
```

### Paso 2: Configurar Cloudflare Pages

1. Ir a [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click en **Pages** en el menu lateral
3. Click **Create a project** > **Connect to Git**
4. Seleccionar el repositorio `nae-heatpumps`
5. Click **Begin setup**

### Paso 3: Configurar Build Settings

| Setting | Valor |
|---------|-------|
| **Project name** | `nae-heatpumps` |
| **Production branch** | `main` |
| **Framework preset** | `Next.js` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

### Paso 4: Configurar Variables de Entorno

En la misma pagina de configuracion, agregar las siguientes variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
NEXT_PUBLIC_SITE_URL=https://nae-heatpumps.com
```

**IMPORTANTE**: Agregar estas variables tanto para **Production** como para **Preview**.

### Paso 5: Deploy

1. Click **Save and Deploy**
2. Cloudflare Pages ejecutara el build y desplegara el sitio
3. La primera vez toma ~3-5 minutos
4. Obtendras una URL tipo: `https://nae-heatpumps.pages.dev`

### Actualizaciones Automaticas

Cada vez que hagas `git push` a la rama `main`, Cloudflare Pages se re-desplegara automaticamente.

## Opcion 2: Deploy Manual (wrangler CLI)

### Instalar Wrangler

```bash
npm install -g wrangler
```

### Autenticar

```bash
npx wrangler login
```

### Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name=nae-heatpumps
```

## Configurar Dominio Personalizado

1. En Cloudflare Pages, ir a tu proyecto > **Custom domains**
2. Click **Set up a custom domain**
3. Ingresar tu dominio (ej. `nae-heatpumps.com`)
4. Seguir las instrucciones para configurar los registros DNS
5. Esperar la propagacion (puede tomar hasta 24 horas)

## Configurar Redireccion de WWW

Si usas `www.nae-heatpumps.com`, crear una regla de redireccion en Cloudflare:

1. Ir a **Rules** > **Redirect Rules**
2. Click **Create redirect rule**
3. Configurar:
   - When incoming requests match: `www.nae-heatpumps.com`
   - Then: **URL redirect** > **Dynamic**
   - Expression: `concat("https://nae-heatpumps.com", http.request.uri.path)`
   - Status code: **301**

## Troubleshooting

### Build falla con "Module not found"
- Verificar que `npm install` se ejecute correctamente
- Verificar que todas las dependencias esten en `package.json`

### Pagina en blanco despues del deploy
- Verificar que `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` esten configurados
- Verificar en el navegador (F12 > Console) si hay errores de CORS
- Verificar que Supabase tenga habilitado el dominio en **Authentication > URL Configuration**

### Errores de autenticacion
- En Supabase, ir a **Authentication > URL Configuration**
- Agregar la URL de Cloudflare Pages (`https://nae-heatpumps.pages.dev`) a **Redirect URLs**

### Imagenes no cargan
- Verificar que las imagenes esten en `public/` y se copien a `dist/`
- Verificar que las rutas de las imagenes sean correctas (`/images/...`)

### Problemas de CORS
Si ves errores de CORS en la consola:
1. En Supabase, ir a **API > Settings**
2. En **CORS Origins**, agregar tu dominio de Cloudflare Pages
3. Ejemplo: `https://nae-heatpumps.pages.dev`

## Monitoreo

- **Analytics**: Cloudflare Pages tiene analytics integrado
- **Errores**: Revisar **Functions** > **Logs** en el dashboard de Cloudflare
- **Performance**: Usar PageSpeed Insights o GTmetrix

## Rollback

Si necesitas revertir a una version anterior:
1. En Cloudflare Pages, ir a tu proyecto > **Deployments**
2. Encontrar el deployment anterior que funcionaba
3. Click en los tres puntos (...) > **Rollback to this deployment**
