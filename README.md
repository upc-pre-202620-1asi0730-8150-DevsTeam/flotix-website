# Flotix Website

Landing page de Flotix, plataforma de gestión de flotas con monitoreo GPS e IoT en tiempo real. Sitio estático en HTML, CSS y JavaScript, con soporte bilingüe (EN / ES).

## Estructura

```
flotix-website/
├── README.md
└── public/
    ├── index.html        # Página principal
    ├── privacy.html      # Política de privacidad
    ├── terms.html        # Términos y condiciones
    ├── _header.html      # Encabezado reutilizable (se inyecta con JS)
    ├── _footer.html      # Pie de página reutilizable (se inyecta con JS)
    └── assets/
        ├── images/       # Logos, favicon, hero y fotos del equipo
        ├── scripts/main.js
        └── styles/styles.css
```

## Cómo ejecutarlo

El header y el footer se cargan con `fetch()`, por lo que el sitio debe servirse desde un servidor web (no abrir el HTML con doble clic):

```bash
cd public
python3 -m http.server 8000
# abrir http://localhost:8000
```

También funciona con Live Server (VS Code / WebStorm) o con Netlify apuntando a la carpeta `public`.

## Notas

- Idioma: botones EN / ES en el header; la preferencia se guarda en `localStorage`.
- Videos: pega el enlace en el atributo `data-video-url` de cada `.video-frame` en `index.html` (YouTube, Vimeo, Google Drive o .mp4).
- Equipo: Gonzalo Jaime, Mauricio Ramirez, Joaquin Lechuga y Gustavo Olivares.

## Despliegue en GitHub Pages

1. Sube el contenido de `flotix-website/` a la raíz del repositorio (con `public/` y `.github/` dentro).
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada push a `main` publica la carpeta `public/` con el workflow `.github/workflows/pages.yml`.

`public/.nojekyll` evita que Jekyll ignore `_header.html` y `_footer.html` (Jekyll no publica archivos que empiezan con `_`).
