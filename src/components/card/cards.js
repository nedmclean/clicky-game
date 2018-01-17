import React from "react";
import "./cards.css";

const card = props => (
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="imgCon">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default card;