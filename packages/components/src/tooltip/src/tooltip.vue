<template>
  <div
    ref="tooltipContainer"
    class="dg-tooltip"
  >
    <div class="dg-tooltip-trigger">
      <slot v-if="$slots.default" />
    </div>
    <transition
      :name="transitionName"
    >
      <div
        v-if="showTooltip"
        ref="tooltipPopper"
        class="tooltip-popper"
        :class="placementClass"
      >
        <slot name="content">
          <span
            v-if="rawContent"
            v-html="content"
          />
          <span v-else>{{ content }}</span>
        </slot>
        <span class="tooltip-popper-arrow" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, useSlots, reactive, ref, watch, computed, onMounted, nextTick,
} from 'vue';
import { tooltipProps, TooltipTrigger, tooltipEmits } from './tooltip';
import '../style/index.less';

export default {
  name: 'DgTooltip',
};
</script>

<script setup lang='ts'>
// 写一个tooltip组件，使用vue3的setup语法
const props = defineProps(tooltipProps);
const tooltipContainer = ref<HTMLElement>();
const tooltipPopper = ref<HTMLElement>();
const showTooltip = ref(false);
// 1. 首先定义tooltip的可见性，由visible控制，visible的值取决于prop.modelValue和prop.visible共同控制
const isControlled = computed(() => props.modelValue !== false);

const visible = computed(() => {
  if (isControlled.value) {
    return props.modelValue === true;
  }
  return props.visible === true;
});

showTooltip.value = visible.value;

const slots = useSlots();
const hasSlot = computed(() => !!slots.default);
const slotDefault = computed(() => slots.default);

const placement = computed(() => {
  const { placement: propPlacement } = props;
  return propPlacement;
});
const transitionName = computed(() => `tooltip-${placement.value}`);
const placementClass = computed(() => `tooltip-popper-${placement.value}`);

// 对ref=tooltipContainer的元素添加鼠标移入移出事件
const handleMouseEnter = () => {
  showTooltip.value = true;
};
const handleMouseLeave = () => {
  setTimeout(() => {
    showTooltip.value = false;
  }, props.hideAfter);
};
onMounted(() => {
  if (tooltipContainer.value) {
    tooltipContainer.value.addEventListener('mouseenter', handleMouseEnter);
    tooltipContainer.value.addEventListener('mouseleave', handleMouseLeave);
  }
});
</script>

<style scoped>
</style>
