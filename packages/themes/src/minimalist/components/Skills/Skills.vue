<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { skills } = data.data;
</script>


<template>
  <div class="resume__headline">Skills</div>
  <ul class="skills">
    <li v-for="skill in skills" :key="skill.name">{{skill.name}}</li>
  </ul>
</template>
