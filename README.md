
├── public
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── img
│   │   ├── js  -----外部的js
│   │   │   ├── element-ui.js -----element-ui按需引入
                ...
│   │   └── scss
│   │       ├── common.scss  -----公共sass
│   │       ├── element.scss -----element主题样式
│   │       ├── reset.scss   -----normalize
│   │       └── variables.scss -----sass变量
│   ├── common
│   │   ├── filters  -----过滤器
│   │   ├── formatter  -----格式处理器
│   │   ├── options   ------定义了一些固定的options转换格式
│   │   └── utils   -----工具方法
│   ├── components -----公共组件
│   ├── layout  -----模块组件
│   ├── main.js 
│   ├── mixins
│   ├── router   -----路由
│   │   ├── index.js
│   │   └── routes.js
│   ├── service  
│   │   ├── api   -----分模块的接口逻辑
│   │   ├── api.service.js  -----封装请求
│   │   ├── config.js      -----请求相关的配置
│   │   └── jwt.service.js
│   ├── store
│   ├── styles   ----- 公共样式
│   │   ├── color-config.js ---- 颜色设置
│   │   └── common.scss     
│   └── views  布局组件
├── static
├── vue.config.js   ----- vue-cli 3.0配置文件

