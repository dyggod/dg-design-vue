<p align="center">
  <img width="100px" src="./public/images/logo@4x.png">
</p>

<h1 align="center">
  <a href="https://dyggod.github.io/dg-ui/" target="_blank">DG-Design-Vue</a>
</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/dg-design-vue">
    <img src="https://img.shields.io/npm/v/dg-design-vue.svg">
  </a>
  <a href="https://npmcharts.com/compare/dg-design-vue?minimal=true">
    <img src="https://img.shields.io/npm/dm/dg-design-vue.svg">
  </a>
  <br>
</p>

<p align="center">一个基于 Vue.js 3 的组件库，提供一些奇思妙想的小玩意儿</p>

## 介绍

DG-UI 是由个人开发的 vue3 组件库，你可以在这里看到很多非严肃的、有意思的小组件，它或许不适用于企业级生产，但是你用于个人生产的绝妙宝库。

[在线文档](https://dyggod.github.io/dg-ui/)

## 起步

### 通过包管理器安装

```
# 选择一个你喜欢的包管理器

# NPM
$ npm install dg-design-vue --save

# Yarn
$ yarn add dg-design-vue

# pnpm
$ pnpm install dg-design-vue --save
```

### 使用

在项目主文件中引入

```
// main.ts
import { createApp } from 'vue'
import DgUi from 'dg-design-vue'
import 'dg-design-vue/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(DgUi)
app.mount('#app')
```

在组件中使用

```
<template>
  <div>
    <dg-button>按钮</dg-button>
  </div>
</template>
```

## 贡献

本仓库目前由个人开发及维护，但是诚挚欢迎所有热爱开源的程序员参与贡献，十分期待大家的 PR。
