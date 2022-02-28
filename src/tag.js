import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

class Tag extends React.Component {
	constructor(props)
	{
		super(props);
		this.state={};
	}
	render()
	{
		var classname="pasdetag";
		if(this.props.select)
		{
			classname="untag";
		}
		return (
			<div id="composantag" className={classname} onClick={()=>this.props.onClick()}>
				<h1 id="nomdutag">{this.props.tag}</h1>
			</div>
		);
	}
}

export {Tag};
