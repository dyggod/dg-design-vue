<template>
  <div>
    <div>
      <dg-button></dg-button>
      <dg-button @click="clickButton" type="danger" dgFun="run">123</dg-button>
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
      <dg-button type="primary" size="small" dgFun="run"></dg-button>
      <dg-button type="primary" size="medium" dgFun="run"></dg-button>
      <dg-button type="primary" size="large" dgFun="run"></dg-button>
    </div>
    <div>
      <dg-icon name="discount"></dg-icon>
      <dg-icon name="electronics"></dg-icon>
      <dg-icon name="drag"></dg-icon>
    </div>
    <div>
      <dg-button type="primary" dgFun="duang">123456789101112</dg-button>
      <dg-button type="danger" dgFun="duang">Surprise!</dg-button>
    </div>
    <div style="height: 200px">
      <dg-magic-card>Magic Card</dg-magic-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
const clickJump = () => {
  console.log('jump');
};

function clickButton() {
  console.log('click');
}

</script>

<style lang="less">
// body {
//   min-height: 100vh;
//   background: #212534;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding-top: 2rem;
//   padding-bottom: 2rem;
//   box-sizing: border-box;
// }
</style>
