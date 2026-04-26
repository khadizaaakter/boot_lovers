<template>
  <header class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <div class="text-2xl font-semibold">
        <span class="text-black">Boot</span>
        <span class="text-orange-500"> Lovers</span>
      </div>

      <!-- Menu -->
      <nav class="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <router-link to="/" class="hover:text-black transition">All</router-link>
        <router-link to="#" class="hover:text-black transition">Boots</router-link>
        <router-link to="#" class="hover:text-black transition">Sneakers</router-link>
        <router-link to="#" class="hover:text-black transition">Formal</router-link>
        <router-link to="#" class="hover:text-black transition">Sports</router-link>
        <router-link to="#" class="hover:text-black transition">Kids</router-link>
      </nav>

      <!-- Right Icons -->
      <div class="flex items-center gap-5 text-gray-700">
        <button aria-label="Search" class="hover:text-black transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7" />
            <path stroke-linecap="round" d="m20 20-3.5-3.5" />
          </svg>
        </button>
        <button aria-label="Account" class="hover:text-black transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="4" />
            <path stroke-linecap="round" d="M4 21c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        </button>
        <button aria-label="Cart" class="hover:text-black transition">
          <img src="/images/Frame.svg" alt="Cart" class="w-5 h-5" />
        </button>
      </div>

    </div>
  </header>
</template>

<style scoped>

</style>
