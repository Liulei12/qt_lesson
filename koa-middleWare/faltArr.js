//[1,[2,[3,4]]]
//[1,2,3,4]
function flat(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            let res1 = flat(arr[i])
            // console.log(res1)
            res = [...res,...res1]
            console.log(res)
        }else{
            res.push(arr[i])
        }
    }
    return res;
}
let a = [1,[2,[3,4]]]
console.log(flat(a))