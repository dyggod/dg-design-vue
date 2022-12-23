<template>
  <div :class="classes.rate">
    <span
      v-for="(item, index) in max"
      :key="index"
      :class="classes.rateItem"
      @mousemove="setCurrentValue(item)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <i :class="`iconfont ${item <= currentValue ? 'dg-icon-star-active' : 'dg-icon-star'}`" />
    </span>
    <span
      v-if="showText"
      :class="classes.text"
    >{{ text }}</span>
  </div>
</template>
<script lang="ts">
</script>

<script lang="ts">
import {
  ref, computed, watch, onMounted, onUnmounted,
} from 'vue';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '#/event';
import useClassSpace from '&/use-class';
import { rateProps, rateEmits } from './rate';
import '../style/index.less'

export default {
  name: 'DgRate',
};

</script>

<script setup lang='ts'>
const props = defineProps(rateProps);
const emits = defineEmits(rateEmits);

const currentValue = ref(props.modelValue);
const rateDisabled = computed(() => props.disabled);

const classes = useClassSpace('rate', { disabled: rateDisabled.value });

const text = computed(() => {
  if (props.showText) {
    return props.texts[Math.ceil(currentValue.value) - 1]
  }
  return ''
})

function setCurrentValue(value: number) {
  if (rateDisabled.value) {
    return;
  }
  currentValue.value = value
  console.log('mouse in: ');
}

function resetCurrentValue() {
  if (rateDisabled.value) {
    return;
  }
  currentValue.value = props.modelValue
}

function emitValue(value: number) {
  // 如果允许清除，且选中的值与modelValue相同，则将值重置为0
  if (props.allowClear === true && value === props.modelValue) {
    value = 0;
  }
  console.log('value: ', value);

  emits(UPDATE_MODEL_EVENT, value)
  if (props.modelValue !== value) {
    emits(CHANGE_EVENT, value)
  }
}

function selectValue(value: number) {
  if (rateDisabled.value) {
    return
  }
  emitValue(value);
}

watch(() => props.modelValue, (value) => {
  currentValue.value = value;
});

if (!props.modelValue) {
  emits(UPDATE_MODEL_EVENT, 0)
}

defineExpose({
  // 设置当前值
  setCurrentValue,
  // 重置当前值
  resetCurrentValue,
});

</script>

<style>

</style>
