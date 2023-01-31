<template>
  <div>
    <dg-switch
      v-model="switchValue"
      disabled
    />
    <dg-switch
      v-model="switchValue2"
      disabled
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const switchValue = ref(true);
const switchValue2 = ref(false);
</script>

<style>

</style>
