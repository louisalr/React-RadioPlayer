import React from 'react';
import ReactDOM from 'react-dom';
import {Tag} from './tag.js';
import './css/style.css';

class Tags extends React.Component {

	constructor(props) {
		super(props);

		this.state={};
	}

	render() {
		return (
			<div id="tags">
				<h1> Liste des tags </h1>
				{
					(()=>{let radio = [];
					Object.keys(this.props.listetags).forEach((key)=>{radio.push(<Tag onClick={()=>this.props.select_tag(this.props.listetags[key])} select={this.props.selectTags.indexOf(this.props.listetags[key])!=-1} tag={this.props.listetags[key]} key={key} />)});
					return radio;})()
				}
			</div>
		);
	}
}

export {Tags};
