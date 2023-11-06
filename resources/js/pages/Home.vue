<template>
    <h1 class="text-3xl">Hello world</h1>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    console.log('Home page loaded');
});
</script>
