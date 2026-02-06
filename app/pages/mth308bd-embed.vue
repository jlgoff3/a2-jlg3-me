<template>
    <Notebook :pacing-sheet="pacingSheet" :standards-sheet="standardsSheet" />
</template>

<script setup>
const pacingSheet =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiC6BFA-YIkCzPYhtCPcx8aQ2iBHaB6ZLFjsN175aIbRAAMXQ64KpKaT0rbI0fTc1i8bBtPNM619lL/pub?gid=1064663986&single=true&output=csv";
const standardsSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiC6BFA-YIkCzPYhtCPcx8aQ2iBHaB6ZLFjsN175aIbRAAMXQ64KpKaT0rbI0fTc1i8bBtPNM619lL/pub?gid=1610106514&single=true&output=csv"
definePageMeta({
    layout: 'embed'
})
</script>
