<template>
    <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 justify-between">
                <div class="flex">
                    <div class="-ml-2 mr-2 flex items-center md:hidden">
                        <DisclosureButton
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon
                                v-if="!open"
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                            <XMarkIcon
                                v-else
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>
                    <div class="flex flex-shrink-0 items-center">
                        <img
                            class="h-12 w-auto"
                            src="/assets/logo.png"
                            alt="Logo"
                        />
                    </div>
                    <div class="hidden md:ml-6 md:flex md:space-x-8">
                        <a
                            v-for="item in navbarConfig"
                            v-bind:key="item.id"
                            :href="item.path"
                            :class="
                                item.id === activeTab
                                    ? 'inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900'
                                    : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                            "
                        >
                            {{ item.title }}
                        </a>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <button
                            type="button"
                            class="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <PlusIcon
                                class="-ml-0.5 h-5 w-5"
                                aria-hidden="true"
                            />
                            New Job
                        </button>
                    </div>

                    <div
                        class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center"
                    >
                        <button
                            type="button"
                            class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span class="absolute -inset-1.5" />
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <DisclosurePanel class="absolute w-full bg-white -mt-1 md:hidden">
            <div class="space-y-1 pb-3 pt-2">
                <DisclosureButton
                    v-for="item in navbarConfig"
                    v-bind:key="item.id"
                    as="a"
                    :href="item.path"
                    :class="
                        item.id === activeTab
                            ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6'
                            : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'
                    "
                >
                    {{ item.title }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { PlusIcon } from "@heroicons/vue/20/solid";
import navbarConfig from "../configs/navbar";
import { ref } from "vue";

const activeTab = ref(navbarConfig[0].id);

const changeTab = (selectedId) => (activeTab.value = selectedId);
</script>
