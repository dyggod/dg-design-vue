# Rate 评分

## 基础用法

点击星星可以进行评分，鼠标移入时会显示对应的分数。

<div class="example">
  <basic />
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-rate
      v-model="value2"
    />
    <dg-rate
      v-model="value1"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const value2 = ref(3);
const value1 = ref(0);
</script>
```

:::

## 使用 `max` 定义评分最大值

<div class="example">
  <div>
    <dg-rate :max="10" class="item"></dg-rate>
    <dg-rate :max="3" class="item"></dg-rate>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-rate :max="10"></dg-rate>
    <dg-rate :max="3"></dg-rate>
  </div>
</template>
```

:::


## 评分禁用

<div class="example">
  <div>
    <dg-rate :max="10" disabled class="item"></dg-rate>
    <dg-rate :max="3" disabled class="item"></dg-rate>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-rate :max="10" disabled></dg-rate>
    <dg-rate :max="3" disabled></dg-rate>
  </div>
</template>
```

:::

## 可清空

当你再次点击相同的值时，可以将值重置为 0。

<div class="example">
  <allowClear />
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-rate
      v-model="value"
      allow-clear
    />
  </div>
  <div>
    <dg-rate
      v-model="value2"
      allow-clear
    />
  </div>
</template>

<script setup lang='ts'>

import { ref } from 'vue';

const value = ref(0);

const value2 = ref(3);

</script>
```

:::


## 辅助文字

用辅助文字直接地表达对应分数。

为组件设置 show-text 属性会在右侧显示辅助文字。 通过设置 texts 可以为每一个分值指定对应的辅助文字。 texts 为一个数组，长度应等于最大值 max。

<div class="example">
  <texts />
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-rate
      v-model="value"
      show-text
      :texts="texts"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const value = ref(3);

const texts = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

</script>
```

:::


## Rate API

### Rate 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | number | 0 | - |
| max | 最大分值 | number | 5 | - |
| allow-clear | 是否允许再次点击后清除 | boolean | false | - |
| disabled | 是否为只读 | boolean | false | - |
| show-text | 是否显示辅助文字 | boolean | false | - |
| texts | 辅助文字数组 | string[] | ['极差', '失望', '一般', '满意', '惊喜'] | - |



<script setup>
import basic from './rate/basic.vue';
import allowClear from './rate/clear.vue';
import texts from './rate/texts.vue';
</script>

