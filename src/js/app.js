// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// 自定义功能模块
import AppContainer from '../containers/AppContainer.js'

ReactDOM.render(
    <div className='apphight'>
       <AppContainer />
    </div>,
    document.getElementById('app')
)