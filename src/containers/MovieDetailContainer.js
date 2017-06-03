/**
 * 电影详情容器
 */
import React,{Component} from 'react'
import { Card,Row,Col,message,Spin,Alert } from 'antd';

// 数据服务
import MovieServices from '../services/MovieServices.js'

export default class MovieDetailContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            moviedetail:null
        }
    }
    // 组件将要被渲染到真实DOM节点中
    componentWillMount(){
        let promise=MovieServices.getMovieDetail({id:this.props.params.id});
        promise.then((res)=>{
            if(res.result){
                this.setState({
                    loading:false,
                    moviedetail:res.data
                })
            }else{
                message.warning('数据获取失败');
                this.setState({
                    loading:false
                })
            }
        },(err)=>{
            message.warning('数据获取失败');
            this.setState({
                loading:false
            })
        }).catch((err)=>{
            message.warning('数据获取失败');
            this.setState({
                loading:false
            })
        })
    }
    // 渲染电影详情页面
    renderMovieDetail(){
        if(this.state.loading){
            return <Spin tip="Loading..." size="large">
                    <Alert
                        message="加载中..."
                        description="数据正在加载中，精彩内容马上呈现，请耐心等待..."
                        type="info"
                        width='50%'
                    />
                </Spin>
        }else{
           return <Row type="flex" align="middle">
                    <Col style={{width:'100%'}}>
                        <Card bordered={true} title={this.state.moviedetail.title} extra={<span href="javascript:;">
                                上映时间：{this.state.moviedetail.year}&nbsp;&nbsp;&nbsp;类型：{this.state.moviedetail.genres.join('、')}&nbsp;&nbsp;&nbsp;<strong style={{color:'red'}}>{this.state.moviedetail.rating.average}</strong>
                            </span>} style={{ width: '100%' }}>
                            <p style={{textAlign:'center'}}>
                                <img alt={this.state.moviedetail.title} src={this.state.moviedetail.images.large} />
                            </p>
                            <p>导演：{
                                    this.state.moviedetail.directors.map((item,i)=>{
                                        return <span key={i}>{item.name}&nbsp;&nbsp;&nbsp;</span>
                                    })
                                }</p>
                            <p>演员：{
                                    this.state.moviedetail.casts.map((item,i)=>{
                                        return <span key={i}>{item.name}&nbsp;&nbsp;&nbsp;</span>
                                    })
                                }</p>
                            <p>{this.state.moviedetail.summary}</p>
                        </Card>
                    </Col>
                </Row>
        }
    }
    render(){
        return (
            <div className='apphight'>
                {this.renderMovieDetail()}
            </div>
        )
    }
}