/* main.js
   Lógica principal del proyecto: render del catálogo, smooth scroll y generación de enlaces a WhatsApp.
*/

// Nombre del negocio (variable global según requisitos)
const BUSINESS_NAME = "CNC ARTE Y DISEÑO";

// Moneda local
const CURRENCY = 'Bs';

// Número de WhatsApp (usar formato internacional sin + ni espacios), dejar vacío para abrir sólo el mensaje
// Ejemplo: const WHATSAPP_NUMBER = '56912345678';
const WHATSAPP_NUMBER = "59163045636";

// Array de productos (fácil de modificar/expandir)
const PRODUCTS = [
  {
    id: 'p001',
    name: 'Cuadro Illimani 90x35',
    image: 'assets/img/illimani.jpg',
    description: 'Representando de forma artística el cerro Illimani, símbolo majestuoso de La Paz, Bolivia. El diseño en silueta resalta sus cumbres nevadas y formas características. Detrás, cuenta con iluminación LED que crea un efecto de luz ambiental, destacando los contornos de la montaña y aportando un ambiente acogedor y elegante. Ideal para decorar salas, oficinas o espacios culturales con identidad boliviana.', 
    size: '90x35 cm',
    lightType: 'LED fijo (blanco)',
     price: 'S/ 230',
 
    
  },
  {
    id: 'p002',
    name: 'Lampara de pared de Pareja Paceña, ',
    image: 'assets/img/paceña.jpg',
    description: '💛 Amor paceño bajo la luz 💛✨ LED cálido que enamora Arte y tradición en tu hogar 🇧🇴\n Corte CNC profesional\n🎨 Inspirado en la cultura paceña📏 – LED cálido amarillo\n🪵 Corte CNC en trupán ,el diseño permite agregar nombres personalizados  debajo de la figura principal ',
    size: 'Tamaño personalizable',
    lightType: 'LED fijo (calido) o aleccion',
    price: 'S/ 0.',
    variants: [
      { label: 'Pequeño 50x50', price: 200 },
      { label: 'Mediano 60x60', price: 270 },
      { label: 'Grande 70x70', price: 370}
    ]
    
  },
  {
    id: 'p003',
    name: 'Lampara de pared de Tinku',
    image: 'assets/img/tinku.jpg',
    description: '🖤 🔥Así nace el Tinku en luz  Orgullo y tradición boliviana\nEste cuadro luminoso , representa la energía y la pasión del Tinku, una de las danzas más emblemáticas de Bolivia.\nCada pieza es trabajada con precisión\n\nEl Tinku simboliza el encuentro y la fuerza de nuestra cultura.El diseño permite agregar nombres personalizados  debajo de la figura principal ',
    size: 'Tamaño personalizable',
    
    lightType: 'RGB',
    price: 'S/ 0.',
     variants: [
      { label: 'Pequeño 50x50', price: 200 },
      { label: 'Mediano 60x60', price: 270 },
      { label: 'Grande 70x70', price: 370}
    ]
  },
  {
    id: 'p004',
    name: 'Cuadro BLACKPINK ',
    image: 'assets/img/blackpink.jpg',
    description: 'Diseño elaborado en trupán y cortado con precisión mediante tecnología CNC. Iluminado desde la parte trasera con luces LED rosadas que resaltan el logo de BLACKPINK, creando un efecto moderno y llamativo. Ideal para decorar tu espacio y perfecto para las verdaderas BLINK.\n\n✨ Hecho con amor para fans del K-pop\n🔌 Incluye sistema de iluminación LED y cable ',
    size: '90x35 cm',
    lightType: 'LED fijo',
    price: 'S/ 230',
  
  },
  {
    id: 'p005',
    name: 'Cuadro de Bts',
    image: 'assets/img/bts.jpg',
    description: '✨ Letrero BTS con luz LED ✨ Diseño exclusivo hecho en trupán cortado con máquina CNC, con iluminación LED blanca en la parte posterior que resalta el logo de BTS de forma elegante y moderna.✅ Ideal para decorar habitaciones, estudios, tiendas o regalar a un/a fan.✅ Listo para colgar y usar.✅ Hecho a mano con detalles de calidad.💜 ¡Perfecto para ARMYs que quieren algo único',
    size: 'Tamaño personalizable',
    lightType: 'RGB  a elección',
    price: 'S/ 0.',
    variants: [
      { label: 'Pequeño 50x50', price: 200 },
      { label: 'Mediano 60x60', price: 270 },
      { label: 'Grande 70x70', price: 370}
    ]
  },
  {
    id: 'p006',
    name: 'Lampara de pared de Nirvana',
    image: 'assets/img/nirvana.jpg',
    description: 'Lámpara de pared de Nirvana hecha en CNC sobre trupan con iluminacion led crea un efecto increible en la pared .',
    size: '70x50 cm',
    lightType: 'LD fijo',
    price: 'S/ 280',
  
  },
  {
    id: 'p007',
    name: 'Cuadro Spiderman (araña suelta)',
    image: 'assets/img/araña suelta.jpg',
    description: '🕷️ CUADRO DECORATIVO DE SPIDERMAN EN CNC ROUTER 🕷️Cuadro decorativo realizado en CNC Router, trabajado en Trupan de alta calidad, con cortes precisos y un excelente acabado.Incluye iluminación LED por detrás, que resalta el diseño de Spiderman y crea un efecto moderno y llamativo, ideal para dormitorios, salas, cuartos gamer o negocios.',
    size: '50x70 cm',
    lightType: 'RGB',
    price: 'S/ 270',
  
  },
  {
    id: 'p008',
    name: 'Cuadro de Pared Spiderman',
    image: 'assets/img/spiderman.jpg',
    description: 'Diseño geométrico contemporáneo con borde iluminado.',
    size: '60x60 cm',
    lightType: 'Doble LED rojo y azul',
    price: 'S/ 320',
  
  },
  {
    id: 'p009',
    name: 'Cuadro de Spiderman (araña contorno y nombre a elección)',
    image: 'assets/img/araña controno.jpg',
    description: 'Motivo floral tallado en trupán con luz cálida.',
    size: '80x60 cm',
    lightType: 'LED fijo rojo',
    price: 'S/ 320',
    
  },
  {
    id: 'p010',
    name: 'Cuadro de Spiderman (sobresaliente con nombre personalizado)',
    image: 'assets/img/araña completa.jpg',
    description: 'lampara decorativa de spiderman la figura esta enmarcada dentro de un triangulo invertido  con nombre por debajo tiene un costo adicinal de 30 bs mas de igual manera se hacen diseños personalizados ',
    size: 'Tamaño personalizable',
    lightType: 'RGB',
    price: 'S/ 0.',
    variants: [
      { label: 'Pequeño 60x50', price: 240 },
      { label: 'Mediano 70x60', price: 330 },
      { label: 'Grande  80x70', price: 440 }
    ]
  },
  {
    id: 'p011',
    name: 'Cuadro de Capitan America',
    image: 'assets/img/scudo.jpg',
    description: 'cuadro de capitan America con luz led blanca,con nombre por debajo tiene un costo adicinal de 30 bs mas de igual manera se hacen diseños personalizados ',
    size: 'Tamaño personalizable',
    lightType: 'LED fijo',
    price: 'S/ 0.',
   variants: [
      { label: 'Pequeño 50x50', price: 200 },
      { label: 'Mediano 60x60', price: 270 },
      { label: 'Grande 70x70', price: 370}
    ]
  },
  {
    id: 'p012',
    name: 'Lampara de Pared de Batman',
    image: 'assets/img/batman.jpg',
    description: 'Cuadro decorativo de Batman con CNC de 12mm de grosor ,cuenta con luz led a eleccion,blanca,calido,verde,azul,rojo o a control que puedas cambiar las luces a voluntad RGB con costo adicional de 40 bs mas',
    size: '90X35 cm',
    lightType: 'LED a elección',
    price: 'S/ 230',
  
  },
  {
    id: 'p013',
    name: 'Lampara de Pared de Batman silueta (REALISTA) ',
    image: 'assets/img/batman medio cuerpo.jpg',
    description: 'Cuadro decorativo de Batman silueta con CNC de 12mm de grosor ,cuenta con luz led a eleccion,blanca,calido,verde,azul,rojo o a control que puedas cambiar las luces a voluntad RGB con costo adicional de 40 bs mas',
    size: '90X50 cm',
    lightType: 'LED a elección',
    price: 'S/ 350',
  
  },
  {
    id: 'p014',
    name: 'Lampara de Pared de Batman silueta (Mss) ',
    image: 'assets/img/batman silueta.jpg',
    description: 'Cuadro decorativo de Batman silueta con CNC de 12mm de grosor ,cuenta con luz led a eleccion,blanca,calido,verde,azul,rojo o a control que puedas cambiar las luces a voluntad RGB con costo adicional de 40 bs mas',
    size: '50X70 cm',
    lightType: 'LED a elección',
    price: 'S/ 270',
  
  },
  {
    id: 'p015',
    name: 'Lampara de pared de Control Gamer',
    image: 'assets/img/control.jpg',
    description: 'Cuadro decorativo de Control Gamer , de grosor cuenta con luz led a eleccion,blanca,calido,verde,azul,rojo o a control que puedas cambiarlas luces led a voluntad RGB con costo adicional de 40 bs mas',
    size: '60x40 cm',
    lightType: 'LED a elección ',
    price: 'S/ 190',
   
  },
  {
    id: 'p016',
    name: 'Cuadro de Thundercats',
    image: 'assets/img/tundercat.jpg',
    description: 'Diseño con silueta de logo de Thundercats con luz led roja muestra un acabado limpio y preciso',
    size: 'Tamaño personalizable',
    lightType: 'LED a elección',
    price: 'S/ 0.',
    variants: [
      { label: 'Mas Pequeño 40x40', price: 140 },
      { label: 'Pequeño 50x50', price: 200 },
      { label: 'Mediano 60x60', price: 270 },
      { label: 'Grande 70x70', price: 370}
    ]
  },
  {
    id: 'p017',
    name: 'Cuadro de Call of Duty',
    image: 'assets/img/call of duty.jpg',
    description: 'Diseño con silueta de logo de Call of Duty cuenta con luz led a eleccion,blanca,calido,verde,azul,rojo o a control que puedas cambiarlas luces led a voluntad RGB con costo adicional de 40 bs mas',
    size: '90X35 cm',
    lightType: 'LED a elección',
    price: 'S/ 230',
   
  },
  {
    id: 'p018',
    name: 'Lampara de pared de Minecraft de Creeper',
    image: 'assets/img/creeper.jpg',
    description: 'Lampara de pared de Creeper de Minecraft hecha en CNC  sobre  trupan y con iluminacion led crea un efecto increible en la pared .',
    size: 'tamaño personalizable',
    lightType: 'LED fijo / RGB',
    price: 'S/0.',
     variants: [
       { label: 'Mas Pequeño 40x40', price: 140 },
      { label: 'Pequeño 50x50', price: 200 },
      { label: 'Mediano 60x60', price: 270 },
      { label: 'Grande 70x70', price: 370}
    ]
  }
  ,
  {
    id: 'p019',
    name: 'Lampara de pared de letrero de Minecraft',
    image: 'assets/img/letrero minicraft nuevo.jpg',
    description: 'Letrero decorativo inspirado en Minecraft  iluminado con luces LED que resaltan los detalles del logo de minecraft  y crean un ambiente acogedor y temático para fans del juego.',
    size: '30 x90 cm',
    lightType: 'LED fijo / RGB',
    price: 'S/ 230'
  },
  {
    id: 'p020',
    name: 'Lámpara de Pared de Mariposa',
    image: 'assets/img/mariposa.jpg',
    description: 'Decoracion de mariposa floral en trupan iluminado cuenta con luz led a eleccion,blanca,calido,verde,azul,rojo o a control que puedas cambiarlas luces led a voluntad RGB con costo adicional de 40 bs mas',
    size: '70x60 cm',
    lightType: 'led a elección',
    price: 'S/ 350'
  },
  {
    id: 'p021',
    name: 'Lampara de pared de Mascota',
    image: 'assets/img/perro.jpg',
    description: 'Arte con luz para tu mascota 🐾✨ Personaliza con su nombre y elige el color de luz LED que más te guste. Ideal para decorar su espacio especial en casa. Hecho en trupán con corte CNC de alta precisión. ¡Un detalle único para los amantes de los animales! ',
    size: 'Personalizable',
    lightType: 'LED a elección',
    price: 'S/ 0.',
    variants: [
      
      
      { label: 'mediano 50x60', price: 230}
       
      
    ]
   
  },
   {
    id: 'p022',
    name: 'Lampara de pared de Caballo',
    image: 'assets/img/caballo.jpg',
    description: 'arte con luz para los amantes de los caballos 🐎✨ Personaliza con su nombre y elige el color de luz LED que más te guste. Ideal para decorar su espacio especial en casa. Hecho en trupán con corte CNC de alta precisión. ¡Un detalle único para los amantes de los caballos! ',
    size: 'Personalizable',
    lightType: 'LED a elección',
    price: 'S/ 0.',
    variants: [
      
      { label: 'Mediano 60x60', price: 270 },
      { label: 'Grande 70x70', price: 370}
    ]
   
  },
  {
    id: 'p023',
    name: 'Lámpara de pared de Themis',
    image: 'assets/img/themis.jpg',
    description: 'Lámpara de pared de Themis, la diosa de la justicia, representada con una balanza y una espada. Hecha en trupán con corte CNC de alta precisión, iluminada con luces LED que resaltan los detalles del diseño y crean un ambiente elegante y simbólico. Ideal para oficinas, despachos legales o espacios que valoren la justicia y el equilibrio .',
    size: '50X60 cm',
    lightType: 'LED a elección',
    price: 'S/ 240'
  },
  {
    id: 'p024',
    name: 'Lámpara de pared de abogado penalista',
    image: 'assets/img/abogado penalista.jpg',
    description: 'Lámpara de pared de abogado penalista, representada con una balanza y un libro de leyes.se hacen diseños personalizados refernte a abogados o penalistas',
    size: 'varios tamaños al gusto',
    lightType: 'LED a elección',
    price: 'S/ 0.'
  },
  {
    id: 'p025',
    name: 'Lámpara de pared de Messi',
    image: 'assets/img/messi.jpg',
    description: 'Lámpara de pared de Messi, el icono del fútbol, representada con su silueta. Hecha en trupán con corte CNC de alta precisión, iluminada con luces LED que resaltan los detalles del diseño y crean un ambiente elegante y simbólico .',
    size: '60x65 cm o personalizable',
    lightType: 'LED a elección',
    price: 'S/ 280'
  },
  {
    id: 'p026',
    name: 'Lámpara de pared de Barcelona',
    image: 'assets/img/barcelona.jpg',
    description: 'Lámpara de pared de Barcelona un icono del futbol realizada en trupán con corte CNC de alta precisión, iluminada con luces LED que resaltan los detalles del diseño y crean un ambiente elegante y simbólico .',
    size: '50x50',
    lightType: 'LED azul y rojo ',
    price: 'S/ 230'
  },
   {
    id: 'p027',
    name: 'Lámpara de pared de auto',
    image: 'assets/img/auto.jpg',
    description: 'Lámpara de pared de auto deportivo, representada con su silueta. Hecha en trupán con corte CNC de alta precisión, iluminada con luces LED que resaltan los detalles del diseño y crean un ambiente elegante y simbólico .',
    size: '70x50',
    lightType: 'LED a elección',
    price: 'S/ 270'
  },
   {
    id: 'p028',
    name: 'Lámpara de pared de dolar',
    image: 'assets/img/dolar.jpg',
    description: 'Lámpara de pared de dolar, representada con su silueta. Hecha en trupán con corte CNC de alta precisión.',
    size: 'varios tamaños al gusto',
    lightType: 'LED a elección',
    price: 'S/ 0.',
    variants: [
      
      { label: 'pequeño 40x50', price: 160 },
      { label: 'mediano 50x60', price: 230}
    ]
   
  },
     {
    id: 'p029',
    name: 'Lámpara de pared con Neon de League of Legends (Yasuo)',
    image: 'assets/img/neon azul.jpg',
    description: 'Lámpara de pared con Neon de League of Legends, representada con su silueta. Hecha en trupán con corte CNC de alta precisión.',
    size: 'varios tamaños al gusto',
    lightType: 'NEON a elección',
    price: 'S/ 0.',
    variants: [
      
      { label: 'pequeño 60x60', price: 460 },
      { label: 'mediano 70x70', price: 550}
    ]
  },
  {
    id: 'p030',
    name: 'Lámpara de pared con Neon de Alas Duki',
    image: 'assets/img/neon morado.jpg',
    description: 'Lámpara de pared con Neon de Alas Duki, representada con su silueta.para los fans de Duki',
    size: 'varios tamaños al gusto',
    lightType: 'NEON a elección',
    price: 'S/ 0.',
    variants: [
      
      { label: 'pequeño 50x50', price: 400},
      { label: 'mediano 60x60', price: 460}
    ]
  },
    
];

// helper: crea la URL de WhatsApp con mensaje personalizado
function createWhatsAppLink(productName){
  const message = `Hola, quiero consultar sobre el producto "${productName}" de ${BUSINESS_NAME}. ¿Está disponible?`;
  const encoded = encodeURIComponent(message);
  if(WHATSAPP_NUMBER && WHATSAPP_NUMBER.trim() !== ""){
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  }
  // Si no hay número, permite abrir WhatsApp Web con sólo el mensaje
  return `https://wa.me/?text=${encoded}`;
}

// Formatea precios para mostrar la moneda local (Bs). Acepta número o string.
function formatPrice(price){
  if(price === undefined || price === null) return '';
  if(typeof price === 'number') return `${CURRENCY} ${price}`;
  if(typeof price === 'string'){
    const trimmed = price.trim();
    // si contiene letras como "Consultar", devolver tal cual
    if(/^[^0-9]*$/.test(trimmed)) return trimmed;
    // extraer primer número con decimales opcionales
    const m = trimmed.match(/([0-9]+(?:[.,][0-9]+)?)/);
    if(m){
      // normalizar coma a punto
      const num = m[0].replace(',', '.');
      return `${CURRENCY} ${num}`;
    }
    return `${CURRENCY} ${trimmed}`;
  }
  return String(price);
}

// Render del catálogo en el DOM
function renderCatalog(filter = ''){
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  const filteredProducts = PRODUCTS.filter(product => {
    if(!filter) return true;
    const searchTerm = filter.toLowerCase();
    return product.name.toLowerCase().includes(searchTerm) || 
           (product.description && product.description.toLowerCase().includes(searchTerm));
  });

  if(filteredProducts.length === 0){
    grid.innerHTML = '<p style="color:var(--muted);text-align:center;padding:40px 0;">No se encontraron productos que coincidan con tu búsqueda.</p>';
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('role','listitem');

    // Media (placeholder SVG) - usar `assets/img/...` si se agregan imágenes
    const media = document.createElement('div');
    media.className = 'product-media';
    const img = document.createElement('img');
    img.alt = `${product.name} — imagen de producto`;
    // Si el producto tiene ruta de imagen, usarla; si no, usar placeholder SVG data-uri
    if(product.image && product.image.trim() !== ''){
      img.src = product.image;
    } else {
      const placeholderText = encodeURIComponent(product.name);
      img.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='%23070b0f'/><text x='50%' y='50%' fill='%239aa0a6' font-family='Poppins,Arial' font-size='18' dominant-baseline='middle' text-anchor='middle'>${placeholderText}</text></svg>`;
    }
    img.style.cursor = 'pointer';
    // Abrir lightbox al hacer clic en la imagen del producto
    img.addEventListener('click', ()=> openLightboxAt(PRODUCTS.indexOf(product)));
    media.appendChild(img);

    const info = document.createElement('div');
    info.className = 'product-info';
    info.innerHTML = `
      <h4 class="product-title">${product.name}</h4>
      <p class="product-desc">${product.description}</p>
      <div class="product-meta">
        <span class="meta-size">Tamaño: ${product.size}</span>
        <span class="meta-light">Tipo de luz: ${product.lightType}</span>
      </div>
      <div class="product-price">${formatPrice(product.price)}</div>
    `;

    // Si el producto tiene variantes (tamaños con precios), mostrarlas con precio al lado
    if(product.variants && Array.isArray(product.variants) && product.variants.length){
      const variantsWrap = document.createElement('div');
      variantsWrap.className = 'size-variants';
      product.variants.forEach(v => {
        const vEl = document.createElement('div');
        vEl.className = 'variant';

        const label = document.createElement('span');
        label.className = 'variant-label';
        label.textContent = v.label;

        const price = document.createElement('span');
        price.className = 'variant-price';
        price.textContent = formatPrice(v.price);

        vEl.appendChild(label);
        vEl.appendChild(price);
        variantsWrap.appendChild(vEl);
      });
      info.appendChild(variantsWrap);
    }

    const actions = document.createElement('div');
    actions.className = 'product-actions';
    const btn = document.createElement('a');
    btn.className = 'btn outline';
    btn.href = createWhatsAppLink(product.name);
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.textContent = 'Consultar por WhatsApp';
    btn.setAttribute('aria-label', `Consultar ${product.name} por WhatsApp`);

    actions.appendChild(btn);

    card.appendChild(media);
    card.appendChild(info);
    info.appendChild(actions);

    grid.appendChild(card);
  });
}

// Smooth scroll for internal nav links (with focus management)
function enableSmoothScrolling(){
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#' || href === '') return;
      if(href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
          // Mover foco para accesibilidad
          target.setAttribute('tabindex','-1');
          target.focus({preventScroll:true});
        }
      }
    });
  });
}

// Inicialización de botones como el del HERO para WhatsApp
function initHeroWhatsApp(){
  const heroBtn = document.getElementById('hero-whatsapp-btn');
  if(heroBtn){
    heroBtn.addEventListener('click', function(e){
      e.preventDefault();
      const message = `Hola, quisiera información general sobre ${BUSINESS_NAME}.`;
      const encoded = encodeURIComponent(message);
      const url = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
      window.open(url, '_blank');
    });
  }
}

// Inicializar buscador de productos
function initProductSearch(){
  const searchInput = document.getElementById('product-search');
  if(searchInput){
    searchInput.addEventListener('input', (e) => {
      renderCatalog(e.target.value);
    });
  }
}

// Toggle nav (móvil) - improved with animations
function initNavToggle(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(!btn || !nav) return;
  
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const isOpen = nav.classList.contains('open');
    
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.classList.toggle('active');
    nav.classList.toggle('open');
    
    // Prevent body scroll when menu is open on mobile
    if(!isOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when clicking nav links
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', ()=>{
      if(window.innerWidth < 980){
        nav.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });
}

// Inicializar todo al cargar DOM
document.addEventListener('DOMContentLoaded', ()=>{
  renderCatalog();
  enableSmoothScrolling();
  initHeroWhatsApp();
  initNavToggle();
  renderHeroCarousel();
  startCarouselAutoRotate();
  createLightboxElements();
  setupSocialWhatsApp();
  initProductSearch();
});

// Exportar funciones para facilitar pruebas/uso en consola (opcional)
window.CNC = {
  BUSINESS_NAME,
  PRODUCTS,
  renderCatalog,
  createWhatsAppLink
};

/* ------------------ Carrusel en el Hero ------------------ */
// Renderiza slides en el hero a partir de los primeros productos
let _carousel = {
  index: 0,
  interval: null,
  delay: 3500
};

function renderHeroCarousel(){
  const track = document.getElementById('carousel-track');
  const dotsWrap = document.getElementById('carousel-dots');
  if(!track || !dotsWrap) return;
  track.innerHTML = '';
  dotsWrap.innerHTML = '';
  // guardar referencia al track para control por scroll
  _carousel.track = track;

  // Usar hasta 5 productos en el carrusel (configurable)
  const slides = PRODUCTS.slice(0,5);

  slides.forEach((p, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.setAttribute('data-index', String(i));

    const img = document.createElement('img');
    img.alt = `${p.name} — vista previa`;
    // Preferir imagen real si existe, sino placeholder similar al catálogo
    if(p.image && p.image.trim() !== ''){
      img.src = p.image;
    } else {
      const placeholderText = encodeURIComponent(p.name);
      img.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%23070b0f'/><text x='50%' y='50%' fill='%239aa0a6' font-family='Poppins,Arial' font-size='26' dominant-baseline='middle' text-anchor='middle'>${placeholderText}</text></svg>`;
    }

    img.style.cursor = 'pointer';
    // Abrir lightbox al hacer clic en la diapositiva
    img.addEventListener('click', ()=> openLightboxAt(i));
    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('role','tab');
    dot.setAttribute('aria-selected', 'false');
    dot.setAttribute('aria-label', `Ir a ${p.name}`);
    dot.addEventListener('click', ()=>{ goToSlide(i); });
    dotsWrap.appendChild(dot);
  });

  // set initial positions
  updateCarouselUI();

  // pause on hover/focus
  const carousel = document.getElementById('hero-carousel');
  carousel.addEventListener('mouseenter', pauseCarouselAutoRotate);
  carousel.addEventListener('mouseleave', startCarouselAutoRotate);
  carousel.addEventListener('focusin', pauseCarouselAutoRotate);
  carousel.addEventListener('focusout', startCarouselAutoRotate);
}

function updateCarouselUI(){
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const dots = Array.from(document.querySelectorAll('.carousel-dot'));
  // marcar dots
  dots.forEach((d, i) => d.setAttribute('aria-selected', i === _carousel.index ? 'true' : 'false'));
  // hacer scroll hacia la slide actual (si el track está disponible)
  if(_carousel.track && slides[_carousel.index]){
    const target = slides[_carousel.index];
    // scrollTo la posición izquierda del slide dentro del track
    _carousel.track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    // accesibilidad: marcar aria-hidden para slides fuera de viewport aproximado
    slides.forEach((s, i) => s.setAttribute('aria-hidden', i === _carousel.index ? 'false' : 'true'));
  }
}

function goToSlide(i){
  const slides = document.querySelectorAll('.carousel-slide');
  if(!slides.length) return;
  _carousel.index = (i + slides.length) % slides.length;
  updateCarouselUI();
}

function nextSlide(){
  const slides = document.querySelectorAll('.carousel-slide');
  if(!slides.length) return;
  _carousel.index = (_carousel.index + 1) % slides.length;
  updateCarouselUI();
}

function startCarouselAutoRotate(){
  if(_carousel.interval) return;
  _carousel.interval = setInterval(nextSlide, _carousel.delay);
}

function pauseCarouselAutoRotate(){
  if(_carousel.interval){
    clearInterval(_carousel.interval);
    _carousel.interval = null;
  }
}

/* ------------------ Lightbox / Visor de imágenes ------------------ */
let _lightbox = {
  current: 0,
  overlay: null,
  imgEl: null,
  captionEl: null,
  btnClose: null,
  btnNext: null,
  btnPrev: null
};

function createLightboxElements(){
  // overlay
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML = `
    <div class="lightbox-inner" role="dialog" aria-modal="true">
      <button class="lightbox-close" aria-label="Cerrar visor">×</button>
      <button class="lightbox-prev" aria-label="Imagen anterior">‹</button>
      <div class="lightbox-media">
        <img class="lightbox-image" src="" alt="">
        <div class="lightbox-caption"></div>
      </div>
      <button class="lightbox-next" aria-label="Siguiente imagen">›</button>
    </div>
  `;
  document.body.appendChild(overlay);

  _lightbox.overlay = overlay;
  _lightbox.imgEl = overlay.querySelector('.lightbox-image');
  _lightbox.captionEl = overlay.querySelector('.lightbox-caption');
  _lightbox.btnClose = overlay.querySelector('.lightbox-close');
  _lightbox.btnNext = overlay.querySelector('.lightbox-next');
  _lightbox.btnPrev = overlay.querySelector('.lightbox-prev');

  // Eventos
  overlay.addEventListener('click', (e)=>{
    if(e.target === overlay) closeLightbox();
  });
  _lightbox.btnClose.addEventListener('click', closeLightbox);
  _lightbox.btnNext.addEventListener('click', ()=> openLightboxAt(_lightbox.current + 1));
  _lightbox.btnPrev.addEventListener('click', ()=> openLightboxAt(_lightbox.current - 1));

  // teclado
  document.addEventListener('keydown', (e)=>{
    if(!_lightbox.overlay) return;
    if(_lightbox.overlay.getAttribute('aria-hidden') === 'false'){
      if(e.key === 'Escape') closeLightbox();
      if(e.key === 'ArrowRight') openLightboxAt(_lightbox.current + 1);
      if(e.key === 'ArrowLeft') openLightboxAt(_lightbox.current - 1);
    }
  });
}

function openLightboxAt(index){
  if(!Array.isArray(PRODUCTS) || PRODUCTS.length === 0) return;
  // normalizar índice
  const len = PRODUCTS.length;
  let i = ((index % len) + len) % len;
  _lightbox.current = i;
  const p = PRODUCTS[i];
  // elegir fuente de imagen (si existe image) o reconstruir placeholder
  if(p.image && p.image.trim() !== ''){
    _lightbox.imgEl.src = p.image;
  } else {
    const placeholderText = encodeURIComponent(p.name);
    _lightbox.imgEl.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23070b0f'/><text x='50%' y='50%' fill='%239aa0a6' font-family='Poppins,Arial' font-size='40' dominant-baseline='middle' text-anchor='middle'>${placeholderText}</text></svg>`;
  }
  _lightbox.imgEl.alt = `${p.name} — imagen grande`;
  _lightbox.captionEl.textContent = `${p.name} — ${formatPrice(p.price)}`;
  _lightbox.overlay.setAttribute('aria-hidden','false');
  _lightbox.overlay.classList.add('visible');
  // focus al cerrar
  _lightbox.btnClose.focus();
}

function closeLightbox(){
  if(!_lightbox.overlay) return;
  _lightbox.overlay.setAttribute('aria-hidden','true');
  _lightbox.overlay.classList.remove('visible');
}

// Configurar enlace de WhatsApp en la sección de redes sociales
function setupSocialWhatsApp(){
  const message = `Hola, me gustaría obtener más información sobre los productos de ${BUSINESS_NAME}.`;
  const encoded = encodeURIComponent(message);
  const whatsappUrl = WHATSAPP_NUMBER && WHATSAPP_NUMBER.trim() !== "" 
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}` 
    : `https://wa.me/?text=${encoded}`;
  
  const socialWhatsAppBtn = document.getElementById('social-whatsapp-btn');
  if(socialWhatsAppBtn){
    socialWhatsAppBtn.href = whatsappUrl;
  }
  
  const footerWhatsAppBtn = document.getElementById('footer-whatsapp-btn');
  if(footerWhatsAppBtn){
    footerWhatsAppBtn.href = whatsappUrl;
  }
}


