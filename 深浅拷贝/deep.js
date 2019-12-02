let a = {
    name:'wn',
    book:{
        title:"you don't know JS",
        price:'45'
    }
}

a.name = '蜗牛'
a.book.price = '55'
let b = JSON.stringify(a)
console.log(b)
console.log(a)