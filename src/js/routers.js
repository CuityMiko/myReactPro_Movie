/**
 * 路由配置模块
 */
import React,{Component} from 'react'
import { Router, Route,IndexRoute, browserHistory} from 'react-router'

// 自定义容器
// 主页面
import AppContainer from '../containers/AppContainer.js'
// 电影容器
import MovieContainer from '../containers/MovieContainer.js'
// 关于我们
import AboutContainer from '../containers/AboutContainer.js'
// 电影详情
import MovieDetailContainer from '../containers/MovieDetailContainer.js'

export default class Routers extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={AppContainer}>
                    {/*默认MovieContainer为首页*/}
                    <IndexRoute component={MovieContainer} />
                    <Route path='movie/:classify/:page(/:q)' component={MovieContainer}></Route>
                    <Route path='movie/about' component={AboutContainer}></Route>
                    <Route path='movie_detail/:id' component={MovieDetailContainer}></Route>
                </Route>
            </Router>
        )
    }
}