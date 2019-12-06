setTimeout(function (argument){
    console.log(11111)
},0)
console.log(222222)


console.time('test')
for(var i = 0;i < 1000000; i++){
    i === (100000 - 1)
}
console.timeEnd('test')

console.log(222222)

//1. js引擎线程 2. GUI线程 3. http网络请求线程(处理用户的get，post等请求，等到返回结果后将回调函数推入到任务队列中)
// 4. 定时触发器线程（setTimeout,等待时间结束后把执行函数推入到任务队列) 5.浏览器事件处理线程