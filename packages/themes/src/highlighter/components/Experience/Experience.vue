<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { experience } = data.data;

// MAX 3
const filteredExperience = experience.slice(0, 3);
</script>

<template>
  <h2 class="mb-4">Experience</h2>

  <div class="hglt-experience mb-4" v-for="item in filteredExperience" :key="item.title">
    <h3 v-html="item.title"></h3>
    <h4 class="mb-2" v-html="item.date"></h4>
    <!-- <div class="mnst-experience__header mb-1">
      <span class="weak">{{ item.date }}</span>
    </div> -->
    <ul class="weak">
      <li v-for="task in item.tasks" :key="task">{{ task }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "./Experience";
</style>
