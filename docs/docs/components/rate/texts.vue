<template>
  <div>
    <dg-rate
      v-model="value"
      show-text
      :texts="texts"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const value = ref(3);

const texts = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

</script>

<style>

</style>
