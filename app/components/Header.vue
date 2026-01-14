<template>
    <header class="bg-white shadow transition-all duration-300 fixed left-0 top-0 right-0 w-full">
        <div class="container mx-auto flex justify-between items-center py-4 h-full max-w-5xl">
            <h1 class="text-xl font-bold">Algebra 2</h1>
            <nav class="h-full">
                <ul class="flex space-x-4 h-full">
                    <li><a href="/" class="text-gray-700 hover:text-blue-500">Home</a></li>
                    <li class="relative inline-block group h-full">
                        <a href="#" class="text-gray-700 hover:text-blue-500">Notebooks</a>
                        <ul class="hidden absolute left-0 min-w-36 group-hover:block bg-white shadow-lg">
                            <li>
                                <NuxtLink to="/mth308b" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Algebra 2B
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/mth308ad" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Algebra 2A CR
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/mth308bd" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Algebra 2B CR
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

</script>