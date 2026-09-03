<template>
    <Notebook :pacing-sheet="pacingSheet" :standards-sheet="standardsSheet" />
</template>

<script setup>
const pacingSheet =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvt5pFL-ypRLzCXh5HHzkuaPeS51pA5AfG_5XCuPX4sSGBwVaRk89fz_DJoM4ss6M5qVk_8ax53ixo/pub?gid=1064663986&single=true&output=csv";
const standardsSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvt5pFL-ypRLzCXh5HHzkuaPeS51pA5AfG_5XCuPX4sSGBwVaRk89fz_DJoM4ss6M5qVk_8ax53ixo/pub?gid=1610106514&single=true&output=csv"
definePageMeta({
    layout: 'embed'
})
</script>
