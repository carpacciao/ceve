<script lang="ts" setup>
import { createData, makeDataProps } from "@ceve/core";
import { Resume } from "../Resume";
import { Intro } from "../Intro";
import { Separator } from "../Separator";

const props = defineProps({
  ...makeDataProps(),
})

createData(props);

</script>

<template>
  <div class="page mnst">
    <intro></intro>
    <separator></separator>
    <resume></resume>
  </div>
</template>

<style lang="scss">
@import "./Minimalist";
</style>
