##### 1、window对象：在ECMAScript扮演全局对象的角色

##### 2、location对象：提供当前窗口中加载的文档相关信息，还提供一些导航功能
    
    hash: 返回URL的hash，若URL不包含散列，返回空字符串
    host: 返回服务器名称和端口
    hostname: 返回服务器名称
    href: 返回当前加载页面完整的URL
    pathname: 返回URL中的目录和文件名
    port: URL指定的端口号
    protocol: 返回使用的协议
    search: 返回URL的查询字符串
        search出来的中文乱码如何解决：decodeURL
    
##### 3、navigator: 记录浏览器的信息
    
    检测插件：非IE可以使用plugins数组来达到这个目的 {name,description,filename,length}
 
##### 4、screen：浏览器窗口信息

##### 5、history：记录浏览器历史  
 