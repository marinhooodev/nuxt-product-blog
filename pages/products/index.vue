<template>
  <Loading v-if="pending" />
  <div v-else>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const apiURL = "https://fakestoreapi.com/products";

definePageMeta({
  layout: "products",
});

// fetch the products

// await means SSR, so the component will only be rendered when the FETCH ends
// For SEO purposes, SSR is bettear, so USE await.
// For Professional Web Applictions that needs to handle many access at same time, SSR is worst, because it overloads the server. So, do not use await.

const { data: products, pending }: any = useFetch(apiURL);
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
