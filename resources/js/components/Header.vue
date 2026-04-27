<template>
  <header class="site-header">
    <div class="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 items-center">
      <!-- Logo -->
      <router-link to="/" class="logo font-display text-2xl md:text-3xl font-bold tracking-tight">
        <span class="logo-text">Boot</span>
        <span class="logo-text logo-lovers">&nbsp;Lovers</span>
      </router-link>

      <!-- Menu -->
      <nav class="hidden md:flex items-center justify-center gap-9 text-ink-soft font-medium text-[15px]">
        <router-link to="/" class="nav-link">All</router-link>
        <router-link to="#" class="nav-link">Boots</router-link>
        <router-link to="#" class="nav-link">Sneakers</router-link>
        <router-link to="#" class="nav-link">Formal</router-link>
        <router-link to="#" class="nav-link">Sports</router-link>
        <router-link to="#" class="nav-link">Kids</router-link>
      </nav>

      <!-- Right Icons -->
      <div class="flex items-center justify-end gap-5 text-ink-soft">
        <button aria-label="Search" class="icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button aria-label="Account" class="icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
        <button aria-label="Cart" class="icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(245, 239, 230, 0.85);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/* Logo */
.logo {
  display: inline-flex;
  align-items: center;
  transition: transform 0.35s cubic-bezier(.2,.8,.2,1);
  transform-origin: left center;
  color: #111;
  text-decoration: none;
}
.logo .logo-text {
  transition: color 0.35s ease;
  color: #111;
}
.logo .logo-lovers {
  color: #f59222;
}
.logo:hover {
  transform: scale(1.06);
}
.logo:hover .logo-text {
  color: #000;
}

/* Nav links */
.nav-link {
  position: relative;
  color: #4b4b4b;
  transition: color 0.3s ease;
  padding-bottom: 6px;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #111;
  transition: width 0.4s cubic-bezier(.2,.8,.2,1);
}
.nav-link:hover { color: #111; }
.nav-link:hover::after { width: 100%; }
.nav-link.router-link-active { color: #111; }
/* .nav-link.router-link-active::after { width: 100%; } */
.nav-link:hover::after { width: 100%; }


/* Icon buttons */
.icon-btn {
  color: #4b4b4b;
  transition: transform 0.3s ease, color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 999px;
}
.icon-btn:hover {
  color: #111;
  transform: translateY(-2px) scale(1.12);
}
.icon-btn:active { transform: translateY(0) scale(1.05); }
</style>
