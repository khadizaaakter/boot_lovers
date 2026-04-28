<template>
  <section class="onsale">
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="flex items-end justify-between mb-10">
        <div>
          <h2 class="section-title font-display">On sale now</h2>
          <p class="section-sub">Limited stock — go fast</p>
        </div>
        <a href="#" class="view-all">
          View all
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="bento-grid">
        <a
          v-for="(p, i) in products"
          :key="i"
          href="#"
          :class="['sale-card', p.span]"
          :style="{ backgroundImage: `url(${p.image})` }"
        >
          <span class="sale-badge">-{{ p.discount }}%</span>
          <div class="sale-overlay">
            <p class="sale-cat">{{ p.cat }}</p>
            <h3 class="sale-name font-display">{{ p.name }}</h3>
            <div class="sale-prices">
              <span class="price-now">৳{{ p.price.toLocaleString("en-IN") }}</span>
              <span class="price-was">৳{{ p.was.toLocaleString("en-IN") }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    name: "Heritage Chelsea Boot",
    cat: "MEN · BOOTS",
    price: 4299,
    was: 5499,
    discount: 22,
    span: "big",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Velocity Mesh Runner",
    cat: "MEN · SPORTS",
    price: 3299,
    was: 3999,
    discount: 18,
    span: "tall",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Skyline High-Top",
    cat: "WOMEN · SPORTS",
    price: 3499,
    was: 4299,
    discount: 19,
    span: "tall",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cloud Runner Sneaker",
    cat: "MEN · SNEAKERS",
    price: 2799,
    was: 3499,
    discount: 20,
    span: "wide",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Midnight Derby",
    cat: "MEN · FORMAL",
    price: 3699,
    was: 4499,
    discount: 18,
    span: "wide",
    image:
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?auto=format&fit=crop&w=900&q=80",
  },
];
</script>

<style scoped>
.section-title {
  font-size: clamp(1.8rem, 3.4vw, 2.5rem);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.02em;
}
.section-sub {
  color: #8a8478;
  margin-top: 6px;
  font-size: 0.95rem;
}

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
.view-all:hover {
  gap: 14px;
  color: #e07a10;
}

/* ───── Bento grid ───── */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  gap: 16px;
}

.big {
  grid-column: span 2;
  grid-row: span 2;
}
.wide {
  grid-column: span 2;
  grid-row: span 1;
}
.tall {
  grid-column: span 1;
  grid-row: span 2;
}
.small {
  grid-column: span 1;
  grid-row: span 1;
}

@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .big,
  .wide {
    grid-column: span 2;
  }
  .tall {
    grid-column: span 1;
    grid-row: span 2;
  }
}
@media (max-width: 600px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }
  .big,
  .wide,
  .tall,
  .small {
    grid-column: span 1;
    grid-row: span 1;
  }
  .big {
    grid-row: span 2;
  }
}

/* ───── Cards ───── */
.sale-card {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: #2c2520;
  border-radius: 14px;
  overflow: hidden;
  display: block;
  text-decoration: none;
  color: #fff;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
  isolation: isolate;
}
.sale-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.78) 100%);
  z-index: 1;
  transition: opacity 0.4s ease;
}
.sale-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 38px -18px rgba(0, 0, 0, 0.45);
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
  padding: 18px 20px;
  z-index: 2;
}
.sale-cat {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 6px;
}
.sale-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
  transition: transform 0.4s ease;
}
.big .sale-name {
  font-size: 1.6rem;
}
.sale-card:hover .sale-name {
  transform: translateY(-2px);
}

.sale-prices {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.price-now {
  color: #f59222;
  font-weight: 700;
  font-size: 1.05rem;
}
.price-was {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: line-through;
  font-size: 0.9rem;
}
</style>
