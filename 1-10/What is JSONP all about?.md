# What is JSONP all about?

####1.什么是JSONP


####2.它为什么会被创建，它是解决了什么问题

####3.我们为什么要用到它



这么说吧，你在example.com域下想向example.net下发送一个请求。为了做到这一步，你需要克服跨域的障碍。这在大多数浏览器下是禁止的。但是有一项东西可以绕过这个限制，那就是script标签。当你使用脚本标记时，域名的限制就被忽略了，但是在正常情况下，你是没法真正的做任何与结果有关的事情的。因为script 标签的东西只是被执行了而已。说说JSONP。当你向支持JPSNP 的服务端发送请求时，你传递一些参数告诉服务端有关你的也米娜的一些信息，这样，服务端就可以利用你页面可以处理的方式来包装他的响应



比如，服务端需要一个参数callback开启JSONP的功能，那么接口请求应该像
http://www.example.net/sample.aspx?callback=mycallback

如果没有JSONP ，服务端返回一个基本的javascript对象json 
然而有了JSONP，当服务端接收到callback参数，他就可以使返回结果不同了，就像

mycallback({ foo: 'bar' });
这样当script 标签载入后，它便会被执行了。而这就是跨域请求


````
mycallback({ foo: 'bar' });

mycallback = function(data){
  alert(data.foo);
};

````




这也是一个值得注意的主要问题，当你使用jsonp 时你会失去很多对于    请求的控制。例如，没有好的方式将状态码返回，因此，你始终用定时器来监视请求，这是非常有疑不好的一点， 用jsonp 请求来解决跨域问题是一个很好地方案。