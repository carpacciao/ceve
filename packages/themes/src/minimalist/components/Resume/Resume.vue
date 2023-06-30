<script lang="ts" setup>
import { Experience } from "../Experience";
import { Contact } from "../Contact";
import { Skills } from "../Skills";
import { Education } from "../Education";
import { Separator } from "../Separator";

</script>

<template>
  <div class="mnst-resume">
    <div>
      <experience></experience>

      <separator></separator>

      <contact></contact>
    </div>

    <separator vertical></separator>

    <div>
      <skills></skills>

      <separator></separator>

      <education></education>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Resume";
</style>
