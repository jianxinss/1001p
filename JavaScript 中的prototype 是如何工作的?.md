##Function prototype


###一切皆为对象

> javascript中的所有东西都是对象，对象是属性的集合。数字、字符串、布尔值等原始值是‘伪对象’ 他们同样拥有属性，但是在栈上分配是按值传递，其他对象是在堆上分配并按照引用传递

在javascript中没有类的概念，只有对象。为了实现像Java C++ C# 中经典的继承方法，首先我们要创建一个对象。

原型可以让你创建类。如果不用prototype的话，它就会变成一个静态的对象

原型是构造函数的一个属性，而不是一个实例

原型链最终回归到Object的prototype



每一个构造函数/函数（无论是内置的还是用户定义的）在定义时都自动创建一个称作原型的属性，其默认值是一个对象。这个对象还有一个constructor的属性，默认反过来指向函数自己本身。


````
function  UserDefinedFunction(){}

UserDefinedFunction.prototype = {constructor : UserDefinedFunction}
````

这个“prototype”的属性只存在于`函数式类型`的对象中，（永远不会在非函数类型的对象中存在）


* 两种对象类型，函数类型和非函数类型
* 只有函数类型的对象利用new 操作符可以创建一个新对象。这歌创建的新对象就是一个非函数类型的对象，而这个对象无法再利用new 操作符创建一个新对象
* 所有`函数类型`的对象默认的都有一个`prototype`属性，这个`prototype`属性引用一个对象，它有一个`constructor` 属性，默认引用的是函数类型对象的本身
* 所有`对象`（函数类型和非函数类型）都有一个 constructor 属性，默认引用的是创建它的`函数类型对象`/`构造器`
* Every object that gets created internally references the object referenced by "prototype" property of the Constructor that created it. This object is known as the created object's prototype (which is different from Function type objects "prototype" property which it references) . This way the created object can directly access the methods and properties defined in object referenced by the Constructor's "prototype" property (at the time of object creation).

（这被内部创建的每个对象引用创建它的构造函数的“原型”属性所引用的对象。这个对象是被称为创建对象的原型（这是从功能类型对象的“原型”的属性，它引用不同）。通过这种方式创建的对象可以直接访问（在创建对象时）在构造函数的“原型”属性所引用的对象中定义的方法和属性。）

* 一个对象的原型可以使用`Object.getPrototype()`方法获取。事实上这种方法可以引导出整个原型链。
* 每个对象的原型链最终追溯到`Object.prototype`,除非对象使用的是（Object.create(null)）在这种情况下,对象没有原型创建
* typeof（new Array） ===‘Object’ 是语言的设计而不是一个错误
* 设置原型构造的属性为null （undefined,number,true,false,string）不会创建一个空原型的对象。在这种情况下。新创建的对象原型被设定为Object.prototype 并且它的够被设置成一个函数对象
