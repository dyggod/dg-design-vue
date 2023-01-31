<template>
  <div class="example">
    <div>
      <dg-rate
        v-model="value2"
        class="item"
      />
      <dg-rate
        v-model="value1"
        class="item"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(3);
</script>

<style>

</style>
