/** 
*@param capacity:number 容量
*
*/


var LRUCache = function(capacity){
    this.capacity = capacity;
    this.arr = [];//数据结构
    this.obj = {};


};
LRUCache.prototype.get = function(){
    //调整优先级

    return -1;
}
LRUCache.prototype.set = function(){

}
new LRUCache(2);
// [] length Push
// [1]Push
// [1,2]在哪端是最近最常用的？ Push
// get（1）读操作
// 1 所在的位置，从原来的位置移除，push到队尾不会带来空间使用量的增加
// [2,1]
// Put(3) 带来空间的分配   回收空间？最近做少使用 push（3） length>=容量  删除队头  shift移除
