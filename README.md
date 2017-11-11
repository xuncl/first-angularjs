# 搭建前端开发环境
2017-11-08

最基础的：Node.js

且执行过一次：`npm install -g grunt-cli`和`npm install -g karma-cli`


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
    * Bower
* 轻量级server
    * grunt-connect*
    * http-server+ (用于模式后台)
* 单元测试工具：
    * Karma+Jasmine
* 集成测试工具：
    * Protractor （专门针对AngularJS设计的）

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

所有的配置代码要放在

    module.exports = function(grunt) {
    ...
    };

中。

Gruntfile.js主要有三块代码：任务配置代码、插件加载代码、任务注册代码。

#### 任务配置代码：

如下：

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

可以看出，具体的任务配置代码以对象格式放在 `grunt.initConfig` 函数里面，其中先写了一句 `pkg: grunt.file.readJSON('package.json')` 功能是读取 `package.json` 文件，并把里面的信息获取出来，方便在后面任务中应用（例如下面就用了 `<%= pkg.name %>` 来输出项目名称），这样可以提高灵活性。之后就是 `uglify` 对象，这个名字是固定的，表示下面任务是调用 `uglify` 插件的，首先先配置了一些全局的 `options` 然后新建了一个 `build` 任务。

也就是说，在 `Uglify` 插件下面，有一个 `build` 任务，内容是把 `XX.js` 压缩输出到 `xx.min.js` 里面。如果你需要更多压缩任务，也可以参照 `build` 多写几个任务。

#### 插件加载代码：

由于上面任务需要用到 grunt-contrib-uglify，当 grunt-contrib-uglify 安装到项目之后，写下下面代码即可加载：

    grunt.loadNpmTasks('grunt-contrib-uglify');
    
#### 任务注册代码：

插件加载，任务也布置了，最后注册一下任务：

    grunt.registerTask('default', ['uglify']);

上面代码意思是，你在 `default` 上面注册了一个 `Uglify` 任务，`default` 就是别名，它是默认的 task，当你在项目目录执行 `grunt` 的时候，它会执行注册到 `default` 上面的任务。

也就是说，当我们执行 `grunt` 命令的时候，`uglify` 的所有代码将会执行。我们也可以注册别的 task.

### 安装Karma-Jasmine

在目录下执行命令行：

    npm install karma --save-dev
    npm install jasmine-core --save-dev
    npm install karma-jasmine karma-chrome-launcher karma-coverage --save-dev

此时，在命令行中运行`karma start`，就能在localhost:9876看到karma页面。

#### 配置Karma+Jasmine

执行`karma init`开始配置。

1. 测试框架：我们当然选jasmine
2. 是否添加Require.js插件
3. 选择浏览器： 我们选Chrome
4. 测试文件路径设置，文件可以使用通配符匹配，比如*.js匹配指定目录下所有的js文件（实际操作中发现该路径是karma.conf.js文件的相对路径，实际测试配置及说明可以[见此博文](http://www.cnblogs.com/wushangjue/p/4539189.html)）
5. 在测试文件路径下，需要排除的文件
6. 是否允许Karma监测文件，yes表示当测试路径下的文件变化时，Karma会自动测试

#### Jasmine介绍

四个核心概念：**分组、用例、期望、匹配** 

1. 分组函数：describe(string,function) 表示一组测试用例
2. 用例函数：it(string,function) 表示一个用例
3. 期望函数: expect(expression) 表示expression表达式应具有的某种行为或某个值
4. 匹配函数: to**(arg) 表示匹配。

### 集成测试Protractor

Protractor基于WebDriverJS开发，可以利用NodeJS直接调用浏览器（IE, FF, Chrome）的接口。
> Protractor为AngularJS定制，WebDriver是通用的。

[protractor使用](http://www.jianshu.com/p/cb24e7fa8f56)