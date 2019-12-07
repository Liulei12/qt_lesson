## 代理
线上环境解决跨域：代理
生活中  中介
工具:webpack live-servers / nginx
代码层面：fe-> /api/post[node server] -> /api/post[java server]

以上都是反向代理：代理客户端
正向代理：代理服务器

一个域 下面 ajax 请求 有并发限制
提交数据给服务器的时候 ajax 一般用来处理业务接口
日志提交 考虑到ajax 并发限制 属于非核心业务   采用 img 的方式提交数据