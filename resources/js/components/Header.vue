<template>
  <header class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="logo text-2xl font-semibold cursor-pointer">
        <span class="logo-text">Boot</span>
        <span class="logo-text logo-lovers"> Lovers</span>
      </div>

      <!-- Menu -->
      <nav class="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <router-link to="/" class="nav-link">All</router-link>
        <router-link to="#" class="nav-link">Boots</router-link>
        <router-link to="#" class="nav-link">Sneakers</router-link>
        <router-link to="#" class="nav-link">Formal</router-link>
        <router-link to="#" class="nav-link">Sports</router-link>
        <router-link to="#" class="nav-link">Kids</router-link>
      </nav>

      <!-- Right Icons -->
      <div class="flex items-center gap-5 text-gray-700">
        <button aria-label="Search" class="icon-btn">
          <img src="/images/ri--search-line.svg" alt="Search" class="w-5 h-5" />
        </button>
        <button aria-label="Account" class="icon-btn">
          <img src="/images/line-md--account.svg" alt="Account" class="w-5 h-5" />
        </button>
        <button aria-label="Cart" class="icon-btn">
          <img src="/images/wired-outline-146-trolley-hover-jump (1).svg" alt="Cart" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Logo hover: slight scale up and turn fully black */
.logo {
  display: inline-block;
  transition: transform 0.3s ease;
  transform-origin: left center;
}
.logo .logo-text {
  transition: color 0.3s ease;
  color: #000;
}
.logo .logo-lovers {
  color: #f97316; /* orange-500 */
}
.logo:hover {
  transform: scale(1.08);
}
.logo:hover .logo-text {
  color: #000;
}

/* Nav link underline animation */
.nav-link {
  position: relative;
  color: #374151;
  transition: color 0.3s ease;
  padding-bottom: 4px;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: width 0.35s ease;
}
.nav-link:hover {
  color: #000;
}
.nav-link:hover::after {
  width: 100%;
}

/* Icon button hover animation */
.icon-btn {
  color: #374151;
  transition: transform 0.3s ease, color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.icon-btn img {
  transition: transform 0.3s ease, filter 0.3s ease;
}
.icon-btn:hover {
  color: #000;
  transform: translateY(-2px);
}
.icon-btn:hover img {
  transform: scale(1.2) rotate(-6deg);
  filter: brightness(0);
}
</style>
