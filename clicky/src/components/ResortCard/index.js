import React from "react";
import "./style.css";

// const = resortOnClick  event => {
//   const resortId = event.target.id;
//   console.log(resortId);
  
  
  
// }


function ResortCard(props) {
  return (
    <button className="resort-btn" onClick={()=> props.handleClick(props.id)}>
      <img alt={props.name} src={props.image} />
    </button>

  );
}

export default ResortCard;
