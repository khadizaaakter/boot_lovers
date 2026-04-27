<template>
  <section class="categories">
    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-14">
        <span class="eyebrow">COLLECTIONS</span>
        <h2 class="section-title font-display">Shop by category</h2>
        <p class="section-sub">Curated collections, crafted for every occasion.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        <a
          v-for="(c, i) in cats"
          :key="c.name"
          href="#"
          class="cat-card"
          @mouseenter="hover = i"
          @mouseleave="hover = -1"
        >
          <div class="cat-image" :style="{ backgroundImage: `url(${c.image})` }">
            <span class="cat-number">/ {{ String(i + 1).padStart(2, '0') }}</span>
            <span class="cat-pill">{{ c.styles }}+ STYLES</span>
          </div>
          <div class="cat-meta">
            <div class="flex items-center justify-between">
              <h3 class="cat-name font-display">{{ c.name }}</h3>
              <span class="cat-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </span>
            </div>
            <p class="cat-desc">{{ c.desc }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const hover = ref(-1)
const cats = [
  { name: 'Boots',    styles: 40, desc: 'Built tough, styled timeless', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Sneakers', styles: 60, desc: 'Everyday comfort',              image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { name: 'Formal',   styles: 25, desc: 'Polished and sharp',            image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80' },
  { name: 'Sports',   styles: 35, desc: 'Performance ready',             image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80' },
]
</script>

<style scoped>
.section-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 18px;
  margin-bottom: 10px;
  color: #111;
}
.section-sub {
  color: #8a8478;
  font-size: 1.02rem;
}

.cat-card {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.45s cubic-bezier(.2,.8,.2,1);
}
.cat-card:hover { transform: translateY(-4px); }

.cat-image {
  position: relative;
  aspect-ratio: 1 / 1;
  background-color: #ece4d6;
  background-size: cover;
  background-position: center;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.6s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s ease;
}
.cat-card:hover .cat-image {
  box-shadow: 0 18px 36px -16px rgba(0,0,0,0.25);
}
.cat-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.18) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.cat-card:hover .cat-image::after { opacity: 1; }

.cat-number {
  position: absolute;
  top: 16px;
  left: 18px;
  color: rgba(255,255,255,0.85);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  font-weight: 500;
  z-index: 2;
}
.cat-pill {
  position: absolute;
  bottom: 14px;
  right: 14px;
  background: rgba(20,20,20,0.78);
  color: #fff;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 600;
  z-index: 2;
  backdrop-filter: blur(4px);
}

.cat-meta { padding: 18px 4px 4px; }
.cat-name {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}
.cat-card:hover .cat-name { color: #f59222; }

.cat-desc { color: #8a8478; font-size: 0.92rem; margin-top: 4px; }

.cat-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  transition: transform 0.4s cubic-bezier(.2,.8,.2,1), color 0.3s ease;
}
.cat-card:hover .cat-arrow {
  color: #f59222;
  transform: translate(4px, -4px);
}
</style>
