<template>
  <button
    class="dg-button"
    :class="classes.btClass"
  >
    <span :class="classes.textClass">
      <slot v-if="hasSlot" />
      <span v-else>{{ textContent }}</span>
    </span>
    <div
      v-if="isRunning"
      class="running"
    >
      <div class="outer">
        <div class="body">
          <div class="arm behind" />
          <div class="arm front" />
          <div class="leg behind" />
          <div class="leg front" />
        </div>
      </div>
    </div>
  </button>
</template>

<script  lang="ts">
import {
  computed, useSlots,
} from 'vue';
import '../style/index.less';
import { buttonProps, ButtonDgFun } from './button';

export default {
  name: 'DgButton',
};
</script>

<script setup lang='ts'>

const props = defineProps(buttonProps);

// 根据props的值，动态设置class
const classes = computed(() => {
  const {
    type, size, dgFun,
  } = props;
  const btClass = `dg-button-${type} dg-button-${size} dg-button-${dgFun}`;
  const textClass = `dg-button-${type}-text`;
  return {
    btClass,
    textClass,
  };
});

// 根据props text的值，动态设置文本
const slotDefault = useSlots().default;
const hasSlot = !!slotDefault;
const textContent = computed(() => {
  const { type } = props;
  return type;
});

const isRunning = computed(() => {
  const { dgFun } = props;
  return dgFun === ButtonDgFun.Run;
});

</script>

<style lang="less">
.dg-button {
  font-weight: bolder;
}
</style>
