<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false
  }
})
const computedClasses = computed(() => [
  "mnst-separator",
  props.vertical ? "mnst-separator--vertical" : "",
]);
</script>

<template>
  <hr :class="computedClasses">
</template>

<style lang="scss">
@import "./Separator";
</style>
