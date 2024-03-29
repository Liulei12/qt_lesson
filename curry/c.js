function add(a,b) {
    return a + b
}

// add(1,2)

// var curry = function(fn) {
//     var args = [].slice.call(arguments,1)
//     return function() {
//         var newArgs = args.concat([].slice.call(arguments))
//         return fn.apply(this,newArgs)
//     }
// }
// var addCurry = curry(add,1,2)
// console.log(addCurry)


// function sub_curry(fn){
//     var args = [].slice.call(arguments,1)
//     return function() {
//         return fn.apply(this,args.concat([].slice.call(arguments)))
//     }
// }
//  function curry(fn,length) {
//      length = length || fn.length

//      var slice = Array.prototype.slice

//      return function () {
//          if (arguments.length < length) {
//             var combined = [fn].concat(slice.call(arguments))
//             return curry(sub_curry.apply(this,combined),length - arguments.length)
//          }else{
//              return fn.apply(this,arguments)
//          }
//      }
//  }

//  var fn = curry(function(a,b,c) {
//     return [a,b,c]
//  })
// console.log(fn('a','b','c'))

function sub_curry() {
    return function () {
        return function () {
            if(length > 1){
                return curry(sub_curry(fn),--length)
            }else {
                return fn()
            }
        }
    }
}
var fn = curry(function (a,b,c){
    return [a,b,c]
})
console.log(fn('a')('b')('c'))
