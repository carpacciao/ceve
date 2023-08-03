<script lang="ts" setup>
import { useData } from "@ceve/core";

const { data: { contact } } = useData();
</script>

<template>
  <div class="hglt-contact">
    <h2 class="mb-2">Contact</h2>
    <ul>
      <li v-for="(value, name) in contact" :key="value">
        <h3>{{name}}:</h3>
        <span class="weak" v-html="value"></span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "./Contact";
</style>
