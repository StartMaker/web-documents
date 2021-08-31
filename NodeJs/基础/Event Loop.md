##### 事件系统

http://lynnelv.github.io/js-event-loop-nodejs

    示意图：
    ┌───────────────────────┐
    ┌─>│        timers         │
    │  └──────────┬────────────┘
    │  ┌──────────┴────────────┐
    │  │     I/O callbacks     │
    │  └──────────┬────────────┘
    │  ┌──────────┴────────────┐
    │  │     idle, prepare     │
    │  └──────────┬────────────┘      ┌───────────────┐
    │  ┌──────────┴────────────┐      │   incoming:   │
    │  │         poll          │<──connections───     │
    │  └──────────┬────────────┘      │   data, etc.  │
    │  ┌──────────┴────────────┐      └───────────────┘
    │  │        check          │
    │  └──────────┬────────────┘
    │  ┌──────────┴────────────┐
    └──┤    close callbacks    │
       └───────────────────────┘
    
小demo：
    
    setTimeout(()=>{
      console.log('timer1')
    
      Promise.resolve().then(function() {
        console.log('promise1')
      })
    }, 0)
    
    setTimeout(()=>{
      console.log('timer2')
    
      Promise.resolve().then(function() {
        console.log('promise2')
      })
    }, 0)
    以上在段代码在不同的环境执行结果不一致：
        浏览器执行结果：
            timer1
            promise1
            timer2
            promise2
         node环境执行结果：
            timer1
            timer2
            promise1
            promise2
    在node阶段，microtask会在各个阶段之间执行，也就是说一个阶段执行完毕会去执行所有microtask任务队列
    node中：
    
![node中的Event Loop](http://lynnelv.github.io/img/article/event-loop/node-excute-animate.gif)
    
    浏览器中：
 
![浏览器中的Event Loop](http://lynnelv.github.io/img/article/event-loop/browser-excute-animate.gif)
    
第一阶段：timer阶段

    事件循环的第一个阶段，node会去检车有无过期的timer，如果有就将它压入任务队列中等待执行，由于主线程可能会被阻塞，所以timer不能保证在预设时间按时执行
    
第二阶段：I/O callback阶段

    执行一些系统调用错误，比如网络通信的错误回调
    
第三阶段：idle, prepare 阶段

    仅node内部使用

第四阶段：poll阶段
    
    主要任务：
        同步执行poll队列的事件回调，直到队列为空或执行栈的回调达到系统上限时，会检查是否有预设的setImmediate（），之后会有两种情况：
            1、若有预设的setImmediate(), event loop将结束poll阶段进入check阶段，并执行check阶段的任务队列
            2、若没有预设的setImmediate()，event loop将阻塞在该阶段等待
          
第五阶段：check阶段

    执行 setImmediate() 的回调
    setImmediate()的回调会被加入check队列中， 从event loop的阶段图可以知道，check阶段的执行顺序在poll阶段之后。
    
第六阶段：close callbacks阶段

    执行 socket 的 close 事件回调
        
    
使用场景：

    I/O密集型：SSS
    CPU密集型：需要合理配置node任务
    分布式应用
    
##### 异步编程解决方案

    1、发布/订阅模式
    2、promise/deferred
    3、流程控制库（第三方）
    
##### 垃圾回收机制

    新生代算法：
        Scavenge：
            优势：快
            缺点：内存使用高
        Mark-Sweep：
            优势：占用内存低
            缺点：内存碎片化，处理较慢 
        Mark-Compact：
            优势：能够处理内存碎片化
            缺点：处理很慢
            
