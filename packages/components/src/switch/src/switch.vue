<template>
  <div
    class="dg-switch"
    :class="classes.switchClass"
    :style="style"
  >
    <label
      class="dg-switch-content"
      :for="inputId"
    >
      <i
        v-if="isLight"
        ref="bulb"
        :class="`${isChecked ? 'light-active' : ''} bulb`"
      >
        <span class="bulb-center" />
        <span class="filament-1" />
        <span class="filament-2" />
        <span class="reflections">
          <span />
        </span>
        <span class="sparks">
          <i class="spark1" />
          <i class="spark2" />
          <i class="spark3" />
          <i class="spark4" />
        </span>
      </i>
      <input
        :id="inputId"
        ref="input"
        type="checkbox"
        role="switch"
        class="dg-switch-input"
        :aria-disabled="switchDisabled"
        :checked="isChecked"
        :true-value="true"
        :false-value="false"
        :disabled="switchDisabled"
        @change="handleChange"
      >
      <div
        class="slider round"
        :class="classes.sliderClass"
      />
    </label>
  </div>
</template>

<script lang="ts">
import {
  ref, computed, onMounted, nextTick, defineEmits, watch, reactive,
} from 'vue';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '#/event';
import { switchProps, switchEmits, SwitchDgFun } from './switch';
import '../style/index.less';

export default {
  name: 'DgSwitch',
};
</script>

<script setup lang='ts'>
const props = defineProps(switchProps);
const emits = defineEmits(switchEmits);

const input = ref<HTMLInputElement>();
const bulb = ref<HTMLElement | null>(null);

const isControlled = ref(props.modelValue !== false);

const inputId = computed(() => {
  // 生成随机id
  const id = Math.random().toString(36).substr(2);
  return id;
});

const isChecked = computed(() => (isControlled.value
  ? props.modelValue === true : props.value === true));

const switchDisabled = computed(() => {
  const { disabled } = props;
  return disabled;
});

// 生成样式class
const classes = reactive({
  switchClass: '',
  sliderClass: '',
});

(function genClasses() {
  const { disabled, dgFun } = props;
  const switchClass = `${disabled ? 'dg-switch-disabled' : ''} dg-switch-fun-${dgFun}`;
  const sliderClass = 'dg-switch-slider';
  classes.switchClass = switchClass;
  classes.sliderClass = sliderClass;
}());

// style 自定义颜色变量
const style = computed(() => {
  const { activeColor, inactiveColor } = props;
  const style = {
    '--active-color': activeColor,
    '--inactive-color': inactiveColor,
  };
  return style;
});

watch(() => props.modelValue, (val) => {
  isControlled.value = true;
});

watch(() => props.value, (val) => {
  isControlled.value = false;
});

watch(isChecked, (val) => {
  input.value!.checked = val;
  // 如果是true，且dgFun为light，给ref为bulb的元素添加class: light-active
  if (val && isLight.value) {
    if (!bulb.value) return;
    bulb.value!.classList.add('light-active');
  } else {
    if (!bulb.value) return;
    bulb.value!.classList.remove('light-active');
  }
});

const handleChange = (e: Event) => {
  const val = !isChecked.value;
  emits(UPDATE_MODEL_EVENT, val);
  emits(CHANGE_EVENT, val);
  nextTick(() => {
    input.value!.checked = isChecked.value;
  });
};

// **** dg fun ****
const isLight = computed(() => {
  const { dgFun } = props;
  return dgFun === SwitchDgFun.Light;
});

onMounted(() => {
  input.value!.checked = isChecked.value;
});

</script>

<style lang="less">
</style>
