# LAVD Technologies

Landing page de LAVD Technologies, empresa chilena de tecnología para seguridad de flotas comerciales. Presenta su solución que combina ADAS, visión artificial, radar Doppler de 24 GHz, GPS/GNSS y telemetría.

El sitio es estático: está construido con React y Vite y no requiere backend ni base de datos.

## Desarrollo local

Requisitos: Node.js (versión LTS) y npm.

```bash
npm ci
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir el sitio.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión estática en `dist/`. |
| `npm run preview` | Sirve localmente la última compilación. |
| `npm run lint` | Ejecuta Oxlint sobre el proyecto. |

## Publicación en GitHub Pages

El repositorio incluye un workflow de GitHub Actions que compila y publica el sitio en GitHub Pages:

1. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
2. Confirma los cambios en la rama `main` para iniciar el workflow. También puedes ejecutarlo manualmente desde **Actions → Deploy static content to Pages → Run workflow**.
3. Cuando finalice correctamente, GitHub mostrará la URL publicada en **Settings → Pages** y en la ejecución del workflow.

El workflow instala dependencias con `npm ci`, ejecuta `npm run build` y publica el contenido de `dist/`. La ruta base de Vite está configurada para este repositorio (`/lavdtech/`); si cambias el nombre del repositorio o publicas bajo un dominio propio, actualiza `base` en `vite.config.js` según corresponda.

## Personalización del sitio

- Contenido, navegación, especificaciones e información de contacto: `src/config/site.js`.
- Colores, tipografías y otros tokens visuales: `src/styles/tokens.css`.
- Imágenes: `public/images/` y las rutas configuradas en `site.images`.

Antes de publicar, revisa los datos de contacto en `src/config/site.js`. Los campos sin completar se muestran como `PENDIENTE_COMPLETAR`; al configurar `calendarUrl`, el botón de demostración abre ese enlace y, si se configura `email`, el formulario permite contactar mediante el cliente de correo.
