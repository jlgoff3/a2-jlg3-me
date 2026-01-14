<template>
    <div v-if="openStandard" class="flex max-w-full max-h-full p-4 overflow-hidden">
        <div class="flex-none w-12 min-h-full">
            <ul class="flex flex-col min-h-full">
                <li
                    class="flex-end w-full rounded-l-lg px-2 py-3 m-0 border border-gray-300 cursor-pointer font-bold underline bg-gray-300 text-gray-900">
                    <img src="/home-icon.svg" alt="Home" width="24" height="24" />
                </li>
                <li v-for="standard in fullStandards" :key="standard.id">
                    <button v-if="standard.value < openStandard.value" @click="openStandardId = standard.id" :class="'w-full rounded-l-lg px-2 py-3 m-0 border border-gray-300 cursor-pointer font-bold underline ' + colors[standard.value - 1 % colors.length]
                        ">
                        S{{ standard.value }}
                    </button>
                </li>
            </ul>
        </div>
        <div :key="openStandard?.id"
            :class="`flex-1 flex px-4 pt-2 pb-4 divide-solid divide-x-8 divide-${baseColors[openStandard?.value - 1 % baseColors.length]}-800 border-8 border-${baseColors[openStandard?.value - 1 % baseColors.length]}-800 min-h-full`">
            <div class="flex-1 pr-4">
                <NotebookText :level="5" class="font-bold text-center mb-2 lg:mb-4">{{ openStandard?.text }}
                </NotebookText>
                <NotebookEvent v-for="(date, i) in openStandard?.dates" :key="date.id" :date="date"
                    :color="colors[i % colors.length]" />
                <hr />
            </div>
            <div class="flex-1 pl-4">
                <NotebookText :level="5" class="font-bold text-center mb-2 lg:mb-4">{{ openStandard?.text }}
                </NotebookText>
                <NotebookText :level="5" class="font-bold">Learning Target:</NotebookText>
                <NotebookText class="pt-2 pb-4">{{ openStandard?.lt }}</NotebookText>
                <NotebookText :level="5" class="font-bold">Success Criteria:</NotebookText>
                <NotebookText class="pt-2 pb-4">{{ openStandard?.sc }}</NotebookText>
                <NotebookText :level="5" class="font-bold">Standard Resources:</NotebookText>
                <div class="grid grid-cols-3 gap-4 mt-2">
                    <NotebookSticky v-if="openStandard?.class_notes" :link="openStandard.class_notes"
                        :title="`S${openStandard?.value} Class Notes`" color="bg-yellow-200" class="col-start-1" />
                    <NotebookSticky v-if="openStandard?.teacher_notes" :link="openStandard.teacher_notes"
                        :title="`S${openStandard?.value} Teacher Notes`" color="bg-blue-200" class="col-start-2" />
                    <NotebookSticky v-if="openStandard?.videos" :link="openStandard.videos"
                        :title="`S${openStandard?.value} Videos`" color="bg-green-200" class="col-start-3" />
                    <NotebookSticky v-if="openStandard?.review" :link="openStandard.review"
                        :title="`S${openStandard?.value} Review`" color="bg-purple-200" class="col-start-1" />
                    <NotebookSticky v-if="openStandard?.review_notes" :link="openStandard.review_notes"
                        :title="`S${openStandard?.value} Review Notes`" color="bg-pink-200" class="col-start-2" />
                    <NotebookSticky v-if="openStandard?.guide" :link="openStandard.guide"
                        :title="`S${openStandard?.value} Guide`" color="bg-indigo-200" class="col-start-3" />
                </div>
            </div>
        </div>
        <div class="flex-none w-12">
            <ul class="flex flex-col">
                <li v-for="standard in fullStandards" :key="standard.id">
                    <button v-if="standard.value >= openStandard.value" @click="openStandardId = standard.id" :class="'w-full rounded-r-lg px-2 py-3 m-0 border border-gray-300 cursor-pointer font-bold underline ' + colors[standard.value - 1 % colors.length]
                        ">
                        S{{ standard.value }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { toRefs, ref, computed } from 'vue';

import Papa from "papaparse";
import { v4 as uuid } from "uuid";

const props = defineProps({
    pacingSheet: {
        type: String,
        required: true
    },
    standardsSheet: {
        type: String,
        required: true
    }
});

const { pacingSheet, standardsSheet } = toRefs(props);

const baseColors = ["red", "orange", "yellow", "lime", "emerald", "teal", "sky", "indigo", "purple", "pink"];
const colors = baseColors.map(
    (color) => `bg-${color}-200 hover:bg-${color}-300`
);

const standards = ref([]);
const events = ref([]);
const dates = ref([]);
const assignments = ref([]);
const fullStandards = computed(getAllFullStandards);
const openStandardId = ref(0);
const openStandard = computed(() => getFullStandard(openStandardId.value));

function getFullStandard(id) {
    const standard = getItem(id, standards);
    if (!standard) return null;
    standard.dates = dates.value
        .filter((d) => d.standard_id == id)
        .map((d) => ({
            ...d,
            event: getItem(d.event_id, events),
            assignment: assignments.value.find((a) => a.date_id == d.id),
        })).reduce((acc, date) => {
            if (acc.length === 0 || date.cc_session) {
                acc.push(date);
                return acc;
            }
            const previousDate = acc.pop();
            if (previousDate?.event?.text === date.event?.text) {
                previousDate.endDate = date.text
                acc.push(previousDate);
            } else {
                acc.push(previousDate)
                acc.push(date);
            }
            return acc;
        }, []);

    return standard;
}

function getAllFullStandards() {
    return standards.value.map((s) => getFullStandard(s.id));
}

function getItem(id, table) {
    const item = table?.value?.find((i) => i.id == id);
    if (!item) return null;
    else return item;
}

function findOrCreateEvent(text, params) {
    const event = events.value.find((e) => e.text == text) ?? null;
    if (event) return event.id;
    const id = uuid();
    events.value.push({
        ...params,
        id,
        text,
    })
    return id;
}

function findOrCreateDate(text, params) {
    const date = dates.value.find((d) => d.text == text) ?? null;
    if (date) return date.id;
    const id = uuid();
    dates.value.push({
        ...params,
        id,
        text,
    })
    return id;
}

function findOrCreateAssignment(text, params) {
    const assignment = assignments.value.find((a) => a.text == text) ?? null;
    if (assignment) return assignment.id;
    const id = uuid();
    assignments.value.push({
        ...params,
        id,
        text,
    })
    return id;
}

function addDateRow(row, i) {
    const [
        date,
        standard_value,
        event,
        cc_sessionText,
        assignment,
        goff_link,
        goff_work_link,
        vetter_link,
        vetter_work_link,
        recording_link,
    ] = row;

    // Find or Create Standard
    if (!standard_value) return;
    const standard_id = standards.value.find((s) => s.value == standard_value)?.id;
    // Find or Create Event
    if (!event) return;
    const event_id = findOrCreateEvent(event, { standard_id });
    // Create Date
    if (!date) return;
    const cc_session = !cc_sessionText?.includes("X");
    const date_id = findOrCreateDate(date, {
        standard_id,
        event_id,
        recording_link,
        cc_session
    });
    // Create Assignment
    if (!assignment) return;
    findOrCreateAssignment(assignment, {
        date_id,
        goff_link,
        goff_work_link,
        vetter_link,
        vetter_work_link,
    });
}

function createStandard(standardRow) {
    const [value, title, lt, sc, class_notes, teacher_notes, videos, review, review_notes, guide] = standardRow;
    const id = uuid();
    standards.value.push({
        id,
        value,
        text: `S${value} - ${title}`,
        lt,
        sc,
        class_notes,
        teacher_notes,
        videos,
        review,
        review_notes,
        guide,
    })
}
if (standardsSheet && pacingSheet) {
    fetch(standardsSheet.value)
        .then((response) => response.text())
        .then((data) => {
            const { data: parsedData } = Papa.parse(data, {
                dynamicTyping: true,
            });
            parsedData.shift();
            parsedData.forEach(createStandard);
            fetch(pacingSheet.value)
                .then((response) => response.text())
                .then((data) => {
                    const { data: parsedData } = Papa.parse(data, {
                        dynamicTyping: true,
                    });
                    parsedData.shift();
                    parsedData.forEach(addDateRow);
                    openStandardId.value = standards.value.length > 0 ? standards.value[0].id : 0;
                });
        });
}



</script>