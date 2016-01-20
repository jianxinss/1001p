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

/**
两种方式的区别在于第一个例子中drive() 仅存在一次而第二种方法drive()存在在每个实例中（每次创建一个car 都会创建一个drive() 方法）
换种说法，第一个例子是用原型来存储对象方法，第二个是用构造函数存储对象方法
而查找对象方法的顺序是先构造函数，而后在原型上寻找。所以寻找Drive()方法无论它是在构造函数里还是原型里。
由于每种类型你只需要使用一种方法，所以每个类只使用一次原型是更有效的。

new 操作符调用时会自动设置为原型的构造函数，如果要覆盖原型（为了使后面调用new 时constructor指向对象正确）需要手动设置构造函数的指向
这允许我们使用instanceof 的方法来识别它的构造函数。


javascript没有超类的概念，所以如果想让一个子类调用父类的构造函数唯一办法就是用它的名字去调用。




*/




///////////////////////////////////////////
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


