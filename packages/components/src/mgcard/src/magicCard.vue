<template>
  <div
    class="dg-mgcard"
    @click="clickCard"
  >
    <slot v-if="hasSlot" />
    <span
      v-else
    >{{ textContent }}</span>
  </div>
</template>

<script lang="ts">
import {
  reactive, defineProps, useSlots, computed, defineEmits,
} from 'vue';
import '../style/index.less';
import { mgCardProps } from './magicCard';

export default {
  name: 'DgMagicCard',
};
</script>

<script setup lang='ts'>
const props = defineProps(mgCardProps);
const emits = defineEmits(['click']);

// 根据props text的值，动态设置文本
const slotDefault = useSlots().default;
const hasSlot = !!slotDefault;
const textContent = computed(() => {
  const { text } = props;
  return text;
});

// 点击卡片
const clickCard = () => {
  console.log('click card');
  emits('click');
};

</script>

<style lang="less">

</style>
