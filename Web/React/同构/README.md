##### 技术栈：
    
    前端：Vue、React、Angular
    后端：nodeJS、express（一代node）、koa（二代node）、egg（阿里）、Nuxt
    
##### 实现流程：

    SPA客户端渲染的流程：
        1、服务器返回html
        2、发送html给客户端
        3、浏览器接收并且解析展示
        4、浏览器加载js代码
        5、js中的react代码在浏览器端执行
        6、react代码接管页面操作
        7、react代码拿到浏览器上的路由地址
        8、js根据不同路由返回不同内容
        
    主要api(可以在服务器上运行)：renderToString、renderToStaticMarkup

##### 为什么服务端渲染在10年前没有火起来

    最开始，前端只是做一些简单动画的实现。服务器端的逻辑只是把html、css、JavaScript作为静态文件处理
    比如jsp、asp等的核心理念就是将html放入占位符，再最终将数据写入占位符中
    后来的web2.0，推行前后端分离，这时一个必然的发展结果
    详细请看： https://www.zhihu.com/question/59578433
    
##### 服务器端的核心问题

    1、服务器端和渲染的界面如何通信，因为需要将css、redux、js文件等放入渲染出来的文件中，所以需要传入
    不同的数据，此时需要进行渲染层与前端层的通信。然而这种通信机制主要通过context进行通信的。
    2、关于路由结构，可以使用StaticRouter进行路由配置，也可以使用koa或者express的路由进行动态加载各种路由
    3、关于redux的状态，由于每个界面维护的状态不一致，分别需要维护一个公共的状态和各个界面配置的状态，并且
    状态需要一个function进行动态加载
    4、对于ios和android系统的差异，需要分别做不同的兼容
    

