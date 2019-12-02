// es5 面向对象
function Person(name){
    this.name = name;
}
Person.prototype ={
    getName:function(){
        return this.name
    },
    playHpjy:function(){
        console.log('今晚吃鸡， 大吉大利');
    }
}
//实例
let person = new Person('zz');
console.log(person)