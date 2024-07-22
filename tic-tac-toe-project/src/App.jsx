import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol className="highlight-player" id="players">
          <Player
            isActive={activePlayer === "X"}
            initialName="player 1"
            symbol="X"
          ></Player>
          <Player
            isActive={activePlayer === "O"}
            initialName="player 2"
            symbol="O"
          ></Player>
        </ol>
        <GameBoard
          onSelect={handleActivePlayer}
          upturns={gameTurns}
        />
      </div>
      <Log upturns={gameTurns}></Log>
    </main>
  );
}

export default App;
