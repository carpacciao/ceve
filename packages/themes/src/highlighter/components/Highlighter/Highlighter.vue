<script lang="ts" setup>
import { createData, makeDataProps } from "@ceve/core";
import { Intro } from "../Intro";
import { Contact } from "../Contact";
import { Skills } from "../Skills";
import { Experience } from "../Experience";
import { Education } from "../Education";

const props = defineProps({
  ...makeDataProps(),
})

const { data: { personal } } = createData(props);

</script>

<template>
  <div class="page hglt">
    <div class="row">
      <div class="col-1">
        <intro class="mb-4"></intro>
        <contact class="mb-4"></contact>
        <education></education>
      </div>
      <div class="col-2 pl-10">
        <h1 v-html="personal.jobTitle" class="mb-4"></h1>
        <skills class="mb-4"></skills>
        <experience></experience>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Highlighter";
</style>
