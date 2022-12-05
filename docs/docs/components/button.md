# 按钮

## 基础用法

### 使用 type 定义按钮样式

<div class="example">
  <div>
    <dg-button>dg-ui</dg-button>
    <dg-button type="primary"></dg-button>
    <dg-button type="success"></dg-button>
    <dg-button type="warning"></dg-button>
    <dg-button type="danger"></dg-button>
    <dg-button type="info"></dg-button>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <div>
      <dg-button>dg-ui</dg-button>
      <dg-button type="primary"></dg-button>
      <dg-button type="success"></dg-button>
      <dg-button type="warning"></dg-button>
      <dg-button type="danger"></dg-button>
      <dg-button type="info"></dg-button>
    </div>
  </div>
</template>
```

:::

### 使用 size 定义按钮大小

<div class="example">
  <div>
    <dg-button size="large">大按钮</dg-button>
    <dg-button>默认按钮</dg-button>
    <dg-button size="small">小按钮</dg-button>
  </div>
  <div>
    <dg-button size="large" type="primary">大按钮</dg-button>
    <dg-button type="warning">默认按钮</dg-button>
    <dg-button size="small" type="danger">小按钮</dg-button>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <div>
      <dg-button size="large">大按钮</dg-button>
      <dg-button>默认按钮</dg-button>
      <dg-button size="small">小按钮</dg-button>
    </div>
    <div>
      <dg-button size="large" type="primary">大按钮</dg-button>
      <dg-button type="warning">默认按钮</dg-button>
      <dg-button size="small" type="danger">小按钮</dg-button>
    </div>
  </div>
</template>
```

:::

## dgFun 趣味按钮

使用 dgFun 定义趣味按钮

### 跑动的小人儿~

<br>

<div class="example">
  <div>
    <dg-button dgFun="run">dg-ui</dg-button>
    <dg-button dgFun="run" type="primary"></dg-button>
    <dg-button dgFun="run" type="success"></dg-button>
    <dg-button dgFun="run" type="warning"></dg-button>
    <dg-button dgFun="run" type="danger"></dg-button>
    <dg-button dgFun="run" type="info"></dg-button>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <div>
      <dg-button dgFun="run">dg-ui</dg-button>
      <dg-button dgFun="run" type="primary"></dg-button>
      <dg-button dgFun="run" type="success"></dg-button>
      <dg-button dgFun="run" type="warning"></dg-button>
      <dg-button dgFun="run" type="danger"></dg-button>
      <dg-button dgFun="run" type="info"></dg-button>
    </div>
  </div>
</template>
```

:::

### 跳跃的按钮~（你逮不到我）

当你点到按钮时，它就乖乖不动了

<div class="example" style="height:200px">
  <div style="display:flex">
    <div style="width: 300px">
      <dg-button dgFun="jump" type="primary">dg-ui</dg-button>
    </div>
    <div style="width: 300px">
      <dg-button dgFun="jump" type="danger"></dg-button>
    </div>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div style="display:flex">
    <div style="width: 300px">
      <dg-button dgFun="jump" type="primary">dg-ui</dg-button>
    </div>
    <div style="width: 300px">
      <dg-button dgFun="jump" type="danger"></dg-button>
    </div>
  </div>
  </div>
```

:::

### duang~ duang~ duang~

较为Q弹的按钮

<div class="example">
  <div>
    <dg-button dgFun="duang" type="primary">dg-ui</dg-button>
    <dg-button dgFun="duang" type="danger">Surprise!</dg-button>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <div>
      <dg-button dgFun="duang" type="primary">dg-ui</dg-button>
      <dg-button dgFun="duang" type="danger">Surprise!</dg-button>
    </div>
  </div>
</template>
```

:::

## Button API

### Button 属性

| 参数  | 说明         | 类型     | 可选值                                      | 默认值 |
| ----- | ------------ | -------- | ------------------------------------------- | ------ |
| type  | 按钮类型     | _string_ | primary / success / warning / danger / info | -      |
| dgFun | 按钮趣味样式 | _string_ | run / jump / duang                                 | -      |
