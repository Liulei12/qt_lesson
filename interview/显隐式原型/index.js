// function Person(name) {
//     this.name = name
// }
// let p = new Person('wn')
// console.log(p.__proto__ === Person.prototype)
// console.log(p.__proto__)
// console.log(Person.prototype)


//原型链上的属性只有直系才能拿到
// var foo = {}
// var F = function () {}

// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)
// console.log(F.a)

// function Person(name) {
//     this.name = name
//     return {}
// }
// let p = new Person('wn')
// console.log(p)


Array.prototype.method = function () {}
var myArr = [1,2,3,4,5,6,7]
myArr.name = 'wn'
for (let index in myArr){
    console.log(index)
}
// for in 
// 1. index是 索引为字符串的数字 不能进行几何运算
// 2. 遍历的顺序有可能不是按照实际数组内的内部顺序进行
// 3. 使用for in 会遍历数组所有的可枚举属性  包括原型

//for of
//遍历的是数组元素
//不包括的数组原型和索引

let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
let oArr = [1,2,3,4,5,6,7,3,2,8]
function outputArr(arr) {
    var res = []
    for(let i = 0;i< arr.length; i++){
        if(Array.isArray(arr[i])) {
            res = res.concat(outputArr(arr[i]))
        }else {
            res.push(arr[i])
        }
    }
    return res
}
console.log(outputArr(gArr))