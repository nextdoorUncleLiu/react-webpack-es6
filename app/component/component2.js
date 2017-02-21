import React from 'react';

export class Components extends React.Component {

	render() {
		return (
			<div ref="div1" style={{width: '100px',background: '#000',overflow:'hidden',color:'#fff',float:'left'}}>
				<img src='../build/img/2.png' style={{width:'100px',height:'100px'}} />
				{this.props.name}
			</div>
		)
	}
}