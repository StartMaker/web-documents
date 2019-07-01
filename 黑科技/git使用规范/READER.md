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