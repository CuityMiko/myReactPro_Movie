### React项目基本骨架
+ src : 项目程序目录
+ src/bower_components : bower管理的web前端libs
+ src/components : 组件
+ src/js/app.js : 项目入口文件
+ src/pages : 前端页面
+ src/index.html : 项目入口页面
+ src/template.html : webpack生产环境自动生成到dist目录的项目入口页面模板
+ .bowerrc : 指定bower install的组件存放位置
+ .eslintignore : 配置eslint语法规范监测忽略的文件目录
+ .eslintrc.js : 定义eslint语法规范规则
+ .gitignore : 定义git上传忽略的文件目录
+ bower.json : bower配置文件
+ ESLint.md : eslint笔记
+ gulpfile.js : gulp配置文件
+ package.json : npm配置文件
+ typings.json : 智能提示配置文件
+ webpack.develop.config.js : webpack开发时配置文件
+ webpack.publish.config.js : webpack发布生产时配置文件
+ src/services : 获取数据服务
+ src/containers : 路由的容器目录
+ src/js/routers.js : 路由文件
+ movie_server : server服务器代理
+ .babelrc : babel的query配置文件
+ 运行:npm run start

### UI框架使用 Ant Design of React
+ https://ant.design/docs/react/introduce-cn
+ npm install antd --save
+ babel所需：babel-plugin-import
+ npm install babel-plugin-import --save-dev
+ 添加babel插件都需要添加babel-plugin前缀
```
// .babelrc or babel-loader option
 {
    test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
    loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
    query: {
        presets: ['es2015', 'react','stage-0','stage-1','stage-2','stage-3'],
        "plugins": [
            "transform-node-env-inline",
            "transform-object-assign",
            // ant babel-plugin-import
            ["import", [
                {
                    "libraryName": "antd",
                    "libraryDirectory": "lib",   // default: lib
                    "style": "css"
                },
                {
                    "libraryName": "material-ui",
                    "libraryDirectory": "components",  // default: lib
                    "camel2DashComponentName": false,  // default: true
                }
            ]]
        ]
    }
}
```

### master版本为项目的基础骨架版本
### v1版本为项目的进行版本
+ TODO:Warning: It looks like you're using a minified copy of the development build of React. When deploying React apps to production, make sure to use the production build which skips development warnings and is faster. See https://fb.me/react-minification for more details.
