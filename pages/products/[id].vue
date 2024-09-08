<template>
  <Loading v-if="pending" />
  <div v-else>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
import type { RouteParams } from "vue-router";

definePageMeta({
  layout: "products",
});

const { id }: RouteParams<string> = useRoute().params;
const apiURL = `https://fakestoreapi.com/products/${id}`;

// fetch the exact product via id

const { data: product, pending }: any = useFetch(apiURL);
</script>

<style scoped></style>
