- 命名空间 name space
    Phaser  {}
    1. 声明领地
    取名字 var MIUI = {}
    MIUI.version = '10.1';
    MIUI.openSystem = function(){}
    游戏框架 最小化入侵我们的window
    2. var Phaser = {} 挂载到window下 作用域scope
    window =>
    3. es5 类的构造 使用function(){}
    如果函数名首字母大写 认定为类
    方法 Phaser.Game.prototype.getName
    