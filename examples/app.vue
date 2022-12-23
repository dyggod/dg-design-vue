<template>
  tab1<dg-switch v-model="tab1">tab1</dg-switch>
  tab2<dg-switch v-model="tab2">tab2</dg-switch>
  <div v-if="tab1">
    <div>
      <dg-button></dg-button>
      <dg-button @click="clickButton" type="danger" dgFun="run">123</dg-button>
      <dg-button type="primary" dgFun="run"></dg-button>
      <dg-button type="warning"></dg-button>
      <dg-button type="info"></dg-button>
      <!-- <dg-button type="primary" dgFun="jump" @click="clickJump"></dg-button> -->
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
    <div>
      <dg-button type="primary" dgFun="christmas">Christmas Button</dg-button>
      <dg-button type="primary" dgFun="christmas">dg-ui</dg-button>
      <dg-button type="danger" dgFun="christmas">dg-ui</dg-button>
    </div>
    <div style="height: 400px; margin-top: 10px">
      <dg-magic-card>Magic Card</dg-magic-card>
    </div>

    <div style="height: 200px">
      <dg-switch
        v-model="switchValue"
        active-color="red"
        inactive-color="#000"
      ></dg-switch>
      <dg-switch v-model="switchValue2" disabled></dg-switch>
      <dg-switch v-model="switchValue3" dgFun="light"></dg-switch>
    </div>

    <div style="width: 500px; display: flex; justify-content: center">
      <dg-tooltip content="my tooltip" placement="left"
        ><dg-button type="primary"
          >priamrypriamrypriamrypriamry</dg-button
        ></dg-tooltip
      >
      <dg-tooltip content="my tooltip" placement="right"
        ><dg-button type="primary">priamry</dg-button></dg-tooltip
      >
      <dg-tooltip content="my tooltip" placement="top"
        ><dg-button type="primary">top</dg-button></dg-tooltip
      >
      <dg-tooltip content="my tooltip" placement="bottom"
        ><dg-button type="primary">bottom</dg-button></dg-tooltip
      >
      <dg-tooltip
        content="my tooltip"
        placement="bottom"
        v-model="tooltipValue"
      >
        <dg-button type="primary">bottom</dg-button></dg-tooltip
      >
      <dg-button
        @mouseenter="tooltipValue = true"
        @mouseleave="tooltipValue = false"
        >test</dg-button
      >
    </div>
    <div style="width: 500px; display: flex; justify-content: center">
      <dg-tooltip content="my tooltip" placement="left" trigger="click"
        ><dg-button type="primary">priamry</dg-button></dg-tooltip
      >
      <dg-tooltip content="my tooltip" placement="left" trigger="click" :visible="true"
        ><dg-button type="primary">priamry1</dg-button></dg-tooltip
      >
      <dg-tooltip content="my tooltip" placement="left" trigger="contextmenu"
        ><dg-button type="primary">priamry</dg-button></dg-tooltip
      >
    </div>
  </div>
  <div v-if="tab2">
    <div style="display:flex;flex-direction:column">
      <dg-badge :value="25">
        <dg-button>badge</dg-button>
      </dg-badge>
      <dg-badge :value="25" :max="10">
        <dg-button>badge</dg-button>
      </dg-badge>
      <dg-badge :value="25" isDot>
        <dg-button>badge</dg-button>
      </dg-badge>
      <dg-badge value="new">
        <dg-button>badge</dg-button>
      </dg-badge>
    </div>

    <div>
      <dg-rate :max="6" v-model="rateValue1" 
        @change="rateChange"  
      ></dg-rate>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const tab1 = ref(false);
const tab2 = ref(true);

const clickJump = () => {
  console.log("jump");
};

function clickButton() {
  console.log("click");
}

const switchValue = ref(true);
const switchValue2 = ref(false);
const switchValue3 = ref(false);
const tooltipValue = ref(true);

const rateValue1 = ref(2);

const rateChange = (value: number) => {
  console.log('value: ', value);
};
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
