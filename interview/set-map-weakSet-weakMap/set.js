// const s = new Set();
// [1,2,3,4,5,3,2,1].forEach(x =>s.add(x));
// console.log(s)
// let set = new Set([1,2,3,3,2,1])
// console.log(set.size)

// let set = new Set()
// set.add(1).add(2).add(3)
// set.delete(1)
// set.clear()
// console.log(set)
// const item = new Set([1,2,3,2])
// const array = Array.from(item) //可以将set的数据结构转换为数组
// console.log(array)


//Set的遍历顺序是根据插入的顺序来定的
//keys() 包含集合中所有键的迭代器
//values()包含集合中所有的值的迭代器
// entries() 包含Set对象中所有键值的迭代器
//forEach(callbackFn,thisArg)

let set = new Set([1,2,3])
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())

// for (let item of set.keys()){
//     console.log(item)
// }
// set.forEach((key,value) => {
//     console.log(key + ':' + value)
// })
// set = new Set([...set].map(item => item * 2))
// console.log(...set)
// set = new Set([...set].filter(item => (item >= 4)))
// console.log(set)