import * as Koa from 'koa';
import { Controller, Get, Ctx } from 'koa-controllers'

@Controller //让这个类与路由挂钩
export default class MainController {
    @Get('/')
    public async index(@Ctx ctx:Koa.BaseContext) {
        ctx.body = 'hello'
    }

    @Get('/user')
    public async user(@Ctx ctx:Koa.BaseContext){
        ctx.body = '用户中心'
    }
}