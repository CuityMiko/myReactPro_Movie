/**
 * 基本布局框架容器
 */
import React,{Component} from 'react'
// 第三方模块 antd-ui-react
import { Layout, Menu, Breadcrumb, Icon,Input,Row,Col,Card,Alert,Spin,Pagination } from 'antd';

// 引用样式
import '../styles/app.css'

const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

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
                                <Menu.Item key="2">关于我们</Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={6} pull={18}>
                            <div className="logo" />
                            <strong style={{color:'#FFFFFF',fontSize:21}}>豆瓣电影</strong>
                        </Col>
                    </Row>
                    </Header>
                    <Layout >
                        {/*左侧菜单*/}
                        <Sider breakpoint="lg" collapsedWidth="0" width={200} style={{ background: '#fff',height:'100%' }}
                            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                            >
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            >
                            <SubMenu key="sub1" title={<span><Icon type="book" />电影列表</span>}>
                                <Menu.Item key="1"><span><Icon type="tags" />正在热映</span></Menu.Item>
                                <Menu.Item key="2"><span><Icon type="cloud-upload" />即将上映</span></Menu.Item>
                                <Menu.Item key="3"><span><Icon type="area-chart" />Top250</span></Menu.Item>
                            </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout >
                            {/*内容列表*/}
                            <Content style={{ background: '#fff', padding: 15, margin: 0, minHeight: 280 }}>
                                <Row style={{marginBottom:15,display:'none'}}>
                                    <Col>
                                        {/*<Alert message="共搜索出40个关于“周杰伦”的结果" type="success" />*/}
                                        <Alert
                                            message="搜索成功"
                                            description="共搜索出40个关于“周杰伦”的结果"
                                            type="success"
                                            showIcon
                                        />
                                        <Alert
                                            message="搜索失败"
                                            description="暂无关于“周杰伦”的搜素结果"
                                            type="error"
                                            showIcon
                                        />
                                    </Col>
                                </Row>
                                <div style={{display:'none'}}>
                                    <Spin tip="Loading..." size="large">
                                        <Alert
                                            message="加载中..."
                                            description="数据正在加载中，精彩内容马上呈现，请耐心等待..."
                                            type="info"
                                        />
                                    </Spin>
                                </div>
                                <Row>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                            <div className="custom-image">
                                            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                            </div>
                                            <div className="custom-card">
                                            <h3>Europe Street beat</h3>
                                            <p>www.instagram.com</p>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                                <Pagination defaultCurrent={1} total={500} pageSize={12} style={{textAlign:'center',marginTop:15}} 
                                    onChange={(page,pageSize)=>{console.log(`page:${page},pagesize:${pageSize}`)}}
                                />
                            </Content>
                        </Layout>
                    </Layout>
                    {/*底部栏*/}
                    <Footer style={{ textAlign: 'center',backgroundColor:'#404040',color:'#FFFFFF'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}