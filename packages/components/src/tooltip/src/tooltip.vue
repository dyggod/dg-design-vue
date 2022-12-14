<template>
  <div
    class="dg-tooltip"
  >
    <div
      ref="tooltipTriggerDiv"
      class="dg-tooltip-trigger"
      tabindex="0"
    >
      <slot v-if="$slots.default" />
    </div>
    <transition
      :name="transitionName"
    >
      <div
        v-if="visible"
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
  useSlots, reactive, ref, watch, computed, onMounted, nextTick,
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
const tooltipTriggerDiv = ref<HTMLElement>();
const tooltipPopper = ref<HTMLElement>();

const isControlled = ref(props.modelValue !== false && props.modelValue !== undefined);

const visible = computed(() => {
  // 如果visible和modelValue属性不是undefined，就不是受控组件
  if (props.visible !== undefined) {
    return props.visible;
  }
  if (props.modelValue !== undefined) {
    return props.modelValue;
  }
  return isControlled.value ? isControlled.value : props.visible === true;
});

const slots = useSlots();
const hasSlot = computed(() => !!slots.default);
const slotDefault = computed(() => slots.default);

const placement = computed(() => {
  const { placement: propPlacement } = props;
  return propPlacement;
});
const transitionName = computed(() => `tooltip-${placement.value}`);
const placementClass = computed(() => `tooltip-popper-${placement.value}`);

// 监听modelValue的变化和visible的变化，来控制tooltip的显示和隐藏
watch(() => props.modelValue, (val) => {
  isControlled.value = val === true;
});

watch(() => props.visible, (val) => {
  isControlled.value = val === true;
});

// 设置不同的事件：mouseenter, mouseleave, click, focus, blur, contextmenu
const handleMouseEnter = () => {
  isControlled.value = true;
};
const handleMouseLeave = () => {
  setTimeout(() => {
    isControlled.value = false;
  }, props.hideAfter);
};
const handleClick = () => {
  isControlled.value = !isControlled.value;
};
const handleFocus = () => {
  isControlled.value = true;
};
const handleBlur = () => {
  setTimeout(() => {
    isControlled.value = false;
  }, props.hideAfter);
};
const handleContextMenu = (event: Event) => {
  // 阻止浏览器默认的右键菜单
  event.preventDefault();
  isControlled.value = !isControlled.value;
};
// 鼠标点击任何地方，tooltip消失
const handleDocumentClick = (event: MouseEvent) => {
  const { target } = event;
  if (target instanceof Node) {
    if (tooltipTriggerDiv.value?.contains(target)) {
      return;
    }
    if (tooltipPopper.value?.contains(target)) {
      return;
    }
    isControlled.value = false;
  }
};

// onMounted时，根据trigger的不同，绑定不同的事件
onMounted(() => {
  const { trigger } = props;
  if (trigger === TooltipTrigger.Hover) {
    tooltipTriggerDiv.value?.addEventListener('mouseenter', handleMouseEnter);
    tooltipTriggerDiv.value?.addEventListener('mouseleave', handleMouseLeave);
  } else if (trigger === TooltipTrigger.Click) {
    tooltipTriggerDiv.value?.addEventListener('click', handleClick);
  } else if (trigger === TooltipTrigger.Contextmenu) {
    tooltipTriggerDiv.value?.addEventListener('contextmenu', handleContextMenu);
  }
  document.addEventListener('click', handleDocumentClick);
});
</script>

<style scoped>
</style>
