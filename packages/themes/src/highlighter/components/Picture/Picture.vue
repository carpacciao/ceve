<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { personal } = data.data;
</script>

<template>
  <div class="hglt-picture mx-auto">
    <img :src="personal.picture" alt="">
  </div>
</template>

<style lang="scss">
@import "./Picture";
</style>
