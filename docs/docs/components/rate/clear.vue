<template>
  <div>
    <dg-rate
      v-model="value"
      allow-clear
    />
  </div>
  <div>
    <dg-rate
      v-model="value2"
      allow-clear
    />
  </div>
</template>

<script setup lang='ts'>

import { ref } from 'vue';

const value = ref(0);

const value2 = ref(3);

</script>

<style>

</style>
