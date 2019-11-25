// function greeter(person: string): Function {
//     // return 'hello' + person
//     return function greeter(person: string){

//     }
// }
// const user = 'wn'

// greeter(user)

// // string boolean numbei null undefined symbol void bigint

// const isLoading: boolean = false
// const a: number = 6
// const b: number = 0xf00d

// const book: string = 'ts'

// function warnUser():void {
//     alert('test')
// }

// const c:void = undefined
// let u: undefined = undefined

// let n: null = null

// // const sym1 = Symbol('key1')
// // const syn2 = Symbol('key2')
// // sym1 === sym2 //false

// // const max = Number.Max_SAFE_INTEGER 2^53 - 1
// // const max1 = max + 1
// // const max2 = max + 2


// // declare let foo: number
// // declare let bar: bigint
// // foo === bar //false

// // any 
// // unknow //跟any 一样 但是unknow更加严格
// // nerver
// // object

// // let notSure:any = 4
// // notSure = '4'

// // let value: unknown

// //object 
// enum Direction {
//     Center = 1
// }
// let val: object
// val = Direction
// val = [1]
// val = [1,'hello']
// val = {}




//枚举
enum Direction {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}
console.log(Direction['right'],Direction.up)

// 接口 interface
interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say: (words: string) => string
}
const getUserName = (user: User) => user.name
getUserName.say = function(words: string) {

}
interface Config  {
    width?: number
    [propName: string]:any//添加字符串索引签名
}
function CalculateAreas(config: Config): {area: number}{
    let square = 100
    if(config.width){
        square = config.width * config.width
    }
    return {area: square}
}
// let mySquare = CalculateAreas({width: 5})

//类型断言
// let mySquare = CalculateAreas({widdth: 5} as Config)

// 将字面量赋值给另一个变量
let options = {widdth: 5}
let mySquare = CalculateAreas(options)

//抽象类 class
abstract class Animal {
    abstract makeSound(): void
    move(): void{
        console.log('ao ao ao ao ao')
    }
}

// const animal = new Animal()
// 实例化抽象类需要创建子类来继承基类，然后可以实例化子类
class Cat extends Animal {
    makeSound(){
        console.log('ha ha ha ')
    }
}

const cat = new Cat()
cat.makeSound()
cat.move()

// public private protected被类的内部访问，也能被子类访问
class Car {
    protected run(){// 被public修饰的成员是可以被外部访问的
        console.log('启动')
    }
}
const car = new Car()
// car.run()
class GTR extends Car{
    init () {
        this.run
    }
}