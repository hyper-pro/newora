/**
 * NEWORA FASHION - Modern Vanilla JavaScript
 * Lightweight, Ultra-Fast, No Dependencies
 * Optimized for GitHub Pages & Social Media WhatsApp Ordering
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. BRAND CONFIGURATION (Easy for User to Update!)
  // =========================================================================
  const NEWORA_CONFIG = {
    brandName: "Newora",
    brandFullName: "Newora Fashion",
    // Replace with your real WhatsApp Number (e.g. 94771234567 without leading + or spaces)
    whatsappNumber: "94770000000",
    instagramHandle: "neworafashion",
    facebookPage: "neworafashion.lk"
  };

  // =========================================================================
  // 2. PRODUCT DATA STORE (Curated Fashion Collection with Material & Courier details)
  // =========================================================================
  const products = [
    {
      id: "NW-101",
      name: "Newora Aura Pure Linen Maxi",
      category: "linen",
      price: "Rs. 5,450",
      rawPrice: 5450,
      material: "100% Breathable Eco-Linen",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
      badge: "Best Seller",
      badgeClass: "badge-hot",
      courierTag: "⚡ 24h Speed Courier",
      description: "Handcrafted from pure high-density linen. Premium natural texture, soft against the skin, ideal for tropical and all-day wear. Preshrunk fabric guaranteed.",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: "NW-102",
      name: "Newora Velvet Noir Evening Wrap",
      category: "evening",
      price: "Rs. 6,850",
      rawPrice: 6850,
      material: "Lustrous Silk-Velvet Blend",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
      badge: "Signature Collection",
      badgeClass: "badge-material",
      courierTag: "⚡ Express Doorstep",
      description: "Silky luxury drape designed for evening dinners and elegant events. Wrinkle-resistant with double-stitched hem finish.",
      sizes: ["S", "M", "L"]
    },
    {
      id: "NW-103",
      name: "Newora Breeze Cotton Co-ord Set",
      category: "casual",
      price: "Rs. 4,950",
      rawPrice: 4950,
      material: "100% Combed Organic Cotton",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
      badge: "Trending Now",
      badgeClass: "badge-courier",
      courierTag: "⚡ In-Stock Delivery",
      description: "Ultra-comfy, premium combed cotton co-ord set. Breathable fabric that retains color and shape wash after wash.",
      sizes: ["Free Size (Fits S-L)", "XL"]
    },
    {
      id: "NW-104",
      name: "Newora Riviera Floral Tiered Midi",
      category: "casual",
      price: "Rs. 5,200",
      rawPrice: 5200,
      material: "Ultra-Soft Rayon Georgette",
      image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=700&q=80",
      badge: "Speed Courier",
      badgeClass: "badge-courier",
      courierTag: "⚡ 24-48h Delivery",
      description: "Delicate feminine silhouette made from non-sheer, ultra-soft rayon georgette with gentle inner lining.",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: "NW-105",
      name: "Newora Structured Tailored Blazer Dress",
      category: "formal",
      price: "Rs. 7,400",
      rawPrice: 7400,
      material: "Premium Suiting Crepe Blend",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80",
      badge: "High Elegance",
      badgeClass: "badge-material",
      courierTag: "⚡ Doorstep Dispatch",
      description: "Sharp tailoring meets contemporary chic. Anti-wrinkle luxury crepe fabric with satin lapel details.",
      sizes: ["S", "M", "L"]
    },
    {
      id: "NW-106",
      name: "Newora Minimalist Linen Shirt Dress",
      category: "linen",
      price: "Rs. 5,100",
      rawPrice: 5100,
      material: "Stone-Washed Pure Linen",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80",
      badge: "Restocked",
      badgeClass: "badge-hot",
      courierTag: "⚡ Speed Courier",
      description: "Classic collar, mother-of-pearl style buttons, and breathable stone-washed linen. Effortless everyday luxury.",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: "NW-107",
      name: "Newora Graceful Pleated Evening Gown",
      category: "evening",
      price: "Rs. 7,900",
      rawPrice: 7900,
      material: "Imported Chiffon with Satin Lining",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80",
      badge: "Exclusive",
      badgeClass: "badge-hot",
      courierTag: "⚡ Priority Courier",
      description: "Fine accordion pleats with subtle shine. Fully lined with soft satin for ultimate comfort and opaque coverage.",
      sizes: ["S", "M", "L"]
    },
    {
      id: "NW-108",
      name: "Newora Classic Parisian Tweed Set",
      category: "formal",
      price: "Rs. 8,250",
      rawPrice: 8250,
      material: "Imported Textured Cotton Tweed",
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=80",
      badge: "Limited Drop",
      badgeClass: "badge-material",
      courierTag: "⚡ Speed Dispatch",
      description: "Sophisticated boutique tweed with soft inner micro-lining. Features custom gold-tone metallic buttons.",
      sizes: ["S", "M", "L"]
    }
  ];

  // =========================================================================
  // 3. RENDER PRODUCTS INTO GRID
  // =========================================================================
  const productsGrid = document.getElementById('productsGrid');

  function generateWhatsAppUrl(itemCode, itemName, itemPrice) {
    const text = encodeURIComponent(
      `Hello Newora Fashion! 👋\n\nI would like to order this item:\n✨ *Item*: ${itemName}\n🏷️ *Code*: ${itemCode}\n💰 *Price*: ${itemPrice}\n\n🚚 Please check availability and provide doorstep courier details.`
    );
    return `https://wa.me/${NEWORA_CONFIG.whatsappNumber}?text=${text}`;
  }

  function renderProducts(items) {
    if (!productsGrid) return;

    if (items.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">No matching items found</h3>
          <p style="color: var(--color-text-muted);">Try a different keyword or view all collections.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = items.map(p => {
      const waUrl = generateWhatsAppUrl(p.id, p.name, p.price);
      return `
        <article class="product-card" data-id="${p.id}" data-category="${p.category}">
          <div class="product-thumb" onclick="openProductModal('${p.id}')" style="cursor: pointer;" title="Click to view details">
            <img src="${p.image}" alt="Newora Fashion - ${p.name} - Doorstep Courier Delivery" loading="lazy" width="350" height="466">
            <div class="product-tags">
              <span class="tag-badge ${p.badgeClass}">${p.badge}</span>
              <span class="tag-badge badge-courier">${p.courierTag}</span>
            </div>
          </div>
          <div class="product-body">
            <span class="product-category">${p.category}</span>
            <h3 class="product-title" onclick="openProductModal('${p.id}')" style="cursor: pointer;">${p.name}</h3>
            <div class="material-highlight" title="Fabric Quality">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span>${p.material}</span>
            </div>
            <div class="product-footer">
              <div class="product-price">
                <span class="price-current">${p.price}</span>
                <span class="price-courier-note">Doorstep Delivery</span>
              </div>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-order-wa" title="Order directly on WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.977-.276-.1-.476-.15-.677.15-.2.3-.777.977-.952 1.177-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.413-1.488-.893-.795-1.495-1.777-1.671-2.078-.176-.3-.019-.462.132-.612.135-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.026-.527-.075-.15-.677-1.632-.927-2.233-.243-.585-.49-.506-.677-.516-.176-.009-.376-.011-.577-.011-.201 0-.527.075-.802.376-.276.3-1.053 1.028-1.053 2.508 0 1.48 1.079 2.908 1.229 3.109.15.2 2.122 3.242 5.14 4.545.718.31 1.279.495 1.716.634.721.229 1.378.197 1.897.119.578-.087 1.777-.726 2.028-1.428.25-.702.25-1.304.175-1.428-.075-.125-.276-.201-.577-.351z"/>
                  <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.947.561 3.766 1.531 5.307L2.053 22l4.839-1.439A9.957 9.957 0 0012.004 22C17.524 22 22 17.52 22 12s-4.476-10-9.996-10zm0 18.2c-1.67 0-3.235-.487-4.557-1.328l-.326-.208-2.871.854.872-2.775-.226-.341A8.17 8.17 0 013.8 12c0-4.526 3.678-8.2 8.204-8.2 4.522 0 8.196 3.674 8.196 8.2 0 4.526-3.674 8.2-8.196 8.2z"/>
                </svg>
                Order
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Initial render
  renderProducts(products);

  // =========================================================================
  // 4. CATEGORY FILTERING & SEARCH
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('productSearch');
  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let filtered = products;

    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
      );
    }

    renderProducts(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  // =========================================================================
  // 5. PRODUCT DETAILS MODAL
  // =========================================================================
  const modalOverlay = document.getElementById('productModal');
  const modalClose = document.getElementById('modalClose');

  window.openProductModal = function(productId) {
    const item = products.find(p => p.id === productId);
    if (!item || !modalOverlay) return;

    document.getElementById('modalImg').src = item.image;
    document.getElementById('modalImg').alt = `Newora Fashion - ${item.name}`;
    document.getElementById('modalCategory').textContent = item.category.toUpperCase();
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalPrice').textContent = item.price;
    document.getElementById('modalMaterial').textContent = item.material;
    document.getElementById('modalCourier').textContent = item.courierTag + " (Islandwide Doorstep Delivery)";
    document.getElementById('modalDesc').textContent = item.description;
    
    // Sizes pill list
    const sizeContainer = document.getElementById('modalSizes');
    if (sizeContainer) {
      sizeContainer.innerHTML = item.sizes.map(s => 
        `<span style="display:inline-block; border:1px solid #d3cfc7; padding:2px 10px; border-radius:4px; font-size:0.75rem; margin-right:6px;">${s}</span>`
      ).join('');
    }

    const waBtn = document.getElementById('modalWaBtn');
    if (waBtn) {
      waBtn.href = generateWhatsAppUrl(item.id, item.name, item.price);
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // =========================================================================
  // 6. ACCORDION (SEO FAQ)
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        const qBtn = i.querySelector('.faq-question');
        if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // =========================================================================
  // 7. MOBILE MENU TOGGLE
  // =========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close when clicking nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // =========================================================================
  // 8. UPDATE GENERAL WHATSAPP LINKS
  // =========================================================================
  const generalWaLinks = document.querySelectorAll('.dynamic-wa-link');
  generalWaLinks.forEach(link => {
    const defaultMsg = encodeURIComponent("Hello Newora Fashion! 👋 I am browsing your website and would like to ask about available collections and doorstep courier delivery.");
    link.href = `https://wa.me/${NEWORA_CONFIG.whatsappNumber}?text=${defaultMsg}`;
  });

});
