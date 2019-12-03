Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.
 
- 时间
- K  K*H
- K min  1 吃不完
    20 H 就吃完了

1. 把香蕉表达一下
    [3,6,7,11] H = 8
    max = 11 min = 4
    [30,11,23,4,20] H = 5

2. max 规则 Max(arr)
3. max-- 正好在h小时内吃完
    >h 就找到了
4. 怎么可以高效  二分查找

- js数据类型
    基础数据类型
    整型 Number String
    Boolean  undefined Null Symbol
    复杂数据类型 Object
    复杂数据类型
    [Array,Function,Math,Regexp,Date] 

- ...spread 展开一个数组 
    ...reset 收起

- koko 
    while(1->Math.max（...piles))
    每把香蕉花的小时数加起来
    piles =>pile=>Math.ceil(pile/low)
- 减少写尝试
    1-> Max 二分查找