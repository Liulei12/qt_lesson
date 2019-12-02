- prototype 
构造函数（constructor） 构造函数的原型{}
Person.prototype = {}
Person.prototype.getName

Person 构造函数 都会有prototype属性 原型对象
实例 会通过 prototype 对象拿到所有的方法
person.getName();
Person.prototype.constructor = Person
Person 1=> person


person Person.prototype
实例如何拿到原型链上的方法