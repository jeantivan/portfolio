# 0001. i18n nativo de Astro y contenido unificado con fallback a español

El portafolio utilizaba anteriormente `@inlang/paraglide-astro` con `prefixDefaultLocale: true` (generando una redirección `<meta http-equiv="refresh">` en blanco en `/`) y carpetas de contenido duplicadas por idioma (`es/` y `en/`), lo que provocó desincronización entre idiomas y bloqueo al actualizar a Astro 7 (`@inlang/paraglide-astro` solo soporta Astro 4/5).

Decidimos usar el enrutamiento nativo `astro:i18n` con `prefixDefaultLocale: false` (español en `/`, inglés en `/en`) con slugs de ruta canónicos (`/projects`, `/skills`, `/contact`), un diccionario JSON tipado para cadenas de UI, y esquemas de contenido unificados donde todo texto localizado exige únicamente español (`es`) y hace fallback automático a `es` cuando la traducción al inglés (`en`) no está presente.
