<template>
    <div>
        <h2>About Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto autem dolores magni molestiae, voluptatum tempore iusto perferendis minus corporis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto autem dolores magni molestiae, voluptatum tempore iusto perferendis minus corporis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto autem dolores magni molestiae, voluptatum tempore iusto perferendis minus corporis.</p>

        <div>{{data}}</div>
    </div>
</template>

<script setup lang="ts">
    const {data} = await useFetch("/api/currency/GBP")


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