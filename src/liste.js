import React from 'react';
import ReactDOM from 'react-dom';
import {Radio} from './radio.js';
import {Lecteur} from './lecteur.js';
import {radios} from './radios-big.mjs';

class Liste extends React.Component {

	constructor(props) {
		super(props);
		this.state={radiocourant: null}
	}

	updateradiocourant(radio) {
		this.setState({radiocourant: radio});
	}

	Radio_tag(radio) {
		for(let tag of radio.tags)
		{
			if(this.props.selectTags.indexOf(tag)!=-1)
			{
				return true
			}
		}
		return false;
	}

	render() {
		return (
			<div id="cadreliste">
				<div id="lecteur">
					<Lecteur radio={this.state.radiocourant} /> <br />

				</div>

				<div id="liste_radios">
					{(()=>{let radio = [];
					   	    Object.keys(radios.list).forEach((key)=>{
					   	   		if(this.Radio_tag(radios.list[key]))
					   	   			radio.push(<Radio radiocourant={this.state.radiocourant} updatecourant={()=>{this.updateradiocourant(radios.list[key])}} radio={radios.list[key]} key={key} />)});
					   	    	return radio;})()}
				</div>
			</div>
		);
	}
}

export {Liste};
