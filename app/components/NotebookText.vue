<template>
    <component :is="headingTag" :class="responsiveSizes">
        <slot />
    </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    level: {
        type: Number,
        default: null,
        validator: (value) => value == null || (value >= 1 && value <= 6)
    }
})

const headingTag = computed(() => props.level ? `h${props.level}` : 'p')

const responsiveSizes = computed(() => {
    const textBaseClass = 'text-xs sm:text-sm md:text-base lg:text-lg'
    const sizes = {
        1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
        2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold',
        3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold',
        4: 'text-base sm:text-lg md:text-xl lg:text-2xl font-bold',
        5: 'text-xs sm:text-sm md:text-base lg:text-lg',
        6: 'text-xs lg:text-base'
    }
    return props.level ? sizes[props.level] : textBaseClass
})
</script>