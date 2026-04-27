<template>
  <section class="hero">
    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="hero-slide"
      :class="{ 'is-active': i === active }"
      :style="{ backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 75%), url(${slide.image})` }"
    ></div>

    <div class="hero-inner max-w-7xl mx-auto px-6 md:px-10">
      <div class="hero-copy">
        <p class="hero-eyebrow">{{ slides[active].eyebrow }}</p>
        <h1 class="hero-title font-display">{{ slides[active].title }}</h1>
        <p class="hero-sub">{{ slides[active].sub }}</p>

        <div class="hero-ctas">
          <button class="btn-primary">
            Shop now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <button class="btn-ghost">Explore boots</button>
        </div>
      </div>
    </div>

    <div class="hero-dots">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="dot"
        :class="{ 'dot-active': i === active }"
        @click="active = i"
        :aria-label="`Go to slide ${i + 1}`"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    eyebrow: 'NEW SEASON · 2026',
    title: 'Step into your story.',
    sub: 'Hand-picked boots, sneakers, formal and sports shoes for men, women and kids — delivered anywhere in Bangladesh.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1800&q=80',
  },
  {
    eyebrow: 'FRESH DROP',
    title: 'Built for every road.',
    sub: 'Discover sneakers engineered for comfort, wrapped in design that turns heads on any street.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=80',
  },
  {
    eyebrow: 'LIMITED EDITION',
    title: 'Polished. Refined.',
    sub: 'Formal shoes crafted from premium leather — for the days that matter most.',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1800&q=80',
  },
]

const active = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    active.value = (active.value + 1) % slides.length
  }, 5500)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.hero {
  position: relative;
  height: clamp(520px, 78vh, 760px);
  overflow: hidden;
  isolation: isolate;
}

.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.06);
  transition: opacity 1.2s ease, transform 7s ease;
  z-index: 1;
}
.hero-slide.is-active {
  opacity: 1;
  transform: scale(1);
}

.hero-inner {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
}

.hero-copy {
  max-width: 620px;
  color: #f5efe6;
  animation: fadeUp 1s cubic-bezier(.2,.8,.2,1) both;
}

.hero-eyebrow {
  letter-spacing: 0.4em;
  font-size: 0.78rem;
  font-weight: 600;
  color: #f59222;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: clamp(2.4rem, 5.4vw, 4.8rem);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.hero-sub {
  font-size: 1.05rem;
  line-height: 1.65;
  color: rgba(245, 239, 230, 0.85);
  max-width: 480px;
  margin-bottom: 2rem;
}

.hero-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #f59222;
  color: #fff;
  padding: 14px 26px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  transition: transform 0.3s cubic-bezier(.2,.8,.2,1), background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 24px -10px rgba(245, 146, 34, 0.6);
}
.btn-primary:hover {
  background: #e07a10;
  transform: translateY(-2px);
  box-shadow: 0 14px 28px -10px rgba(245, 146, 34, 0.7);
}
.btn-primary:hover svg { transform: translateX(4px); }
.btn-primary svg { transition: transform 0.3s ease; }

.btn-ghost {
  background: transparent;
  color: #f5efe6;
  padding: 14px 26px;
  border-radius: 10px;
  border: 1px solid rgba(245, 239, 230, 0.45);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}
.btn-ghost:hover {
  background: rgba(245, 239, 230, 0.12);
  border-color: rgba(245, 239, 230, 0.85);
  transform: translateY(-2px);
}

.hero-dots {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
}
.dot {
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: rgba(245, 239, 230, 0.35);
  transition: background 0.4s ease, width 0.4s ease;
}
.dot:hover { background: rgba(245, 239, 230, 0.6); }
.dot-active { background: #f59222; width: 56px; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
