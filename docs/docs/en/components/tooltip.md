# Tooltip 文字提示

## 基础用法

当鼠标移入或移出元素时，显示或隐藏提示框

<div class="example">
  <div>
    <dg-tooltip content="提示文字">
      <dg-button type="primary">鼠标移入显示提示</dg-button>
    </dg-tooltip>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <div>
      <dg-tooltip content="提示文字">
        <dg-button type="primary">鼠标移入显示提示</dg-button>
      </dg-tooltip>
    </div>
  </div>
</template>
```

:::

## 显示位置

通过 `placement` 属性设置提示框的显示位置

<div class="example">
  <div style="width:400px;display:flex;justify-content:space-between">
    <dg-tooltip content="提示文字" placement="top">
      <dg-button type="primary">上</dg-button>
    </dg-tooltip>
    <dg-tooltip content="提示文字" placement="right">
      <dg-button type="danger">右</dg-button>
    </dg-tooltip>
    <dg-tooltip content="提示文字" placement="bottom">
      <dg-button>下</dg-button>
    </dg-tooltip>
    <dg-tooltip content="提示文字" placement="left">
      <dg-button>左</dg-button>
    </dg-tooltip>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <div style="width:400px;display:flex;justify-content:space-between">
      <dg-tooltip content="提示文字" placement="top">
        <dg-button type="primary">上</dg-button>
      </dg-tooltip>
      <dg-tooltip content="提示文字" placement="right">
        <dg-button>右</dg-button>
      </dg-tooltip>
      <dg-tooltip content="提示文字" placement="bottom">
        <dg-button>下</dg-button>
      </dg-tooltip>
      <dg-tooltip content="提示文字" placement="left">
        <dg-button>左</dg-button>
      </dg-tooltip>
    </div>
  </div>
</template>
```

:::

## 禁用状态

通过 `disabled` 属性设置禁用状态。当是禁用状态时，不会触发提示框，即便设置 `:visible="true"` 也不会显示。

<div class="example">
  <div>
    <dg-tooltip content="提示文字" disabled>
      <dg-button type="primary">禁用状态</dg-button>
    </dg-tooltip>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <div>
      <dg-tooltip content="提示文字" disabled>
        <dg-button type="primary">禁用状态</dg-button>
      </dg-tooltip>
    </div>
  </div>
</template>
```

:::

## 触发方式

通过 `trigger` 属性设置触发方式，可选值为 `hover`、`click`、`contextmenu`， 默认为 `hover`。

当不为 `hover` 时，触发后可点击任何地方关闭提示框。

<div class="example">
  <div style="width:400px;display:flex;justify-content:space-between">
    <dg-tooltip content="提示文字" trigger="hover">
      <dg-button type="primary">鼠标移入</dg-button>
    </dg-tooltip>
    <dg-tooltip content="提示文字" trigger="click">
      <dg-button type="danger">鼠标点击</dg-button>
    </dg-tooltip>
    <dg-tooltip content="提示文字" trigger="contextmenu">
      <dg-button>鼠标右键</dg-button>
    </dg-tooltip>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <div style="width:400px;display:flex;justify-content:space-between">
      <dg-tooltip content="提示文字" trigger="hover">
        <dg-button type="primary">鼠标移入</dg-button>
      </dg-tooltip>
      <dg-tooltip content="提示文字" trigger="click">
        <dg-button type="danger">鼠标点击</dg-button>
      </dg-tooltip>
      <dg-tooltip content="提示文字" trigger="contextmenu">
        <dg-button>鼠标右键</dg-button>
      </dg-tooltip>
    </div>
  </div>
</template>
```

:::

## API

### Tooltip 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model/:visible | 是否显示提示框 | boolean | false | true, false |
| content | 提示框的内容 | string | - | - |
| placement | 提示框的显示位置 | string | top | top, right, bottom, left |
| trigger | 触发方式 | string | hover | hover, click, contextmenu |
