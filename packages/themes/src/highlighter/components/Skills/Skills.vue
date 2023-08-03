<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { skills } = data.data;
</script>


<template>
  <div>
    <h2 class="mb-2">Skills</h2>
    <div>
      <template v-for="(skill, index) in skills" :key="skill.name">
        <span v-html="skill.name" :class="skill.strong ? 'hglt-skill--strong' : 'hglt-skill'"></span>
        <span v-if="index !== skills.length - 1"> | </span>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Skills.scss";
</style>
