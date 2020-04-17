import React from "react";
import "./style.css";


function ResortCard(props) {
  return (
    <button className="resort-btn" onClick={()=> props.handleClick(props.id)}>
      <img alt={props.name} src={props.image} />
    </button>

  );
}

export default ResortCard;
