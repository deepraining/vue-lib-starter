# vue-lib-starter

[English Documentation](./README.en.md)

一个用于快速创建 Vue 组件库的模板脚手架，使用 Storybook 构建.

## 快速开始

```
git clone https://github.com/senntyou/vue-lib-starter.git --depth=1

cd vue-lib-starter

npm install             # 安装依赖

npm run storybook       # 使用 storybook 开发组件

npm run build           # 构建发布文件
```

## 特性

- [less](http://lesscss.org/), [scss](https://sass-lang.com/) 样式语言支持.
- [单文件组件](https://vuejs.org/v2/guide/single-file-components.html), [jest](https://jestjs.io/en/) 测试支持.
- 使用 [storybook](https://storybook.js.org/) 开发、预览组件.

## 项目

```
- src
  - index.js                 # js 入口文件
  - styles
    - index.{less,scss}      # 样式入口文件

- .storybook                 # for storybook
- stories                    # for storybook
```

样式默认使用 `less` 语言, 如果你想使用 `scss` 语言, 可以修改 `package.json`:

```
"scripts": {
  - "build:styles": "npm run build:less",
  + "build:styles": "npm run build:scss",
}
```

## 注意

- 推荐把 Vue 组件的样式与 js 脚本分开来写(样式单独写在 `.{less,scss}` 文件中，而非 `.vue` 文件).
