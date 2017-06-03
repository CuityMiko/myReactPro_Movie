/**
 * 电影模块路由
 */
'use strict';
var movieController = moviepro.controllers.movie;

module.exports = function (app) {
    app.post('/movie/getlist', function (req, res, next) { //获取电影列表
        movieController.getlist(req,res,next);
    });
    app.post('/examples/promisea', function (req, res, next) { //练习promise/A+规范
        movieController.getpresult(req,res,next);
    });
    app.post('/movie/detail', function (req, res, next) { //练习promise/A+规范
        movieController.getdetail(req,res,next);
    });
}
