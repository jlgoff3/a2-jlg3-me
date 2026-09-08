<template>
    <Notebook :pacing-sheet="pacingSheet" :standards-sheet="standardsSheet" />
</template>

<script setup>
const pacingSheet =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT02r8dqEVomPDlHzlOgsNjfz07MknXhZkpfYTDizXIfj0iAMd3C7nAI6xsWyzgS0EWchzs1Fyyp49I/pub?gid=1064663986&single=true&output=csv";
const standardsSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT02r8dqEVomPDlHzlOgsNjfz07MknXhZkpfYTDizXIfj0iAMd3C7nAI6xsWyzgS0EWchzs1Fyyp49I/pub?gid=1610106514&single=true&output=csv"
definePageMeta({
    layout: 'embed'
})
</script>
