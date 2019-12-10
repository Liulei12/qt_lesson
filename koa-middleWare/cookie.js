const Koa = require('koa');
const app =new Koa();
const KoaRouter = require('koa-router');
const router = new KoaRouter();
router.get('/login',async(ctx) => {
    ctx.cookies.set('login',true,{
        maxAge: 1000 * 60,
        httpOnly: true
    })
    ctx.body = 'login sucess'
})
router.get('/islogin',async(ctx) => {
    let login = ctx.cookies.get('login')
    if(login){
        ctx.body = {
            islogin: true
        }
    }else{
        ctx.body = {
            islogin:false
        } 
    }
})
router.get('/',async(ctx)=>{
    ctx.body = `
    <a href="/login">login</a>
    <a href="/islogin">islogin</a>
    `
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(9999, () =>{
    console.log(9999)
})