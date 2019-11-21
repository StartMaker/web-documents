###### 关于webpack打包原理

    两个核心对象：Compile和compilation
    Compile只有一个全局对象：compiler，主要功能是：a、文件的监听 b、启动编译（run方法）
    compilation：每次监听到文件的变化，对文件进行处理，每次处理时会生成一个新的compilation对象
  
    