<template>
    <footer class="border-t border-gray-300 py-6">
        <div class="flex justify-center items-center">
            <p class="text-gray-600 text-sm">
                &copy; {{ currentYear }} Jay Goff. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>