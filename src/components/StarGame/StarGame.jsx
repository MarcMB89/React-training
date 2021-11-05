import React, { useState } from "react";
import DisplayStars from "./DisplayStars";

import PlayNumber from "./PlayNumber";
import utils from "./utils/utils";

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1,9));
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
           <DisplayStars count={stars}/>
          </div>
          <div className="right">
            {utils.range(1, 9).map(number => 
              <PlayNumber key={number} number={number}/>
            )}            
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };
  
  // eslint-disable-next-line no-unused-vars
  const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
  
export default StarMatch;
  