<template>
  <header class="bg-gray-100 border-b">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <div class="text-xl font-semibold">
        <span class="text-black">Boots</span>
        <span class="text-orange-500"> Lover</span>
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
        <button class="hover:text-black transition">🔍</button>
        <button class="hover:text-black transition">👤</button>
        <button class="hover:text-black transition">🛍️</button>
      </div>

    </div>
  </header>
</template>

<style scoped>

</style>