<template>
    <NuxtLink v-if="to" :to="to"
        class="underline text-blue-600 hover:text-blue-700 md:no-underline md:bg-blue-600 md:hover:bg-blue-700 md:text-white md:hover:text-white font-medium md:rounded-lg transition-colors duration-200"
        :class="buttonClass">
        <slot />
    </NuxtLink>
    <span v-else class="md:bg-gray-400 md:text-white font-medium md:rounded-lg" :class="buttonClass">
        <slot />
    </span>
</template>

<script setup lang="ts">
const buttonClass = "inline-flex items-center justify-center mx-1 text-xs md:px-2 md:py-1 xl:px-4 xl:py-2 ";
defineProps<{
    to: string
}>()
</script>