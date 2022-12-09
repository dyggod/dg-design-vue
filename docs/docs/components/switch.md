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


<script setup>
import basic from './switch/basic.vue';
import disabled from './switch/disabled.vue';
import color from './switch/color.vue';
</script>
