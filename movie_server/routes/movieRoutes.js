/**
 * 电影模块路由
 */
'use strict';
var movieController = moviepro.controllers.movie;

module.exports = function (app) {
    app.get('/movie/getlist', function (req, res, next) { //获取电影列表
        movieController.getlist(req,res,next);
    });
}
