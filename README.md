<p align="center">
  <img width="100px" src="./public/images/logo@4x.png">
</p>

<h1 align="center">
  <a href="https://dyggod.github.io/dg-ui/" target="_blank">DG-Design-Vue</a>
</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/@dyggod/dg-ui">
    <img src="https://img.shields.io/npm/v/@dyggod/dg-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/@dyggod/dg-ui?minimal=true">
    <img src="https://img.shields.io/npm/dm/@dyggod/dg-ui.svg">
  </a>
  <br>
</p>

<p align="center">一个基于 Vue.js 3 的组件库，提供一些奇思妙想的小玩意儿</p>

## 介绍

DG-UI是由个人开发的vue3组件库，你可以在这里看到很多非严肃的、有意思的小组件，它或许不适用于企业级生产，但是你用于个人生产的绝妙宝库。

[在线文档](https://dyggod.github.io/dg-ui/)

## 起步

### 通过包管理器安装
```
# 选择一个你喜欢的包管理器

# NPM
$ npm install @dyggod/dg-ui --save

# Yarn
$ yarn add @dyggod/dg-ui

# pnpm
$ pnpm install @dyggod/dg-ui
```

你也可以使用`pnpm`或`yarn`，取决于你的工具。


### 使用

```
// main.ts
import { createApp } from 'vue'
import DgUi from '@dyggod/dg-ui'
import '@dyggod/dg-ui/dg-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(DgUi)
app.mount('#app')
```

## 贡献

本仓库目前由个人开发及维护，但是诚挚欢迎所有热爱开源的程序员参与贡献，十分期待大家的PR。


