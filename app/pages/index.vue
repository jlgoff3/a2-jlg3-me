<template>
    <article class="min-h-screenpy-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome to Algebra 2!</h1>

            <div class="space-y-4">
                <NuxtLink to="/mth308a"
                    class="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-blue-500">
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">Algebra 2A Notebook</h2>
                    <p class="text-gray-600">The infamous course notebook</p>
                </NuxtLink>

                <NuxtLink to="/resources"
                    class="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-red-500">
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">Additional Resources</h2>
                    <p class="text-gray-600">Extra learning materials and references</p>
                </NuxtLink>
            </div>
        </div>
    </article>
</template>

<script setup>
</script>