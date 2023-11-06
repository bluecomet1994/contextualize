<template>
    <div class="flex w-full h-full">
        <div
            class="flex justify-center items-center w-full bg-indigo-500 skew-x-12 -translate-x-24"
        >
            <div class="-skew-x-12 pl-12 w-2/3 text-white">
                <h1 class="text-7xl">{{ websiteData.header.title }}</h1>
                <div class="my-16 text-lg">
                    <div class="flex items-center my-4">
                        <PhoneIcon class="w-6 h-6" />
                        <p class="-mt-1 ml-4">
                            {{ websiteData.contact.phone }}
                        </p>
                    </div>

                    <div class="flex items-center my-4">
                        <MapIcon class="w-6 h-6" />
                        <p class="-mt-1 ml-4">
                            {{ websiteData.contact.location }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center w-full">
            <img alt="banner" src="/assets/head-banner.png" />
        </div>
    </div>
</template>

<script setup>
import { MapIcon, PhoneIcon } from "@heroicons/vue/24/solid";
import websiteData from "../configs/page-data.json";
</script>
