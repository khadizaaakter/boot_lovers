<template>
  <MainLayout>
    <Hero />
    <TrustStrip />
    <ShopByCategory />
    <OnSaleNow />
    <NewArrivals />
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../layouts/MainLayout.vue'
import Hero from '../../components/UserSide/Hero.vue'
import TrustStrip from '../../components/UserSide/TrustStrip.vue'
import ShopByCategory from '../../components/UserSide/ShopByCategory.vue'
import OnSaleNow from '../../components/UserSide/OnSaleNow.vue'
import NewArrivals from '../../components/UserSide/NewArrivals.vue'
</script>
