<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { contact } = data.data;
</script>

<template>
  <div class="mnst-contact">
    <ul>
      <li v-for="(value, name) in contact" :key="value">
        <span class="mnst-contact__title pr-4">{{name}}:</span>
        <span class="weak" v-html="value"></span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "./Contact";
</style>
