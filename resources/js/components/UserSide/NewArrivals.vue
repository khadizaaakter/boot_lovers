<template>
  <section class="arrivals">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="mb-10">
        <h2 class="section-title font-display">
          <span class="sparkle-text">
            New arrivals
            <i class="sparkle s1" aria-hidden="true"></i>
            <i class="sparkle s2" aria-hidden="true"></i>
            <i class="sparkle s3" aria-hidden="true"></i>
            <i class="sparkle s4" aria-hidden="true"></i>
          </span>
        </h2>
        <p class="section-sub">Fresh drops, just landed</p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <a v-for="p in products" :key="p.name" href="#" class="prod-card">
          <div class="prod-image" :style="{ backgroundImage: `url(${p.image})` }">
            <!-- <span v-if="p.discount" class="prod-badge">-{{ p.discount }}%</span> -->
            <button class="quick-add" aria-label="Quick add">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>
          <div class="prod-meta">
            <p class="prod-cat">{{ p.cat }}</p>
            <h3 class="prod-name">{{ p.name }}</h3>
            <div class="prod-prices">
              <span class="prod-price">৳{{ p.price.toLocaleString("en-IN") }}</span>
              <span v-if="p.was" class="prod-was"
                >৳{{ p.was.toLocaleString("en-IN") }}</span
              >
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
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ironclad Combat Boot",
    cat: "MEN · BOOTS",
    price: 5899,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cloud Runner Sneaker",
    cat: "MEN · SNEAKERS",
    price: 2799,
    was: 3499,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Velocity Mesh Runner",
    cat: "MEN · SPORTS",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Executive Oxford",
    cat: "MEN · FORMAL",
    price: 3899,
    was: 4799,
    discount: 19,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Midnight Derby",
    cat: "MEN · FORMAL",
    price: 4499,
    image:
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Field Pro Cleat",
    cat: "MEN · SPORTS",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Skyline High-Top",
    cat: "MEN · SPORTS",
    price: 4299,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80",
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

.sparkle-text {
  position: relative;
  display: inline-block;
  background: linear-gradient(90deg, #111 0%, #f59222 50%, #111 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: sparkle-shine 4s linear infinite;
}

.sparkle {
  position: absolute;
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #fff 0%, #ffd87a 40%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  will-change: transform, opacity;
  filter: drop-shadow(0 0 4px #f59222);
}
.sparkle::before,
.sparkle::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 45%, #fff 50%, transparent 55%);
}
.sparkle::after {
  transform: rotate(90deg);
}

.s1 {
  top: -10px;
  left: -14px;
  animation: sparkle-twinkle 2.4s ease-in-out infinite;
}
.s2 {
  top: 4px;
  right: -18px;
  width: 8px;
  height: 8px;
  animation: sparkle-twinkle 2.8s ease-in-out 0.6s infinite;
}
.s3 {
  bottom: -8px;
  left: 30%;
  width: 10px;
  height: 10px;
  animation: sparkle-twinkle 3.2s ease-in-out 1.1s infinite;
}
.s4 {
  top: -4px;
  left: 55%;
  width: 6px;
  height: 6px;
  animation: sparkle-twinkle 2.2s ease-in-out 1.6s infinite;
}

@keyframes sparkle-shine {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes sparkle-twinkle {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.4) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sparkle-text,
  .sparkle {
    animation: none;
  }
  .sparkle-text {
    -webkit-text-fill-color: #111;
  }
}
.section-sub {
  color: #8a8478;
  margin-top: 6px;
  font-size: 0.95rem;
}

.prod-card {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.prod-card:hover {
  transform: translateY(-4px);
}

.prod-image {
  position: relative;
  aspect-ratio: 1 / 1;
  background-color: #f0e9dd;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.4s ease;
}
.prod-card:hover .prod-image {
  box-shadow: 0 18px 30px -16px rgba(0, 0, 0, 0.22);
}
.prod-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.4s ease;
}
.prod-card:hover .prod-image::after {
  background: rgba(0, 0, 0, 0.04);
}

/* .prod-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #f59222;
  color: #fff;
  font-weight: 700;
  font-size: 0.74rem;
  padding: 5px 10px;
  border-radius: 999px;
  z-index: 2;
  letter-spacing: 0.04em;
} */

.quick-add {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: #1a1a1a;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transform: translateY(8px) scale(0.9);
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    background 0.3s ease;
}
.prod-card:hover .quick-add {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.quick-add:hover {
  background: #f59222;
}

.prod-meta {
  padding: 14px 4px 4px;
}
.prod-cat {
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  color: #8a8478;
  font-weight: 600;
  margin-bottom: 6px;
}
.prod-name {
  font-weight: 600;
  font-size: 1.02rem;
  color: #1a1a1a;
  margin-bottom: 6px;
  transition: color 0.3s ease;
}
.prod-card:hover .prod-name {
  color: #f59222;
}

.prod-prices {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.prod-price {
  color: #1a1a1a;
  font-weight: 700;
  font-size: 0.98rem;
}
.prod-was {
  color: #b6ad9c;
  text-decoration: line-through;
  font-size: 0.85rem;
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
</style>
