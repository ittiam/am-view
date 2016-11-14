# am-view

> A vue2 and webpack2 project

## Build Setup

``` bash
# 安装依赖
npm install

# 开发 localhost:8200
npm run dev

# build for production with minification
npm run build
```

## 安装

``` bash
npm install am-view --save
```

## 如何使用

``` js
import AmView from 'am-view';

Vue.use(AmView); 
```

### 引入单个组件

``` js
import 'am-view/lib/style.css';

import Button from 'am-view/src/components/Button';
Vue.component('Button', Button);
```

## Thanks to

- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)
- [Ant Design](https://github.com/ant-design/ant-design)
- [mint-ui](https://github.com/ElemeFE/mint-ui)
