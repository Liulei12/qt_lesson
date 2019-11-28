// // const add : (a:number,b:number) =>number = (a: number,b: number) => a + b

// // const add = (a: number, b?:number) => a + (b ? b : 0)

// // const add = (a: number, ...rest: number[]) => rest.reduce((a,b) => a + b)
// // interface Direction{
// //     top: number
// //     right: number
// //     bottom: number
// //     left: number
// // }
// // //重载

// // function assigned(all: number): Direction
// // function assigned(topAndBottom: number, leftAndRight: number): Direction
// // function assigned(top: number,right: number,bottom: number,left: number): Direction

// // function assigned (a: number,b?: number,c?:number,d?:any){
// //     if (b === undefined && c === undefined && d === undefined){
// //         b = c = d = a
// // }else if(c === undefined && d === undefined){
// //     c = a 
// //     d = b
// // }
// // return {
// //     top:a,
// //     right:b,
// //     bottom: c,
// //     left: d,
// // }
// // }


// //代码实现函数不可被调用

// //泛型
// // function returnItem (para: String):String {
// //     return para
// // }

// // function returnItem<T>(para: T): T{
// //     return para
// // }

// function swap<T,U>(tuple:[T,U]): [U,T] {
//     return[tuple[1],tuple[0]]
// }


// //泛型变量
// function getArrayLength<T>(arg: Array<T>):Array<T>{
//     console.log((arg as Array<any>).length)
//     return arg
// }

// //泛型接口
// interface ReturnItemFn<T>{
//     (para: T): T
// }

// const returnItem: ReturnItemFn<number> = para => para


// //泛型类
// // class Stack<T> {
// //     private arr: T[] = []

// //     public push(item: T){
// //         this.arr.push(item)
// //     }
// //     public pop(){
// //         this.arr.pop()
// //     }
// // }
// //泛型约束
// // const Params = number | string
// // class Stack<T extends Params>{
// //     private arr: T[] = []

// //     public push(item: T){
// //         this.arr.push(item)
// //     }
// //     public pop(){
// //         this.arr.pop()
// //     }
// // }

// // const Stack1 = new Stack<string>()
// // const stack = new Stack<boolean>()

// //使用多重类型进行泛型约束
// // interface FirstInterface {
// //     doSomething():number
// // }
// // interface SecondInterface{
// //     doSomethingElse(): string
// // }

// // // class Demo<T extends FirstInterface,SecondInterface>{
// // //     private test:T

// // interface ChildInterface extends FirstInterface,SecondInterface{

// // }
// // class Demo<T extends ChildInterface>

// //new 
// function factory<T>(type:{new():T}):T {
//     return new type()
// }