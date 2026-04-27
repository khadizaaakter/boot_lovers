<template>
  <section class="onsale">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="flex items-end justify-between mb-10">
        <div>
          <h2 class="section-title font-display">On sale now</h2>
          <p class="section-sub">Limited stock — go fast</p>
        </div>
        <a href="#" class="view-all">
          View all
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <a v-for="p in products" :key="p.name" href="#" class="sale-card" :style="{ backgroundImage: `url(${p.image})` }">
          <span class="sale-badge">-{{ p.discount }}%</span>
          <div class="sale-overlay">
            <p class="sale-cat">{{ p.cat }}</p>
            <h3 class="sale-name font-display">{{ p.name }}</h3>
            <div class="sale-prices">
              <span class="price-now">৳{{ p.price.toLocaleString('en-IN') }}</span>
              <span class="price-was">৳{{ p.was.toLocaleString('en-IN') }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { name: 'Heritage Chelsea Boot', cat: 'MEN · BOOTS',    price: 4299, was: 5499, discount: 22, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Cloud Runner Sneaker',  cat: 'MEN · SNEAKERS', price: 2799, was: 3499, discount: 20, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { name: 'Executive Oxford',      cat: 'MEN · FORMAL',   price: 3899, was: 4799, discount: 19, image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80' },
  { name: 'Driftwood Slip-On',     cat: 'WOMEN · CASUAL', price: 1799, was: 2299, discount: 22, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80' },
]
</script>

<style scoped>
.section-title {
  font-size: clamp(1.8rem, 3.4vw, 2.5rem);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.02em;
}
.section-sub { color: #8a8478; margin-top: 6px; font-size: 0.95rem; }

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #f59222;
  font-weight: 600;
  font-size: 0.95rem;
  transition: gap 0.3s ease, color 0.3s ease;
  text-decoration: none;
}
.view-all:hover { gap: 14px; color: #e07a10; }

.sale-card {
  position: relative;
  aspect-ratio: 4 / 5;
  background-size: cover;
  background-position: center;
  background-color: #2c2520;
  border-radius: 14px;
  overflow: hidden;
  display: block;
  text-decoration: none;
  color: #fff;
  transition: transform 0.5s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s ease;
  isolation: isolate;
}
.sale-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.78) 100%);
  z-index: 1;
  transition: opacity 0.4s ease;
}
.sale-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 38px -18px rgba(0,0,0,0.45);
}

.sale-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #f59222;
  color: #fff;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 6px 12px;
  border-radius: 999px;
  z-index: 3;
  letter-spacing: 0.04em;
  box-shadow: 0 6px 16px -6px rgba(245, 146, 34, 0.65);
}

.sale-overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 22px 22px 22px;
  z-index: 2;
}
.sale-cat {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  font-weight: 600;
  color: rgba(255,255,255,0.72);
  margin-bottom: 6px;
}
.sale-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
  transition: transform 0.4s ease;
}
.sale-card:hover .sale-name { transform: translateY(-2px); }

.sale-prices { display: flex; align-items: baseline; gap: 10px; }
.price-now { color: #f59222; font-weight: 700; font-size: 1.05rem; }
.price-was { color: rgba(255,255,255,0.55); text-decoration: line-through; font-size: 0.9rem; }
</style>
