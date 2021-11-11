import { useState } from "react";
import Game from "./StarGame";

const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

export default StarMatch;
  