<template>
  <div :class="classes.containerClass">
    <svg
      class="dg-icon-svg"
      aria-hidden="true"
    >
      <use :xlink:href="iconName" />
    </svg>
  </div>
</template>
<script lang="ts">
import {
  computed, onMounted, defineProps, reactive,
} from 'vue';
import { iconProps } from './icon';
import '../style/index.less';

export default {
  name: 'DgIcon',
};
</script>

<script setup lang="ts">
const props = defineProps(iconProps);

interface ClassAll {
  containerClass: string;
}

onMounted(() => {
  import('./font/font.js' as any);
});

const classes = reactive<ClassAll>({
  containerClass: 'dg-icon',
});

const iconName = computed(() => `#dg-icon-${props.name}`);
</script>
