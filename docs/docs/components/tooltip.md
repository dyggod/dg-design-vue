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

## API

### Tooltip 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示框的内容 | string | - |
| placement | 提示框的显示位置 | string | top |
