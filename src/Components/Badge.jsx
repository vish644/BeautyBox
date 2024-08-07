import React from 'react';

function Badge({rating}) {
  return (
    <div style={{ 
      borderRadius: "30px",
      display:'flex',
      borderWidth: 1, 
      borderStyle: "solid", 
      borderColor: "#000", 
      alignItems: "center", 
      justifyContent: "center", 
      width: "50px", 
      padding: "5px",
    }}>
      <i className="fa-solid fa-star" style={{ marginRight: "5px" }}></i>{rating}
    </div>
  );
}

export default Badge;
