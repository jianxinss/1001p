#JS - Why use Prototype

###question
> What is the different between these 2 snippets of code:
````
function animal(){
    this.name = 'rover';
    this.set_name = function(name){
         this.name = name;
    }
}
````
````
function animal(){
    this.name = 'rover';
}
animal.prototype.set_name = function(name){
    this.name = name;
}
````


#### answer


> 使用方法一创建的对象有不同的name，set_name 属性，使用方法二创建的对象共享set_name属性
* 使用prototype可以加快对象创建，因为对象中的`set_name`方法不必在每次对象创建时重新创建,它存在于原型（prototype）中。
* 当调用animal的‘set_name’方法时，this会被指向animal，set_name的方法会被执行。
* 当使用`方法一`时，存在一个优势，以这种方式创建的函数具有访问对象私有数据的功能
