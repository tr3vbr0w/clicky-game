import React from "react";
import "./style.css"


function Wrapper({children}) {
  return <div className="wrapper container">{children}</div>;
}

export default Wrapper;
