# Av.Mat-II-6-
DreamHomes Imobiliária é um site criado do zero em HTML, CSS e JavaScript. Possui paleta e fontes personalizadas, imagens temáticas, textos originais e seções como Serviços e Missão. Representa uma imobiliária moderna com busca interativa de propriedades.

<img width="1360" height="768" alt="image" src="https://github.com/user-attachments/assets/3b8c18b1-aba4-43be-93e3-e15b9abc2ee6" />
<img width="1360" height="768" alt="image" src="https://github.com/user-attachments/assets/47fe9b9e-8dcc-45a3-9753-25142de57f89" />

<img width="1360" height="768" alt="image" src="https://github.com/user-attachments/assets/19143800-3281-43fe-b247-04ecbf2b6f31" />
<img width="1360" height="768" alt="image" src="https://github.com/user-attachments/assets/d847833e-7cc0-4918-8cba-314e41838467" />

Project Code Structure Tree

index.html
│
├── <!DOCTYPE html>
├── <html lang="pt-BR">
│
├── <head>
│   ├── <meta charset="UTF-8">
│   ├── <meta name="viewport" content="width=device-width, initial-scale=1.0">
│   ├── <title>DreamHomes Imobiliária</title>
│   ├── <meta name="description" ... >
│   ├── Google Fonts (Momo Trust Display, Inter)
│   └── <link rel="stylesheet" href="style.css">
│
├── <body>
│   │
│   ├── <header id="inicio">
│   │   ├── <nav class="container-nav">
│   │   │   └── <ul>
│   │   │       ├── <li class="marca">DreamHomes</li>
│   │   │       ├── <li><a href="#inicio">Início</a></li>
│   │   │       ├── <li><a href="#quienes-somos">Quem Somos</a></li>
│   │   │       ├── <li><a href="#propiedades">Imóveis</a></li>
│   │   │       ├── <li><a href="#servicios">Serviços</a></li>
│   │   │       ├── <li><a href="#contacto">Contato</a></li>
│   │   │       └── <li><a href="#login">Login/Sign</a></li>
│   │   └── <div class="hero-text-bottom">
│   │       ├── <h1>DreamHomes Imobiliária</h1>
│   │       └── <p>Encontre a casa dos seus sonhos</p>
│   │
│   ├── <main>
│   │   ├── <section id="quienes-somos">Quem Somos</section>
│   │   ├── <section id="propiedades">Imóveis em Destaque
│   │   │   ├── <form id="form-filtros" class="filtros-avanzados">
│   │   │   │   ├── Filtros: finalidade, categoria, cidade, bairro,
│   │   │   │   │   dormitorios, preço, texto livre, código
│   │   │   │   └── Botones: Buscar / Limpar
│   │   │   ├── <div class="resultados-header">
│   │   │   │   ├── <strong id="contador">0</strong>
│   │   │   │   └── <select id="ordenar">
│   │   │   └── <div id="resultados"></div>
│   │   │
│   │   ├── <section id="servicios">Serviços</section>
│   │   ├── <section id="mision">Missão & Valores</section>
│   │   ├── <section id="nuestro-equipo">Nossa Equipe</section>
│   │   ├── <section id="inversores">Investidores</section>
│   │   └── <section id="contacto">Contato</section>
│   │
│   └── <script src="js/buscador.js"></script>
│
└── </html>

style.css
│
├── VARIABLES + TIPOGRAFÍA
│   ├── :root (paleta DreamHomes, radius, shadow)
│   └── body, h1-h3, fuentes Inter + Momo Trust
│
├── NAVEGACIÓN (.container-nav)
│   ├── Fondo negro + triángulo dorado decorativo
│   ├── Lista horizontal de enlaces
│   ├── Efectos hover (subrayado animado)
│   └── Responsive para móviles
│
├── HEADER / HERO
│   ├── Imagen de fondo (img/sean-pollock…)
│   ├── Texto inferior centrado (h1 + p)
│   └── Sombras y tipografía display
│
├── SECCIONES GENERALES (.contenido-seccion)
│   ├── Layout común (padding, ancho máximo)
│   ├── Títulos con borde dorado
│   └── Sección alternativa con fondo claro y sombra
│
├── BUSCADOR DE PROPIEDADES
│   ├── Fondo con gradiente azul petróleo
│   ├── Formulario `.filtros-avanzados`
│   │   ├── Filtros agrupados por fila
│   │   ├── Selects, inputs, estilos focus
│   │   ├── Botones: `.btn-buscar`, `.btn-limpiar`
│   │   └── Diseño responsive
│
├── GRILLA DE PROPIEDADES
│   ├── `.grid-propiedades` (display: grid)
│   ├── `.card-propiedad` (tarjeta individual)
│   │   ├── `.propiedad-imagen` + `.badge`
│   │   ├── `.propiedad-info` (h3, descripción)
│   │   ├── `.propiedad-caracteristicas`
│   │   ├── `.propiedad-precio`
│   │   └── `.btn-ver-detalles`
│
├── CONTACTO
│   ├── Fondo azul + texto blanco
│   ├── Borde lateral dorado en info
│   └── Sombra suave
│
├── RESULTADOS HEADER
│   ├── Contador de resultados
│   ├── Select de ordenamiento
│   └── Fondo gris claro con bordes redondeados
│
└── RESPONSIVE DESIGN
    ├── Breakpoint 768px → tablets
    ├── Breakpoint 480px → móviles
    └── prefers-reduced-motion → accesibilidad

buscador.js
│
├── Datos de ejemplo (const propiedades)
│   ├── Código, nombre, finalidad, categoría
│   ├── Ciudad, barrio, dormitorios, precio, m², baños
│   ├── Imagen (img/DH-001.png …)
│   └── keywords (array)
│
├── Funciones utilitarias
│   ├── $(id) → document.getElementById
│   ├── val(id) → obtiene valor string
│   ├── num(id) → obtiene número o null
│   ├── norm(s) → texto en minúsculas sin acentos
│   ├── money(n) → formatea precios ($ o $/mes)
│   └── setCount(n) → actualiza contador de resultados
│
├── render(lista)
│   ├── Genera HTML dinámico de tarjetas (.card-propiedad)
│   ├── Inserta en <div id="resultados">
│   ├── Badge según finalidad (Venta / Alquiler)
│   ├── Muestra nombre, código, ciudad, m², baños, etc.
│   ├── Formatea precio
│   └── Actualiza contador
│
├── filtrar()
│   ├── Lee valores del formulario:
│   │   finalidade, categoria, ciudad, barrio,
│   │   dormitorios, precio, código, texto libre
│   ├── Aplica filtros secuenciales al array `propiedades`
│   ├── Aplica orden por precio (asc / desc)
│   └── Llama a render(listaFiltrada)
│
├── limpiar()
│   ├── Resetea el formulario (#form-filtros)
│   └── Llama a render(propiedades)
│
└── Eventos
    ├── DOMContentLoaded → render(propiedades)
    ├── form submit → filtrar()
    ├── btn-limpiar click → limpiar()
    └── textoLibre input → búsqueda en vivo

