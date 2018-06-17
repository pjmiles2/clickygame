
import React from "react";
import "./Card.css";

const Card = props => {  return(
    
      <img className="card" 
      alt={props.name} src={props.image} 
      onClick={() => props.checkImage(props.id)}
      />
  )
}
 
export default Card;