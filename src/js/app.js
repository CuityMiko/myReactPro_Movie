// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// 自定义功能模块
import HelloWord from '../components/HelloWord.js'

ReactDOM.render(
    <div>
       <HelloWord />
    </div>,
    document.getElementById('app')
)