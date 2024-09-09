<template>
    <div class="mx-auto mx-10 min-h-screen flex  items-center">
        <div class="p-5 max-w-sm mx-auto text-center card w-full">
            <p class="text-7xl font-bold">{{ error.statusCode }}</p>
            <p class="mt-7 text-6xl">Ooops. </p>
            <p class="mt-7" >{{ error.message }}</p>

            <button class="btn my-7" @click="handleClearError">Go Home...</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const error = useError()

    const handleClearError = () => clearError({redirect: "/"})
</script>

<style scoped>

</style>