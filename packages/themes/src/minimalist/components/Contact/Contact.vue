<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { contact } = data.data;
</script>

<template>
  <div class="contact">
    <ul>
      <li v-for="(value, name) in contact" :key="value">
        <span class="contact__title">{{name}}:</span>
        <span class="contact__content" v-html="value"></span>
      </li>
    </ul>
  </div>
</template>
