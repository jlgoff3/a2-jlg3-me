<template>
    <div class="rounded overflow-hidden shadow-lg m-0.5 lg:m-2 p-1 grid grid-cols-3 items-center" :class="color">
        <NotebookText :level="6" :class="date.cc_session ? 'col-span-2' : 'col-span-3'"><span class="font-bold">{{
            date.text }}{{
                    date.endDate ? ` -
                ${date.endDate}` : ""
                }}:</span> {{
                    date.event?.text }}</NotebookText>
        <div v-if="date.cc_session" class="col-span-1 justify-self-end">
            <NotebookButton :to="date?.recording_link">
                Recording
            </NotebookButton>
        </div>
        <NotebookAssignment v-for="assignment in date.assignments" :key="assignment.id" :assignment="assignment"
            :multiclass class="col-span-3" />
    </div>
</template>
<script setup>
import { toRefs } from "vue";

const props = defineProps({
    date: {
        type: Object,
        required: true,
    },
    color: {
        type: String,
        required: false,
        default: "bg-gray-200",
    },
    multiclass: {
        type: Boolean,
        default: false,
    }
});
const { date, color, multiclass } = toRefs(props);
</script>