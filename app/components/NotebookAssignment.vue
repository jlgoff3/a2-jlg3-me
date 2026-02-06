<template>
    <div class="grid grid-cols-3 items-center my-1">
        <NotebookText :level="6" class="pb-1 font-semibold col-span-2">{{
            assignment?.text }}
        </NotebookText>
        <div v-if="multiclass" class="flex justify-self-end col-span-1">
            <NotebookButton :to="assignment?.goff_link">Goff</NotebookButton>
            <NotebookButton :to="assignment?.vetter_link">Vetter</NotebookButton>
        </div>
        <div v-else class="flex justify-self-end col-span-1">
            <NotebookButton :to="assignment?.goff_link">Link</NotebookButton>
        </div>
    </div>
</template>
<script setup>
import { toRefs } from "vue";

const props = defineProps({
    assignment: {
        type: Object,
        required: true,
    },
    multiclass: {
        type: Boolean,
        default: false,
    }
});

const { assignment, multiclass } = toRefs(props);
</script>