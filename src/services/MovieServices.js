/**
 * 电影数据请求服务
 */
import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'

export default class MovieServices{
    // 获取电影列表数据
    static getMovieListData(movieobj){
        //Get方式
        // let _url=`http://127.0.0.1:10086/movie/getlist?classify=${movieobj.classify}&pageindex=${movieobj.pageindex}&pagecount=${movieobj.pagecount}&city=杭州`;
        // console.log(_url)
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
        //Post方式
        let _url=`http://127.0.0.1:10086/movie/getlist`;
        fetch(_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `classify=${movieobj.classify}&pageindex=${movieobj.pageindex}&pagecount=${movieobj.pagecount}&city=杭州`
        }).then(function(res) {
            if (res.ok) {
                return res.json();
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(JSON.stringify(err));
        })

        //Jsonp跨域Get请求
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