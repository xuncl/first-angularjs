# 搭建前端开发环境
2017-11-08

最基础的：Node.js

* 代码编辑工具：
    * sublime+
    * webstorm*
* 断点调试工具：
    * chrome+Batarang
* 版本管理工具：
    * git+TortoiseGit
* 代码合并和混淆工具：
    * grunt（安装过程见下一个主题）
* 依赖管理工具：
* 单元测试工具：
* 集成测试工具：

[sublime text 3 插件安装](http://www.cnblogs.com/hykun/p/sublimeText3.html)（文中的基本上都装了，其中TAG插件改为HTML-CSS-JS Prettify）

# 新建一个angularJS项目
2017-11-08

在github上建立仓库，并clone到本地。

在本地文件夹内，执行以下命令行：

    npm init --yes #快速生成一个package.json文件，不写--yes就是自己设定一个
    npm install grunt --save-dev #安装grunt，--save-dev表示同时更新package.json
    npm install --save-dev grunt-contrib-concat grunt-contrib-jshint grunt-contrib-sass grunt-contrib-uglify grunt-contrib-watch grunt-contrib-connect

[npm命令简介](https://www.cnblogs.com/chyingp/p/npm.html)

### 配置Gruntfile.js语法