import React from "react";

export default function DecrementButton(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return( 
     
        <button onClick={handleClick}>
          -{props.increment}
        </button>
     
    )
  };