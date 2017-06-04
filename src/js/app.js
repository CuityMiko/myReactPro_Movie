// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css';

// 自定义功能模块
import Routers from '../js/routers.js'

// examples
import PromiseA from '../examples/PromiseA.js'

ReactDOM.render(
    <div className='apphight'>
       <Routers />
    </div>,
    document.getElementById('app')
)