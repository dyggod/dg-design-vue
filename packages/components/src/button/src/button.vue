<template>
  <button
    class="dg-button"
    :class="classes.btClass"
    @click="click"
  >
    <!--TODO: 调整固定的图标可以自定义  -->
    <i
      v-if="isBounce"
      class="iconfont dg-icon-line_right dg-button-duang-icon"
    />
    <span :class="classes.textClass">
      <slot v-if="hasSlot" />
      <span
        v-else
      >{{ textContent }}</span>
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
  reactive, computed, useSlots, defineEmits,
} from 'vue';
import '../style/index.less';
import { buttonProps, ButtonDgFun } from './button';

export default {
  name: 'DgButton',
};
</script>

<script setup lang='ts'>

const props = defineProps(buttonProps);
const emits = defineEmits(['click']);

interface ClassAll {
  btClass: string;
  textClass: string;
}

const classes = reactive<ClassAll>({
  btClass: '',
  textClass: '',
});

// 根据props的值，动态设置class
(function genClasses() {
  const { type, size, dgFun } = props;
  const btClass = `dg-button-${props.type} dg-button-${props.size} dg-button-${props.dgFun}`;
  const textClass = `dg-button-text dg-button-${type}-text`;
  classes.btClass = btClass;
  classes.textClass = textClass;
}());

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

const isBounce = computed(() => {
  const { dgFun } = props;
  return dgFun === ButtonDgFun.Bounce;
});

const isHub = computed(() => {
  const { dgFun } = props;
  return dgFun === ButtonDgFun.Hub;
});

// dgButton被点击后，自身的点击事件影响
const click = () => {
  const { dgFun } = props;
  if (dgFun === ButtonDgFun.Run) {
    // do something
  } else if (dgFun === ButtonDgFun.Jump) {
    // 移除jump的动画
    const jumpClass = `dg-button-${ButtonDgFun.Jump}`;
    classes.btClass = classes.btClass.replace(jumpClass, '');
  }
  emits('click');
};
</script>

<style lang="less">
</style>
