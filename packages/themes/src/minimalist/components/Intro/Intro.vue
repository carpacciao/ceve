<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { personal } = data.data;
</script>

<template>
  <div class="intro">
    <div class="col-lg">
      <div class="intro__name">{{ personal.fullName }}</div>
      <div class="intro__title">{{ personal.jobTitle }}</div>
      <p class="intro__about">{{ personal.about }}</p>
    </div>
  </div>
</template>
