# vue-lib-starter

[中文文档](./README.md)

A boilerplate for creating a Vue library, using Storybook.

## Getting started

```
git clone https://github.com/senntyou/vue-lib-starter.git --depth=1

cd vue-lib-starter

npm install             # install dependencies

npm run storybook       # develop using storybook

npm run build           # build distribution files
```

## Features

- [less](http://lesscss.org/), [scss](https://sass-lang.com/) style languages support.
- [Single File Components](https://vuejs.org/v2/guide/single-file-components.html), [jest](https://jestjs.io/en/) test support.
- Using [storybook](https://storybook.js.org/) to develop, preview, deploy static site.

## Project

```
- src
  - index.js                 # js entry file
  - styles
    - index.{less,scss}      # style entry file

- .storybook                 # for storybook
- stories                    # for storybook
```

By default, styles use `less` language, if you want to use `scss` language, you should modify `package.json` by:

```
"scripts": {
  - "build:styles": "npm run build:less",
  + "build:styles": "npm run build:scss",
}
```

## Notes

- It's recommended to write styles separately with scripts and templates (not in `.vue` files, but in `.{less,scss}` files).
