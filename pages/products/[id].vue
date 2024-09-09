<template>

  <Head>
    <Title>Nuxt Store | {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>

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

const { data: product, pending }: any = await useFetch(apiURL);

if(!product.value) {
  throw createError({statusCode: 404, statusMessage: "Product Not Found", fatal: true})
}
</script>

<style scoped></style>
