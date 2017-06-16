'use strict';
//
//全局启动配置
//
module.exports = {
    host: 'http://www.cuitymiko.com',         //当前主机访问地址
    //host: 'http://192.168.0.104',
    listenPort: 3389, //监听端口
    //express session配置
    sessionRedisHost: '10.10.247.171', //用于存储session的redis服务 
    sessionRedisPort: 6379, //用于存储session的redis服务端口
    sessionRedisDb: 1, //redis db(0=全部)
    sessionSecret: 'im myfirewall', //session secret
    //soa 接口地址
    soaCoreHost: 'http://api.douban.com/v2/movie',
    soaProHost: 'http://120.132.57.7:8001',
    cookieExpires:7*24*60*60*1000, //cookie过期时间
    soaAliPayUrl:'http://b2capi.youzy.cn/Payments/AlipayWeb/SendSubmit.aspx', //SOA支付宝支付url
    cacheRedisHost: '127.0.0.1', //用于存储cache的redis服务 
    cacheRedisPort: 6379, //用于存储cache的redis服务端口
    cacheRedis_OPTS:{}
}; 