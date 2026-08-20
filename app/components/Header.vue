<template>
    <header class="bg-white shadow transition-all duration-300 fixed left-0 top-0 right-0 w-full">
        <div class="container mx-auto flex justify-between items-center py-4 h-full max-w-5xl">
            <h1 class="text-xl font-bold">Algebra 2</h1>
            <nav class="h-full">
                <ul class="flex space-x-4 h-full">
                    <li>
                        <NuxtLink to="/" class="text-gray-700 hover:text-blue-500">Home</NuxtLink>
                    </li>
                    <li class="relative inline-block group h-full">
                        <a href="#" class="text-gray-700 hover:text-blue-500">Notebooks</a>
                        <ul class="hidden absolute left-0 min-w-36 group-hover:block bg-white shadow-lg">
                            <li v-for="link in notebookLinks" :key="link.path">
                                <NuxtLink :to="link.path" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    {{ link.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink to="/resources" class="text-gray-700 hover:text-blue-500">Resources</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isScrolled = ref(false);

const notebookLinks = [
    { name: 'Algebra 2A', path: '/mth308a' },
    { name: 'Algebra 2B', path: '/mth308b' },
    { name: 'Algebra 2A CR', path: '/mth308ad' },
    { name: 'Algebra 2B CR', path: '/mth308bd' },
];

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

</script>