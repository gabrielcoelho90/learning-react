import Player from "./components/Player";
import { useState } from "react";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X"></Player>
          <Player initialName="player 2" symbol="O"></Player>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
