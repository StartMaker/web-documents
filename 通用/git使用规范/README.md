#### 设置

1、账户和名字必须为自己的邮箱账户和姓名

    设置姓名：git config --global user.name "John Doe"
    设置邮箱账户：git config --global user.email johndoe@beisen.com
    
2、git commit规范

    feat：新功能（feature）
    fix：修补bug
    docs：文档（documentation）
    style： 格式（不影响代码运行的变动）
    refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    test：增加测试
    chore：构建过程或辅助工具的变动`
    
3、git教程

网址：

https://www.liaoxuefeng.com/wiki/896043488029600
https://www.runoob.com/git/git-tutorial.html
http://www.ruanyifeng.com/blog/2014/06/git_remote.html
......

    常见操作
        git push： 推送到git上（需要解决冲突）
        git pull：取回远程主机某个分支的更新，再与本地的指定分支合并    
        git merge：合并数据（可以解决冲突）
        git fetch：一旦远程主机的版本库有了更新（Git术语叫做commit），需要将这些更新取回本地（与git pull有区别）
        git romate：指定管理主机名
        git rebase: 变基操作
        git init: 初始化,新建.git文件
        
4、版本管理的几个关键点：
    
    a、发布后分支锁死，不可再更改
    b、用户建立分支无法被删除，防止误操作和恶意操作
    c、多版本并存，有利于回滚到上一个版本
    d、全自动流程（我们团队：未搭建起开发架构）
    e、锁定受保护分支
    