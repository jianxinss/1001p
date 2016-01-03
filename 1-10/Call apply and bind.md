#call apply bind
##三者的相似之处

####1 用来改变函数this对象的指向
####2 第一个参数都是this 要指向的对象
####3 都可以利用后续参数传参

> * bind 方法传递给调用的参数可以逐个列出也可以写在数组中 
* bind 方法与call apply 最大的不同是前者返回一个绑定上下文的函数，而后两者是直接执行了函数，
* bind 创建了一个新函数，简称绑定函数，绑定函数会以创建它时传入bind 方法的第一个参数作为this 传入bind 方法的后面的参数会按照顺序作为参数来调用原函数。