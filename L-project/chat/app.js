/**
 *  主程序入口  
 *          1.提供web服务器   web服务器开启  端口
 *          2.聊天服务
 * 
 *         声明变量 var
 *          ES6
 *          ES const 常量 let 块变量
 * 
 * 
 *      Node 高并发  天生是异步
 */

 const http = require('http');//引入一个模块
 const fs = require('fs');//文件系统模块  对于文件操作能力
 const ws = require('socket.io');//引入socket.io模块
 /**
  *   读文件   I/O 流
  *   2进制  
  */

 const server = http.createServer((req,res)=>{
    const html = fs.readFileSync('./index.html');//同步读取文件方法   同步异步
    res.end(html);//响应并且返回一个结果
 });// 创建并且返回一个web服务器实例

 server.listen('3000');//监听端口


 const io = ws(server);//返回socket接口集合  传入server  访问地址映射

 //监听事件  连接 监听到客户端连接到服务器事件
 let person = 0;

 io.on('connection',(socket)=>{
     ++person; 
     console.log('有用户连接,当前客户端人数为:' + person)
     //连接之后要做的事情 socket 客户端与服务器交流唯一端口
     socket.on('message',(msg)=>{
        console.log(msg);
        io.emit('message',msg);//主动触发事件
     });//监听到消息事件

     socket.on('disconnect',()=>{
        person--
        console.log('有用户断开连接,当前客户端人数为:' + person)
     });

 })

 /**
  *     HTML +框架  +Node.js               7480
  *   就业班 : JavaScript + 框架 + Node.js  5个月  6880
  *   架构班 : +设计模式 算法  代码优化      6个月   7880
  *   12345    9280   2019年云栖大会门票  老师直接带队  杭州云栖小镇  
  */

