<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { skills } = data.data;
</script>


<template>
  <h2 class="mb-4">Skills</h2>
  <ul class="weak">
    <li v-for="skill in skills" :key="skill.name">{{skill.name}}</li>
  </ul>
</template>
