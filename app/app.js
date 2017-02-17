import React from 'react';
import {Component} from './component/component.js';
import {Components} from './component/component2.js';
import {render} from 'react-dom';

export class ParseNode extends React.Component {
	constructor(){
		super();
		this.name = '张三';
		this.img = <img src="../build/img/1.png" style={{width:'100px',height:'100px'}} />;
		this.state = {
			count:0
		}
		this.handClick = this.handClick.bind(this);
	}
	handClick() {
		++this.state.count;
		let count = this.state.count;
		switch(count){
			case 1:{
				this.name='李四';
			}
				break;
			case 2:{
				this.name='王五';
			}
				break;
			case 3:{
				this.name='赵六';
			}
				break;
		}
		this.setState({
			count
		});
	}
	render() {
		return (
			<div>
				<button onClick={this.handClick}>{this.state.count}</button>
				<Component name={this.name}>
					{this.img};
				</Component>
				<Components name={this.name} />
			</div>
		)
	}
}

render( < ParseNode / > , document.querySelector('#aaa'));