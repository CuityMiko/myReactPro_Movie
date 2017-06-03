/**
 * 电影模块服务
 */
const request = moviepro.core.request;

//获取电影列表
var getmovielist = function (classify,jsonObj) {
    var url=`/${classify}`;
    return request.getRequest(url, jsonObj);
}

//获取电影详情
var getmoviedetail=function(jsonObj){
    var url=`/subject/${jsonObj.id}`;
    return request.getRequest(url, {});
}

module.exports = { getmovielist,getmoviedetail };