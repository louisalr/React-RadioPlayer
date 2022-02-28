import React from 'react';
import ReactDOM from 'react-dom';

class Radio extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={};
    }


    render()
    {
        var classes="radio aucune";

        if(this.props.radiocourant == this.props.radio)
        {
            classes="radio selected";
        }

    	const image = require("./img/"+ this.props.radio.img).default; 
        return (
            <div id="composantradio" className={classes} onClick={()=>this.props.updatecourant()}>
            	<img src={image} className="imgs" />
                <h2 className="titreradio">{this.props.radio.name}</h2>
            </div>
        );
    }
}

export {Radio};
