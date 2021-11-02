import React from "react";

export default function IncrementButton(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return( 
  
        <button onClick={handleClick}>
          +{props.increment}
        </button>
  
    )
  };