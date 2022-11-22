<template>
  <button class="dg-button">
    测试按钮
  </button>
</template>

<script setup lang='ts'>
import '../style/index.less';
import { buttonProps } from './button';

const props = defineProps(buttonProps);

</script>

<style lang="less">
.dg-button {
  font-weight: bolder;
}
</style>
