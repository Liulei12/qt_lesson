// let a = 'wn'
// let b = a
// console.log(b)

// a = '蜗牛'
// console.log(a)
// console.log(b)

// let a = {
//     name:'wn',
//     book:{
//         title:"you don't know js",
//         price:"45"
//     }
// }
// let b = a 
// console.log(b)
// a.name = 'zz'
// a.book.price= "55"
// console.log(a)
// console.log(b)

// let a = {
//     name:'wn',
//     book:{
//         title:"you don't know js",
//         price:"45"
//     }
// }
// let b = Object.assign({},a)
// let b = {...a}
// // console.log(b)

// a.name = 'zz'
// a.book.price = "55"
// console.log(a)
// console.log(b)

let a = [0,'1',[2,3]]
let b = a.slice(1)
console.log(a)
a[1] = '22'
a[2][0] = 4
console.log(a)
console.log(b)