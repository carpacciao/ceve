<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false
  }
})
const computedClasses = computed(() => [
  "separator",
  props.vertical ? "separator--vertical" : "",
]);
</script>

<template>
  <hr :class="computedClasses">
</template>

<style lang="scss" scoped>
@import "./Separator";
</style>
