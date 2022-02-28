import React from 'react';
import ReactDOM from 'react-dom';
import {Liste} from './liste.js';
import {Tags} from './tags.js';
import {radios} from './radios-big.mjs';

class Tagliste extends React.Component
{
      constructor(props) {
  		super(props);
          this.listetags=[];
          this.radionames=[];

  		for(let radio of radios.list)
  		{
  			for(let tag of radio.tags)
  			{
  				if(this.listetags.indexOf(tag)==-1){
            if(this.listetags!=this.radionames)
  					     this.listetags.push(tag);
          }

  			}
  		}
  		this.selectTags=this.listetags;
  		this.state={radiocourant: null, selectTags: this.selectTags};
  	}

  	ajout_tag(tag)
  	{
  		if(this.state.selectTags.indexOf(tag)==-1)
  		{
  			this.setState({selectTags:[...this.state.selectTags, tag]});
  		}
  		else
  		{
  			this.setState({selectTags: this.state.selectTags.filter(tag2=>tag2!=tag)}); 
  		}
  	}

  	render() {
  		return (
  			<div id="tagliste">
                 <Liste  selectTags={this.state.selectTags} /><br />
                 <Tags select_tag={(tag)=>this.ajout_tag(tag)} selectTags={this.state.selectTags} listetags={this.listetags} />
              </div>
          );
      }
}

export {Tagliste};
