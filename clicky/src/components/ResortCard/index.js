import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    // <div className="card">
        <img alt={props.name} src={props.image} />

    //   {/* <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //     </ul>
    //   </div> */}
    // {/* </div> */}
  );
}

export default FriendCard;
