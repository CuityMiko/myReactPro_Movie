/**
 * 电影列表组件
 */
import React,{Component} from 'react'
import {Link} from 'react-router'

// 第三方模块 antd-ui-react
import { Row,Col,Card,Alert,Spin,Pagination,message } from 'antd';
import PropTypes from 'prop-types'

// 数据服务
import MovieServices from '../services/MovieServices.js'
// 全局配置
import Config from '../js/config.js'

export default class MovieListComponent extends Component{
    // router属性是父级标签Router标签封装的属性，子孙级使用之前需要在contextTypes中进行router属性的类型验证
    // 通过this.context.router.params可以获取到路由中的参数
    static contextTypes={
        router:PropTypes.object
    }
    constructor(props){
        super(props)
        this.state={
            loading:true,
            classify:'in_theaters',// 默认加载正在热映电影列表
            page:1,
            paging:false,
            movielist:[],
            total:0,
            q:''
        }
    }
    // 生命周期函数，组件在渲染之前触发
    componentWillMount(){
        console.log(this.props.student)
        this.props.student.name='lisi'
        console.log(this.props.student)
        this.props.changeState(this.props.student)
        this.getmovielistdata();
    }
    // 生命周期函数，组件将要接收到新的参数时触发（props上的属性值发生变化的时候触发）
    componentWillReceiveProps(nextProps){
        var obj={
            classify:nextProps.classify,
            page:nextProps.page,
            q:nextProps.q
        }
        this.getmovielistdata(obj);
    }
    //分页
    gopaging=(page,pageSize)=>{
        this.context.router.push(`/movie/${this.state.classify}/${page}/${this.state.q}`)
    }
    //获取数据
    getmovielistdata(obj){
        if(obj && obj.classify!=this.state.classify){
            this.setState({
                loading:true
            })
        }
        if(obj && obj.classify==this.state.classify){
            this.setState({
                paging:true
            })
        }
        obj=obj||this.state;
        // 如果为搜索的情况
        if(this.context.router.params.classify=='search'){
            obj.classify=this.context.router.params.classify;
            obj.q=this.context.router.params.q
        }
        let movieobj={
            classify:obj.classify || 'in_theaters',
            pageindex:obj.page || 1,
            pagecount:Config.PageSize,
            city:Config.City,
            q:obj.q
        }
        let mpromise = MovieServices.getMovieListData(movieobj);
        mpromise.then((res)=>{
            if(res.result){
                this.setState({
                    loading:false,
                    classify:obj.classify,
                    page:parseInt(obj.page),
                    movielist:res.data.subjects,
                    paging:false,
                    total:parseInt(res.data.total),
                    q:obj.q
                })
            }else{
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
    // 显示搜索结果
    searchresult(flag){
        if(this.state.classify=='search'){
            let _info=`共搜索出${this.state.total}个关于“${this.state.q}”的结果`
            return <Row style={{marginBottom:15}}>
                    <Col>
                        <Alert
                            message="搜索成功"
                            description={_info}
                            type="success"
                            showIcon />
                    </Col>
                </Row>
        }
        return <div></div>
    }
    //loading
    loadingcontent=()=>{
        if(this.state.loading){
            return (
                <div>
                    <Spin tip="Loading..." size="large">
                        <Alert
                            message="加载中..."
                            description="数据正在加载中，精彩内容马上呈现，请耐心等待..."
                            type="info"
                        />
                    </Spin>
                </div>
            )
        }else{
            if(this.state.movielist.length>0){
                return (
                    <div>
                        {this.searchresult()}
                        <Spin tip="数据加载中..." size="large" spinning={this.state.paging}>
                            <Row>
                                {
                                    this.state.movielist.map((movie)=>{
                                        return <Col key={movie.id} span={4}>
                                                <Link to={'/movie_detail/'+movie.id}>
                                                    <Card style={{ width: 200,height:333 }} bodyStyle={{ padding: 0 }}>
                                                        <div className="custom-image">
                                                        <img alt={movie.title} width='100%' height='270' src={movie.images.large} />
                                                        </div>
                                                        <div className="custom-card">
                                                        <h3>{movie.title}</h3>
                                                        <p>上映年份：{movie.year} &nbsp;&nbsp;&nbsp;评分：<strong style={{color:'red'}}>{movie.rating.average}</strong></p>
                                                        </div>
                                                    </Card>
                                                </Link>
                                            </Col>
                                    })
                                }
                            </Row>
                        </Spin>
                        <Pagination current={this.state.page} total={this.state.total} pageSize={Config.PageSize} style={{textAlign:'center',marginTop:15}} 
                            onChange={(page,pageSize)=>this.gopaging(page,pageSize)} />
                    </div>
                )
            }else{
                return (
                    <div>
                        <Alert
                            message="数据获取失败"
                            description="暂无暂无相关数据"
                            type="error"
                            showIcon/>
                    </div>
                )
            }
        }
    }
    render(){
        // 获取参数
        // let _classify=this.context.router.params.classify || 'in_theaters';
        // let _page=this.context.router.params.page || 1;
        return (
            <div className='apphight'>
                {this.loadingcontent()}
            </div>
        )
    }
}