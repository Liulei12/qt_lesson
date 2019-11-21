const koa = require('koa');
const router = require('./router');
const KoaBody = require('koa-body');

const app = new koa();
app.use(KoaBody())
app.use(router.routes())
app.listen(3003, () => {
    console.log('run in http://localhost:3003');
})