# Guia de Configuracion de Supabase - NAE

Este documento describe paso a paso como configurar Supabase para el sitio web NAE.

## 1. Crear Proyecto en Supabase

1. Ir a [https://supabase.com](https://supabase.com) e iniciar sesion
2. Click en "New Project"
3. Nombre: `nae-heatpumps`
4. Region: Seleccionar la mas cercana a Latinoamerica (ej. `us-east-1`)
5. Plan: Free tier es suficiente para empezar
6. Esperar a que el proyecto este listo (~2 minutos)

## 2. Ejecutar el Schema SQL

1. En el dashboard de Supabase, ir a **SQL Editor** (icono de terminal)
2. Click en **New query**
3. Copiar y pegar el contenido completo de `supabase/migrations/001_initial_schema.sql`
4. Click en **Run** para ejecutar

Este SQL crea:
- Tabla `categories` - Categorias de productos
- Tabla `products` - Productos (publica)
- Tabla `pricing` - Precios mayoristas (protegida)
- Tabla `leads` - Formularios de contacto
- Tabla `profiles` - Perfiles de usuario vinculados a Auth
- Politicas RLS para seguridad
- Trigger para crear perfil automaticamente al registrarse
- Datos de ejemplo (seed)

## 3. Configurar Autenticacion (Auth)

### Habilitar Email/Password

1. Ir a **Authentication** > **Providers**
2. Asegurar que **Email** este habilitado
3. Configurar opciones:
   - **Confirm email**: Deshabilitar para acceso inmediato (o dejar habilitado para mayor seguridad)
   - **Secure email change**: Habilitar
   - **Double confirm email changes**: Habilitar

### Configurar URLs del sitio

1. Ir a **Authentication** > **URL Configuration**
2. Configurar:
   - **Site URL**: `https://nae-heatpumps.com` (o tu dominio)
   - **Redirect URLs**: `https://nae-heatpumps.com/**`

## 4. Obtener Credenciales

1. Ir a **Project Settings** > **API**
2. Copiar los siguientes valores:
   - **Project URL**: `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**NO** usar la `service_role_key` en el cliente - es solo para el servidor.

## 5. Configurar Variables de Entorno

Crear archivo `.env.local` en la raiz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
NEXT_PUBLIC_SITE_URL=https://nae-heatpumps.com
```

Para desarrollo local:
```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 6. Gestion de Usuarios

### Aprobar un Instalador

Cuando un usuario se registra, su rol es automaticamente `pending`. Para aprobarlo:

```sql
UPDATE profiles 
SET role = 'installer', 
    approved_at = NOW() 
WHERE id = 'UUID_DEL_USUARIO';
```

### Crear un Administrador

```sql
UPDATE profiles 
SET role = 'admin' 
WHERE id = 'UUID_DEL_ADMIN';
```

### Ver Usuarios Registrados

```sql
SELECT p.id, p.full_name, p.email, p.company_name, p.country, p.role, p.created_at
FROM profiles p
ORDER BY p.created_at DESC;
```

O ir a **Authentication** > **Users** en el dashboard de Supabase.

### Ver Leads (Formularios)

```sql
SELECT * FROM leads ORDER BY created_at DESC;
```

## 7. Seguridad - Row Level Security (RLS)

Las politicas RLS ya estan configuradas por el SQL de migracion:

| Tabla | Politica | Acceso |
|-------|----------|--------|
| `products` | Public read | Cualquiera (sin login) |
| `pricing` | Installer/Admin read | Solo usuarios con role 'installer' o 'admin' |
| `leads` | Public insert | Cualquiera puede enviar formularios |
| `leads` | Admin read | Solo admins pueden leer leads |
| `profiles` | Own read/update | Usuarios solo ven/editan su propio perfil |

## 8. Tabla de Precios Mayoristas

La tabla `pricing` contiene los precios mayoristas. Para actualizar precios:

```sql
-- Ver precios actuales
SELECT p.name, pr.wholesale_price, pr.moq, pr.currency
FROM pricing pr
JOIN products p ON pr.product_id = p.id;

-- Actualizar precio de un producto
UPDATE pricing 
SET wholesale_price = 1299.00, 
    moq = 5,
    updated_at = NOW()
WHERE product_id = 1;
```

## 9. Consejos de Seguridad

- **NUNCA** incluir `.env` o `.env.local` en el repositorio Git
- **NUNCA** usar la `SUPABASE_SERVICE_ROLE_KEY` en el codigo cliente
- Mantener Supabase actualizado
- Habilitar 2FA en tu cuenta de Supabase
- Monitorear los logs de autenticacion regularmente

## Troubleshooting

### Error: "Invalid login credentials"
- Verificar que el email y password sean correctos
- Si "Confirm email" esta habilitado, el usuario debe confirmar su email primero

### Error: "New signup is disabled"
- Ir a Authentication > Providers > Email > habilitar "Enable Signup"

### No se crea el perfil al registrarse
- Verificar que el trigger `on_auth_user_created` exista
- Verificar que la funcion `handle_new_user()` exista
- Revisar logs en Supabase > Logs > Postgres

### Usuario no puede ver precios mayoristas
- Verificar que el usuario tenga role = 'installer' o 'admin' en la tabla profiles
- Verificar que el usuario este autenticado (token JWT valido)
- Revisar politicas RLS en Supabase > Authentication > Policies
