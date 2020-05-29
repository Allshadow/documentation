## 项目说明

本节记录一下有关于使用本文档的说明。

本项目的基础代码来源于此大神，https://github.com/yuanalina

本人基于此次项目进行修改，转化为个人使用，伴随着不断学习，持续更新中...

本次目的在对整体页面进行整理，文档规范的定义...

### 引入 JyRequiredImport

你可以引入整个 JyRequiredImport，或是根据需要仅引入部分组件。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import JyRequiredImport from 'jy-required-import';
import 'jy-required-import/lib/theme/index.css';
import App from './App.vue';

Vue.use(JyRequiredImport);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

注意：样式文件需要单独引入。


#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "jy-required-import",
        "styleLibraryName": "theme"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 只需要引入素材通用模块中的Content（latex转义html解析），那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Input } from 'jy-required-import';
import App from './App.vue';

Vue.component(Input.name, Input);
/* 或写为
 * Vue.use(Input)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
