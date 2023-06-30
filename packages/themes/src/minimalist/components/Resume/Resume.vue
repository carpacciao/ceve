<script lang="ts" setup>
import { Experience } from "../Experience";
import { Contact } from "../Contact";
import { Skills } from "../Skills";
import { Education } from "../Education";

</script>

<template>
  <div class="resume">
    <div>
      <experience></experience>

      <hr class="separator">

      <contact></contact>
    </div>

    <hr class="vertical">

    <div>
      <skills></skills>

      <hr class="separator">

      <education></education>
    </div>
  </div>
</template>
