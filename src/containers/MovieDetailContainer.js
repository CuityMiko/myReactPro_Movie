/**
 * 电影详情容器
 */
import React,{Component} from 'react'

export default class MovieDetailContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(`id:${this.props.params.id}`)
        return (
            <div className='apphight'>
                <h3>电影详情</h3>
            </div>
        )
    }
}