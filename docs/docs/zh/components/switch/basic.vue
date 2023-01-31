<template>
  <div>
    <dg-switch v-model="switchValue" />
    <dg-switch
      v-model="switchValue"
      disabled
    />
    <dg-switch
      :value="true"
      disabled
    />
    <dg-switch :value="true" />
    <dg-switch :value="false" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const switchValue = ref(true);
</script>

<style>

</style>
