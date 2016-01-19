

function redPackageMoney(totalMoney , n){
	var min = 0.01;
	var remainMoney = totalMoney;

	var result = [];
	var map = [];

	var total_map = 0 ;

	for (var i = 1; i <= n ; i++){
		var random_num = parseInt(Math.random() * 100);
		map.push( parseInt(Math.random() * 100));
		total_map += random_num;
	}



	for (var i = 0;i<n-1;i++){
		result[i] = parseFloat((min  + (map[i] /total_map )* remainMoney).toFixed(2));

		remainMoney = (remainMoney*100 - result[i]*100) / 100;
		
		console.log(result[i],remainMoney);

	}
result[n-1] = remainMoney;
	console.log(remainMoney)


var check = 0;
	for(var i = 0; i< n ;i++){
		check += result[i];
	}

	console.log('check',check);


}
//  快速排序算法

function qsort(list){
	if(list.length == 0){
		return [];
	}

	var lesser = [];
	var greater = [];
	var p = list[0];

	for(var i = 1 ; i < list.length ;i++){
		if(list[i] < p){
			lesser.push(list[i])
		}else {
			greater.push(list[i])
		}
	}

	return qsort(lesser).concat(p, qsort(greater));

}


var a = [];
for(var i = 0; i < 100; i ++){
	a[i] = Math.floor(Math.random() *100) + 1;
}

console.log(a);
console.log(qsort(a))



//  查找最大最小值
function findMax(arr){
	var min = arr[0];
	for(var i = 0;i<arr.length;i++){
		if(arr[i] < min){
			min = arr[i];
		}
	}


	return min;
}



// 二分法只对有序集有效
function binSearch(arr, data){
	var  upperBound = arr.length -1;
	var lowerBound = 0;
	while(lowerBound <= upperBound){
		var mid = Math.floor((upperBound + lowerBound)/2);
		if(arr[mid] < data){
			lowerBound = mid + 1;
		}else if(arr[mid] > data){
			upperBound = mid -1
		}else {
			return mid
		}


	}
	return -1
}


var a = [];
for(var i = 0; i < 100; i ++){
	a[i] = Math.floor(Math.random() *100) + 1;
}

console.log(a);
console.log(binSearch(a, 22))






//  工厂模式 ( 抽象)
//  先设计一个抽象类，这个类不能被实例化，只能用来派生子类，最后通过对子类的扩展实现工厂方法



var XMLHttpFactory = function(){};
XMLHttpFactory.prototype = {
	createFactory : {
		throw new Error('this is an anstract classs');
	}
}

var XHRHandler = function(){
	XHRHandler.call(this);
}


XHRHandler.prototype = new XMLHttpFactory();
XHRHandler.prototype.constructor = XHRHandler;


XHRHandler.prototype.createFactory = function(){
	var XMLhttp = null;
	if(window.XMLHttpRequest){
		XMLhttp = new XMLHttpRequest()
	}else if (window.ActiveXObject){
		XMLhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}

	return XMLhttp;
}

var xmlhttp = new XHRHandler.createFactory();
xmlhttp.onreadystatechange = function(){
	if(xmlhttp.readyState == 4 && xmlhttp.status == '200'){
		alert(xmlhttp.responseText)
	}
}

xmlhttp.open("GET", '',false);

xmlhttp.send();



// 桥接模式 在实现API的时候特别有用， 弱化它与使用使用它的类与对象之间的耦合

// 桥梁模式 让接口可‘桥梁’实际上可配置。将页面中的一个个功能想象成模块， 把页面中的一个个功能想象成模块 接口可以使得模块之间的耦合降低

// 比如编辑器窗口发送消息的时候，我们区分一对一的还是群聊的，

var btn ;

btn.onclick = function(){
	sendMessage(id, message, isUser);

}


//组合模式
//chatwindow 组装


//门面模式 提供了统一的接口
var addEvent = function(el, type, fn){
	if(window.addEventListener){
		el.addEventListener(type,fn,false)

	}else if (window.attachEvent){
		window.attachEvent('on' + type,fn)
	}else {
		el['on' + type] = fn;
	}

}




 // 适配器模式 用一个新的接口对现有类的接口进行包装


 // 观察者模式， 订阅发布模式

 // 命令模式 讲一个请求封装成对象，从而是你可以用不同的请求对客户端参数化，

 var packageManager = {
 	receiveMsg : function(){

 	}, 
 	receiveSetting : function(){

 	},

 }



function getNodeTree (ele){
	var children = ele.childNodes;
	var cNode = [];
	for(var c in children){
		if (c.hasChildNodes){
			cNode.push(getNodeTree(c))
		}else {
			cNode[c] = c;
		}
	}

	return cNode;
}
