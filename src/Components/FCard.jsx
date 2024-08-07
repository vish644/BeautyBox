import React from "react";
import "./FCard.css";

function FCard({title}) {
  return (
    <>
      <div className="linksContainer">
        <h4>{title}</h4> 
        <div className="linksContainer">
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
      </div>
    </>
  );  
}

export default FCard;
