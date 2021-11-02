import React from "react";
import { useState } from "react";

import IncrementButton from "./components/Counter/IncrementButton";
import DecrementButton from "./components/Counter/DecrementButton";
import Display from "./components/Counter/Display";
import TimeCounter from "./components/Time/TimeCounter.jsx";
import HelloHTML from "./components/Time/HelloHTML";
import GithubApp from "../src/components/GitHubApp/GitHubApp";
import CardList from "./components/GitHubApp/Card";

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue );
  const decrementCounter = (decrementValue) => setCounter(counter - decrementValue );
   
  return(

  <div className="mountNode">
      <IncrementButton onClickFunction={incrementCounter} increment={1}/>
      <IncrementButton onClickFunction={incrementCounter} increment={5}/>
      <IncrementButton onClickFunction={incrementCounter} increment={10}/>
      <IncrementButton onClickFunction={incrementCounter} increment={100}/>
      <DecrementButton onClickFunction={decrementCounter} increment={1}/>
      <DecrementButton onClickFunction={decrementCounter} increment={5}/>
      <DecrementButton onClickFunction={decrementCounter} increment={10}/>
      <DecrementButton onClickFunction={decrementCounter} increment={100}/>
      <Display message={counter}/>
      <HelloHTML />
      <TimeCounter />
      <GithubApp title="The GitHub Cards App"/>
      <CardList />
      
  </div>
  
  )
}

export default App;
