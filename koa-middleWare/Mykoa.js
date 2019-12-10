class Koa{
        constructor(){
            this.middleWare = []
        }
        use(fn){
            this.middleWare.push(fn)
        }
        //1
        run1(){
            //aplication compose 中间件
            function dispatch(i) {
                let fn = this.middleWare[i]
                //use 里的函数 fn的参数 ctx,next
                fn({ctx: 'ctx'}, () => {
                    //next
                    dispatch(i + 1)
                })
                //剩余的
            }
            dispatch(0)
    
        }
        //2
        run2(){
            //aplication compose 中间件
            function dispatch(i) {
                let fn = this.middleWare[i]
                if(!fn) return Promise.resolve()
                //use 里的函数 fn的参数 ctx,next
                return Promise.resolve(fn({ctx: 'ctx'}, () => {
                    //next
                    return dispatch(i + 1)
                }))
                //剩余的
            }
            dispatch(0)
    
        }
    }
    
    export default Koa