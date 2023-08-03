<script lang="ts" setup>
import { useData } from "@ceve/core";
import { Picture as ProfilePicture } from "../Picture";

const { data: { personal } } = useData();
</script>

<template>
  <div>
    <profile-picture class="mb-4"></profile-picture>
    <h2 class="mb-1" v-html="personal.firstName"></h2>
    <h2 v-html="personal.lastName"></h2>
    <p class="mt-2 weak" v-html="personal.about"></p>
  </div>
</template>

<style lang="scss">
@import "./Intro";
</style>
