/**
 * 电影容器（正在热映、即将上映、Top250）
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

// 第三方模块 antd-ui-react
import { Layout, Menu, Icon,Row,Col } from 'antd';

// 自定义组件
import MovieListComponent from '../components/MovieListComponent.js'

import MovieServices from '../services/MovieServices.js'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class MovieContainer extends Component{
    constructor(props){
        super(props)        
    }
    render(){
        let movieobj={
            classify:this.props.params.classify || 'in_theaters',
            pageindex:this.props.params.page || 1,
            pagecount:12
        }
        let mpromise = MovieServices.getMovieListData(movieobj);
        mpromise.then((data)=>{
            console.log(data);
        },(err)=>{
            console.log(err);
        }).catch((err)=>{
            console.log(err);
        })
        //设置选中项
        let _selkey=['1'];
        switch (this.props.params.classify) {
            case 'coming_soon':
                _selkey=['2'];
                break;
            case 'top250':
                _selkey=['3'];
                break;
            case 'search':
                _selkey=['0'];
                // js取消选中
                var selelmt=document.getElementsByClassName('ant-menu-item-selected')[1];
                if(selelmt){
                    var reg = new RegExp("(\\s|^)" + "ant-menu-item-selected" + "(\\s|$)");
                    selelmt.className = selelmt.className.replace(reg, " ");
                }
                break;
            default:
                break;
        }        
        return (
            <div>
                <Layout >
                    {/*左侧菜单*/}
                    <Sider breakpoint="lg" collapsedWidth="0" width={200} style={{ background: '#fff',height:'100%' }}
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                        >
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={_selkey}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                        >
                        <SubMenu key="sub1" title={<span><Icon type="book" />电影列表</span>}>
                            <Menu.Item key="1">
                                <Link to='/movie/in_theaters/1'><span><Icon type="tags" />正在热映</span></Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to='/movie/coming_soon/1'><span><Icon type="cloud-upload" />即将上映</span></Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to='/movie/top250/1'><span><Icon type="area-chart" />Top250</span></Link>
                            </Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout >
                        {/*内容列表*/}
                        <Content style={{ background: '#fff', padding: 15, margin: 0, minHeight: 280 }}>
                            <MovieListComponent />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}