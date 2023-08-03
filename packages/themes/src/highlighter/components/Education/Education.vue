<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { education } = data.data;
</script>

<template>
  <h2 class="mb-4">Education</h2>

  <div class="mb-4" v-for="item in education" :key="item.title">
    <h3 v-html="item.title"></h3>
    <h4 v-html="item.date"></h4>
  </div>
</template>

<style lang="scss">
@import "./Education";
</style>
