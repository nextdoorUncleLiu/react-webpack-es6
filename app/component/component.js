import React from 'react';
let path = require('path');

export class Component extends React.Component {
	render() {
		return (
			<div style={{width: '100px',background: '#000',overflow:'hidden',color:'#fff',float:'left'}}>
				{this.props.children}
				{this.props.name}
			</div>
		)
	}
}