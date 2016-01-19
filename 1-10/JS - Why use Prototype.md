#JS - Why use Prototype

###问题一
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
* 当使用`方法一`时，存在一个优势，以这种方式创建的函数具有访问对象私有数据的功能。
* 当使用`方法二`时，由于方法只需要存储一次，所以当创建很多的对象时它需要更少的内存。






###问二
> What is the different between these 2 snippets of code:
````
function Car (name){
	this.name = name ;
}
Car.prototype.Drive = function(){
	console.log('My name is ' + this.name + " and I'm driving")
}
function SuperCar (name){
	Car.call(this, name);
}
SuperCar.prototype = new Car();
SuperCar.prototype.constructor = SuperCar;
SuperCar.prototype.fly = function() {
	// body...
	console.log('My name is ' + this.name + " and I'm flying")
};
var myCar = new Car('car');
myCar.Drive();
var mySuperCar = new SuperCar('superCar');
mySuperCar.Drive();
mySuperCar.fly();
````
````
function Car(name){
	this.name = name;
	this.Drive = function(){
		console.log('My name is ' + this.name + " and I'm driving")
	}
}
function SuperCar(name){
	Car.call(this,name);
	this.fly = function(){
		console.log('My name is ' + this.name + " and I'm flying")
	}
}
var myCar = new Car('Car');
myCar.Drive();
var mySuperCar = new SuperCar('superCar');
mySuperCar.Drive();
mySuperCar.fly()
````


#### answer


> 
* 两种方式的区别在于第一个例子中drive() 仅存在一次而第二种方法drive()存在在每个实例中（每次创建一个car 都会创建一个drive() 方法）
换种说法，第一个例子是用原型来存储对象方法，第二个是用构造函数存储对象方法
* 而查找对象方法的顺序是先构造函数，而后在原型上寻找。所以寻找Drive()方法无论它是在构造函数里还是原型里。
* 由于每种类型你只需要使用一种方法，所以每个类只使用一次原型是更有效的。
* new 操作符调用时会自动设置为原型的构造函数，如果要覆盖原型（为了使后面调用new 时constructor指向对象正确）需要手动设置构造函数的指向
这允许我们使用instanceof 的方法来识别它的构造函数。
* javascript没有超类的概念，所以如果想让一个子类调用父类的构造函数唯一办法就是用它的名字去调用。









