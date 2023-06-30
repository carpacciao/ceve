<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { experience } = data.data;
</script>

<template>
  <h2 class="mb-4">Experience</h2>

  <div class="mnst-experience mb-4" v-for="item in experience" :key="item.title">
    <div class="mnst-experience__header mb-1">
      <h3>{{ item.title }}</h3>
      <span class="weak">{{ item.date }}</span>
    </div>
    <ul class="weak">
      <li v-for="task in item.tasks" :key="task">{{ task }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "./Experience";
</style>
