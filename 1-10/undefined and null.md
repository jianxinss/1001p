# undefined and null


javascript中有两个表示空的值，其中比较有用的是undefined

## undefined 值

undefined是一个值为undefined类型
这个语义也定义了全局变量，它的值为undefined ，这个变量也被称为undefined。 但是这个变量不是一个常量也不是一个关键字，它意味着它的值可以轻易被覆盖。

### 什么情况下会返回undefined值

* 访问未修改的全局变量
* 由于没有定义return 表达式的函数隐式返回
* return 表达式没有显式的返回任何内容
* 访问不存在的属性
* 函数参数没有被显式的传递值。
* 任何被设置为undefined值得变量


### null的用处

* javascript中，undefined使用场景类似null，实际上javascript的null是另一种数据类型
* 它在JavaScript内部有一些使用场景，（比如原型链的终结 Foo.prototype = null）但是大多数情况下可以使用undefined 代替

````
typeof a
"undefined"
typeof undefined
"undefined"
typeof null
"object
````
