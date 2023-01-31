# Badge 徽标

## 基础用法

<div class="example">
  <div style="display: flex;flex-direction: column;">
    <dg-badge type="primary" :value="1">
      <dg-button>badge</dg-button></dg-badge>
    <dg-badge type="success" :value="2"><dg-button>badge</dg-button></dg-badge>
    <dg-badge type="warning" :value="3"><dg-button>badge</dg-button></dg-badge>
    <dg-badge type="danger" :value="4"><dg-button>badge</dg-button></dg-badge>
    <dg-badge type="info" :value="5"><dg-button>badge</dg-button></dg-badge>
  </div>
</div>


::: details 显示代码

```vue
<template>
  <div>
    <div style="display: flex;flex-direction: column;">
      <dg-badge type="primary" :value="1"><dg-button>badge</dg-button></dg-badge>
      <dg-badge type="success" :value="2"><dg-button>badge</dg-button></dg-badge>
      <dg-badge type="warning" :value="3"><dg-button>badge</dg-button></dg-badge>
      <dg-badge type="danger" :value="4"><dg-button>badge</dg-button></dg-badge>
      <dg-badge type="info" :value="5"><dg-button>badge</dg-button></dg-badge>
    </div>
  </div>
</template>
```

:::

## 使用 `max` 定义最大值，超过最大值显示 `max+`，默认为 `99`

<div class="example">
  <div style="display:flex">
    <dg-badge type="primary" :value="100" :max="10" class="item">
      <dg-button>badge</dg-button>
    </dg-badge>
    <dg-badge type="success" :value="100">
      <dg-button>badge</dg-button>
    </dg-badge>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-badge type="primary" :value="100" :max="10">
      <dg-button>badge</dg-button>
    </dg-badge>
    <dg-badge type="success" :value="100">
      <dg-button>badge</dg-button>
    </dg-badge>
  </div>
</template>
```

:::

## 使用 `value` 自定义徽标内容

<div class="example">
  <div>
    <dg-badge value="new" class="item">
      <dg-button>badge</dg-button>
    </dg-badge>
    <dg-badge value="我是练习时长两年半...">
      <dg-button>badge</dg-button>
    </dg-badge>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-badge value="new">
      <dg-button>badge</dg-button>
    </dg-badge>
    <dg-badge value="我是你">
      <dg-button>badge</dg-button>
    </dg-badge>
  </div>
</template>
```

:::

## 使用 `isDot` 展示为小圆点，是个布尔值

<div class="example">
  <div>
    <dg-badge isDot class="item">
      <dg-button>badge</dg-button>
    </dg-badge>
    <dg-badge type="primary" isDot class="item">
      <dg-button>badge</dg-button>
    </dg-badge>
    <dg-badge type="success" isDot>
      <dg-button>badge</dg-button>
    </dg-badge>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-badge isDot>
      <dg-button>badge</dg-button>
    </dg-badge>
    <dg-badge type="primary" isDot>
      <dg-button>badge</dg-button>
    </dg-badge>
    <dg-badge type="success" isDot>
      <dg-button>badge</dg-button>
    </dg-badge>
  </div>
</template>
```

:::

## Badge API

## Badge 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 徽标的内容 | String, Number | — | — |
| max | 最大值，超过最大值显示为 `max+`，默认为 `99` | Number | — | 99 |
| isDot | 是否为小圆点 | Boolean | — | false |
| type | 徽标的类型，不同颜色 | String | primary, success, warning, danger, info | danger |
