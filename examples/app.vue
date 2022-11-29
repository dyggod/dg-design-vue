<template>
  <div>
    <div>
      <dg-button></dg-button>
      <dg-button type="danger" dgFun="run">123</dg-button>
      <dg-button type="primary" dgFun="run"></dg-button>
      <dg-button type="warning"></dg-button>
      <dg-button type="info"></dg-button>
      <dg-button type="primary" dgFun="jump" @click="clickJump"></dg-button>
      <dg-button dgFun="hub"></dg-button>
      <dg-button dgFun="hub" type="primary"></dg-button>
      <dg-button dgFun="hub" type="danger"></dg-button>
      <dg-button dgFun="hub" type="warning">Porn</dg-button>
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
