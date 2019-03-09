# k-on-ui

test update2

## todo

> 有更好的形式请务必提出来。

这里列一下组件

example: button + coder

在 issue 中每个组件单独开一个，用来跟进，打上标签 `coder` `componentName` `progress`

progress in ['todo', 'doing', 'end']

组件文件组织格式

- componentName
  - component.vue
  - component.less
  - other folder
  - readme.md 讲一下组件的思路，和部分细节，为什么选择了这样一种实现方式等等。

分支管理就 Git flow 。开发完发 pr 至 master 需 2 人 review 才可 merge

_个人的小心愿，文档或者是组件中，大量出现这五种颜色_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .yui {
        border-color: #794c23;
      }
      .mio {
        border-color: #2c2b29;
      }

      .ritsu {
        border-color: #8d6427;
      }

      .mugi {
        border-color: #e5c58f;
      }

      .azusa {
        border-color: #353340;
      }
      .container {
        display: flex;
      }

      .item {
        margin: 15px;
        width: 40px;
        height: 30px;
        border-width: 1px;
        border-style: solid;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item yui"></div>
      <div class="item mio"></div>
      <div class="item ritsu"></div>
      <div class="item mugi"></div>
      <div class="item azusa"></div>
    </div>
  </body>
</html>
```
