'use strict';
var formidable = require('formidable'); //文件上传
var path = require('path');
var fs = require('fs');
var tools = moviepro.core.tools;

//获取文件类型
var _getContentType = function (extname) {
    switch (extname) {
        case '.jpg':
        case '.jpeg':
            return 'application/jpg'
        case '.png':
            return 'application/png'
        default:
            return '';
    }
}

//将缓存流转成字节数组
Buffer.prototype.toByteArray = function () {
    return Array.prototype.slice.call(this, 0)
}

var savePath = path.join(__dirname, '../uploads/images/');

//上传图片
var uploadImage = function (req, callback) {
    var form = new formidable.IncomingForm({ uploadDir: savePath });
    form.parse(req, function (err, fields, files) {
        console.log(fields)
        console.log(files)
        console.log(files.file)
        var _dater = tools.dateFormat('yyyyMMddhhmmssSSS', new Date());
        var _drct = savePath;
        fs.exists(_drct, (exists) => {
            if (!exists) {
                fs.mkdirSync(_drct);
            }
            var oldpath = files.file.path;
            var newpath = path.join(__dirname, '../uploads/images/' + _dater + files.file.name);
            console.log(oldpath);
            if (fs.existsSync(newpath)) {
                fs.unlinkSync(newpath);
            }
            fs.rename(oldpath, newpath, err => {
                if (err) {
                    callback(new Error('error'), null);
                } else {
                    fs.readFile(oldpath, function (err, data) {

                        if (err) {
                            callback(new Error('error'), null);
                        }
                        else {
                            var _imgpath = '/images/' + _dater + files.file.name;
                            var _imgbtarr = data.toByteArray();
                            callback(null, '上传成功');
                            //上传至图片服务器
                            // common.uploadImage({
                            //     FileName: _dater + files.qqfile.name,  //_dater + files.file.name
                            //     ContentType: _getContentType(path.extname(oldpath)),
                            //     ContentLength: _imgbtarr.length,
                            //     ImgArr: _imgbtarr
                            // }, (err, result) => {
                            //     //fs.unlinkSync(newpath);
                            //     //console.log(err);
                            //     if (err) {
                            //         callback(new Error('error'), null);
                            //     } else {
                            //         //console.log('【callback.result】'+result.Results);
                            //         if (result.Results != null) {
                            //             var _imgobj = {};
                            //             _imgobj.PictureId = result.Results[0].PictureId;
                            //             _imgobj.PictureUrl = result.Results[0].PictureUrl;
                            //             callback(null, _imgobj);
                            //         } else {
                            //             callback(new Error('上传失败'), null);
                            //         }
                            //     }
                            // });
                        }
                    });
                };
            });
        })
    });
}

function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};

//写日志
var tologs=function(req){
    var _dater = tools.dateFormat('yyyy-MM-dd hh:mm:ss.SSS', new Date());
    var _currentY=tools.dateFormat('yyyy', new Date());
    var _currentM=tools.dateFormat('MM', new Date());
    var _currentday=tools.dateFormat('yyyy-MM-dd', new Date());
    var logPath = path.join(__dirname, '../logs/');
    var _currYLogY = `${logPath}/${_currentY}/`;
    var _currMLogP = `${logPath}/${_currentY}/${_currentM}`;
    var _currdayfile=`${logPath}/${_currentY}/${_currentM}/${_currentday}_log.txt`;
    var _ip=getClientIp(req);
    _ip=_ip==null|| _ip==undefined?req.ip:_ip;
    var _refererurl=req.headers['referer'];
    var _method=req.method.toLowerCase();
    var deviceAgent = req.headers["user-agent"].toLowerCase();
    fs.exists(logPath, (exists) => {
        if (!exists) {
            fs.mkdirSync(logPath);
        }
    })
    fs.exists(_currYLogY, (exists) => {
        if (!exists) {
            fs.mkdirSync(_currYLogY);
        }
    })
    fs.exists(_currMLogP, (exists) => {
        if (!exists) {
            fs.mkdirSync(_currMLogP);
        }
    })
    //dirnam
    var _storeid=req.session.user!=null&&req.session.user.store!=null?parseInt(req.session.user.store.id):0;
    var _soldierid=req.session.user!=null?parseInt(req.session.user.SoldierId):0;
    var _loginfo=`${_dater}|${_ip}|${_method}|${_refererurl}|${req.path}|${_storeid}|${_soldierid}\r\n`
    fs.appendFile(_currdayfile,_loginfo, (err) => {
        if (err) {
            console.log(`${_dater}:tolog_err:${err}`);
        }
    })
}

module.exports = { uploadImage,tologs }