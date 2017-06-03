/**
 * 电影数据请求服务
 */
import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
// 全局配置
import Config from '../js/config.js'

export default class MovieServices{
    // 获取电影列表数据
    static getMovieListData(movieobj){
        let _msg=JSON.stringify(movieobj);
        //Get方式
        // let _url=`http://127.0.0.1:10086/movie/getlist?classify=${movieobj.classify}&pageindex=${movieobj.pageindex}&pagecount=${movieobj.pagecount}&city=杭州`;
        // fetch(_url)  
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         } else {
        //             console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
        //         }
        //     })
        //     .then((data) => {
        //         console.log(data)
        //     })
        //     .catch((err)=> {
        //         console.error(err)
        //     })

        //Post方式 + Promise/A+ 规范解决异步回调
        return new Promise((resolve,reject)=>{
            let _url=`${Config.ServerHostURL}/movie/getlist`;
            fetch(_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `msg=${_msg}`
            }).then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })

        //Jsonp跨域Get请求 Jsonp只支持get方式,cors支持get/post等各种方式
        // let count=12;
        // let start=(movieobj.pageindex-1)*count;
        // let city='杭州';
        // let _purl=`http://api.douban.com/v2/movie/${movieobj.classify}?start=${start}&count=${count}&city=${city}`;
        // fetchJsonp(_purl)
        // .then(function(response) {
        //     return response.json()
        // }).then(function(json) {
        //     console.log(json)
        // }).catch(function(ex) {
        //     console.log('parsing failed', ex)
        // })
    }
}