<template>
  <section class="categories">
    <div class="max-w-7xl mx-auto px-6 py-20">

      <!-- Heading -->
      <div class="text-center mb-16 reveal">
        <h2 class="section-title">
          <span class="shimmer-text">Shop by Category</span>
        </h2>
        <p class="section-sub">Curated collections, crafted for every occasion.</p>
      </div>

      <!-- Bento Grid -->
      <div class="bento-grid">
        <div
          v-for="(c, i) in cats"
          :key="i"
          :class="['bento-card', c.span]"
          :style="{ animationDelay: `${i * 90}ms` }"
        >
          <!-- Background image -->
          <div class="bg-image" :style="{ backgroundImage: `url(${c.image})` }"></div>

          <!-- Animated border beam -->
          <div class="border-beam"></div>

          <!-- Gradient overlay -->
          <div class="overlay"></div>

          <!-- Content -->
          <div class="content">
            <span class="number">0{{ i + 1 }}</span>
            <h3>{{ c.name }}</h3>
            <p>{{ c.desc }}</p>
            <div class="cta">
              <span>Explore</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const cats = [
  {
    name: "Boots",
    desc: "Built tough for any terrain",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f",
    span: "big"
  },
  {
    name: "Sneakers",
    desc: "Everyday comfort meets style",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    span: "wide"
  },
  {
    name: "Formal",
    desc: "Sharp & sophisticated",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1",
    span: "small"
  },
  {
    name: "Sports",
    desc: "Performance ready",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    span: "small"
  },
  {
    name: "Kids",
    desc: "Fun, comfy & colorful",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    span: "wide"
  },
  {
    name: "Casual",
    desc: "Relaxed everyday vibe",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    span: "tall"
  },
  {
    name: "Sandals",
    desc: "Light & airy summer pick",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    span: "tall"
  },
  {
    name: "Trending",
    desc: "Hot picks this week",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    span: "wide"
  }
]
</script>

<style scoped>
/* ---------- Heading ---------- */
.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.section-sub {
  color: #777;
  margin-top: 10px;
}

/* Magic UI: AnimatedShinyText */
.shimmer-text {
  background: linear-gradient(
    110deg,
    #1a1a1a 0%,
    #1a1a1a 40%,
    #d4af37 50%,
    #1a1a1a 60%,
    #1a1a1a 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 4s linear infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ---------- Bento layout (4 cols x 4 rows) ---------- */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  gap: 18px;
}
.big   { grid-column: span 2; grid-row: span 2; }
.wide  { grid-column: span 2; grid-row: span 1; }
.tall  { grid-column: span 1; grid-row: span 2; }
.small { grid-column: span 1; grid-row: span 1; }

@media (max-width: 1024px) {
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
  .big, .wide { grid-column: span 2; }
  .tall { grid-row: span 2; grid-column: span 1; }
}
@media (max-width: 600px) {
  .bento-grid { grid-template-columns: 1fr; }
  .big, .wide, .tall, .small { grid-column: span 1; grid-row: span 1; }
}

/* ---------- Card ---------- */
.bento-card {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  cursor: pointer;
  background: transparent;
  isolation: isolate;
  opacity: 0;
  transform: translateY(24px) scale(0.97);
  filter: blur(8px);
  animation: blurFade 0.9s cubic-bezier(.2,.8,.2,1) forwards;
  transition: transform 0.5s cubic-bezier(.2,.8,.2,1);
}
.bento-card:hover { transform: translateY(-4px); }

/* Magic UI: BlurFade entrance */
@keyframes blurFade {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* Background image */
.bg-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.8s cubic-bezier(.2,.8,.2,1), filter 0.6s ease;
  z-index: 0;
}
.bento-card:hover .bg-image {
  transform: scale(1.12);
  filter: brightness(1.05) saturate(1.1);
}

/* Gradient overlay */
.overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
  z-index: 2;
  transition: opacity 0.4s ease;
}

/* ---------- Magic UI: BorderBeam ---------- */
.border-beam {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  padding: 2.5px;
  background: conic-gradient(
    from var(--angle, 0deg),
    transparent 0%,
    transparent 55%,
    #d4af37 70%,
    #fff7c2 80%,
    #ffffff 85%,
    #fff7c2 90%,
    #d4af37 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
          mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  opacity: 0.65;
  filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.6));
  transition: opacity 0.4s ease, filter 0.4s ease;
  z-index: 5;
  pointer-events: none;
  animation: spinAngle 5s linear infinite;
}
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
@keyframes spinAngle {
  to { --angle: 360deg; }
}
.bento-card:hover .border-beam {
  opacity: 1;
  filter: drop-shadow(0 0 10px rgba(255, 215, 100, 0.9));
}

/* ---------- Content ---------- */
.content {
  position: absolute;
  bottom: 22px;
  left: 22px;
  right: 22px;
  color: #fff;
  z-index: 4;
  transform: translateY(8px);
  transition: transform 0.5s cubic-bezier(.2,.8,.2,1);
}
.bento-card:hover .content { transform: translateY(0); }

.number {
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: #d4af37;
  font-weight: 600;
  margin-bottom: 6px;
}
.content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}
.big .content h3 { font-size: 2.2rem; }
.content p {
  font-size: 0.85rem;
  opacity: 0.75;
  margin-bottom: 10px;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s;
}
.cta svg { width: 14px; height: 14px; }
.bento-card:hover .cta {
  opacity: 1;
  transform: translateX(0);
}

/* Reveal heading */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  animation: blurFade 0.8s ease forwards;
}
</style>
