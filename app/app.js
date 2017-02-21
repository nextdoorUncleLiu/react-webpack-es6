import React from 'react';
import {Component} from './component/component.js';
import {Components} from './component/component2.js';
import {render} from 'react-dom';

export class ParseNode extends React.Component {

	constructor(props){
		super();
		this.handClick = this.handClick.bind(this);
	}
	handClick() {
		this.componentWillReceiveProps();
	}
	render() {
		console.log('创建虚拟的DOM方法');
		let componet;
		if(this.state.bool){
			componet = <Component ref="component1" name={this.props.name} />
		}
		else {
			componet = '';
		}
		return (
			<div>
				<button onClick={this.handClick}>这是按钮</button>
				{componet}
				<Components ref="component2" name={this.props.name} />
			</div>
		)
	}

	componentWillMount(){
		console.log('在完成首次渲染之前调用，此时可以修改组件的state');
		this.state = {
			bool:this.props.bool
		}
		window.ParseNode = this;
		console.log(window.ParseNode);
	}
	componentDidMount(){
		console.log('真实的DOM被渲染出来后调用');
		console.log(this.refs);
	}
	componentWillReceiveProps(){
		console.log('组件接收到新的props时调用，并将其作为参数nextProps使用');
		let bool = this.state.bool;
		if(bool){
			bool = false;
		}
		else {
			bool = true;
		}
		this.setState({
			bool
		});
	}
	shouldComponentUpdate(){
		console.log('组件是否应当渲染新的props或state');
		return true;
	}
	componentWillUpdate(){
		console.log('接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state');
	}
	componentDidUpdate(){
		console.log('完成渲染新的props或者state后调用，此时可以访问到新的DOM元素');
	}
	componentWillUnmount(){
		console.log('组件被移除之前被调用');
	}
}
let props = {
	name:'张三',
	nameTwo:'李四',
	bool:true
}
render( <ParseNode {...props} /> , document.querySelector('#aaa'));