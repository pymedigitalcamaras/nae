# Guia de Imagenes - NAE Website

Este documento describe todas las imagenes utilizadas en el sitio web NAE, incluyendo su ubicacion, dimensiones recomendadas, contenido ideal y formato sugerido.

## Imagenes Generadas (Ya Incluidas)

Las siguientes imagenes fueron generadas con IA y ya estan incluidas en `/public/images/` y `/public/`:

### Hero y Banners

| Archivo | Ubicacion | Dimensiones | Descripcion |
|---------|-----------|-------------|-------------|
| `hero-industrial.jpg` | `/public/images/` | 1920x1080 (16:9) | Fondo hero de la pagina principal. Instalacion industrial de bombas de calor, tonos azul-gris. |
| `about-factory.jpg` | `/public/images/` | 1200x800 (3:2) | Foto de fabrica moderna de bombas de calor, linea de produccion limpia. |
| `about-team.jpg` | `/public/images/` | 1200x800 (3:2) | Equipo diverso de ingenieros y tecnicos en oficina moderna. |

### Proceso OEM

| Archivo | Ubicacion | Dimensiones | Descripcion |
|---------|-----------|-------------|-------------|
| `oem-step1.jpg` | `/public/images/` | 800x600 (4:3) | Reunion de consulta de negocios, ingenieros discutiendo proyecto. |
| `oem-step2.jpg` | `/public/images/` | 800x600 (4:3) | Diseno de producto y prototipado, espacio de trabajo CAD/ingenieria. |
| `oem-step3.jpg` | `/public/images/` | 800x600 (4:3) | Linea de produccion de bombas de calor. |
| `oem-step4.jpg` | `/public/images/` | 800x600 (4:3) | Envio y entrega, contenedor de carga cargado. |

### Productos Destacados (Categorias)

| Archivo | Ubicacion | Dimensiones | Descripcion |
|---------|-----------|-------------|-------------|
| `product-air-source.jpg` | `/public/images/` | 800x600 (4:3) | Bomba de calor aire-agua residencial, fondo blanco. |
| `product-geothermal.jpg` | `/public/images/` | 800x600 (4:3) | Sistema geotermico, unidad compacta, fondo blanco. |
| `product-pool.jpg` | `/public/images/` | 800x600 (4:3) | Bomba de calor para piscina, unidad exterior. |

### Productos Individuales

| Archivo | Ubicacion | Dimensiones | Descripcion |
|---------|-----------|-------------|-------------|
| `product-r290-12kw.jpg` | `/public/` | 600x600 (1:1) | Bomba de calor monobloc R290 12kW, producto individual. |
| `product-r290-20kw.jpg` | `/public/` | 600x600 (1:1) | Bomba de calor monobloc R290 20kW, producto individual. |
| `product-split-9kw.jpg` | `/public/` | 600x600 (1:1) | Sistema split 9kW con fancoil, kit completo. |
| `product-recirc.jpg` | `/public/` | 600x600 (1:1) | Bomba de recirculacion inteligente. |
| `product-pex-kit.jpg` | `/public/` | 600x600 (1:1) | Kit de tuberia PEX y accesorios de instalacion. |

## Como Reemplazar las Imagenes

1. Preparar la nueva imagen con las dimensiones recomendadas
2. Reemplazar el archivo en `/public/images/` o `/public/` con el **mismo nombre y extension**
3. Hacer `git push`
4. Cloudflare Pages actualizara automaticamente

**IMPORTANTE**: Mantener los mismos nombres de archivo para evitar cambios en el codigo.

## Imagenes Futuras a Agregar

Cuando se disponga de fotos reales de la fabrica y productos, reemplazar las imagenes placeholder con las siguientes:

| Prioridad | Archivo | Descripcion Ideal |
|-----------|---------|-------------------|
| Alta | `hero-industrial.jpg` | Foto aerea real de la fabrica de bombas de calor en China, produccion activa |
| Alta | `product-r290-12kw.jpg` | Foto profesional de producto real NAE R290 12kW, fondo blanco |
| Alta | `product-r290-20kw.jpg` | Foto profesional de producto real NAE R290 20kW, fondo blanco |
| Media | `about-factory.jpg` | Linea de produccion real, trabajadores ensamblando unidades |
| Media | `about-team.jpg` | Foto real del equipo de soporte latinoamericano |
| Media | `oem-step1.jpg` a `oem-step4.jpg` | Fotos reales del proceso OEM (consulta, diseno, produccion, entrega) |

## Formato Recomendado

- **Formato**: JPEG para fotografias, PNG para graficos con transparencia
- **Calidad**: 80-85% de calidad JPEG para web
- **Optimizacion**: Usar herramientas como TinyPNG o Squoosh para optimizar
- **Alt text**: Todas las imagenes en el codigo ya incluyen atributos `alt` descriptivos

## Favicon

El favicon (`/public/favicon.ico`) es un icono de Next.js por defecto. Reemplazar con el logo NAE en formato ICO de 32x32 y 16x16 pixeles.
