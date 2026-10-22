# LAVD Technologies — Landing comercial

Sitio estático de React + Vite para LAVD Technologies (Chile). No incluye backend ni base de datos.

## Ejecutar

```bash
npm install
npm run dev
```

Compilar para publicación estática (Netlify, GitHub Pages, Cloudflare Pages, etc.):

```bash
npm run build
npm run preview
```

La carpeta `dist/` es el sitio listo para subir.

## Cómo modificar sin tocar la estructura

| Qué cambiar | Dónde |
| --- | --- |
| Textos, navegación, cifras de ensayos, especificaciones, CTA | `src/config/site.js` |
| Colores, radios, tipografías, sombras | `src/styles/tokens.css` |
| Imágenes | `public/images/` y las rutas en `site.images` |
| Correo, teléfono, WhatsApp, dirección, agenda | `site.contact` en `src/config/site.js` |

Campos de contacto vacíos se muestran como `PENDIENTE_COMPLETAR`.

- Si completa `contact.calendarUrl`, el botón **Agendar una Demostración Comercial** abre ese enlace.
- Si no hay agenda, el botón lleva a `#contacto`.
- Si completa `contact.email`, el formulario abre el cliente de correo con `mailto:`.

## Publicar

Suba el contenido de `dist/` a cualquier hosting de archivos estáticos. No hay variables de entorno ni servidor propio.
