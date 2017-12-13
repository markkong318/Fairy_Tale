# fighting

这是一个react工程项目，开箱即用，它拥有如下配置，如果这不是你喜欢的，可以随时移除。

- 【请求库】: [https://github.com/axios/axios](https://github.com/axios/axios)
- 【UI组件库】: [https://ant.design/index-cn](https://ant.design/index-cn)
- 【icon图标库】: [iconfont](http://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.4&type=1&page=2)
- 【mock server】: 使用了koa 1.x
- 【Less】: 样式上使用了less

标准的redux，定义action，reducers，使用 `redux-thunk` 来做异步处理。

```JavaScript
// constants.js
export const DEFAULT_SYNC_DEFAULT = 'DEFAULT_SYNC_DEFAULT';
export const DEFAULT_ASYNC_DEFAULT = 'DEFAULT_ASYNC_DEFAULT';

// actions
import { DEFAULT_SYNC_DEFAULT, DEFAULT_ASYNC_DEFAULT } from './constants';

export const getDefault = (params) => {
  return {
    type: DEFAULT_SYNC_DEFAULT,
    payload: {
      data: 'wower'
    }
  }
}

export const getAsyncDefault = (params) => (dispatch) => {
  setTimeout(() => {
    dispatch((() => {
      return {
        type: DEFAULT_ASYNC_DEFAULT,
        payload: {
          data: 'icepy'
        }
      }
    })())
  },2000)
}

// reducers
import { DEFAULT_SYNC_DEFAULT, DEFAULT_ASYNC_DEFAULT } from './constants';

const initState = {
  name: '',
  asyncName: '...'
};

export default function defaultReducers(state = initState, action){
  const { type, payload } = action;
  switch (type){
    case DEFAULT_SYNC_DEFAULT:
      return { ...state, name: payload.data }
    case DEFAULT_ASYNC_DEFAULT:
      return { ...state, asyncName: payload.data}
    default:
      return { ...state}
  }
}
```

构建基于`webpack 3.x`来编写，并且对样式进行了`autoprefixer`处理。

## Bash

提炼了三个命令来完成项目的开发

```bash

$ npm start // 项目启动
$ npm run mock-server  // 启动mock服务器
$ npm run build  // 打包可以发布的资源

```

## 目录结构

顶级目录结构如下：

- src 项目源文件
- build 构建脚本
- config 构建脚本依赖的配置信息
- dist 构建完成可发布的资源目录

`src` 目录结构如下：

- components 公共组件
- globals 公共reducers
- routers 路由
- containers 页面级别的组件
- styles 公共样式
- shared 抽象出来的request util等
- store redux store
- app.js 入口.js

`containers` 目录结构如下：

根据自己的业务，创建页面级别的组件

- index.js 入口.js
- .jsx 页面级别的组件
- .less 页面级别的样式
- components 这个页面独用的组件
- flow 这个页面需要的action reducers

## 发布

使用 `npm run build` 构建待发布的资源，请忽略根目录中的`index.html`。

建议发布规则：

- 打包出来的dist发布到CDN中
- 自己在服务端创建一个index.html，使用服务端输出的方式来引用一个version版本变量
- 这个变量对应CDN的版本号

# LICENSE

MIT License

Copyright (c) 2017 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# Fairy_Tale
