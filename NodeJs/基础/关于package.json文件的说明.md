###### package.json

name: 包名（规范化定义需要由小写字母和数字构成，可以含.、_、-，但不允许出现空格，且包名必须是唯一的）

description：包简介

version：版本号

keywords：关键词

maintainers：包维护列表（每个维护者必须包含name、email、web这三个属性组成）

contributors：贡献者列表

bugs：一个可以反馈bug的网页地址或者邮件地址

licenses：当前包所使用的许可证列表

repositories：托管源代码的位置列表

dependencies：使用当前包所需要依赖的包列表

homepage：当前包的网站地址

os：操作系统支持列表

cpu：CPU架构的支持列表

engine：支持JavaScript引擎列表

builtin：标志当前包是否内建在底层系统的标准组件

directories：包目录说明

implements：实现规范的列表

scripts：脚本说明对象

author：作者

bin：一些包作者希望包可以作为命令行工具使用

main：模块引入方法require（）在引入包时，会优先检查该字段，并将其作为包中其余包的入口文件。若不存在该文件，则会寻找index.js、index.node、index.json作为入口文件

DevDependencies：一些模块只在开发时需要依赖