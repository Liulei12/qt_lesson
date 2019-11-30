// node启动服务
// let http = require('http');

// let server = http.createServer((req, res) => {
//   res.end('hello world!')
// })

// server.listen(3000, () => {
//   console.log('Server 3000 is running.')
// })

// koa启动服务
// const Koa = require('koa')
// let app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'Hello world!'
// })

// app.listen(3000)

// MyKoa启动服务
let MyKoa = require('./lib/application')
let app = new MyKoa()
app.use((ctx) => {
  // console.log(ctx.req.url)
  // console.log(ctx.request.req.url)
  // console.log(ctx.response.req.url)
  // console.log(ctx.request.url)
  // console.log(ctx.request.path)
  // console.log(ctx.url)
  // console.log(ctx.path)
  // console.log(ctx.response.body)
  console.log(ctx.body)
  ctx.body = 'hello world!'
})
app.listen(3000, () => {
  console.log('This is my Koa, Server 3000 is running.')
})