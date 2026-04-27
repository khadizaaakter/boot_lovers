<template>
  <section class="trust-strip">
    <div class="max-w-7xl mx-auto px-6 py-7 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(item, i) in items" :key="i" class="trust-item">
        <span class="icon-circle">
          <component :is="item.icon" />
        </span>
        <div>
          <p class="trust-title">{{ item.title }}</p>
          <p class="trust-sub">{{ item.sub }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const TruckIcon = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' }),
  h('path', { d: 'M15 18H9' }),
  h('path', { d: 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' }),
  h('circle', { cx: 17, cy: 18, r: 2 }),
  h('circle', { cx: 7, cy: 18, r: 2 }),
])

const ShieldIcon = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }),
  h('path', { d: 'm9 12 2 2 4-4' }),
])

const RotateIcon = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M3 12a9 9 0 1 0 9-9' }),
  h('path', { d: 'M3 4v5h5' }),
])

const items = [
  { icon: TruckIcon, title: 'Free delivery over ৳3000', sub: 'Anywhere in Bangladesh' },
  { icon: ShieldIcon, title: '100% authentic', sub: 'Quality guaranteed' },
  { icon: RotateIcon, title: '7-day easy returns', sub: 'No questions asked' },
]
</script>

<style scoped>
.trust-strip {
  background: #efe6d8;
  border-top: 1px solid rgba(0,0,0,0.04);
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 6px 8px;
  transition: transform 0.35s cubic-bezier(.2,.8,.2,1);
}
.trust-item:hover { transform: translateY(-2px); }

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: #ffe0bd;
  color: #f59222;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.4s cubic-bezier(.2,.8,.2,1), background 0.3s ease;
}
.trust-item:hover .icon-circle {
  transform: rotate(-8deg) scale(1.06);
  background: #ffd49a;
}

.trust-title { font-weight: 600; color: #1a1a1a; font-size: 0.98rem; }
.trust-sub { font-size: 0.85rem; color: #8a8478; margin-top: 2px; }
</style>
