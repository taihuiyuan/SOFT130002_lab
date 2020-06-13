# Lab11文档 
 
姓名：邰荟媛

学号：19302010077

## Cookie  

### function

Cookie通过在客户端记录信息确定用户身份

### advantages

极高的扩展性和可用性

通过加密和安全传输技术（SSL），减少cookie被破解的可能性。

控制cookie的生命期，使之不会永远有效。

### disadvantages

Cookie会被附加在每个HTTP请求中，所以无形中增加了流量

cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗

单个cookie保存的数据不能超过4K,很多浏览器都限制一个站点最多保存 20 个 cookie

## Session

### function

Session通过在服务器端记录信息确定用户身份

### advantages

Session对象没有对存储的数据量的限制，其中可以保存更为复杂的数据类型

Session的使用比Cookie方便

### disadvantages

session很容易失效,用户体验很差

当访问增多，过多的Session存储在服务器内存中，会对服务器造成压力
