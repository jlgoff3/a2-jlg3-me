<template>
    <div class="grid grid-cols-3 items-center my-1">
        <NotebookText :level="6" class="pb-1 font-bold" :class="isTest ? 'col-span-3' : 'col-span-2'">{{
            assignment?.text }}
        </NotebookText>
        <div v-if="isTest" class="col-span-3 grid grid-cols-2">
            <div class="flex items-center">
                <NotebookText :level="6">Goff:</NotebookText>
                <NotebookButton :to="assignment?.goff_link">Test</NotebookButton>
                <NotebookButton :to="assignment?.goff_work_link">Work</NotebookButton>
            </div>
            <div class="flex items-center">
                <NotebookText :level="6" class="ml-4">Vetter:</NotebookText>
                <NotebookButton :to="assignment?.vetter_link">Test</NotebookButton>
                <NotebookButton :to="assignment?.vetter_work_link">Work</NotebookButton>
            </div>
        </div>
        <div v-else class="flex justify-self-end col-span-1">
            <NotebookButton :to="assignment?.goff_link">Goff</NotebookButton>
            <NotebookButton :to="assignment?.vetter_link">Vetter</NotebookButton>
        </div>
    </div>
</template>
<script setup>
import { toRefs, computed } from "vue";

const props = defineProps({
    assignment: {
        type: Object,
        required: true,
    }
});

const { assignment } = toRefs(props);
const isTest = computed(() => assignment.value?.goff_work_link || assignment.value?.vetter_work_link);
</script>