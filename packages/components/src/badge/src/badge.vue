<template>
  <div :class="classes.badge">
    <slot />
    <sup
      v-show="(content || isDot)"
      :class="classes.badgeContent"
      v-text="content"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
} from 'vue';
import { isNumber } from '@dg-ui/utils';
import useClassSpace from '&/use-class';
import { badgeProps } from './badge';
import '../style/index.less';

export default {
  name: 'DgBadge',
};
</script>

<script setup lang='ts'>
const props = defineProps(badgeProps);

const content = computed<string>(() => {
  if (props.isDot) return '';

  if (isNumber(props.value) && isNumber(props.max)) {
    return props.max < props.value ? `${props.max}+` : `${props.value}`;
  }
  return `${props.value}`;
});

const classes = useClassSpace('badge', { type: props.type, isDot: props.isDot });

</script>

<style>

</style>
