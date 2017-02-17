import React from 'react';
let path = require('path');


export class Components extends React.Component {

	render() {
		return (
			<div style={{width: '100px',background: '#000',overflow:'hidden',color:'#fff',float:'left'}}>
				<img src='../build/img/1.png' style={{width:'100px',height:'100px'}} />
				{this.props.name}
			</div>
		)
	}
}