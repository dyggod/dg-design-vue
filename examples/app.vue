<template>
  <div>
    <div>
      <Button>123 <div>456</div></Button>
      <Button type="danger"></Button>
      <Button type="primary">789</Button>
      <Button type="warning"></Button>
      <Button type="info"></Button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Button } from '@dyggod/dg-ui'
</script>

<style lang="less">
div {
  color: green;
}
</style>
