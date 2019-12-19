// Math.max()
const IMath = {}// 命名空间
/**
 * @params:number NaN(not a number)
 * @return:number 返回最大值
 *  
*/  
IMath.max = function(...args){
    console.log(arguments,arguments.length);
    for(var i = 0;i<arguments.length;i++){
        //类型检测
        // console.log(arguments[i]);
        if (typeof arguments[i]!=='number'){
            return NaN;
        }
    }
}
console.log(IMath.max(...[2,4,3,9]));