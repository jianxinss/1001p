## this 指向哪里

一般而言，在JavaScript中，this 指向函数执行时的当前对象，
> In JavaScript，as in most object-oriented programing language，this is a special keyword that is used within methodsto refer to the object on which a method is being invoked

 > The this keyword is relative to the execution context ，not the declaration context

````
var someone = {
    name: "Bob",
    showName: function(){
        alert(this.name);
    }
};

var other = {
    name: "Tom",
    showName: someone.showName
}

other.showName();　　//Tom
````


> 当没有明确的执行时当前对象时，this 指向全局对象window

> By default, this refers to the global object

 `the global object`


````
var name = "Tom";

var Bob = {
    name: "Bob",
    show: function(){
        alert(this.name);
    }
}


Bob.show(); // Bob
var show = Bob.show;
show();　　//Tom

````
###  没有明确的调用对象时指向window

````
var name = "window";

var Bob = {
    name: "Bob",
    showName: function(){
        alert(this.name);
    }
};

var Tom = {
    name: "Tom",
    showName: function(){
        var fun = Bob.showName;
        fun();
    }
};

Tom.showName();　　//window
````

> 在浏览器中  `setTimeout` `setInterval` 和匿名函数执行时，当前的对象时全局对象window，这条我们可以看成是上一条的一个特殊情况

````
var name = "Bob";  
var nameObj ={  
    name : "Tom",  
    showName : function(){  
        alert(this.name);  
    },  
    waitShowName : function(){  
        setTimeout(this.showName, 1000);  
    }  
};  

nameObj.waitShowName(); // Bob
````

## 如何让代码显示出Tom呢

````
var name = "Bob";  
var nameObj ={  
    name : "Tom",  
    showName : function(){  
        alert(this.name);  
    },  
    waitShowName : function(){
        var that = this;
        setTimeout(function(){
            that.showName();
        }, 1000);
    }
};

 nameObj.waitShowName();　　//Tom
````
>我们先对其this赋给变量that（这是为了避免setTimeout中的匿名函数运行时，匿名函数中的this指向window）

## eval
对于eval 函数，其执行时候似乎并没有制定当前对象，但实际上，其this 并非指向了window，因为该函数执行时的作用域是当前作用域，即等同于在该行将代码填进去。

## apply 和 call
apply 和call 可以强制改变函数执行时的当前对象，让this 指向其他对象。

apply 用于改变函数执行时的当前对象，当无参数时，当前对象为window，有参数时当前对象为该参数。



## new 关键字
new 关键字后的构造函数this 指向用该构造函数构造出来的新对象。

````
function Person(__name){
    this.name = __name;        //这个this指向用该构造函数构造的新对象，这个例子是Bob对象
}
Person.prototype.show = function(){
    alert(this.name);
}

var Bob = new Person("Bob");
Bob.show();        //Bob
````
