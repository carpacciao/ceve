<script lang="ts" setup>
import { useData } from '@ceve/core';

const data = useData();
const { education } = data.data;
</script>

<template>
  <div class="resume__headline">Education</div>

  <div class="education" v-for="item in education" :key="item.title">
    <div class="education__date">{{item.date}}</div>
    <div class="education__title">{{item.title}}</div>
    <div class="education__body">{{item.text}}</div>
  </div>
</template>
