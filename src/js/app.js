// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// 自定义功能模块
import Routers from '../js/routers.js'

ReactDOM.render(
    <div className='apphight'>
       <Routers />
    </div>,
    document.getElementById('app')
)