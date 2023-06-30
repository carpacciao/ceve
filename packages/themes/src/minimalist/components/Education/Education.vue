<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { education } = data.data;
</script>

<template>
  <h2 class="mb-4">Education</h2>

  <div class="mnst-education mb-4" v-for="item in education" :key="item.title">
    <div class="weak">{{item.date}}</div>
    <h3 class="mb-1">{{item.title}}</h3>
    <p class="weak">{{item.text}}</p>
  </div>
</template>

<style lang="scss">
@import "./Education";
</style>
