技术栈：
    
    前端：Vue、React、Angular
    后端：nodeJS、express（一代node）、koa（二代node）、egg（阿里）
    
实现流程：

    SPA客户端渲染的流程：
        1、服务器返回html
        2、发送html给客户端
        3、浏览器接收并且解析展示
        4、浏览器加载js代码
        5、js中的react代码在浏览器端执行
        6、react代码接管页面操作
        7、react代码拿到浏览器上的路由地址
        8、js根据不同路由返回不同内容