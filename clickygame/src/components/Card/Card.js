import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />

    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
    </div>
  </div>
);

export default Card;
