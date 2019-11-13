const curry = require('./b.js')
function checkByRegExp(reg,string){
    return reg.test(string);
   
}
let checkCellPhone = curry(checkByRegExp)(/^1[3-9]\d{9}$/);
console.log(checkCellPhone('13878888888'));
console.log(checkByRegExp( /^1[3-9]\d{9}$/,'13878888888'));
console.log(
    checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'1453421772@qq.com')
);
checkByRegExp(/^1[3-9]\d{9}$/,'13878888888');
checkByRegExp(/^1[3-9]\d{9}$/,'15907053236');
checkByRegExp(/^1[3-9]\d{9}$/,'13870552742');
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'1453421772@qq.com')