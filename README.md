<p align="center">
  <img width="100px" src="./public/images/logo@4x.png">
</p>

<h1 align="center">
  <a href="https://dyggod.github.io/dg-design-vue/" target="_blank">DG-Design-Vue</a>
</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/dg-design-vue">
    <img src="https://img.shields.io/npm/v/dg-design-vue.svg">
  </a>
  <a href="https://npmcharts.com/compare/dg-design-vue?minimal=true">
    <img src="https://img.shields.io/npm/dm/dg-design-vue.svg">
  </a>
  <a href="https://sonarcloud.io/">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=dyggod_dg-ui&metric=alert_status">
  </a>
  <br>
</p>

<p align="center">一个基于 Vue.js 3 的组件库，提供一些奇思妙想的小玩意儿</p>

+ 💪 Vue3 Composition API
+ 🔥 使用 TypeScript 开发
+ 😂 一些有意思的组件，那年我双手插兜...不知什么叫对手

## 介绍 📖

DG-UI 是由个人开发的 vue3 组件库，不同于其他组件库是为了帮助开发者实现企业级生产，比如做一个后台管理系统。DG-UI 同样会提供一些常用的基础组件，但更多的是提供一些古灵精怪的想法和思路以及作者收集来的一些有意思的效果，所以你可以在这里看到很多非严肃的、趣味的小组件，它或许不适用于企业级生产，但会是你用于个人生产的绝妙宝库。

## 文档 👇
[在线文档](https://dyggod.github.io/dg-design-vue/zh/)

## 起步 🚀

### 通过包管理器安装

```
# 选择一个你喜欢的包管理器，推荐使用 pnpm

# PNPM
$ pnpm install dg-design-vue --save

# NPM
$ npm install dg-design-vue --save

# YARN
$ yarn add dg-design-vue

```

### 使用

在项目主文件中引入

main.ts or main.js

```
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

## License

Dg-Design-Vue is open source and released under the [MIT](https://github.com/dyggod/dg-design-vue/blob/main/LICENSE) License.
