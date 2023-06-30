<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { personal } = data.data;
</script>

<template>
  <div class="mnst-intro">
    <div>
      <h1>{{ personal.fullName }}</h1>
      <h3>{{ personal.jobTitle }}</h3>
      <p class="mt-2 weak">{{ personal.about }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Intro";
</style>
