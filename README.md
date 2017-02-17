#React + Webpack + ECMAScript6

这是模块化开发、主流框架和最新版的ECMAScript语法规范的一个小demo

## 准备工作

- 安装 nodeJs

  首先进入node官网，去下载最新版的[nodeJs](http://nodejs.org/)

##webpack

- 安装webpack
  ```sh
  npm install webpack -g
  ```
  参数`-g`表示全局安装webpack，你在cmd命令中哪个文件夹下都可以使用webpack的命令，如果不加`-g`的话，是只可以在你安装webpack的目录下使用`webpack`这个命令

  webpack 也有一个 web 服务器
  ```sh
  npm install webpack-dev-server -g
  ```
  `-g`道理同上

- 配置webpack

  1、先确认一下项目的目录结构

  ```sh
  |-app
    |--component
      |---component.js
    |--app.js
  |-build
    |--css
    |--img
    |--js
    |--index.html
  |-webpack.config.js
  ```

  2、配置webpack.config.js

  在使用webpack的时候，需要创建一个名为 `webpack.config.js` 的配置文件，这个文件在安装webpack的时候，是不会自动创建的，是需要手动创建，文件的位置要放在当前安装webpack根目录下

  ```js
	var path = require('path');

	module.exports = {
		entry: path.resolve(__dirname, './app/app.js'),
		output: {
			path: path.resolve(__dirname, './build'),
			filename: 'js/build.js'
		},
		module: {
			loaders: [{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}]
		}
	}
  ```

  这是一个简单的webpack的配置，首先先引用了`path`对象。

  `entry`是一个入口文件，在这个文件中的所有内容，会被打包到`output`指定目录的指定文件当中。

  `path.resolve`是一个来格式化路径的方法，`path.resolve`的方法参数有两个`path.resolve(from，to)`，`from`这里的`__dirname`是为了获取当前模块文件所在的目录，`to`这里的`./app/app.js`是一个相对路径，`ouput`是出口，`ouput`中的path和entry的方法同理，这里不做赘述。

  `filename`是指向一个指定文件，入口打包的所有文件，最后代码都会在这个出口文件中看到。


  module中添加的loaders这个数组，里面的对象是用来转换模块的，现在这里只添加了一个js的模块，用来转换es6语法和react

  这个时候，还需要安装一个 `babel-loader`
  ```sh
  npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
  ```

  3、修改html文件

  ```html
  	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>React + Webpack + es6</title>
	</head>
	<body>
	    <div id="aaa"></div>
	    <script src="js/build.js"></script>
	</body>
	</html>
  ```

  修改完 `index.html` 后，开始编写js:

  在 `app.js` 中，添加 `alert('hello world')`

  然后在cmd命令行中，运行 `webpack` ，打包完成后打开 `index.html` ，会弹出一个系统弹窗，"hello world"。

  这个时候证实了，我们的配置是正确的，可以正常运行。

## react

- 安装react

  首先，还是和上面一样，需要安装对应的插件
  ```sh
  npm install react react-dom --save-dev
  ```

  安装完成后，打开`component.js`，修改为:

 ```js
	import React from 'react';

	export class Component extends React.Component {
		render() {
			return ( < div > hello world < /div>)
		}
	}
 ```

 打开 `app.js` ，修改为:

 ```js
	import React from 'react';
	import {Component} from './component/component.js';
	import {render} from 'react-dom';

	render(<Component />,document.querySelector('#aaa'));
 ```


  `import`是es6中的一个新方法，是用来加载模块的，上面的 `import` 是用来加载React的, `export` 定义了对外接口，这里要注意，加载模块定义的名称和类的名称首字母必须大写，如果不大写，会报错。

  运行 `webpack` ，这个时候就完成了一个简单的 `webpack + react + es6` 的模块化开发，可以直接双击打开 `index.html` 查看演示，也可以运行 `webpack-dev-server` 打开本地服务器，浏览器打开 `http://localhost:8080/build/index.html` 查看演示

## React调试（ React Developer Tools ）

  如果直接在浏览器调试的话，我们只能在Element中看到渲染后的DOM分层结构，如果想看到React组件的分层结构，就会需要到一个调试工具，因为本人比较喜欢使用chrome浏览器进行调试，所以这里暂时只拿chrome浏览器来举例。

- 扩展程序商店下载（推荐）

  首先，要保证你的浏览器是可以访问谷歌扩展程序商店,接着我们在商店中搜索 `React Developer Tools`，然后就会出现一个扩展程序，扩展程序商店下载的，直接启用就好。

- 网上安装包下载

  如果是网上下载的安装包，就找一下包里面会有一个.crx文件扩展名的文件，拖放到扩展程序中即可。

## 个人说明

  上述所有内容都是本人的个人理解，如果出现不正确的地方，请联系QQ邮箱: `a260496725@qq.com`