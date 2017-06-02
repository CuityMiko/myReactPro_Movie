/**
 * 基本布局框架容器
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

// 引用样式
import '../styles/app.css'
// 第三方模块 antd-ui-react
import { Layout, Menu, Icon,Input,Row,Col } from 'antd';

const { Header,Footer } = Layout;

export default class AppContainer extends Component{
    render(){
        return (
            <div className='apphight'>
                <Layout className='apphight'>
                    <Header className="header">
                    {/*头部导航*/}
                    <Row type="flex" align="middle">
                        <Col span={18} push={6}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}>
                                <Menu.Item key="1">
                                    <Input.Search
                                        placeholder="搜索/电影/演员/导演..."
                                        style={{ width: 300 }}
                                        size="large"
                                        onSearch={value => console.log(value)}
                                    />
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to='/movie/about'>关于我们</Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={6} pull={18}>
                            <div className="logo" />
                            <strong style={{color:'#FFFFFF',fontSize:21}}>
                                <Link to='/movie/in_theaters/1'>豆瓣电影</Link>
                            </strong>
                        </Col>
                    </Row>
                    </Header>
                    {/*中间内容部分*/}
                    {this.props.children}
                    {/*底部栏*/}
                    <Footer style={{ textAlign: 'center',backgroundColor:'#404040',color:'#FFFFFF'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}