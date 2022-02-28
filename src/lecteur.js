import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

class Lecteur extends React.Component
{
		constructor(props)
		{
			super(props);
			this.state={};
			this.audio=React.createRef();
		}
		start() 
		{
			this.audio.current.play();
		}

		stop() 
		{
			this.audio.current.pause();
		}

		render()
		{
			if(this.props.radio == null) { 
			return (
				<div class="radio_selec">
					<audio ref={this.audio}></audio>
					<h2>Pas de radio sélectionné</h2>
				</div>
				);
			}
			const img = require("./img/"+ this.props.radio.img).default; 
			const play = require("./img/play.png").default; 
			const pause = require("./img/pause.png").default; 

			return ( 
					<div id="lancerlaradio">
						<audio src={this.props.radio.url} ref={this.audio}> </audio>
						<h1 id="titrelecteur">{this.props.radio.name}</h1>
						<h2 id="tags">Tags de la radio : {this.props.radio.tags} </h2>
					<img id="imglecteur" src={img} /><br />

					<button onClick={()=>this.start()} id="boutonlancer"><img class="btn" src={play} /></button>
					<button onClick={()=>this.stop()} id="boutonstopper"><img class="btn" src={pause} /></button>
				</div>
			);
		}
}


export {Lecteur};
