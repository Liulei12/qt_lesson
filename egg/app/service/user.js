const Service = require('egg').Service

class UserService extends Service{
    async register(user){
        // sql 及储存业务的组织
        const { ctx,app } = this;
        // 准备 user_id
        // 1，2，3，4
        user.user_id = uuid.v4()
        .replace(/-/g,'');
        console.log(user.user_id)
        //password 不能明文
        user.password = 
        crypto.createHmac('sha256',app.config.password_secret)
        .updata()
        .digest('hex')
        console.log(user,'--------')
        const userInfo = await
        this.ctx.model.User.create(user);
        ctx.status = 200;
        ctx.body = {
            msg:'注册成功',
            user_id: user.user_id,
            falg:true
        }
        return userInfo.dataValues
    }
}
module.exports = UserService