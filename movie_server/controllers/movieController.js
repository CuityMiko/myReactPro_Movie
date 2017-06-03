/**
 * 电影模块控制器
 */
'use strict';
var movieServices = moviepro.services.movie;

// 获取电影列表
var getlist=function(req, res, next){
    //Get请求方式
    // var obj= {
    //     start: parseInt(req.query.pageindex-1)*parseInt(req.query.pagecount),
    //     count:parseInt(req.query.pagecount),
    //     city:req.query.city,
    //     q:req.query.q
    // }
    // var promise=movieServices.getmovielist(req.query.classify,obj);
    //Post请求方式
    var _msgobj=JSON.parse(req.body.msg);
    var obj= {
        start: parseInt(_msgobj.pageindex-1)*parseInt(_msgobj.pagecount),
        count:parseInt(_msgobj.pagecount),
        city:_msgobj.city,
        q:_msgobj.q
    }
    var promise=movieServices.getmovielist(_msgobj.classify,obj);
    promise.then((data)=>{
        res.json({result:true,data:data});
    },(err)=>{
        res.json({result:false,data:err});
    })
}

//获取电影详情
var getdetail=function(req,res,next){
    var _msgobj=JSON.parse(req.body.msg);
    var obj= {
        id: _msgobj.id
    }
    var promise=movieServices.getmoviedetail(obj);
    promise.then((data)=>{
        res.json({result:true,data:data});
    },(err)=>{
        res.json({result:false,data:err});
    })
}

// 练习promise/A+规范
var getpresult=function(req,res,next){
    res.json({result:parseInt(req.body.num1)+parseInt(req.body.num2)});
}
module.exports = {getlist,getpresult,getdetail}