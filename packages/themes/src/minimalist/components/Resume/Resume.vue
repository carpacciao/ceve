<script lang="ts" setup>
import { Experience } from "../Experience";
import { Contact } from "../Contact";
import { Skills } from "../Skills";
import { Education } from "../Education";
import { Separator } from "../Separator";

</script>

<template>
  <div class="row">
    <div class="col-fill">
      <experience></experience>

      <separator></separator>

      <contact></contact>
    </div>

    <div class="col-auto">
      <separator vertical></separator>
    </div>

    <div class="col-1">
      <skills></skills>

      <separator></separator>

      <education></education>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Resume";
</style>
