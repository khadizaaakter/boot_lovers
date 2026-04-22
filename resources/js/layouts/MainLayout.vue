<template>
  <div style="border:5px solid red;">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>