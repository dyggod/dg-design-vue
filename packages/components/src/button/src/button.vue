<template>
  <button
    class="dg-button"
    :class="classes.btClass"
  >
    <span :class="classes.textClass">
      <slot v-if="hasSlot" />
      <span v-else>{{ textContent }}</span>
    </span>
  </button>
</template>

<script  lang="ts">
import {
  computed, useSlots,
} from 'vue';
import '../style/index.less';
import { buttonProps } from './button';

export default {
  name: 'DgButton',
};
</script>

<script setup lang='ts'>

const props = defineProps(buttonProps);

// 根据props的值，动态设置class
const classes = computed(() => {
  const {
    type, size,
  } = props;
  const btClass = `dg-button-${type} dg-button-${size}`;
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

</script>

<style lang="less">
.dg-button {
  font-weight: bolder;
}
</style>
