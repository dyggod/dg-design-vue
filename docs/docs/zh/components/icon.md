# 图标

## 基础用法

使用 name 指定图标

<div class="example">
  <div>
    <dg-icon name="discount"></dg-icon>
    <dg-icon name="electronics"></dg-icon>
    <dg-icon name="drag"></dg-icon>
  </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <dg-icon name="discount"></dg-icon>
    <dg-icon name="electronics"></dg-icon>
    <dg-icon name="drag"></dg-icon>
  </div>
</template>
```

:::

## 图标列表

<div class="icon_content">
    <div class="icon_list">
        <dg-icon name="edit"></dg-icon>
        <div class="icon_name">edit</div>
    </div>
    <div class="icon_list">
        <dg-icon name="discount"></dg-icon>
        <div class="icon_name">discount</div>
    </div>
        <div class="icon_list">
        <dg-icon name="direction-left"></dg-icon>
        <div class="icon_name">direction-left</div>
    </div>
        <div class="icon_list">
        <dg-icon name="eye-close"></dg-icon>
        <div class="icon_name">eye-close</div>
    </div>
        <div class="icon_list">
        <dg-icon name="email"></dg-icon>
        <div class="icon_name">email</div>
    </div>
        <div class="icon_list">
        <dg-icon name="error"></dg-icon>
        <div class="icon_name">error</div>
    </div>
        <div class="icon_list">
        <dg-icon name="favorite"></dg-icon>
        <div class="icon_name">favorite</div>
    </div>
        <div class="icon_list">
        <dg-icon name="favorite"></dg-icon>
        <div class="icon_name">favorite</div>
    </div>
        <div class="icon_list">
        <dg-icon name="file-common"></dg-icon>
        <div class="icon_name">file-common</div>
    </div>
     <div class="icon_list">
        <dg-icon name="file-common"></dg-icon>
        <div class="icon_name">file-common</div>
    </div>
    <div class="icon_list">
        <dg-icon name="file-delete"></dg-icon>
        <div class="icon_name">file-delete</div>
    </div>
    <div class="icon_list">
        <dg-icon name="column-4"></dg-icon>
        <div class="icon_name">column-4</div>
    </div>
     <div class="icon_list">
        <dg-icon name="customer-service"></dg-icon>
        <div class="icon_name">customer-service</div>
    </div>
     <div class="icon_list">
        <dg-icon name="good"></dg-icon>
        <div class="icon_name">good</div>
    </div>
    <div class="icon_list">
        <dg-icon name="hide"></dg-icon>
        <div class="icon_name">hide</div>
    </div>
     <div class="icon_list">
        <dg-icon name="close"></dg-icon>
        <div class="icon_name">close</div>
    </div>
    <div class="icon_list">
        <dg-icon name="add"></dg-icon>
        <div class="icon_name">add</div>
    </div>
    <div class="icon_list">
        <dg-icon name="arrow-double-right"></dg-icon>
        <div class="icon_name">arrow-double-right</div>
    </div>
    <div class="icon_list">
        <dg-icon name="back"></dg-icon>
        <div class="icon_name">back</div>
    </div>
    <div class="icon_list">
        <dg-icon name="arrow-double-right"></dg-icon>
        <div class="icon_name">arrow-double-right</div>
    </div>
</div>

<style>
.icon_content{
    overflow:hidden;
    border-top:1px solid #f5f5f5;
    border-left:1px solid #f5f5f5;
}
.icon_content .icon_list {
    float:left;
    width:20%;
    height:110px;
    border-right:1px solid #f5f5f5;
    border-bottom:1px solid #f5f5f5;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-wrap:wrap;
    box-sizing:border-box;
    cursor: pointer;
}
.icon_name {
    color:gray;
    font-size:14px;
    width:100%;
    text-align:center
}
</style>

## Icon API

### Icon 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称，可选值见上表 | _string_ | - |
