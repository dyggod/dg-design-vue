# Switch 开关

## 基础用法

<div class="example">
  <basic />
</div>

::: details 查看代码

```vue
<template>
  <div>
    <dg-switch v-model="switchValue" />
    <dg-switch
      v-model="switchValue"
      disabled
    />
    <dg-switch
      :value="true"
      disabled
    />
    <dg-switch :value="true" />
    <dg-switch :value="false" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const switchValue = ref(true);
</script>
```

:::

## 禁用状态

<div class="example">
  <disabled />
</div>

::: details 查看代码

```vue
<template>
  <div>
    <dg-switch
      v-model="switchValue"
      disabled
    />
    <dg-switch
      v-model="switchValue2"
      disabled
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const switchValue = ref(true);
const switchValue2 = ref(false);
</script>
```

:::


## 自定义开关开启和关闭时的颜色

<div class="example">
  <color />
</div>

::: details 查看代码

```vue
<template>
  <div>
    <dg-switch
      v-model="switchValue"
      active-color="red"
    />
    <dg-switch
      v-model="switchValue2"
      inactive-color="#000"
    />
    <dg-switch
      v-model="switchValue3"
      active-color="#ff0"
      inactive-color="#eee"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const switchValue = ref(true);
const switchValue2 = ref(false);
const switchValue3 = ref(false);
</script>
```

:::

## dgFun 趣味开关

使用 dgFun 定义趣味开关

### 星灯

is so beautiful，like you，like this...

<div class="example">
  <light />
</div>

::: details 查看代码

```vue
<template>
  <div>
    <dg-switch
      v-model="switchValue"
      dg-fun="light"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const switchValue = ref(false);
</script>
```

:::

## Switch API

### Switch 属性

| 参数 | 说明 | 类型 | 默认值 |  可选值 |
| --- | --- | --- | --- | --- |
| value / v-model | 是否选中 | boolean | false |  |
| disabled | 是否禁用 | boolean | false | |
| active-color | 开启时的背景色 | string |  primary色 #1e88e5 | |
| inactive-color | 关闭时的背景色 | string | gray色   #909399 | |
| dg-fun | 趣味样式 | string | - | light |

### Switch 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 开关状态改变时触发 | value，新状态的值 |


<script setup>
import basic from './switch/basic.vue';
import disabled from './switch/disabled.vue';
import color from './switch/color.vue';
import light from './switch/light.vue';
</script>
