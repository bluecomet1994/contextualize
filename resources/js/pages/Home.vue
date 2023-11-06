<template>
    <div class="flex flex-col w-full h-screen overflow-hidden">
        <navbar-vue></navbar-vue>
        <header-vue></header-vue>
    </div>
    <service-vue></service-vue>
    <partner-vue></partner-vue>
    <footer-vue></footer-vue>
</template>

<script setup>
import NavbarVue from "../components/Navbar.vue";
import HeaderVue from "../components/Header.vue";
import ServiceVue from "../components/Service.vue";
import PartnerVue from "../components/Partner.vue";
import FooterVue from "../components/Footer.vue";
</script>
