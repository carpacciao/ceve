<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { experience } = data.data;
</script>

<template>
  <div class="resume__headline">Experience</div>

  <div class="experience" v-for="item in experience" :key="item.title">
    <div class="experience__header">
      <span class="experience__title">{{ item.title }}</span>
      <span class="experience__date">{{ item.date }}</span>
    </div>
    <div class="experience__body">
      <ul>
        <li v-for="task in item.tasks" :key="task">{{ task }}</li>
      </ul>
    </div>
  </div>
</template>
