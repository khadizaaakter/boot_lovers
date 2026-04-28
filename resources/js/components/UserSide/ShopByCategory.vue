<template>
  <section class="categories">
    <div class="py-20">
      <div class="text-center mb-14 px-6">
        <h2 class="section-title">Shop by Category</h2>
        <p class="section-sub">Curated collections, crafted for every occasion.</p>
      </div>

      <div class="marquee" @mouseenter="paused = true" @mouseleave="paused = false">
        <div class="marquee-track" :class="{ paused }">
          <a
            v-for="(c, i) in loop"
            :key="i"
            href="#"
            class="marquee-card"
            :aria-hidden="i >= cats.length ? 'true' : null"
          >
            <img :src="c.image" :alt="c.name" class="marquee-img" loading="lazy" />
            <div class="marquee-label">
              <h3>{{ c.name }}</h3>
              <span>{{ c.desc }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const cats = [
  {
    name: "Boots",
    desc: "Built tough for any terrain",
    image: "/images/grailify-adidas-5400466.jpg",
  },
  {
    name: "Sneakers",
    desc: "Everyday comfort meets style",
    image: "/images/pexels-feet-1840619_1920.jpg",
  },
  {
    name: "Formal",
    desc: "Sharp & sophisticated",
    image: "/images/tylermike525-brogue-shoes-6072988.jpg",
  },
  {
    name: "Sports",
    desc: "Performance ready",
    image: "/images/grailify-adidas-5400466.jpg",
  },
  {
    name: "Kids",
    desc: "Fun, comfy & colorful",
    image: "/images/pexels-feet-1840619_1920.jpg",
  },
  {
    name: "Casual",
    desc: "Relaxed everyday vibe",
    image: "/images/grailify-adidas-5400466.jpg",
  },
  {
    name: "Sandals",
    desc: "Light & airy summer pick",
    image: "/images/pexels-feet-1840619_1920.jpg",
  },
  {
    name: "Trending",
    desc: "Hot picks this week",
    image: "/images/tylermike525-brogue-shoes-6072988.jpg",
  },
];

const paused = ref(false);
const loop = computed(() => [...cats, ...cats]);
</script>

<style scoped>
.section-title {
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  font-family: "Playfair Display", serif;
}
.section-sub {
  margin-top: 8px;
  color: #6b6b6b;
}

.marquee {
  position: relative;
  overflow: hidden;
  width: 100%;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 20px;
  padding: 8px 10px;
  animation: marquee-scroll 40s linear infinite;
  will-change: transform;
}
.marquee-track.paused {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 10px));
  }
}

.marquee-card {
  position: relative;
  flex: 0 0 auto;
  width: 250px;
  height: 250px;
  border-radius: 18px;
  overflow: hidden;
  background: #f0e9dd;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}
.marquee-card:hover {
  box-shadow: 0 18px 30px -16px rgba(0, 0, 0, 0.22);
  transform: translateY(-3px);
}

.marquee-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.marquee-card:hover .marquee-img {
  transform: scale(1.06);
}

.marquee-label {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 14px;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.35));
  padding: 30px 4px 4px;
  border-radius: 0 0 14px 14px;
  margin: 0 -4px;
}
.marquee-label h3 {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 2px;
}
.marquee-label span {
  font-size: 0.82rem;
  opacity: 0.92;
}

@media (max-width: 600px) {
  .marquee-card {
    width: 220px;
    height: 290px;
  }
  .marquee-track {
    animation-duration: 32s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
  .marquee {
    overflow-x: auto;
    -webkit-mask-image: none;
    mask-image: none;
  }
}
</style>
