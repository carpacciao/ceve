<script lang="ts" setup>
import { createData, makeDataProps } from "@ceve/core";
import { Resume } from "../Resume";
import { Intro } from "../Intro";

const props = defineProps({
  ...makeDataProps(),
    // data: {
    //   type: Object as PropType<Data>,
    //   required: true as const
    // }
})

createData(props);

</script>

<template>
  <div class="page">
    <intro></intro>
    <hr class="separator">
    <resume></resume>
  </div>
</template>
