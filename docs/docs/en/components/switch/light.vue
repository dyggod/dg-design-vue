<template>
  <div>
    <dg-switch
      v-model="switchValue"
      dg-fun="light"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const switchValue = ref(false);
</script>

<style>

</style>
