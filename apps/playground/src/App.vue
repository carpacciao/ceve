<script setup lang="ts">
import { Minimalist, Highlighter } from "@ceve/themes";
import resume from "./data/resume.json";
import resumeVariant from "./data/resume-variant.json";

</script>

<template>
  <highlighter :data="resumeVariant"></highlighter>
  <minimalist :data="resume"></minimalist>
</template>
