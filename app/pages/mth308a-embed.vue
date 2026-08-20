<template>
    <Notebook :pacing-sheet="pacingSheet" :standards-sheet="standardsSheet" multiclass />
</template>

<script setup>
const pacingSheet = import.meta.dev
    ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vTP2l_P_71s5LbKify37WQwR29JUSMXHofQ7FXoLQJYCYDiUBjjZQ6_lN4Vq0C3qHKTPyahRTdXrP-s/pub?gid=1517745162&single=true&output=csv" :
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTP2l_P_71s5LbKify37WQwR29JUSMXHofQ7FXoLQJYCYDiUBjjZQ6_lN4Vq0C3qHKTPyahRTdXrP-s/pub?gid=1064663986&single=true&output=csv";
const standardsSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTP2l_P_71s5LbKify37WQwR29JUSMXHofQ7FXoLQJYCYDiUBjjZQ6_lN4Vq0C3qHKTPyahRTdXrP-s/pub?gid=1610106514&single=true&output=csv"
definePageMeta({
    layout: 'embed'
})
</script>
