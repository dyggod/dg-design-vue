<template>
  <div>
    <div>
      <dg-button></dg-button>
      <dg-button type="danger" dgFun="run"></dg-button>
      <dg-button type="primary" dgFun="run"></dg-button>
      <dg-button type="warning"></dg-button>
      <dg-button type="info"></dg-button>
      <dg-button type="primary" dgFun="jump" @click="clickJump"></dg-button>
    </div>
    <div>
      <dg-icon name="discount"></dg-icon>
      <dg-icon name="electronics"></dg-icon>
      <dg-icon name="drag"></dg-icon>
    </div>
  </div>
</template>

<script setup lang='ts'>
const clickJump = () => {
  console.log('jump');
};

</script>

<style lang="less">
</style>
