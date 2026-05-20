const products = [
  {
    id: 1,
    name: 'Barisofá Prestige',
    description: 'Sofá clásico de 3 plazas en terciopelo y madera noble.',
    price: 455000,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Baricama Deluxe',
    description: 'Cama king size con cabecera capitoné y detalles elegantes.',
    price: 820000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Barimesa Imperial',
    description: 'Mesa de comedor extensible con acabado en nogal oscuro.',
    price: 560000,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Baricómoda Heritage',
    description: 'Cómoda amplia con cajones finos y herrajes dorados.',
    price: 410000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    name: 'Barisilla Lounge',
    description: 'Silla lounge tapizada con estilo clásico y líneas suaves.',
    price: 215000,
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Barimueble TV',
    description: 'Mueble para TV con cajones y estantes en madera elegante.',
    price: 335000,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e956?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 7,
    name: 'Baricocina Suite',
    description: 'Juego de cocina con isla central y acabados clásicos.',
    price: 980000,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 8,
    name: 'Baridestino Shelves',
    description: 'Estantería de pared con diseño elegante y amplio almacenamiento.',
    price: 195000,
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b76?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 9,
    name: 'Baripuf Royale',
    description: 'Puff clásico redondo para rincones de descanso y lectura.',
    price: 175000,
    image: 'https://images.unsplash.com/photo-1560448077-6e17cf8b5997?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 10,
    name: 'Barivitrina Classic',
    description: 'Vitrina para comedor con vidrio y acabado en madera natural.',
    price: 370000,
    image: 'https://images.unsplash.com/photo-1516684669134-de6b06da5093?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 11,
    name: 'Baricurva Recámara',
    description: 'Recámara completa con cama curva y muebles de diseño Bari.',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 12,
    name: 'Baribalancín Iberia',
    description: 'Balancín clásico con detalles artesanales y acolchado suave.',
    price: 260000,
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b76?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 13,
    name: 'Baribarra Gourmet',
    description: 'Barra para home bar con bancos y estilo clásico premium.',
    price: 640000,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 14,
    name: 'Barimueble Escritorio',
    description: 'Escritorio ejecutivo con espacio para trabajo y detalles elegantes.',
    price: 290000,
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912f3c5?auto=format&fit=crop&w=900&q=80'
  }
];

const cart = [];
const productGrid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartOverlay = document.getElementById('cartOverlay');
const cartContent = document.getElementById('cartContent');
const cartTotal = document.getElementById('cartTotal');

function formatPrice(value) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value);
}

function renderProducts() {
  productGrid.innerHTML = products.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <div class="product-meta">
          <span class="price">${formatPrice(product.price)}</span>
          <button type="button" data-id="${product.id}">Agregar</button>
        </div>
      </div>
    </article>
  `).join('');
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function openCart() {
  cartPanel.classList.add('open');
  cartOverlay.classList.add('visible');
}

function closeCart() {
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('visible');
}

function renderCart() {
  if (cart.length === 0) {
    cartContent.innerHTML = '<p>Tu carrito está vacío. Agrega muebles Bari para verlos aquí.</p>';
    cartTotal.textContent = formatPrice(0);
    return;
  }
  cartContent.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <h5>${item.name}</h5>
        <span>${formatPrice(item.price)} x ${item.quantity}</span>
      </div>
      <div class="cart-actions">
        <button type="button" data-action="decrease" data-id="${item.id}">-</button>
        <button type="button" data-action="increase" data-id="${item.id}">+</button>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = formatPrice(total);
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartCount();
  renderCart();
  openCart();
}

function handleProductClick(event) {
  const button = event.target.closest('button[data-id]');
  if (!button) return;
  const productId = Number(button.dataset.id);
  addToCart(productId);
}

function handleCartAction(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  const item = cart.find(product => product.id === id);
  if (!item) return;

  if (action === 'increase') {
    item.quantity += 1;
  } else if (action === 'decrease') {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      const index = cart.findIndex(product => product.id === id);
      cart.splice(index, 1);
    }
  }
  updateCartCount();
  renderCart();
}

function handleCheckout() {
  if (cart.length === 0) return;
  alert('Gracias por elegir Barimuebles. Tu carrito fue enviado para cotización.');
  cart.length = 0;
  updateCartCount();
  renderCart();
  closeCart();
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) return;
  alert(`Gracias ${name}, recibimos tu solicitud. Nos contactaremos pronto a ${email}.`);
  form.reset();
}

renderProducts();
productGrid.addEventListener('click', handleProductClick);
cartOverlay.addEventListener('click', closeCart);
cartPanel.addEventListener('click', handleCartAction);
document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);
document.getElementById('cartToggle').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
renderCart();
