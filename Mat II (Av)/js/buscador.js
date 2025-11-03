// === Datos de ejemplo (puedes conectarlo a tu backend más adelante) ===
const propiedades = [
  {
    codigo: "DH-001",
    nombre: "Apartamento de Lujo con Vista al Mar",
    finalidad: "Comprar",
    categoria: "Apartamento",
    ciudad: "Riviera",
    barrio: "Área Comercial Este",
    dormitorios: 3,
    precio: 350000,
    m2: 180,
    banos: 2,
    img: "img/DH-001.png",
    keywords: ["vista al mar", "amenities", "terraza"]
  },
  {
    codigo: "DH-002",
    nombre: "Casa Moderna en Zona Residencial",
    finalidad: "Comprar",
    categoria: "Casa",
    ciudad: "Madrid",
    barrio: "Zona Residencial Norte",
    dormitorios: 4,
    precio: 200000,
    m2: 320,
    banos: 3,
    img: "img/DH-002.png",
    keywords: ["garaje", "jardín", "moderna"]
  },
  {
    codigo: "DH-003",
    nombre: "Chalet Familiar con Jardín",
    finalidad: "Comprar",
    categoria: "Chalet",
    ciudad: "Valencia",
    barrio: "Centro Histórico",
    dormitorios: 5,
    precio: 380000,
    m2: 280,
    banos: 3,
    img: "img/DH-003.jpg",
    keywords: ["jardín", "familiar"]
  },
  {
    codigo: "DH-004",
    nombre: "Loft Industrial Centro",
    finalidad: "Alquilar",
    categoria: "Loft",
    ciudad: "Barcelona",
    barrio: "Centro Histórico",
    dormitorios: 2,
    precio: 1200, // alquiler mensual
    m2: 120,
    banos: 1,
    img: "img/DH-004.jpg",
    keywords: ["industrial", "centro"]
  },
  {
    codigo: "DH-005",
    nombre: "Villa con Piscina",
    finalidad: "Comprar",
    categoria: "Villa",
    ciudad: "Marbella",
    barrio: "Zona Residencial Norte",
    dormitorios: 6,
    precio: 750000,
    m2: 450,
    banos: 4,
    img: "img/DH-005.jpg",
    keywords: ["piscina", "lujo"]
  },
  {
    codigo: "DH-006",
    nombre: "Casa Minimalista",
    finalidad: "Comprar",
    categoria: "Casa",
    ciudad: "Sevilla",
    barrio: "Área Comercial Este",
    dormitorios: 3,
    precio: 290000,
    m2: 200,
    banos: 2,
    img: "img/DH-006.png",
    keywords: ["minimalista", "diseño"]
  }
];

// === Utilidades ===
const $ = (id) => document.getElementById(id);
const val = (id) => ($(id)?.value ?? "").trim();
const num = (id) => {
  const v = val(id);
  const n = v === "" ? null : Number(v);
  return Number.isFinite(n) ? n : null;
};
const norm = (s) =>
  s?.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "") ?? "";

const money = (n) => (n >= 5000 ? `$ ${n.toLocaleString("en-US")}` : `$ ${n}/mes`);

function setCount(n) {
  const c = $("contador");
  if (c) c.textContent = String(n);
}

// Pinta tarjetas con tu mismo estilo (clases existentes en style.css)
function render(lista) {
  const cont = $("resultados");
  if (!cont) return;

  if (!lista.length) {
    cont.innerHTML = `<div class="no-result">No se encontraron propiedades con esos filtros.</div>`;
    setCount(0);
    return;
  }

  cont.innerHTML = lista
    .map((p) => {
      const badge =
        p.finalidad === "Alquilar"
          ? '<span class="badge badge-alquiler">Alquiler</span>'
          : '<span class="badge">En Venta</span>';

      return `
      <div class="card-propiedad">
        <div class="propiedad-imagen">
          <img src="${p.img}" alt="${p.nombre}" loading="lazy">
          ${badge}
        </div>
        <div class="propiedad-info">
          <h3>${p.nombre}</h3>
          <p class="propiedad-descripcion">
            Código: ${p.codigo} • ${p.ciudad} • ${p.barrio}
          </p>
          <div class="propiedad-caracteristicas">
            <span>🛏️ ${p.dormitorios} hab.</span>
            <span>🚽 ${p.banos} baños</span>
            <span>📐 ${p.m2} m²</span>
          </div>
          <div class="propiedad-precio">
            <strong>${money(p.precio)}</strong>
          </div>
          <button class="btn-ver-detalles" data-codigo="${p.codigo}">Ver Detalles</button>
        </div>
      </div>`;
    })
    .join("");

  setCount(lista.length);
}

// Lógica de filtrado leyendo los selects/inputs del formulario
function filtrar() {
  const finalidad = val("finalidad");
  const categoria = val("categoria");
  const ciudad = val("ciudad");
  const barrio = val("barrio");
  const dormitorios = val("dormitorios");
  const precioMax = num("precioMax");
  const textoLibre = norm(val("textoLibre"));
  const codigo = val("codigo").toUpperCase();

  // Campos opcionales (si no existen en el HTML, serán null)
  const banosMin = num("banosMin");
  const banosMax = num("banosMax");
  const m2Min = num("m2Min");
  const m2Max = num("m2Max");

  let lista = [...propiedades];

  if (finalidad)   lista = lista.filter((p) => p.finalidad === finalidad);
  if (categoria)   lista = lista.filter((p) => p.categoria === categoria);
  if (ciudad)      lista = lista.filter((p) => p.ciudad === ciudad);
  if (barrio)      lista = lista.filter((p) => p.barrio === barrio);

  if (dormitorios) {
    lista = dormitorios === "4"
      ? lista.filter((p) => p.dormitorios >= 4)
      : lista.filter((p) => String(p.dormitorios) === dormitorios);
  }

  if (precioMax !== null) {
    lista = lista.filter((p) => p.precio <= precioMax);
  }

  if (banosMin !== null) {
    lista = lista.filter((p) => p.banos >= banosMin);
  }
  if (banosMax !== null) {
    lista = lista.filter((p) => p.banos <= banosMax);
  }

  if (m2Min !== null) {
    lista = lista.filter((p) => p.m2 >= m2Min);
  }
  if (m2Max !== null) {
    lista = lista.filter((p) => p.m2 <= m2Max);
  }

  if (codigo) {
    lista = lista.filter((p) => p.codigo.toUpperCase().includes(codigo));
  }

  if (textoLibre) {
    lista = lista.filter((p) => {
      const haystack = norm(
        [p.nombre, p.ciudad, p.barrio, p.categoria, ...(p.keywords || [])].join(" ")
      );
      const tokens = textoLibre.split(/\s+/).filter(Boolean);
      return tokens.every((t) => haystack.includes(t));
    });
  }

  // --- Orden opcional por precio ---
  const ordenar = val("ordenar");
  if (ordenar === "precio-asc")  lista.sort((a,b)=>a.precio-b.precio);
  if (ordenar === "precio-desc") lista.sort((a,b)=>b.precio-a.precio);

  render(lista);
}

// Limpiar formulario y recargar lista completa
function limpiar() {
  $("form-filtros")?.reset();
  render(propiedades);
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  render(propiedades);

  $("form-filtros")?.addEventListener("submit", (e) => {
    e.preventDefault();
    filtrar();
  });

  $("btn-limpiar")?.addEventListener("click", limpiar);

  // Búsqueda en vivo
  $("textoLibre")?.addEventListener("input", filtrar);
});
