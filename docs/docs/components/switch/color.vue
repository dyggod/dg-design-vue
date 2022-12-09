<template>
  <div>
    <dg-switch
      v-model="switchValue"
      active-color="red"
    />
    <dg-switch
      v-model="switchValue2"
      inactive-color="#000"
    />
    <dg-switch
      v-model="switchValue3"
      active-color="#ff0"
      inactive-color="#eae"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const switchValue = ref(true);
const switchValue2 = ref(false);
const switchValue3 = ref(false);
</script>

<style>

</style>
