<template>
  <div>
    <NuxtRouteAnnouncer />
    <Notebook :pacing-sheet="pacingSheet" :standards-sheet="standardsSheet" />
  </div>
</template>

<script setup>
const pacingSheet =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJ7uMK6HDNW6aRwGn526mSR6-cmROQmRVwgSilq4GPFd8HBNiyb9r0bn7q-iM1pOpnrXxwJTx_7Iyq/pub?gid=1064663986&single=true&output=csv";
const standardsSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJ7uMK6HDNW6aRwGn526mSR6-cmROQmRVwgSilq4GPFd8HBNiyb9r0bn7q-iM1pOpnrXxwJTx_7Iyq/pub?gid=1610106514&single=true&output=csv"

</script>
