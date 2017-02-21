/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 179);
/******/ })
/************************************************************************/
/******/ ({

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ParseNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _component = __webpack_require__(81);

var _component2 = __webpack_require__(82);

var _reactDom = __webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseNode = exports.ParseNode = function (_React$Component) {
	_inherits(ParseNode, _React$Component);

	function ParseNode(props) {
		_classCallCheck(this, ParseNode);

		var _this = _possibleConstructorReturn(this, (ParseNode.__proto__ || Object.getPrototypeOf(ParseNode)).call(this));

		_this.handClick = _this.handClick.bind(_this);
		return _this;
	}

	_createClass(ParseNode, [{
		key: 'handClick',
		value: function handClick() {
			this.componentWillReceiveProps();
		}
	}, {
		key: 'render',
		value: function render() {
			console.log('创建虚拟的DOM方法');
			var componet = void 0;
			if (this.state.bool) {
				componet = _react2.default.createElement(_component.Component, { ref: 'component1', name: this.props.name });
			} else {
				componet = '';
			}
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'button',
					{ onClick: this.handClick },
					'\u8FD9\u662F\u6309\u94AE'
				),
				componet,
				_react2.default.createElement(_component2.Components, { ref: 'component2', name: this.props.name })
			);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log('在完成首次渲染之前调用，此时可以修改组件的state');
			this.state = {
				bool: this.props.bool
			};
			window.ParseNode = this;
			console.log(window.ParseNode);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('真实的DOM被渲染出来后调用');
			console.log(this.refs);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			console.log('组件接收到新的props时调用，并将其作为参数nextProps使用');
			var bool = this.state.bool;
			if (bool) {
				bool = false;
			} else {
				bool = true;
			}
			this.setState({
				bool: bool
			});
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			console.log('组件是否应当渲染新的props或state');
			return true;
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate() {
			console.log('接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state');
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			console.log('完成渲染新的props或者state后调用，此时可以访问到新的DOM元素');
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('组件被移除之前被调用');
		}
	}]);

	return ParseNode;
}(_react2.default.Component);

var props = {
	name: '张三',
	nameTwo: '李四',
	bool: true
};
(0, _reactDom.render)(_react2.default.createElement(ParseNode, props), document.querySelector('#aaa'));

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\react\\node_modules\\.15.4.2@react\\react.js'\n    at Error (native)");

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\react\\node_modules\\.15.4.2@react-dom\\index.js'\n    at Error (native)");

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = exports.Component = function (_React$Component) {
	_inherits(Component, _React$Component);

	function Component() {
		_classCallCheck(this, Component);

		return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
	}

	_createClass(Component, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { width: '100px', background: '#000', overflow: 'hidden', color: '#fff', float: 'left' } },
				_react2.default.createElement('img', { src: '../build/img/1.png', style: { width: '100px', height: '100px' } }),
				this.props.children,
				this.props.name
			);
		}
	}]);

	return Component;
}(_react2.default.Component);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Components = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Components = exports.Components = function (_React$Component) {
	_inherits(Components, _React$Component);

	function Components() {
		_classCallCheck(this, Components);

		return _possibleConstructorReturn(this, (Components.__proto__ || Object.getPrototypeOf(Components)).apply(this, arguments));
	}

	_createClass(Components, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ ref: 'div1', style: { width: '100px', background: '#000', overflow: 'hidden', color: '#fff', float: 'left' } },
				_react2.default.createElement('img', { src: '../build/img/2.png', style: { width: '100px', height: '100px' } }),
				this.props.name
			);
		}
	}]);

	return Components;
}(_react2.default.Component);

/***/ })

/******/ });