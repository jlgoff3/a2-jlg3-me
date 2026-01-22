<template>
    <Notebook :pacing-sheet="pacingSheet" :standards-sheet="standardsSheet" />
</template>

<script setup>
const pacingSheet =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTuJUCSdMNQq5tcSXZd6ebBtiWhzDWiXOSTjsHToXE3RrY3AWeJO1oL7prDBbLV0gYvmQmpPaGPuutg/pub?gid=1064663986&single=true&output=csv";
const standardsSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTuJUCSdMNQq5tcSXZd6ebBtiWhzDWiXOSTjsHToXE3RrY3AWeJO1oL7prDBbLV0gYvmQmpPaGPuutg/pub?gid=1610106514&single=true&output=csv"
definePageMeta({
    layout: 'embed'
})
</script>
