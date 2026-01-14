<template>
    <NuxtLink :to="link" target="_blank" rel="noopener noreferrer"
        class="block max-w-48 max-h-48 p-2 lg:p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-rotate-1"
        :class="color">
        <div class="h-full flex items-center justify-center">
            <NotebookText :level="5" class="text-center text-blue-800 font-bold underline wrap-break-words">
                {{ title }}
            </NotebookText>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    link: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
})
</script>