/**
 * 电影列表组件
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

// 第三方模块 antd-ui-react
import { Row,Col,Card,Alert,Spin,Pagination } from 'antd';
import PropTypes from 'prop-types'

export default class MovieListComponent extends Component{
    // router属性是父级标签Router标签封装的属性，子孙级使用之前需要在contextTypes中进行router属性的类型验证
    // 通过this.context.router.params可以获取到路由中的参数
    static contextTypes={
        router:PropTypes.object
    }
    constructor(props){
        super(props)
    }
    render(){
        // 获取参数
        let _classify=this.context.router.params.classify || 'in_theaters';
        let _page=this.context.router.params.page || 1;
        console.log(`classify:${_classify},page:${_page},q:${this.context.router.params.q}`)
        //根据参数去服务请求数据
        return (
            <div>
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
                        <Link to='/movie_detail/2344'>
                            <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                                <div className="custom-card">
                                <h3>Europe Street beat</h3>
                                <p>www.instagram.com</p>
                                </div>
                            </Card>
                        </Link>
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
            </div>
        )
    }
}